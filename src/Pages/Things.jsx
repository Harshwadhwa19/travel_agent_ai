import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Components/Thingstodo/Header/Header'; 
import Map from '../Components/Thingstodo/Map/Map'; 
import List from '../Components/Thingstodo/List/List'; 
import { getPlacesData } from '../api';
import { useLocation } from 'react-router-dom';
import apiClient from '../api/apiClient';
import axios from 'axios';

const Things = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tripId = query.get('trip_id');

    const [places, setPlaces] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: 20.5937, lng: 78.9629 });
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    const [autocomplete, setAutocomplete] = useState(null);
    const [itineraryMarkers, setItineraryMarkers] = useState([]);
    const [activeRouteSource, setActiveRouteSource] = useState(null);
    const [activeRouteDestination, setActiveRouteDestination] = useState(null);
    const [selectedRoute, setSelectedRoute] = useState(null);

    // Fetch trip details to focus map and get itinerary points
    useEffect(() => {
        const fetchTripInfo = async () => {
            if (!tripId) return;
            try {
                const response = await apiClient.get(`/trips/${tripId}`);
                const trip = response.data;
                
                // Collect all activities that have coordinates
                const markers = [];
                let hotel = null;

                trip.itineraries.forEach(day => {
                    day.activities.forEach(act => {
                        const marker = {
                            id: act.id,
                            lat: act.lat,
                            lng: act.lng,
                            name: act.location,
                            description: act.description,
                            type: act.type,
                            isItinerary: true,
                            day: day.day_number,
                            time: act.time
                        };
                        markers.push(marker);
                        if (!hotel && act.type === 'stay') {
                            hotel = marker;
                        }
                    });
                });

                // Sort markers by day and time
                markers.sort((a, b) => {
                    if (a.day !== b.day) return a.day - b.day;
                    return a.time.localeCompare(b.time);
                });

                // Fallback Geocoding for markers without coordinates
                const markersWithGeo = await Promise.all(markers.map(async (m) => {
                    if (m.lat && m.lng) return m;
                    try {
                        const geoRes = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(m.name + ' ' + trip.destination)}`);
                        if (geoRes.data && geoRes.data[0]) {
                            return { ...m, lat: parseFloat(geoRes.data[0].lat), lng: parseFloat(geoRes.data[0].lon) };
                        }
                    } catch (e) {
                        console.error("Geocoding failed for", m.name, e);
                    }
                    return m;
                }));

                const validMarkers = markersWithGeo.filter(m => m.lat && m.lng);
                setItineraryMarkers(validMarkers);

                if (!hotel && validMarkers.length > 0) hotel = validMarkers[0];
                
                if (hotel) {
                    setCoordinates({ lat: hotel.lat, lng: hotel.lng });
                    setActiveRouteSource(hotel.id);
                }
            } catch (error) {
                console.error("Error fetching trip info", error);
            }
        };
        fetchTripInfo();
    }, [tripId]);

    // Dynamic routing between selected source and destination
    useEffect(() => {
        const calculateRoute = async () => {
            if (!activeRouteSource || !activeRouteDestination) {
                setSelectedRoute(null);
                return;
            }

            const start = itineraryMarkers.find(m => m.id === Number(activeRouteSource));
            const end = itineraryMarkers.find(m => m.id === Number(activeRouteDestination));

            if (!start || !end || (start.id === end.id)) {
                setSelectedRoute(null);
                return;
            }

            // Clear previous route to show loading state/feedback
            setSelectedRoute(null); 

            try {
                // Ensure coordinates are strings and use high precision
                const startLng = start.lng.toString();
                const startLat = start.lat.toString();
                const endLng = end.lng.toString();
                const endLat = end.lat.toString();

                const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`;
                console.log("Fetching new route:", osrmUrl);
                
                const routeRes = await axios.get(osrmUrl);
                if (routeRes.data.routes && routeRes.data.routes[0]) {
                    const route = routeRes.data.routes[0];
                    setSelectedRoute({
                        geometry: route.geometry,
                        distance: (route.distance / 1000).toFixed(1),
                        duration: Math.round(route.duration / 60),
                        startName: start.name,
                        endName: end.name
                    });
                } else {
                    console.warn("No routes found in OSRM response");
                }
            } catch (e) {
                console.error("Dynamic routing error", e);
                setSelectedRoute(null);
            }
        };
        calculateRoute();
    }, [activeRouteSource, activeRouteDestination, itineraryMarkers]);

    // Fetch current location only if no tripId is provided
    useEffect(() => {
        if (tripId) return; 

        const success = ({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        };

        const error = (error) => {
            console.error('Error fetching location:', error);
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, [tripId]);

    // Fetch hotels and restaurants for the current destination
    useEffect(() => {
        if (coordinates.lat && coordinates.lng) {
            const fetchDestData = async () => {
                try {
                    // Create bounds for search (roughly 10km around destination)
                    const sw = { lat: coordinates.lat - 0.1, lng: coordinates.lng - 0.1 };
                    const ne = { lat: coordinates.lat + 0.1, lng: coordinates.lng + 0.1 };
                    
                    // Fetch Hotels
                    const hotelData = await getPlacesData('hotels', sw, ne);
                    setHotels(hotelData || []);

                    // Fetch Restaurants
                    const restaurantData = await getPlacesData('restaurants', sw, ne);
                    setRestaurants(restaurantData || []);
                } catch (error) {
                    console.error('Error fetching destination data:', error);
                }
            };
            fetchDestData();
        }
    }, [coordinates]);

    // Filter places based on rating (Disabled for clean itinerary view)
    useEffect(() => {
        setFilteredPlaces([]);
    }, [rating]);

    // Fetch places data (Disabled to keep view focused on itinerary + recommended hotels)
    useEffect(() => {
        setPlaces([]);
    }, [type, bounds, coordinates]);

    // Handle place changes from autocomplete
    const onLoad = useCallback((autoC) => setAutocomplete(autoC), []);

    const onPlaceChanged = useCallback(() => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setCoordinates({ lat, lng });
            }
        }
    }, [autocomplete]);

    return (
        <>
            <Header
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            />
            <div style={{ display: 'flex', height: 'calc(100vh - 64px)', marginTop: '2rem' }}>
                <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f0f0f0', overflow: 'auto' }}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        hotels={hotels}
                        restaurants={restaurants}
                        childClicked={childClicked}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                        itineraryMarkers={itineraryMarkers}
                        activeRouteSource={activeRouteSource}
                        setActiveRouteSource={setActiveRouteSource}
                        activeRouteDestination={activeRouteDestination}
                        setActiveRouteDestination={setActiveRouteDestination}
                        selectedRoute={selectedRoute}
                        tripId={tripId}
                        setCoordinates={setCoordinates}
                    />
                </div>

                {/* Right Side: Map */}
                <div style={{ flex: 1, padding: '1rem', height: '100%', overflow: 'hidden' }}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        hotels={hotels}
                        restaurants={restaurants}
                        setChildClicked={setChildClicked}
                        itineraryItems={itineraryMarkers}
                        selectedRoute={selectedRoute}
                    />
                </div>
            </div>
        </>
    );
};

export default Things;

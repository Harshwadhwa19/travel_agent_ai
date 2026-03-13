import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Box, Text, Badge, VStack } from '@chakra-ui/react';

// Fix for default marker icon in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const hotelIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
});

const restaurantIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448609.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
});

// Component to handle map center updates
function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center && center[0] !== undefined && center[1] !== undefined) {
            map.setView(center, zoom);
        }
    }, [center, zoom, map]);
    return null;
}

const Map = ({ coordinates, itineraryItems, hotels = [], restaurants = [], selectedRoute }) => {
    // Ensure coordinates are valid
    const isValid = coordinates && coordinates.lat !== undefined && coordinates.lng !== undefined;
    const defaultCenter = isValid ? [coordinates.lat, coordinates.lng] : [20.5937, 78.9629];
    const zoom = 13;

    return (
        <Box height="100%" width="100%" borderRadius="lg" overflow="hidden">
            <MapContainer 
                center={defaultCenter} 
                zoom={zoom} 
                style={{ height: '100%', width: '100%' }}
            >
                <ChangeView center={defaultCenter} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Recommended Hotel Markers (Suggestions) */}
                {hotels.map((h, i) => (
                    h.latitude && h.longitude ? (
                        <Marker 
                            key={`h-marker-${i}`} 
                            position={[parseFloat(h.latitude), parseFloat(h.longitude)]}
                            icon={hotelIcon}
                        >
                            <Popup>
                                <VStack align="start" spacing={1}>
                                    <Badge colorScheme="blue">HOTEL SUGGESTION</Badge>
                                    <Text fontWeight="bold">{h.name}</Text>
                                    <Text fontSize="xs" fontWeight="bold" color="green.600">
                                        💰 {h.price || "Check for Rates"}
                                    </Text>
                                    <Text fontSize="xs">⭐ {h.rating || "4.0"} rating</Text>
                                </VStack>
                            </Popup>
                        </Marker>
                    ) : null
                ))}

                {/* Top Restaurant Markers (Suggestions) */}
                {restaurants.map((r, i) => (
                    r.latitude && r.longitude ? (
                        <Marker 
                            key={`r-marker-${i}`} 
                            position={[parseFloat(r.latitude), parseFloat(r.longitude)]}
                            icon={restaurantIcon}
                        >
                            <Popup>
                                <VStack align="start" spacing={1}>
                                    <Badge colorScheme="orange">TOP DINING</Badge>
                                    <Text fontWeight="bold">{r.name}</Text>
                                    <Text fontSize="xs" fontWeight="bold" color="green.600">
                                        💸 {r.price_level || r.price || "$$"}
                                    </Text>
                                    <Text fontSize="xs">⭐ {r.rating || "4.5"} rating</Text>
                                </VStack>
                            </Popup>
                        </Marker>
                    ) : null
                ))}

                {/* Itinerary Markers and Background Routes */}
                {itineraryItems && itineraryItems.map(item => (
                    <React.Fragment key={`it-frag-${item.id}`}>
                        <Marker 
                            position={[item.lat, item.lng]}
                            icon={item.type === 'stay' ? hotelIcon : new L.Icon.Default()}
                        >
                            <Popup>
                                <VStack align="start" spacing={1}>
                                    <Badge colorScheme={item.type === 'stay' ? "teal" : "purple"}>
                                        {item.type === 'stay' ? "HOME BASE" : "PLAN ACTIVITY"}
                                    </Badge>
                                    <Text fontWeight="bold">{item.name}</Text>
                                    <Text fontSize="sm">{item.description}</Text>
                                    {item.distance && item.type !== 'stay' && (
                                        <Box mt={2} p={2} bg="blue.50" borderRadius="md" w="100%">
                                            <Text fontSize="xs" fontWeight="bold" color="blue.600">
                                                🚗 {item.distance} km away
                                            </Text>
                                            <Text fontSize="xs" color="blue.600">
                                                ⏱️ ~{item.duration} mins travel
                                            </Text>
                                        </Box>
                                    )}
                                </VStack>
                            </Popup>
                        </Marker>
                        {item.routeGeometry && !selectedRoute && (
                            <Polyline 
                                positions={item.routeGeometry.coordinates.map(coord => [coord[1], coord[0]])}
                                pathOptions={{ color: 'blue', weight: 2, opacity: 0.3, dashArray: '5, 10' }}
                            />
                        )}
                    </React.Fragment>
                ))}

                {/* Active Selected Route */}
                {selectedRoute && (
                    <Polyline 
                        positions={selectedRoute.geometry.coordinates.map(coord => [coord[1], coord[0]])}
                        pathOptions={{ color: '#2b6cb0', weight: 5, opacity: 0.8 }}
                    />
                )}

                {/* Parking Markers (REMOVED) */}
            </MapContainer>
        </Box>
    );
};

export default Map;

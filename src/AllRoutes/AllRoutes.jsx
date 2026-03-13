import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import Things from "../Pages/Things";
import AskLocalPage from "../Components/Home/AskLocalPage";
import Marketplace from "../Components/MarketPlace/Marketplace";
import ProductDetail from "../Components/MarketPlace/ProductDetail";
import CitySelection from "../Components/Home/CitySelection";
import Homefour from "../Components/Home/AskALocal";
import TripPlannerForm from "../form/TripPlannerForm";
import Itenary from "../Components/GenerateItenary";
import ItemDetails from "../Components/Home/ItemDetails";
import CartPage from "../Components/Cart/CartPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import CreateTrip from "../Pages/CreateTrip";
import AIAssistant from "../Pages/AIAssistant";
import BudgetTracker from "../Pages/BudgetTracker";
import TripWorkspace from "../Pages/TripWorkspace";
import SoloBuddyMatcher from "../Pages/SoloBuddyMatcher";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trip-planning" element={<TripPlannerForm />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/things" element={<Things />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/:id" element={<ProductDetail />} />
      <Route path="/ask-a-local" element={<Homefour />} />
      <Route path="/details/:id" element={<ItemDetails />} />
      <Route path="/connect-with-local" element={<AskLocalPage />} />
      <Route path="/city-selection" element={<CitySelection />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/itinerary" element={<Itenary />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-trip" element={<CreateTrip />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
      <Route path="/budget" element={<BudgetTracker />} />
      <Route path="/trip-workspace" element={<TripWorkspace />} />
      <Route path="/find-buddy" element={<SoloBuddyMatcher />} />
    </Routes>
  );
}

export default AllRoutes;

// const data = [
//   {
//       id: 1,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=300&h=300&s=1",
//       title: "Goa Beach and Water Sports Adventure",
//       review: "78",
//       price: "from ₹3,200 per adult",
//       description: "Enjoy a day of adventure and fun on the beautiful beaches of Goa. Activities include water sports, beach games, and relaxation."
//     },
//     {
//       id: 2,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1",
//       title: "Jaipur Cultural Walking Tour with Local Guide",
//       review: "45",
//       price: "from ₹1,500 per adult",
//       description: "Explore the rich culture and heritage of Jaipur with a knowledgeable local guide. Visit historical landmarks and experience local traditions."
//     },
//     {
//       id: 3,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=300&h=300&s=1",
//       title: "Mumbai Street Food Tour",
//       review: "59",
//       price: "from ₹2,800 per adult",
//       description: "Discover the vibrant street food scene of Mumbai. Enjoy a variety of local dishes and experience the city’s culinary delights."
//     },
//     {
//       id: 4,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/82/bc/d0/caption.jpg?w=300&h=300&s=1",
//       title: "Kerala Backwaters Houseboat Cruise",
//       review: "87",
//       price: "from ₹10,000 per adult",
//       description: "Relax on a houseboat and explore the serene backwaters of Kerala. Enjoy picturesque views, local cuisine, and tranquil surroundings."
//     },
//     {
//       id: 5,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/78/a4/44/caption.jpg?w=300&h=300&s=1",
//       title: "Rajasthan Desert Safari and Camel Ride",
//       review: "68",
//       price: "from ₹7,500 per adult",
//       description: "Experience the thrill of a desert safari and camel ride in Rajasthan. Enjoy a unique adventure through the dunes and witness local desert life."
//     },
//     {
//       id: 6,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/07/dc/79/thangshing-valley-with.jpg?w=300&h=300&s=1",
//       title: "Sikkim Mountain Trekking Adventure",
//       review: "34",
//       price: "from ₹12,000 per adult",
//       description: "Embark on a thrilling trekking adventure in the mountains of Sikkim. Explore stunning landscapes and enjoy the challenge of high-altitude trekking."
//     },
//     {
//       id: 7,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/fb/23/rishikesh-river-rafting.jpg?w=300&h=300&s=1",
//       title: "Rishikesh River Rafting and Camping",
//       review: "102",
//       price: "from ₹3,500 per adult",
//       description: "Enjoy an exhilarating river rafting experience in Rishikesh, followed by camping under the stars. Perfect for adventure enthusiasts."
//     },
//     {
//       id: 8,
//       img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/b8/andaman-and-nicobar-islands.jpg?w=300&h=300&s=1",
//       title: "Andaman Islands Scuba Diving Experience",
//       review: "55",
//       price: "from ₹8,000 per adult",
//       description: "Explore the vibrant underwater world of the Andaman Islands with a scuba diving experience. Discover colorful marine life and coral reefs."
//     },
// ];

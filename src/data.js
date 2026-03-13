import caption from "./assets/Punta.jpg";
import Costa from "./assets/Costa.jpg";
import Mahabaleswar from "./assets/Mahabaleshwar.jpg";
import Nashik from "./assets/Nashik.jpg";
import Puerto from "./assets/Puerto.jpg";
import Pahalgam from "./assets/Pahalgam.jpg";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";


const WHERETOGO = [
    {
        image: caption,
        name: "Punta Cena",
        location: "Caribbean"
    },
    {
        image: Mahabaleswar,
        name: "Mahabaleshwer",
        location: "India"
    },
    {
        image: Costa,
        name: "Costa Adeje",
        location: "Spain"
    },
    {
        image: Nashik,
        name: "Nashik",
        location: "India"
    },
    {
        image: Puerto,
        name: "Puerto Morelos",
        location: "Mexico"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=300&h=300&s=1",
        name: "Goa",
        location: "India"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=300&h=300&s=1",
        name: "Mumbai",
        location: "India"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/82/bc/d0/caption.jpg?w=300&h=300&s=1",
        name: "Delhi",
        location: "India"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/78/a4/44/caption.jpg?w=300&h=300&s=1",
        name: "Rajasthan",
        location: "India"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1",
        name: "Jaipur",
        location: "India"
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/fb/23/rishikesh-river-rafting.jpg?w=300&h=300&s=1",
        name: "Rishikesh",
        location: "India"
    },
    {
        image: Pahalgam,
        name: "Pahalgam",
        location: "India"
    }
];
const TRIPTYPE = [
    {
        trip_type: "Solo Trip",
        icon: <CgProfile />
    },
    {
        trip_type: "Patner Trip",
        icon: <FaHeart />
    },
    {
        trip_type: "Friend Trip",
        icon: <FaUserFriends />
    },
    {
        trip_type: "Family Trip",
        icon: <MdOutlineFamilyRestroom />
    },
]
const INTEREST = [
    "Must - see Attractions",
    "Great Food",
    "Hidden Gems",
    "Historical Sites",
    "Beach Exploration",
    "Nature and Wildlife",
    "Art and Craft Shops",
    "Wellness Retreats",
    "Culture",
    "Wine & Beer",
    "Outdoors",
    "Arts & Theatre"
]

export { WHERETOGO, TRIPTYPE, INTEREST};

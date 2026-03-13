import { Box, Link, Image, Text, Button } from "@chakra-ui/react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "./logo.png";

function Navbar() {
  const [isscroll, setisscroll] = useState(false);
  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, []);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/cart");
  }

  return (
    <Box
      w="full"
      boxShadow={isscroll ? "md" : "sm"}
      position="fixed"
      bg="white"
      zIndex={10}
      p="3px 0px"
    >
      <Box
        h="60px"
        w="85%"
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <RouterLink to="/">
          <Image boxSize="100px" height="72px" src={logo} alt="logo" />
        </RouterLink>
        <Box display="flex" gap="25px" alignItems="center">
          <Link as={RouterLink} to="/dashboard" display="flex">
            <FavoriteBorderOutlinedIcon />
            <Text fontWeight="500" fontSize="md">
              Dashboard
            </Text>
          </Link>
          <Link as={RouterLink} to="/ai-assistant" display="flex">
            <ModeEditOutlineOutlinedIcon />
            <Text fontWeight="500" fontSize="md">
              AI Planning
            </Text>
          </Link>
          <Link as={RouterLink} to="/budget" display="flex">
            <NotificationsOutlinedIcon />
            <Text fontWeight="500" fontSize="md">
              Budget
            </Text>
          </Link>
          <Link as={RouterLink} to="/marketplace" display="flex">
            <ShoppingCartOutlinedIcon />
            <Text fontWeight="500" fontSize="md">
              Marketplace
            </Text>
          </Link>
          <Box display="flex" alignItems="center" gap="10px">
            {user ? (
              <>
                <Text fontWeight="bold">{user.username}</Text>
                <Button colorScheme="red" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button colorScheme="teal" size="sm" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;

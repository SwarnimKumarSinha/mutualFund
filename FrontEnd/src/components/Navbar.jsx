import { HStack, Text, Button } from "@chakra-ui/react";
import Swal from "sweetalert2";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogOut } from "../redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogut = () => {
   alert("login success")
    dispatch(LogOut());
    navigate("/login");
  };

  return (
    <HStack
      spacing="60px"
      backgroundColor={"blue.800"}
      justifyContent="center"
      
      borderBottom="5px solid #FFD773"
      py="2"
      gap="90px"
    >

      {!isAuth && (
        <Text className="nav" color={"white"}  fontSize="1xl">
          <NavLink to="/">Signup</NavLink>
        </Text>
      )}


      {!isAuth && (
        <Text className="nav" color={"white"} fontSize="1xl">
          <NavLink to="/login">Login</NavLink>
        </Text>
      )}
         <Text  fontSize="2xl">
        <NavLink to="/profile"><h1>Mutual Fund</h1></NavLink>
      </Text>


      <Text className="nav" color={"white"} fontSize="1xl">
        <NavLink to="/profile">Profile</NavLink>
      </Text>
     
     

      <Text className="nav" color={"white"} fontSize="1xl">
        <NavLink to="/Contact">Contact</NavLink>
      </Text>



      <Text className="nav" color={"white"} fontSize="1xl">
        <NavLink to="/calculate">Check EMI</NavLink>
      </Text>


      {isAuth && (
        <Button
          color={"white"}
          py="3"
          px="4"
          background={"black"}
          fontSize="1xl"
          onClick={handlelogut}
        >
          Logout
        </Button>
      )}
    </HStack>
  );
};

export default Navbar;


import React, { useState } from "react";
import {
  Text,
  Box,
  Container,
  FormLabel,
  Input,
  Button,
  Image,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";
import { Authcontext } from "../context/Authcontext";
import { Navigate } from "react-router-dom";


// main Function

export const Login = () => {

  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const { logAuth, setLogAuth ,regAuth} = React.useContext(Authcontext);

  // getdata function

  function getdata(e) {
    const value = e.target.value;
    const name = e.target.name;

    setInp(() => {
      return {
        ...inp,
        [name]: value,
      };
    });
  }

  // handelClick

  function handelClick() {
    axios.post("https://reqres.in/api/login",inp).then((res) => {
      console.log(res)
      alert(res.data.token + "  Login successful");
      if (res.status == 200) {
        
        setLogAuth(true);
      }
    });
  }

  if(logAuth){
    return  <Navigate to='/'></Navigate>
   }
   
   if(!regAuth){
    alert("Please signup First");
    return(
    <Navigate to='/signup'></Navigate>
    )
   }
  return (
    <Box bg={"rgb(246,246,249)"} h={"100vh"} border={"1px"} w={"100%"}>
      <Box
        display={"flex"}
        alignItems={"end"}
        justifyContent={"center"}
        margin={"auto"}
        h={"200px"}
      >
        <Image
          w={"150px"}
          src="https://dashboard.envoy.com/assets/images/logo-4809021238a48b1c2864cdba71564128.svg"
        />
      </Box>

      <Container
        p={"30px"}
        order={"1px"}
        h={"400px"}
        bg={"white"}
        borderRadius={"20px"}
        mt={"10px"}
        boxShadow={
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        }
      >
        <Text
          fontFamily={"sans-serif"}
          fontSize={"22px"}
          fontWeight={"600"}
          mt={"30px"}
        >
          Log in to the Envoy dashboard
        </Text>

        <FormControl mt={"50px"}>
          <FormLabel>Company email address</FormLabel>
          <Input
            type={"email"}
            bg={"rgb(232,240,254)"}
            name="email"
            onChange={getdata}
          ></Input>
          <FormLabel>Password</FormLabel>
          <Input
            type={"password"}
            bg={"rgb(232,240,254)"}
            name="password"
            onChange={getdata}
          ></Input>
          <Button
            mt={"20px"}
            bg={"tomato"}
            color={"white"}
            onClick={handelClick}
          >
            {" "}
            Login
          </Button>
        </FormControl>
      </Container>
    </Box>
  );
};

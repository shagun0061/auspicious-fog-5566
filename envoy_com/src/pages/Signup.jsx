import React, { useState } from "react";
import axios from "axios";
import { Authcontext } from "../context/Authcontext";
import {
  Text,
  Box,
  Container,
  FormLabel,
  Input,
  HStack,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

// * Main Function

function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { setRegAuth, regAuth } = React.useContext(Authcontext);
  console.log(setRegAuth,regAuth)
  // * getdata from input tags

  function getdata(e) {
    const value = e.target.value;
    const name = e.target.name;

    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
    console.log(state);
  }

  // * handelsubmit
  
  function handelsubmit(event) {
    event.preventDefault();
    if(state.email==""){
      alert("please enter email ")
    }else if(state.password.length<8){
      alert("Password should be atleast 8 charecter ")
    }
    axios
      .post("https://reqres.in/api/register", state)
      .then((res) => {
        let RegToken = res.data.token;
        if (RegToken !== "") {
          setRegAuth(true);
        }
        alert(RegToken, "register done");
      })
      .catch(function (error) {
        alert(error);
      });
  }

  if(regAuth){
    return <Navigate to="/login"></Navigate>
  }
  return (
    <Box bg={"rgb(246,246,249)"}>
      <Image src="https://signup.envoy.com/assets/images/logo-new.svg" />
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          maxW={"sm"}
          h={"500px"}
          bg={"white"}
          p={"10px"}
          shadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        >
          <Text
            display={"flex"}
            color={"tomato"}
            justifyContent={"start"}
            fontFamily={"sans-serif"}
            fontWeight={"600"}
          >
            Create your Envoy account
          </Text>
          <form onSubmit={handelsubmit}>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              bg={"rgb(232,240,254)"}
              onChange={getdata}
              name="email"
            ></Input>
            <HStack>
              <VStack>
                <FormLabel display={"flex"} alignItems={"start"}>
                  First name{" "}
                </FormLabel>
                <Input bg={"rgb(232,240,254)"}></Input>
              </VStack>
              <VStack>
                <FormLabel>Last name </FormLabel>
                <Input bg={"rgb(232,240,254)"}></Input>
              </VStack>
            </HStack>
            <FormLabel>Mobile number</FormLabel>
            <Input bg={"rgb(232,240,254)"}></Input>
            <FormLabel>Create password </FormLabel>
            <Input
              bg={"rgb(232,240,254)"}
              onChange={getdata}
              name="password"
            ></Input>
            <FormLabel fontSize={"12px"} color={"gray"} mt={"5px"}>
              Password must be at least 8 characters and contain at least one
              capital letter, one lower case letter, and one number.
            </FormLabel>
            <FormLabel fontSize={"12px"} color={"gray"} mt={"5px"}>
              By clicking "Next" you agree to receive marketing communications
              from Envoy.
            </FormLabel>
            <Input
              type={"submit"}
              w={"65"}
              bg={"tomato"}
              ml={"270px"}
              color={"white"}
              // onSubmit={handelsubmit}
            ></Input>
          </form>
        </Box>
        <Box
          h={"500px"}
          w={"250px"}
          bg={"lightblue"}
          shadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        >
          <Text
            fontFamily={"sans-serif"}
            fontSize={"25px"}
            fontWeight={600}
            mt={"150px"}
          >
            Envoy saves administrators an average of 100 hours per year
          </Text>
          <Text
            mt={"150px"}
            display={"flex"}
            align={"start"}
            p={"5px"}
            fontSize={"15px"}
          >
            Based on an Envoy customer survey
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;

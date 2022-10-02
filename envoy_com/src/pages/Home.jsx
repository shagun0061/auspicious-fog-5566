import { Box, Text, SimpleGrid,Image } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Box
        fontSize={"30px"}
        fontFamily={"sans-serif"}
        fontWeight={600}
        mt={"20px"}
      >
        LPA HQ
      </Box>

      <SimpleGrid columns={3} spacing={10}>
        <Box
          bg="white"
          borderRadius={"10px"}
          height="200px"
          w={"350px"}
          p={"5px"}
        >
          <Text display={"flex"} fontWeight={'600'} fontSize={'22px'}>Visitors</Text>
          <br></br>
          <Text display={"flex"} align={"start"}>
            Welcome guests with a sign-in that makes a great impression and
            keeps your workplace safe.
          </Text>
          <br></br>
          <Text display={"flex"} color={"lightskyblue"}>
            Get start{" "}
          </Text>
        </Box>
        <Box
          bg="white"
          borderRadius={"10px"}
          height="200px"
          w={"350px"}
          p={"5px"}
        >
          <Text display={"flex"} fontWeight={'600'} fontSize={'22px'}>Deliveries</Text>
          <br></br>
          <Text display={"flex"} align={"start"}>
            Welcome guests with a sign-in that makes a great impression and
            keeps your workplace safe.
          </Text>
          <br></br>
          <Text display={"flex"} color={"lightskyblue"}>
            Get start{" "}
          </Text>
        </Box>
        <Box
          bg="white"
          borderRadius={"10px"}
          height="200px"
          w={"350px"}
          p={"5px"}
        >
          <Text display={"flex"} fontWeight={'600'} fontSize={'22px'}>Rooms
          </Text>
          <br></br>
          <Text display={"flex"} align={"start"}>
            Welcome guests with a sign-in that makes a great impression and
            keeps your workplace safe.
          </Text>
          <br></br>
          <Text display={"flex"} color={"lightskyblue"}>
            Get start{" "}
          </Text>
        </Box>
      </SimpleGrid>

      <Text display={'flex'}  mt={'30px'}  fontSize={'22px'} >Setup guide</Text>

      <Box w={'100%'} h={'350px'}  display={'flex'} flexDirection={'row'} bg={'white'}  borderRadius="20px" border={'1px'} >
      <Box >
        <Image src="https://dashboard.envoy.com/assets/images/dashboard/product-desk-a0cff2dfe1ed9e9cd388dd42e8e6a08b.svg" />
        </Box>
        <Box  p={'20px'} >
            <Text display={'flex'} lineHeight={'50px'}>Finish setting up your workplace</Text>
            <Text display={'flex'} lineHeight={'10px'}>Add a logo, sync your employee directory and customize your workplace settings.</Text>
            <Text display={'flex'} lineHeight={'30px'} color={'lightskyblue'}> 1) Upload your logo.</Text>
            <Text display={'flex'} lineHeight={'30px'} color={'lightskyblue'}>2) up your employee directory.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

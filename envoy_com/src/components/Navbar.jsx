import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Authcontext } from "../context/Authcontext";
import {
  Box,
  Image,
  Flex,
  Img,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  Grid,
  GridItem,
  Icon,
  Container,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  const { logAuth, setLogAuth } = React.useContext(Authcontext);
  // ! main return

  return (
    <Flex
      border="1px"
      w="100%"
      h="50px"
      p={3}
      backgroundColor="rgb(246,246,249)"
    >
      <Img
        src="https://mms.businesswire.com/media/20220915005385/en/1572675/2/Envoy-Logo-%28Full-Color%29.jpg"
        alt="error"
      />
      <Spacer></Spacer>
      <HStack>
        {/* <Link to='/hiring'>We're hiring!</Link> */}
        // * PRODUCTS
        <Menu w="400px">
          <MenuButton
            as={Button}
            _hover={{
              background: "white",
              color: "orange",
            }}
            h="25px"
            bg="	none"
            rightIcon={<ChevronDownIcon />}
          >
            Products
          </MenuButton>
          <MenuList w="600px" h={"500px"} display={"flex"}>
            <Box
              w={"70%"}
              h={"90%"}
              border="1px"
              borderColor={"red"}
              align="start"
              style={{ display: "flex", flexDirection: "column" }}
              p={"0px 20px"}
            >
              PRODUCTS
              <Box>
                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/visitors-app.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    Visitor management solutions for any front desk
                  </MenuItem>
                </Box>

                {/* 2 */}

                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/connect-app-logo.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    management for multi-tenant property owners
                  </MenuItem>
                </Box>

                {/* 3 */}

                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/protect-app.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    Protect Manage hybrid schedules and keep employees safe
                  </MenuItem>
                </Box>

                {/* 4 */}

                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/desks-app.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    Desks Easy desk booking for a flexible workplace
                  </MenuItem>
                </Box>

                {/* 5 */}

                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/rooms-app.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    Rooms Room booking made easier for your team
                  </MenuItem>
                </Box>

                {/* 6*/}

                <Box
                  display={"flex"}
                  _hover={{ backgroundColor: "#cbd5e0" }}
                  overflow="hidden"
                  borderRadius={"10px"}
                  mt={"10px"}
                  mb={"20px"}
                >
                  <Img
                    w="45px"
                    h={"45px"}
                    src="https://envoy.com/images/icons/products/deliveries-app.png"
                  />
                  <MenuItem w={"90%"} h={"45px"}>
                    Deliveries A new way to organize incoming office deliveries
                  </MenuItem>
                </Box>
                <hr color="red"></hr>
                <MenuItem color={"tomato"}>View all products</MenuItem>
              </Box>
            </Box>

            <Box
              w={"30%"}
              h={"90%"}
              backgroundColor={"rgb(246,246,249)"}
              border="1px"
              p={"0px 20px"}
              borderColor={"red"}
              align="start"
              style={{ display: "flex", flexDirection: "column" }}
            >
              PLATFORM
              <Box display={"flex"} mt={"10px"} ml={"-5"}>
                <MenuItem>
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://envoy.com/images/icons/24px/red/iphone.svg"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Mobile</span>
                </MenuItem>
              </Box>
              <Box display={"flex"} mt={"10px"} ml={"-5"}>
                <MenuItem>
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://envoy.com/images/icons/24px/red/integrations.svg"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Intigrations</span>
                </MenuItem>
              </Box>
              <Box display={"flex"} mt={"10px"} ml={"-5"}>
                <MenuItem>
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://envoy.com/images/icons/24px/red/developer.svg"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Developers</span>
                </MenuItem>
              </Box>
            </Box>
          </MenuList>
        </Menu>
        // * SOLUTIONS
        <Menu>
          <MenuButton
            as={Button}
            _hover={{
              background: "white",
              color: "orange",
            }}
            h="25px"
            bg="	none"
            rightIcon={<ChevronDownIcon />}
          >
            Solutions
          </MenuButton>
          <MenuList w={"350px"} h={"400px"} p="0px 20px">
            {/* 1 */}

            <MenuItem display={"flex"} gap="10px" mt={"10px"}>
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/globe.svg"
              />
              <Text fontSize={20}>Hibrid work</Text>
            </MenuItem>

            {/* 2 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/office.svg"
              />
              <Text fontSize={20}>Support enterprise needs</Text>
            </MenuItem>

            {/* 3 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/shield.svg"
              />
              <Text fontSize={20}>Enhance security</Text>
            </MenuItem>

            {/* 4 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/rooms.svg"
              />
              <Text fontSize={20}>Space management</Text>
            </MenuItem>

            {/* 5 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/pulse.svg"
              />
              <Text fontSize={20}>Workplace Health and safety</Text>
            </MenuItem>

            {/* 6 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/16px/red/sparkles.svg"
              />
              <Text fontSize={20}>Workplace Experience</Text>
            </MenuItem>

            {/* 7 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/document.svg"
              />
              <Text fontSize={20}>Meet compilance management</Text>
            </MenuItem>
          </MenuList>
        </Menu>
        // * RESOURCES
        <Menu>
          <MenuButton
            as={Button}
            _hover={{
              background: "white",
              color: "orange",
            }}
            h="25px"
            bg="	none"
            rightIcon={<ChevronDownIcon />}
          >
            Resources
          </MenuButton>
          <MenuList w={"350px"} h={"400px"} p="0px 20px">
            {/* 1 */}

            <MenuItem display={"flex"} gap="10px" mt={"10px"}>
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/globe.svg"
              />
              <Text fontSize={20}> Workplace trends report </Text>
            </MenuItem>

            {/* 2 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/office.svg"
              />
              <Text fontSize={20}>Blog</Text>
            </MenuItem>

            {/* 3 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/shield.svg"
              />
              <Text fontSize={20}>Ebooks</Text>
            </MenuItem>

            {/* 4 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/rooms.svg"
              />
              <Text fontSize={20}> Webinars</Text>
            </MenuItem>

            {/* 5 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/pulse.svg"
              />
              <Text fontSize={20}>case studies</Text>
            </MenuItem>

            {/* 6 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/16px/red/sparkles.svg"
              />
              <Text fontSize={20}>data insights</Text>
            </MenuItem>

            {/* 7 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/document.svg"
              />
              <Text fontSize={20}>Return to Workplace Index </Text>
            </MenuItem>

            {/* 8*/}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/document.svg"
              />
              <Text fontSize={20}>Product news </Text>
            </MenuItem>

            {/* 9 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/document.svg"
              />
              <Text fontSize={20}>Resource Hub</Text>
            </MenuItem>
          </MenuList>
        </Menu>
        // * Demo
        <Button>Demo</Button>
        // * Pricing
        <Menu>
          <MenuButton
            as={Button}
            _hover={{
              background: "white",
              color: "orange",
            }}
            h="25px"
            bg="	none"
            rightIcon={<ChevronDownIcon />}
          >
            Pricing
          </MenuButton>
          <MenuList w={"300px"} h={"250px"} p="0px 20px">
            {/* 1 */}

            <MenuItem display={"flex"} gap="10px" mt={"10px"}>
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/tag.svg"
              />
              <Text fontSize={20}>Plans and pricing</Text>
            </MenuItem>

            {/* 2 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/calculator.svg"
              />
              <Text fontSize={20}>Get a quote</Text>
            </MenuItem>

            {/* 3 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/phone.svg"
              />
              <Text fontSize={20}>
                Call sales:{" "}
                <span style={{ color: "tomato" }}>(877) 652-2808 </span>
              </Text>
            </MenuItem>

            {/* 4 */}

            <MenuItem display={"flex"} gap="10px">
              <Image
                w={"25px"}
                h={"25px"}
                src="https://envoy.com/images/icons/24px/red/envelope.svg"
              />
              <Text fontSize={20}> Contact us </Text>
            </MenuItem>
          </MenuList>
        </Menu>
        // * Login
        <Link to="/login">
          <Button backgroundColor={"rgb(246,246,249)"}>Login</Button>
        </Link>
        // * start
         {logAuth  ? <Link to={"/dashboard"}>
          <Button backgroundColor={"tomato"} color="white">
            Go to Dashboard
          </Button>
        </Link>:
        <Link to={"/signup"}>
          <Button backgroundColor={"tomato"} color="white">
            Get Started
          </Button>
        </Link>}
      </HStack>
    </Flex>
  );
};

export default Navbar;

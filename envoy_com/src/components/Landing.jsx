import React from "react";
import styles from "../Landing.module.css";
import img3 from "../product3.PNG";
import img4 from "../Product4.PNG";
import {
  Image,
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  space,
  video,
  Container,
  Button,
  Spacer,
  HStack,
  VStack,
} from "@chakra-ui/react";
import img1 from "../projext1.PNG";
import img2 from "../project2.PNG";
function Landing() {
  return (
    <div>
      <Image src={img1} />
      <Image src={img2} />
      <Box w={"100%"} h={"900px"} backgroundColor="white">
        <Text
          fontSize={"50px"}
          fontWeight={"450"}
          p={"0px 150px"}
          display={"flex"}
          align="start"
        >
          <br />
          Envoy's workplace
          <br /> platform
        </Text>
      </Box>

      <Box w="900px" h={"500px"} mt="-600" ml={"400px"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/visitors-app.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Visitors
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Welcome guests while keeping people, property, and ideas safe.
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/connect-app-logo.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Connect
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Visitor management for multi-tenant property owner
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/protect-app.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Protect
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Manage hybrid schedules and keep employees safe.
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/rooms-app.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Rooms
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Easily book rooms for collaboration and free up unused space.{" "}
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>
          </GridItem>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/deliveries-app.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Deliveries
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Declutter the mailroom by prompting package pickup.
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>{" "}
          </GridItem>
          <GridItem w="100%" h="200">
            <Flex gap={"10px"}>
              <Image
                src="https://envoy.com/images/icons/products/desks-app.png"
                w={"50px"}
                h={"50"}
              />
              <Text fontSize={"29px"} fontWeight={"450"}>
                Desks
              </Text>
            </Flex>
            <Text
              mt={"20px"}
              display={"flex"}
              align={"start"}
              className={styles.gray}
            >
              Empower employees to reserve a desk in the workplace.
            </Text>
            <Flex mt={"20px"}>
              <p className={styles.tomato}>Learm more</p>
              <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                {" "}
                |{" "}
              </span>
              <p className={styles.tomato}>Watch the vedio</p>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <a href="https://envoy.com/#desks">
          <Image src={img3} />
        </a>
      </Box>
      <Box w={"100%"} h={"500px"} backgroundColor={"rgb(246,246,249)"}>
        <Container
          w={"500px"}
          height={"400px"}
          border={"1px"}
          borderColor="white"
        >
          <Text
            color={"#4141a2"}
            mt={"55px"}
            lineHeight={"3rem"}
            fontSize="45px"
            fontWeight={600}
            fontFamily={"sans-serif"}
          >
            The enterprise-grade workplace platform
          </Text>
          <Text className={styles.gray} fontStyle={"revert-layer"} mt={"10px"}>
            Solve workplace challenges faster with the platform that keeps
            employees and visitors safe, while ensuring your business stays
            compliant and secure.
          </Text>
          <Button color={"white"} backgroundColor={"#4141a2"} mt={"40px"}>
            Learn more
          </Button>
        </Container>
      </Box>

      <Box
        w={"100%"}
        h={"750px"}
        p={"0px 150px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text
          className={styles.gray}
          mt={"50px "}
          fontWeight={600}
          display={"flex"}
          align={"start"}
        >
          THE ENVOY BLOG
        </Text>
        <Text
          fontSize={"50px"}
          fontWeight={600}
          display={"flex"}
          align="start"
          mt={"-40px"}
          lineHeight={"3rem"}
        >
          <br />
          Best practices for
          <br /> productive workplaces
        </Text>
        <br></br>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="450"  >
            <Image
              className={styles.hov}
              src="https://envoy.com/wp-content/uploads/2022/06/platform-6-benefits-1-1024x647.png"
              w={"90%"}
            />
            <br></br>
            <Text
              fontSize={"23px"}
              display={"flex"}
              align="start"
              w={"90%"}
              color={"tomato"}
            >
              What is workplace experience and why is it important?
            </Text>
            <br></br>

            <Text display={"flex"} align={"start"} className={styles.gray}>
              Learn how to create a great workplace experience that makes your
              employees happy and drives better business outcomes.
            </Text>
          </GridItem>
          <GridItem w="100%" h="450"  >
            <Image className={styles.hov}
              src="https://envoy.com/wp-content/uploads/2022/06/downloadpage.png"
              w={"90%"}
            />
            <br></br>
            <Text
              fontSize={"23px"}
              display={"flex"}
              align="start"
              w={"90%"}
              color={"tomato"}
            >
              What is workplace experience and why is it important?
            </Text>
            <br></br>

            <Text display={"flex"} align={"start"} className={styles.gray}>
              Learn how to create a great workplace experience that makes your
              employees happy and drives better business outcomes.
            </Text>
          </GridItem>
          <GridItem w="100%" h="450"  >
            <Image className={styles.hov}
              src="https://envoy.com/wp-content/uploads/2022/06/platform-6-benefits-1-1024x647.png"
              w={"90%"}
            />
            <br></br>
            <Text
              fontSize={"23px"}
              display={"flex"}
              align="start"
              w={"90%"}
              color={"tomato"}
            >
              What is workplace experience and why is it important?
            </Text>
            <br></br>

            <Text display={"flex"} align={"start"} className={styles.gray}>
              Learn how to create a great workplace experience that makes your
              employees happy and drives better business outcomes.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    <Box>
      <Image src= {img4}  />
    </Box>
      <Box  w={"100%"} height={"1200px"} p={'0px 150px'} backgroundColor={"rgb(246,246,249)"} >
      <Container
          maxW='2xl'
          height={"500px"}
          border={"1px"}
          borderColor="white"
        >
          <Text
            mt={"55px"}
            lineHeight={"3rem"}
            fontSize="45px"
            fontWeight={600}
            fontFamily={"sans-serif"}
          >
            Meet the technology powering the workplace—wherever that may be
          </Text>
          <Text   fontStyle={"revert-layer"} mt={"10px"}>
          Envoy’s platform and partners help get people back to the workplace faster and safer. Connect with out-of-the-box integrations for your every need—or use our simple API for everything else.
          </Text>
          <Box display={'flex'}  justifyContent={"center"} gap={'20px'}>
          <Button color={"white"} backgroundColor={"tomato"} mt={"40px"} >
          Explore integrations
          </Button>
            
          <Button color={"tomato"} backgroundColor={"white"} mt={"40px"}>
          Build tour own
          </Button>
          </Box>
      </Container>
      <HStack   mt={'-70px'} display={'flex'}  columnGap={'70px'} >
        <VStack   display={'flex'}  gap={'10px'}>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image src="https://envoy.com/images/integrations/slack.svg" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Slack</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>Instantly notify employees of every Envoy update directly or in specific channels on Slack.</Text>
          </Box>
          <br></br>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image src="https://envoy.com/images/integrations/microsoft-teams.svg" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Microsoft Teams</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
            Automatically notify employees through a private message for every Envoy update.</Text>
          </Box>
          <br></br>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image w={'40px'} src="https://envoy.com/images/integrations/g-suite.png" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Google Drive</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
            Connect any Google Drive account to easily store signed legal documents.</Text>
          </Box> 
        </VStack>


        <VStack   display={'flex'}  gap={'10px'}  mt={'-150px'}>
        
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'} >
            <Image src="https://envoy.com/images/integrations/aruba.svg" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Aruba Clearpass</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
            Provision unique Wi-Fi network and password details for each Envoy visitor..</Text>
          </Box>
          <br></br>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image src="https://envoy.com/images/integrations/docusign-square.svg" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Docusign</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
           Automatically send visitors documents to sign via DocuSign.</Text>
          </Box>
          <br></br>
          <Box   w={"350px"} height={"200px"} border={'1px'} borderColor="white" p={'30px'} bg={'rgb(246,246,249)'} borderRadius={'10px'}>
            
          </Box>
        </VStack>


        <VStack   display={'flex'}  gap={'10px'}>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image w={'40px'} src="https://envoy.com/images/integrations/okta.png" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Okta</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
            Easily sync employee details from Okta to the Envoy employee directory.</Text>
          </Box>
          <br></br>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image w={'40px'} src="https://envoy.com/images/integrations/eventbrite.png" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}>Eventbrite</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
            Simplify event sign-in by importing Eventbrite attendees into Envoy.</Text>
          </Box>
          <br></br>
          <Box className={styles.shadow} w={"350px"} height={"200px"}   p={'30px'} bg={'rgb(255,255,255)'} borderRadius={'10px'}>
            <Image w={'40px'} src="https://envoy.com/images/integrations/openpath-o.svg" />
            <Text display={'flex'} align={'start'} mt={'5px'} fontSize={'20px'} fontWeight={'700'}> Openpath</Text>
            <Text display={'flex'} align={'start'} mt={'5px'}>
           Manage building access for employees and visitors from anywhere.</Text>
          </Box> 
        </VStack>

      </HStack>
      </Box>
 
    </div>
  );
}

export default Landing;
// border={'1px'} borderColor="red"

import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import Styles from "../footer.module.css";
import { BsLinkedin } from "react-icons/bs";
import {
  Box,
  Flex,
  Text,
  VStack,
  Input,
  Button,
  Spacer,
  
  HStack,
  UnorderedList,
  ListItem,
   
} from "@chakra-ui/react";
function Footer() {
  //* return
  return (
    // * main div
    <div>
      <div
        style={{
          padding: "0px 100px",
           
          height: "600px",
          backgroundColor: "hsl(0,0%,100%)",
        }}
      >
        <Flex w="100%" h="140px">
          <VStack>
            <Text fontSize="5xl" color="tomato" as="b" ml="-270px">
              Try Envoy for free
            </Text>

            <Text fontSize="xl">
              Transforming your workplace is easier than you think. Get started
              in minutes.{" "}
            </Text>
          </VStack>
          <HStack>
            <Flex w="100%" h="100%" mt="9" ml="20">
              <Input placeholder="Enter Your Email" />
              <Button backgroundColor="tomato" ml="10" w="200px">
                Get Started
              </Button>
            </Flex>
          </HStack>
        </Flex>

        <hr></hr>
        <HStack mt="20px" mb="20px ">
          <PhoneIcon />
          <HStack fontSize="2xl">
            <Text>Reach out to our sales team today at </Text>
            <Text color="tomato" _hover="courser">
              (877) 652-2808{" "}
            </Text>
            <Text>or schedule a meeting with one of our experts</Text>
            <Text color="tomato">here.</Text>
          </HStack>
        </HStack>
        <hr></hr>

        <HStack mt="10"  gap={'40'}>
          <UnorderedList
            display={"flex"}
            flexDirection={"column"}
            align={"start"}
             listStyleType='none'
             
          >
            <ListItem className={Styles.black}>Products </ListItem>
            <ListItem className={Styles.gray}> Visitors </ListItem>
            <ListItem className={Styles.gray}> Connect </ListItem>
            <ListItem className={Styles.gray}>Protect </ListItem>
            <ListItem className={Styles.gray}> Desks </ListItem>
            <ListItem className={Styles.gray}> Rooms </ListItem>
            <ListItem className={Styles.gray}> Deliveries </ListItem>
            <ListItem className={Styles.gray}> Mobile </ListItem>
            <ListItem className={Styles.gray}> Integrations</ListItem>
            <ListItem className={Styles.gray}> Partnerships </ListItem>
            <ListItem className={Styles.gray}> Pricing </ListItem>
            <ListItem className={Styles.gray}>Get a quote</ListItem>
          </UnorderedList>

          <UnorderedList
            display={"flex"}
            flexDirection={"column"}
            align={"start"}
            listStyleType='none'
          >
            <ListItem className={Styles.black}> Solutions </ListItem>
            <ListItem className={Styles.gray}> Hybrid work </ListItem>
            <ListItem className={Styles.gray}> Enterprise </ListItem>
            <ListItem className={Styles.gray}> Security</ListItem>
            <ListItem className={Styles.gray}> Space management</ListItem>
            <ListItem className={Styles.gray}> Health and safety</ListItem>
            <ListItem className={Styles.gray}> Workplace experience</ListItem>
            <ListItem className={Styles.gray}> Compliance</ListItem>
            <ListItem className={Styles.gray}> Touchless sign-in</ListItem>
            <ListItem className={Styles.gray}> Access control</ListItem>
            <ListItem className={Styles.gray}> Efficiency</ListItem>
            <ListItem className={Styles.gray}>Experience</ListItem>
          </UnorderedList>

          {/* <VStack ml="100px" border="1px" borderColor="red" w="600px"> */}
          <UnorderedList
            display={"flex"}
            flexDirection={"column"}
            align={"start"}
            listStyleType='none'
          >
            <ListItem className={Styles.black} mt='-55'> Resources</ListItem>
            <ListItem className={Styles.gray}> Hybrid work resource hub</ListItem>
            <ListItem className={Styles.gray}> Help center</ListItem>
            <ListItem className={Styles.gray}> Return to Workplace Index</ListItem>
            <ListItem className={Styles.gray}> Envoy Store</ListItem>
            <ListItem className={Styles.gray}> Customer stories</ListItem>
            <ListItem className={Styles.gray}> Demo</ListItem>
            <ListItem className={Styles.gray}> CompListItemance tips</ListItem>
            <ListItem className={Styles.gray}> Developers</ListItem>
            <ListItem className={Styles.gray}> Glossary</ListItem>
          </UnorderedList>

          <UnorderedList
            display={"flex"}
            flexDirection={"column"}
            align={"start"}
            listStyleType='none'
          >
            <ListItem className={Styles.black} mt='-105'> Company</ListItem>
            <ListItem className={Styles.gray}> About Envoy</ListItem>
            <ListItem className={Styles.gray}> Vision</ListItem>
            <ListItem className={Styles.gray}> Jobs </ListItem>
            <ListItem className={Styles.gray}> Blog </ListItem>
            <ListItem className={Styles.gray}> Data security </ListItem>
            <ListItem className={Styles.gray}> Press </ListItem>
            <ListItem className={Styles.gray} > Partner </ListItem>
          </UnorderedList>
        </HStack>
      </div>
      <Box w="100%" h="50px" backgroundColor="rgb(246,246,249)" mt={'20px '}>
        <HStack p="0px 100px" align="center" gap="20px " color="#a9abaf" >
          <Text className={Styles.gray}> Contact </Text>
          <Text className={Styles.gray}>Status</Text>
          <Text className={Styles.gray}>Terms of Service</Text>
          <Text className={Styles.gray}>Privacy Policy</Text>
          <Spacer></Spacer>
          <Box>
            <FaFacebookF className={Styles.gray} />
          </Box>
          <Box>
            <SiTwitter className={Styles.gray} />
          </Box>

          <Box>
            <BsLinkedin className={Styles.gray} />
          </Box>
        </HStack>
      </Box>
    </div>
  );
}

export default Footer;

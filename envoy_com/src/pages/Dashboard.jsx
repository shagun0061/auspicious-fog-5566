import React from "react";
import Styles from "../Dashboard.module.css";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import { TbBuildingHospital, TbTruckDelivery } from "react-icons/tb";
import { BsFillFilePersonFill } from "react-icons/bs";
import Home from "./Home.jsx";
import {
  MdScreenSearchDesktop,
  MdOutlineRoomPreferences,
  MdNotificationAdd,
} from "react-icons/md";
import { BiDirections } from "react-icons/bi";
import { RiAppsFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
  Text,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const Dashboard = () => {
  return (
    <Box w={"100vw"} h={"100vh"} bg={"rgb(246,246,249)"} display={"flex"}>
      <Box w={"20%"} h={"100%"} border={"1px"} p={"20px"}>
        <Image src="https://dashboard.envoy.com/assets/images/logo-small-red-29747f5d18c38b072069367be9afc3ba.svg" />
        <br></br>
        <Menu>
          <MenuButton w={"100%"}>
            <Box display={"flex"} alignItems={"start"} w={"100%"}>
              <Text color={"gray"} fontWeight={700}>
                LPA HQ
              </Text>
              <Spacer></Spacer>
              <ChevronDownIcon color={"gray"} />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>LPA HQ</MenuItem>
            <MenuItem>Add a location</MenuItem>
          </MenuList>
        </Menu>
        <br></br>
        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <FcHome style={{ fontSize: "25px" }} />
          Home
        </Box>
        <br></br>
        <Box
          mt={"15px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <TbBuildingHospital style={{ fontSize: "25px" }} />
          <Link to="/dashboard/protect">Protect</Link>
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <BsFillFilePersonFill style={{ fontSize: "25px" }} />
          Visitors
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <TbTruckDelivery style={{ fontSize: "25px" }} />
          Deliveries
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <MdScreenSearchDesktop style={{ fontSize: "25px" }} />
          Desks
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <MdOutlineRoomPreferences style={{ fontSize: "25px" }} />
          Rooms
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <BiDirections style={{ fontSize: "25px" }} />
          Employee directory
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          className={Styles.tolo}
        >
          <RiAppsFill style={{ fontSize: "25px" }} />
          Apps
        </Box>
        <br></br>
        <Box w={"100%"} border={"1px"}></Box>

        <Box className={Styles.lolo}>Help Center</Box>
        <Box className={Styles.lolo}>Status psge</Box>
        <Box className={Styles.lolo}>Biling</Box>
        <Box className={Styles.lolo}>Buy devices & Bandages</Box>
        <Box className={Styles.laprof}>
          <CgProfile style={{ color: "red" }} />
          Shagun Sharma
          <MdNotificationAdd style={{ color: "red" }} />
        </Box>
      </Box>
      <Home />
    </Box>
  );
};

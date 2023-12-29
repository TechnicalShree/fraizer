import { Divider, Stack } from "@mui/material";
import SideMenuItem from "./SideMenuItem";
import { Fragment } from "react";

export default function SideMenu() {
  // TODO: Add correct props to it
  const sideMenuList = [
    {
      text: "Staff Picked Stories",
      onClick: () => {
        console.log("This is test 1...");
      },
    },
    {
      text: "Musical Kentucky: A Song From Each Country",
      onClick: () => {
        console.log("This is test 2...");
      },
    },
    {
      text: "Choose a random country for me",
      onClick: () => {
        console.log("This is test 3...");
      },
    },
    {
      text: "Connect with us",
      onClick: () => {
        console.log("This is test 4...");
      },
    },
  ];

  return (
    <Stack sx={{ width: 1 / 5 }}>
      {sideMenuList.map((item, idx) => (
        <Fragment key={idx}>
          <SideMenuItem text={item.text} onClick={item.onClick} />
          {sideMenuList.length - 1 !== idx && <Divider color="#434343" />}
        </Fragment>
      ))}
    </Stack>
  );
}

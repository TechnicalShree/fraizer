import { Divider, Stack } from "@mui/material";
import { Fragment, useState } from "react";
import { SideMenuItem, StaffPickedStoriesModal } from "./components";
import MusicalKentucky from "./components/MusicalKentucky";

export default function SideMenu() {
  const [modalState, setModalState] = useState({
    isStaffPickedStoriesModalOpen: false,
    isMusicalKentuckyModalOpen: false,
  });

  // TODO: Add correct props to it
  const sideMenuList = [
    {
      text: "Staff Picked Stories",
      onClick: () => {
        setModalState((prev) => ({
          ...prev,
          isStaffPickedStoriesModalOpen: true,
        }));
      },
    },
    {
      text: "Musical Kentucky: A Song from each County",
      onClick: () => {
        setModalState((prev) => ({
          ...prev,
          isMusicalKentuckyModalOpen: true,
        }));
      },
    },
    {
      text: "Choose a random county for me",
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
    <>
      <Stack sx={{ width: "250px" }}>
        {sideMenuList.map((item, idx) => (
          <Fragment key={idx}>
            <SideMenuItem text={item.text} onClick={item.onClick} />
            {sideMenuList.length - 1 !== idx && <Divider color="#434343" />}
          </Fragment>
        ))}
      </Stack>
      <StaffPickedStoriesModal
        open={modalState.isStaffPickedStoriesModalOpen}
        onClose={() =>
          setModalState((prev) => ({
            ...prev,
            isStaffPickedStoriesModalOpen: false,
          }))
        }
      />
      <MusicalKentucky
        open={modalState.isMusicalKentuckyModalOpen}
        onClose={() =>
          setModalState((prev) => ({
            ...prev,
            isMusicalKentuckyModalOpen: false,
          }))
        }
      />
    </>
  );
}

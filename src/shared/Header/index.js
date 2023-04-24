import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, Divider, IconButton, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { setUserData } from "../../Redux/Actions/UserData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") !== "dark" ? true : false
  );
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTheme = () => {
    setTheme(!theme);
    const element = document.getElementById("main");
    if (theme || localStorage.getItem("mode") === "dark")
      element.classList.add("dark");
    else element.classList.remove("dark");

    toggleTheme();
  };

  const toggleTheme = () => {
    if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "light");
    } else {
      localStorage.setItem("mode", "dark");
    }
  };

  useEffect(() => {
    handleTheme();
  }, []);

  console.log(localStorage.getItem("mode"), document.body);

  return (
    <>
      <div className="flex flex-row h-16 w-full lg:h-20 justify-between p-2 items-center sticky shadow-card bg-primary top-0 z-[999]">
        <div className="flex">
          <Link
            className="flex text-2xl lg:text-4xl drop-shadow items-center m-2 text-white font-bold"
            to="/home"
          >
            <h1>Your-Villa™</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <Button onClick={handleTheme}>
            {!theme ? (
              <DarkModeIcon className="!w-6 !h-6 lg:!w-10 lg:!h-10 !text-black !px-0 !mx-0" />
            ) : (
              // "Dark"
              <Brightness4Icon className="!w-6 !h-6 lg:!w-10 lg:!h-10 !text-white" />
            )}
          </Button>
          {userData && userData.length === 0 && (
            <CustomButton
              isInverse={true}
              className="!rounded-full !bg-white !text-primary !p-2 !pl-0 w-32 lg:w-48"
            >
              <span
                className="mr-1"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </span>
              /
              <span
                className="ml-1"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </span>
            </CustomButton>
          )}
          {userData && Object.keys(userData).length !== 0 && (
            <>
              <div className="rounded-full mr-2 border-white border-2 p-0.5 bg-primary">
                <Avatar
                  className="!bg-white !text-primary hover:opacity-90 lg:!w-12 lg:!h-12"
                  alt={userData.name}
                  src={userData.profile_url && userData.profile_url}
                  onClick={handleClick}
                >
                  {userData.name && userData.name.slice(0, 1)}
                </Avatar>
              </div>
            </>
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="!flex !top-2"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {userData && Object.keys(userData).length !== 0 && (
              <div className="flex flex-col my-1 items-center rounded dark:bg-black bg-white ">
                <div className="flex flex-col items-center border-t pb-3 w-60 mt-10 pt-12 dark:bg-black bg-white">
                  <h1 className="font-bold text-lg text-primary">
                    {userData.name}
                  </h1>
                  <h1 className="text-xs">{userData.email}</h1>
                </div>
                <div className="rounded-full absolute border-primary border-2 p-px bg-white">
                  <Avatar
                    className="!bg-primary hover:opacity-90 !h-20 !w-20"
                    alt={userData.name}
                    src={userData.profile_url && userData.profile_url}
                  >
                    {userData.name && userData.name.slice(0, 1)}
                  </Avatar>
                </div>
              </div>
            )}
            <Divider />
            <div className="flex justify-between mx-1 pt-1 dark:bg-black">
              <div
                className="cursor-pointer px-2 rounded p-1 hover:bg-gray-100"
                onClick={() => {
                  navigate("/profile");
                  handleClose();
                }}
              >
                View Profile
              </div>
              <div
                className="cursor-pointer px-2 rounded p-1 hover:bg-gray-100"
                onClick={() => {
                  navigate("/");
                  handleClose();
                  dispatch(setUserData({}));
                  localStorage.setItem("token", null);
                  window.location.reload();
                }}
              >
                Log Out
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;

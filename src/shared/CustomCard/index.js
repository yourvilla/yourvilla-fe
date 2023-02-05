import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Rating } from "@mui/material";

const CustomCard = ({ onClick, src, heading, country, state, city, type }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex flex-col bg-white shadow-card dark:bg-zinc-900 hover:scale-105 duration-500 rounded cursor-pointer"
        onClick={onClick}
      >
        <img src={src} alt="" className="h-52 object-cover rounded-t" />
        <div className="m-3">
          <p className="text-lg text-primary font-bold justify-between flex">
            <span>{heading}</span>
            <span className="flex items-center !text-md font-normal">
              <Rating
                name="read-only"
                value={4}
                readOnly
                className="!text-primary !text-[20px]"
              />
            </span>
          </p>
          <p className="flex items-center text-xs text-gray-400 uppercase">
            <span>{country}</span>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="!h-3 !mx-2 !w-[1px] !bg-gray-100"
            />
            <span>{state}</span>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="!h-3 !mx-2 !w-[1px] !bg-gray-100"
            />
            <span>{city}</span>
          </p>
          <p className="text-sm font-semibold dark:text-white text-black">{type}</p>
        </div>
      </div>
    </>
  );
};

export default CustomCard;

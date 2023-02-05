import React from "react";
import { Divider, Rating, Avatar } from "@mui/material";

const Review = ({ value }) => {
  return (
    <>
      <div className="flex flex-col my-3">
        <div className="flex justify-between my-4 items-center">
          <div className="flex items-center">
            <Avatar src="broken" alt={value?.user_name} />

            <p className="mx-2 font-semibold text-black dark:text-white">{value?.user_name}</p>
          </div>
          <Rating
            name="read-only"
            value={value?.rating}
            size="large"
            readOnly
            className="!text-primary"
          />
          {/* <p className="text-sm text-gray-600 ">Jun 1, 2020</p> */}
        </div>
        <div className="">
          <p className="text-base text-justify my-2 text-black dark:text-white">{value?.description}</p>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Review;

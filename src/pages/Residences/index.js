import React from "react";
import { getResidenceFn } from "../../services/GetResidences";
import { useQuery } from "react-query";
import { Loader } from "../../shared/Loader";
import { useNavigate } from "react-router-dom";
import { Divider, Rating } from "@mui/material";
import CustomCard from "../../shared/CustomCard";

const Residences = () => {
  const { isLoading, data } = useQuery(
    ["getResidence"],
    () => getResidenceFn(),
    {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnMount: false,
    }
  );
  const navigate = useNavigate();

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="grid lg:grid-cols-4 gap-5 mx-5 justify-center my-5">
        {data &&
          data.data &&
          data.data.map((item, index) => {
            return (
              <>
                <CustomCard
                  onClick={() => {
                    navigate(`/residence/${item.id}`);
                  }}
                  src={item.image_urls[0]}
                  heading={item.heading}
                  country={item.country}
                  state={item.state}
                  city={item.city}
                  type={item.residence_type}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Residences;

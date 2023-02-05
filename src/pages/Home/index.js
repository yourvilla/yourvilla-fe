import React from "react";
import { getResidenceFn } from "../../services/GetResidences";
import { useQuery } from "react-query";
import { Loader } from "../../shared/Loader";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { categoryData } from "../../mockData";
import CustomCard from "../../shared/CustomCard";

const Home = () => {
  const { isLoading, data } = useQuery(
    ["getResidence"],
    () => getResidenceFn(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="bg-homeBackgroud bg-no-repeat bg-cover">
        <div className="bg-opacity-40 bg-black h-full py-48 mx-auto">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl text-center mb-10 tracking-wider drop-shadow font-semibold bg-opacity-100 text-white lg:text-7xl">
              Welcome to Your-Villa
            </h1>
            {/* {userData.role === "Seller" && ( */}
            <Button
              className="!bg-primary lg:h-12 lg:w-48 !capitalize lg:!text-lg !rounded-full"
              onClick={() => {
                navigate("/add-residence");
              }}
              variant="contained"
            >
              Add Residence
            </Button>
            {/* )} */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 ">
        {categoryData.map((category) => {
          return (
            <>
              <div className="bg-white dark:bg-zinc-600 px-5">
                <h1 className="font-bold text-center text-primary lg:text-left my-3 text-xl lg:text-3xl">
                  {category.heading}
                </h1>
                <Divider />
                {data && data.data && data.data.length !== 0 ? (
                  <div className="grid lg:grid-cols-4 gap-5 justify-center my-5">
                    {data &&
                      data.data &&
                      data.data
                        .filter(
                          (item) => item?.residence_type === category.heading
                        )
                        .map((item) => {
                          return (
                            <>
                              <CustomCard
                                onClick={() => {
                                  if (userData?.length !== 0)
                                    navigate(`/residence/${item.id}`);
                                  else navigate(`/login`);
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
                ) : (
                  <div className="m-5 ml-0 text-gray-600 font-bold text-xl">
                    No Residence Found
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;

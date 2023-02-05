import React from "react";
import { getResidenceFn } from "../../../services/GetResidences";
import { useMutation, useQuery } from "react-query";
import { useState, useEffect } from "react";
import { Loader } from "../../../shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Divider, TextField, Rating, Avatar } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { CustomButton } from "../../../shared/CustomButton";
import Review from "../Review";
import { addReviewFn, getReviewFn } from "../../../services/Reviews";
import { useSelector } from "react-redux";
import { useQueryClient } from "react-query";

const ResidencePage = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(2);
  const [reviewMsg, setReviewMsg] = useState("");
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const client = useQueryClient();

  useEffect(() => {
    mutate(window.location.pathname.split("/")[2]);

    // eslint-disable-next-line
  }, []);

  const { mutate, isLoading } = useMutation(getResidenceFn, {
    onSuccess: (res) => {
      setData(res?.data);
    },
  });

  const { mutate: addReview } = useMutation(addReviewFn, {
    onSuccess: () => {
      client.refetchQueries("review");
    },
  });

  const handleSubmit = () => {
    const reqBody = {
      residence_id: residence.id,
      description: reviewMsg,
      rating: value,
      user_id: userData.id,
      user_name: userData.name,
    };
    addReview(reqBody);
  };

  const residence = data && data.length !== 0 && data[0];
  useQuery(["review"], () => getReviewFn(residence.id), {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: residence && residence?.id !== "" ? true : false,
    onSuccess: (res) => {
      setReview(res?.data);
    },
  });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <div className="h-16  px-5 flex justify-between rounded sticky top-0 bg-white shadow-card items-center z-50">
        <button className="flex justify-center" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
      </div> */}

      <div className="flex flex-col cursor-default p-3 lg:p-5 dark:bg-zinc-600 dark:text-white">
        <div className="flex flex-row w-full p-1 items-center shadow-card rounded">
          <Carousel infiniteLoop autoPlay showThumbs={false}>
            {residence &&
              residence.image_urls.map((image_url) => {
                return (
                  <img
                    src={image_url}
                    alt=""
                    className="lg:h-[500px] object-cover"
                  />
                );
              })}
          </Carousel>
        </div>
        <div className="flex justify-center shadow-card p-3 my-4 text-xl font-semibold bg-primary text-white rounded w-full">
          <p>{residence.heading}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 lg:my-4 w-full dark:text-white">
          <div className="flex flex-col gap-3 shadow-card p-3 rounded w-full">
            <p className="text-center text-lg font-semibold text-primary">
              Residence Address
            </p>
            <Divider />
            <div className="grid grid-cols-1 gap-4 p-5 text-left w-full text-base text-gray-800 dark:text-white">
              <p>Street Address : {residence.street_address}</p>
              <p>Landmark : {residence.landmark}</p>
              <p>City : {residence.city}</p>
              <p>State : {residence.state}</p>
              <p>Zipcode : {residence.zipcode}</p>
              <p>Country : {residence.country}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 shadow-card p-3 rounded w-full">
            <p className="text-center text-lg font-semibold text-primary">
              Services
            </p>
            <Divider />
            <div className="flex flex-wrap p-5 text-left w-full text-base text-gray-800 dark:text-white">
              {residence &&
                residence.services.map((services) => {
                  return (
                    <p className="border-2 border-primary rounded hover:cursor-default px-3 m-1 h-auto text-left">
                      {services}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-3 shadow-card p-3 rounded w-full">
            <p className="text-center text-lg font-semibold text-primary">
              Seller Info
            </p>
            <Divider />
            <div className="grid grid-cols-1 gap-4 p-5 text-left w-full text-base text-gray-800 dark:text-white">
              {residence.name && <p>Name : {residence.name}</p>}
              {residence.phone && <p>Phone : {residence.phone}</p>}
              {residence.email && <p>Email : {residence.email}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-lg font-semibold text-primary shadow-card p-3 rounded w-full">
            <p className="text-center">Other</p>
            <Divider />
            <div className="grid grid-cols-1 gap-4 p-5 text-left w-full text-base text-gray-800 dark:text-white">
              <p className="border-2 border-primary p-2 mx-auto text-left rounded">
                Price / Rent : <CurrencyRupeeIcon />
                {residence.price}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 w-full">
          <div className="flex flex-col gap-3 rounded w-full">
            <p className="text-center text-lg font-semibold text-primary">
              Public Reviews
            </p>
            <Divider />
            <div className="flex flex-col font-normal text-black p-3 my-3 lg:my-0 lg:text-xl">
              {review.map((data) => (
                <Review value={data} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start p-3 my-3 text-lg lg:text-xl">
            <div className="flex flex-col my-2 items-center rounded w-full">
              <p className="text-lg font-semibold text-primary">
                Write a Review
              </p>
            </div>
            <div className="flex flex-col w-full justify-center">
              <Rating
                name="simple-controlled"
                value={value}
                size="large"
                className="!text-primary !w-full !text-center"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <TextField
                multiline
                color="success"
                rows={5}
                value={reviewMsg}
                placeholder="Write A Review"
                onChange={(e, newValue) => {
                  setReviewMsg(e.target.value);
                }}
              />
            </div>

            <CustomButton
              type="submit"
              className="!mx-0 !px-5 !my-4"
              onClick={handleSubmit}
            >
              Post Review
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidencePage;

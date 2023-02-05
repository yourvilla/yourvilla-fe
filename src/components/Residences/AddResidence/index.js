import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  IconButton,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { servicesSchema } from "../../../schemas";
import { CustomTextField } from "../../../shared/CustomTextField";
import {
  residenceData,
  resConditionData,
  categoryData,
  forData,
  servicesData,
  dropdownFields,
} from "../../../mockData";
import { useMutation } from "react-query";
import { createResidenceFn } from "../../../services/CreateResidence";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { CustomButton } from "../../../shared/CustomButton";
import { toast } from "react-toastify";
import CustomChip from "../../../shared/CustomChip";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import { useSelector } from "react-redux";

const initialValues = {
  residenceName: "",
  streetAddress: "",
  landmark: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  price: "",
  residenceType: "",
  image_urls: "",
  resCondition: "",
  for: "",
};

const AddResidence = () => {
  const [image, setImage] = useState([]);
  const [services, setServices] = useState([]);
  const userData = useSelector((state) => state.userData);

  const client = useQueryClient();
  const { isLoading, mutate } = useMutation(createResidenceFn, {
    onSuccess: () => {
      navigate("/");
      client.refetchQueries("getResidence");
      toast.success("Residence Added..!");
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const length = e.target.files.length;
    const arr = [...Array(length).keys()];

    arr.map((item) => {
      const img = e.target.files[item];
      const imageRef = ref(storage, `your-villa/${img.name}`);
      uploadBytes(imageRef, img).then((gallery) => {
        getDownloadURL(gallery.ref).then((url) => {
          setImage((oldArray) => [...oldArray, url]);
        });
      });
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: servicesSchema,

    onSubmit: (values, action) => {
      const reqBody = {
        image_urls: image,
        heading: values.residenceName,
        street_address: values.streetAddress,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
        zipcode: values.zipcode,
        country: values.country,
        price: values.price,
        residence_type: values.residenceType,
        residence_condition: values.resCondition,
        residence_for: values.for,
        services: services,
        seller_id: userData.id,
      };
      if (image) mutate(reqBody);
      action.resetForm();
    },
  });

  const handleClick = (id) => {
    if (!services.includes(id)) setServices((services) => [...services, id]);
    else {
      setServices(services.filter((item) => item !== id));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-7 justify-center dark:bg-zinc-600">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col shadow-card rounded justify-center lg:w-1/2 items-center dark:bg-zinc-900 p-10"
        >
          <h1 className="font-bold text-2xl lg:text-4xl dark:text-white text-black m-3">
            Add Residence
          </h1>
          {image.length !== 0 ? (
            <>
              <div className="flex">
                {image.map((img) => (
                  <>
                    <img
                      src={img}
                      alt=""
                      className="w-1/2 h-24 object-contain mb-3 mr-4 flex flex-wrap"
                    />
                    <IconButton
                      className="!text-red-500 !absolute"
                      onClick={() =>
                        setImage(image.filter((item) => item !== img))
                      }
                    >
                      <CloseIcon />
                    </IconButton>
                  </>
                ))}
              </div>
            </>
          ) : (
            <Button
              variant="outlined"
              className="!my-8 !capitalize w-full !border-primary !py-3 !border-dashed !text-primary"
              component="label"
            >
              Upload Image
              <input
                multiple
                hidden
                onChange={handleChange}
                value={formik.image_url}
                formik={formik}
                name="image_urls"
                id="image_urls"
                accept="image/*"
                type="file"
              />
            </Button>
          )}
          <div className="grid lg:grid-cols-2 w-full gap-5">
            {residenceData.map((data, index) => (
              <CustomTextField
                placeholder={data.placeholder}
                type={data.type}
                name={data.name}
                id={data.id}
                key={index}
                formik={formik}
                className="!h-14"
              />
            ))}
            {dropdownFields.map((item) => (
              <FormControl size="small" className="h-14">
                <Select
                  displayEmpty
                  value={formik.values[item.id]}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name={item.id}
                  id={item.id}
                  className=""
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span className="text-gray-400">{item.label}</span>
                      );
                    }

                    return selected;
                  }}
                >
                  {item.data.map((item) => (
                    <MenuItem
                      value={item.heading}
                      className="!capitalize"
                      key={item.id}
                    >
                      {item.heading}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </div>
          <div className="flex flex-col justify-start w-full m-5 text-lg">
            <p className="dark:text-white"> Select Services</p>
            <div className="flex flex-wrap items-center">
              {servicesData.map((data) => (
                <CustomChip
                  id={data.id}
                  label={data.label}
                  onClick={() => handleClick(data.label)}
                  color="secondary"
                  className={
                    !services.includes(data.label)
                      ? "!bg-white"
                      : "!bg-primary !text-white "
                  }
                />
              ))}
            </div>
          </div>
          <CustomButton
            type="submit"
            className="lg:w-1/2 !py-1.5 !text-base !my-7"
          >
            Add Residence
          </CustomButton>
        </form>
      </div>
    </>
  );
};

export default AddResidence;

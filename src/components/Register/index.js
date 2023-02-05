import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { registerFormData } from "../../mockData";
import { CustomTextField } from "../../shared/CustomTextField";
import { useMutation } from "react-query";
import { registerFn } from "../../services/Register";
import { CustomButton } from "../../shared/CustomButton";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormControl, Select, MenuItem } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "",
};

const SignUp = ({ setSignIn }) => {
  const { isLoading, mutate } = useMutation(registerFn, {
    onSuccess: () => {
      toast.success("Sign Up Successfully");
      navigate("/login");
    },
  });
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      const reqBody = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
      };
      mutate(reqBody);
    },
  });
  return (
    <>
      <div className="flex flex-col items-center pt-10  justify-center bg-white dark:bg-zinc-600">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col shadow-card rounded justify-center lg:w-1/2 items-center p-7 bg-white dark:bg-black"
        >
          <h1 className="font-bold text-2xl lg:text-4xl m-3 dark:text-white text-black">Sign Up</h1>

          {registerFormData.map((data, index) => (
            <CustomTextField
              label={data.label}
              type={data.type}
              name={data.name}
              id={data.id}
              key={index}
              formik={formik}
              className="w-11/12 lg:w-1/2 !h-12 !m-3"
            />
          ))}
          <FormControl size="small" className="w-11/12 lg:w-1/2 !h-12 !m-3">
            <Select
              displayEmpty
              value={formik.values["role"]}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name={"role"}
              id={"role"}
              className=""
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <span className="text-gray-400">Role</span>
                  );
                }

                return selected;
              }}
            >
              {["Seller", "Buyer"].map((item) => (
                <MenuItem value={item} className="!capitalize" key={item.id}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <p className="text-sm mr-3 lg:w-1/2 dark:text-white text-black">
            <Checkbox checked={checked} onClick={() => setChecked(!checked)} />I
            Agree To The
            <span className="text-primary ml-1 cursor-pointer">
              Terms & Conditions
            </span>
            .
          </p>

          <CustomButton
            disabled={formik.isValid && checked ? false : true}
            className="w-11/12 lg:w-1/2 !m-4"
            type="submit"
          >
            Sign Up
          </CustomButton>

          <h1 className="dark:text-white text-black">
            Already Have An Account?
            <span
              className="text-primary m-2 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </h1>
        </form>
      </div>
    </>
  );
};

export default SignUp;

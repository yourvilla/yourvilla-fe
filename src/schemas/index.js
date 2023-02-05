import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be At Least 2 Characters.")
    .max(25, "To Long")
    .required("Oops..! You Forget to Enter Your Name."),
  email: Yup.string()
    .email("Enter Valid Email.")
    .required("Oops..! You Forget to Enter Your Email."),
  password: Yup.string()
    .min(6, "Password Must Be At Least 6 Character.")
    .required("Oops..! You Forget to Enter Your Password."),
  confirm_password: Yup.string()
    .min(6, "Password Must Be At Least 6 Characters.")
    .required("Confirm Your Password.")
    .oneOf([Yup.ref("password"), null], "Password Not Match."),
});

export const logInSchema = Yup.object({
  email: Yup.string()
    .email("Enter Valid Email.")
    .required("Oops..! You Forget to Enter Your Email."),
  password: Yup.string()
    .min(6, "Password Must Be At Least 6 Characters.")
    .required("Oops..! You Forget to Enter Your Password."),
});

export const ResidenceSchema = Yup.object({
  heading: Yup.string()
    .min(1)
    .required("Oops..! You Forget to Enter Residence Name."),
  category: Yup.string()
    .min(1)
    .required("Oops..! You Forget to Enter Residence Category."),
  description: Yup.string()
    .min(1)
    .required("Oops..! You Forget to Enter Residence Discription."),
});

export const updateProfileSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be At Least 2 Characters.")
    .max(25, "To Long")
    .required("Oops..! You Forget to Enter Your Name."),
  email: Yup.string()
    .email("Enter Valid Email.")
    .required("Oops..! You Forget to Enter Your Email."),
  city: Yup.string().min(2).required("Oops..! You Forget to Enter City Name."),
  state: Yup.string()
    .min(2)
    .required("Oops..! You Forget to Enter State Name."),
  zipcode: Yup.number("Zipcode should be digits only.")
    .min(6, "Zipcode should be 6 Digits.")
    .required("Oops..! You Forget to Enter Zipcode Name."),
  country: Yup.string()
    .min(1)
    .required("Oops..! You Forget to Enter Country Name."),
  phone: Yup.number("Contact Number should be digits only.").min(
    10,
    "Oops..! You Forget to Enter a Valid Number."
  ),
});

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be At Least 2 Characters.")
    .max(25, "To Long")
    .required("Oops..! You Forget to Enter Your Name."),
  email: Yup.string()
    .email("Enter Valid Email.")
    .required("Oops..! You Forget to Enter Your Email."),
  message: Yup.string()
    .min(5, "Meaasge contains at least 5 characters.")
    .max(100, "Message should only 100 characters.")
    .required("Oops..! You Forget to Enter Your Message."),
});

export const servicesSchema = Yup.object({
  residenceName: Yup.string()
    .min(2, "Residence Name Must Be At Least 2 Characters.")
    .max(25, "To Long")
    .required("Oops..! You Forget to Enter Residence Name."),
  streetAddress: Yup.string()
    .min(1, "Please Enter Valid Street Address.")
    .required("Oops..! You Forget to Enter Street Address"),
  landmark: Yup.string()
    .min(1, "Please Enter Valid Landmark.")
    .required("Oops..! You Forget to Enter Landmark."),
  city: Yup.string().min(2).required("Oops..! You Forget to Enter City Name."),
  state: Yup.string()
    .min(2)
    .required("Oops..! You Forget to Enter State Name."),
  zipcode: Yup.number("Zipcode should be digits only.")
    .min(6, "Zipcode should be 6 Digits.")
    .required("Oops..! You Forget to Enter Zipcode Name."),
  country: Yup.string()
    .min(1, "Please Enter Valid Country Name.")
    .required("Oops..! You Forget to Enter Country Name."),
    price: Yup.string()
    .min(1, "Please Enter Valid Price/Rent.")
    .required("Oops..! You Forget to Enter Price/Rent."),
});

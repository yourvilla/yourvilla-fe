import InfoIcon from "@mui/icons-material/Info";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PeopleIcon from "@mui/icons-material/People";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export const navItems = [
  {
    id: 1,
    item: "Home",
    icon: <HomeRoundedIcon />,
    to: "/home",
  },
  {
    id: 2,
    item: "Profile",
    icon: <AccountCircleIcon />,
    to: "/profile",
  },
  {
    id: 3,
    item: "Residences",
    icon: <AutoAwesomeMotionIcon />,
    to: "/Residences",
  },
  {
    id: 4,
    item: "Users",
    icon: <PeopleIcon />,
    to: "/users",
  },
  {
    id: 5,
    item: "Contact Us",
    icon: <PermContactCalendarIcon />,
    to: "/contact",
  },
  {
    id: 6,
    item: "About Us",
    icon: <InfoIcon />,
    to: "/about",
  },
];

export const registerFormData = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "confirm_password",
    name: "confirm_password",
    label: "Confirm Password",
    type: "password",
  },
];

export const loginFormData = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const residenceData = [
  {
    id: "residenceName",
    name: "residenceName",
    placeholder: "Residence Name",
    type: "text",
  },
  {
    id: "streetAddress",
    name: "streetAddress",
    placeholder: "Street Address",
    type: "text",
  },
  {
    id: "landmark",
    name: "landmark",
    placeholder: "Landmark",
    type: "text",
  },
  {
    id: "city",
    name: "city",
    placeholder: "City",
    type: "text",
  },
  {
    id: "state",
    name: "state",
    placeholder: "State",
    type: "text",
  },

  {
    id: "zipcode",
    name: "zipcode",
    placeholder: "Zipcode",
    type: "text",
  },
  {
    id: "country",
    name: "country",
    placeholder: "Country",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    placeholder: "Price / Rent",
    type: "text",
  },
];

export const profileData = [
  {
    id: "name",
    name: "name",
    placeholder: "Name",
  },
  {
    id: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    id: "city",
    name: "city",
    placeholder: "City",
  },
  {
    id: "state",
    name: "state",
    placeholder: "State",
  },
  {
    id: "zipcode",
    name: "zipcode",
    placeholder: "Zipcode",
  },
  { id: "country", name: "country", placeholder: "Country" },
  {
    id: "phone",
    name: "phone",
    placeholder: "Contact Number",
  },
  {
    id: "dob",
    name: "dob",
    placeholder: "Date of Birth",
  },
];

export const categoryData = [
  {
    id: "6a4c7504-4b1d-11ed-b878-0242ac120002",
    heading: "Flat",
  },
  {
    id: "6a4c7842-4b1d-11ed-b878-0242ac120002",
    heading: "Paying Guest",
  },
  {
    id: "6a4c7aa4-4b1d-11ed-b878-0242ac120002",
    heading: "Hostel",
  },
  {
    id: "6a4c7c8e-4b1d-11ed-b878-0242ac120002",
    heading: "Room",
  },
  {
    id: "6a4c7e64-4b1d-11ed-b878-0242ac120002",
    heading: "House",
  },
];
export const resConditionData = [
  {
    id: "6a4c7504-4b1d-11ed-b878-0242ac120002",
    heading: "Furnished",
  },
  {
    id: "2691ac44-4f7d-11ed-bdc3-0242ac120002",
    heading: "Not Furnished",
  },
  {
    id: "2691ae38-4f7d-11ed-bdc3-0242ac120002",
    heading: "Semi Furnished",
  },
];
export const forData = [
  {
    id: "b6b52f1a-4fcf-11ed-bdc3-0242ac120002",
    heading: "Boys",
  },
  {
    id: "b6b532a8-4fcf-11ed-bdc3-0242ac120002",
    heading: "Girls",
  },
  {
    id: "b6b53726-4fcf-11ed-bdc3-0242ac120002",
    heading: "Family",
  },
];

export const contactData = [
  {
    id: "name",
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    id: "message",
    name: "message",
    placeholder: "Your Message",
    type: "text",
  },
];

export const servicesData = [
  {
    id: "26918ef8-4f7d-11ed-bdc3-0242ac120002",
    label: "Wi-Fi",
  },
  {
    id: "269194f2-4f7d-11ed-bdc3-0242ac120002",
    label: "Mesh",
  },
  {
    id: "269197a4-4f7d-11ed-bdc3-0242ac120002",
    label: "24x7 Electricity",
  },
  {
    id: "26919ba0-4f7d-11ed-bdc3-0242ac120002",
    label: "Geyser",
  },
  {
    id: "2691a4b0-4f7d-11ed-bdc3-0242ac120002",
    label: "Attached Washroom",
  },
  {
    id: "2691a654-4f7d-11ed-bdc3-0242ac120002",
    label: "Air Conditioner",
  },
];


export const dropdownFields = [
  {
    id: "residenceType",
    label: " Select Residence Type",
    data: categoryData,
  },
  {
    id: "resCondition",
    label: "Residence Condition",
    data: resConditionData,
  },
  {
    id: "for",
    label: "For",
    data: forData,
  },
];

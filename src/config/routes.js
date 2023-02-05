import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Residences from "../pages/Residences";
import Users from "../pages/Users";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import LogIn from "../components/LogIn";
import AddResidence from "../components/Residences/AddResidence";
import Review from "../components/Residences/Review";
import ResidencePage from "../components/Residences/ResidencePage";
import Register from "../components/Register";
import Error from "../components/Error";

export const routerData = [
  {
    id: "1",
    path: "*",
    component: <Error />,
  },
  {
    id: "1",
    path: "/",
    component: <Home />,
  },
  {
    id: "2",
    path: "/home",
    component: <Home />,
  },
  {
    id: "3",
    path: "/profile",
    component: <Profile />,
  },
  {
    id: "4",
    path: "/residences",
    component: <Residences />,
  },
  {
    id: "5",
    path: "/users",
    component: <Users />,
  },
  {
    id: "6",
    path: "/contact",
    component: <ContactUs />,
  },
  {
    id: "7",
    path: "/about",
    component: <AboutUs />,
  },
  {
    id: "8",
    path: "/register",
    component: <Register />,
  },
  {
    id: "9",
    path: "/login",
    component: <LogIn />,
  },
  {
    id: "10",
    path: "/residence/:id",
    component: <ResidencePage />,
  },
  {
    id: "11",
    path: "/add-residence",
    component: <AddResidence />,
  },
  {
    id: "12",
    path: "/review",
    component: <Review />,
  },
];

import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Testride from "../module/testride";
import Dealership from "../module/dealership";
import Slide from "../module/slider";
import Dealershipride from "../module/dealershipride";
import Dealershipdetail from "../module/dealershipdetail";
import Financial from "../module/financial";
import Socialmedia from "../module/socialmedia";
import Socialmediadetails from "../module/socialmediadetails";
import Contact from "../module/contactus";
import Pricing from "../module/pricing";
import Accordian from "../module/question";
import Banglore from "../module/banglore";
import Electricscooter from "../module/elctrciscooterpage";
import Electricbanglore from "../module/elctricbanglorepage";
import Errorpage from "../components/errorpage";
import Imageslide from "../module/imageslide";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Testride",
                element: <Testride />
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage />
    },
    {
        path: "/Dealership",
        element: <Dealership />
    },
    {
        path: "/Dealershipride",
        element: <Dealershipride />
    },
    {
        path: "/Dealershipdetail",
        element: <Dealershipdetail />
    },
    {
        path: "/Financial",
        element: <Financial />
    },
    {
        path: "/Slide",
        element: <Slide />
    },
    {
        path: "/Socialmedia",
        element: <Socialmedia />
    },
    {
        path: "/Socialmediadetails",
        element: <Socialmediadetails />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
    {
        path: "/Pricing",
        element: <Pricing />
    },
    {
        path: "/Accordian",
        element: <Accordian />
    },
    {
        path: "/Banglore",
        element: <Banglore />
    },
    {
        path: "/Electricscooter",
        element: <Electricscooter />
    },
    {
        path: "Electricbanglore",
        element: <Electricbanglore />
    },
    {
        path: "Imageslide",
        element: <Imageslide />
    }
])

export default router

import './App.css';
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header, Footer, Loading} from './components';

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Calculator = lazy(() => import("./pages/calculator"));
// Services
const MutualFound = lazy(() => import("./pages/services/mutualFund"));
const IPO = lazy(() => import("./pages/services/ipo"));
const Portfolio = lazy(() => import("./pages/services/portfolio-management-services"));
const Equity = lazy(() => import("./pages/services/equityTrade"));
const Alternative = lazy(() => import("./pages/services/alternativeInvest"));
const Insurance = lazy(() => import("./pages/services/Insurance"));
const Intelligent = lazy(() => import("./pages/services/intelligent"));
const Derivative = lazy(() => import("./pages/services/derivative"));

const Layout = () => {
  return(
    <div className="app">
      <Header/>
      <ScrollToTop />
      <Outlet />
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading/>}>
            not found
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading/>}>
              <Home/>
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loading/>}>
              <About/>
          </Suspense>
        ),
      },
      {
        path: "/mutual-fund",
        element: (
          <Suspense fallback={<Loading/>}>
              <MutualFound/>
          </Suspense>
        ),
      },
      {
        path: "/ipo",
        element: (
          <Suspense fallback={<Loading/>}>
              <IPO/>
          </Suspense>
        ),
      },
      {
        path: "/portfolio-management-services",
        element: (
          <Suspense fallback={<Loading/>}>
              <Portfolio/>
          </Suspense>
        ),
      },
      {
        path: "/equity",
        element: (
          <Suspense fallback={<Loading/>}>
              <Equity/>
          </Suspense>
        ),
      },
      {
        path: "/alternative-investment-fund",
        element: (
          <Suspense fallback={<Loading/>}>
              <Alternative/>
          </Suspense>
        ),
      },
      {
        path: "/insurance",
        element: (
          <Suspense fallback={<Loading/>}>
              <Insurance/>
          </Suspense>
        ),
      },
      {
        path: "/intelligent-advisory-portfolios",
        element: (
          <Suspense fallback={<Loading/>}>
              <Intelligent/>
          </Suspense>
        ),
      },
      {
        path: "/derivative",
        element: (
          <Suspense fallback={<Loading/>}>
              <Derivative/>
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loading/>}>
              <Contact/>
          </Suspense>
        ),
      },
      {
        path: "/calculator",
        element: (
          <Suspense fallback={<Loading/>}>
              <Calculator/>
          </Suspense>
        ),
      },
    ],
  },
]);   


function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App

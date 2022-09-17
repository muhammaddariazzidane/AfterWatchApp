import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Category from "../components/Category";
import requests from "../src/Req";

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>After Watch App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Category ID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Category ID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Category ID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Category ID="4" title="Popular" fetchURL={requests.requestPopular} />
      <Category ID="5" title="Horor" fetchURL={requests.requestHorror} />
      {/* <Router>
    <Routes>
    </Routes>
   </Router> */}
      {/* <Route path="/" element={} /> */}
      {/* <Route path="/p" element={<Login />} /> */}
    </div>
  );
}

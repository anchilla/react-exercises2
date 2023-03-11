import './App.css';
import {useState, createContext, useContext } from "react"; 
import ReactDOM from "react-dom/client";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Slider from './Slider.js';



//mozda ne moze da nadje slike
//na git, ovo skloniti negde drugde, pa vidi sto nije radilo
//IMAGE SLIDER
function App (){

const slides = [{url: process.env.PUBLIC_URL +'/imgs/img1.JPG', tittle: "Tree"},
{url:process.env.PUBLIC_URL + "/imgs/img2.JPG", tittle: "Valley"},
{url:process.env.PUBLIC_URL + "/imgs/img3.JPG", tittle: "Mountain"}
  ];


return(
  <>
  <p>App</p>
  <Slider slides={slides} />
   </>
  );
};

export default App;
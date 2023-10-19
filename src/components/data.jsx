import React from "react";
import {CiStickyNote} from 'react-icons/ci'
import {BsFillBellFill} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'
import {GiNotebook} from 'react-icons/gi'
import {FaHistory,FaBlog} from 'react-icons/fa'
import {AiOutlineTeam} from 'react-icons/ai'
const sublinks = [
  {
    page: "features",
    links: [
      { label: "todolist", icon: <CiStickyNote />, url: "/products" },
      { label: "calender", icon: <SlCalender />, url: "/products" },
      { label: "reminder", icon: <BsFillBellFill />, url: "/products" },
      { label: "planning", icon: <GiNotebook />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "history", icon: <FaHistory />, url: "/products" },
      { label: "ourTeam", icon: <AiOutlineTeam />, url: "/products" },
      { label: "blog", icon: <FaBlog />, url: "/products" },
    ],
  },
  {
    page: "careers",
    links: [
      { label: "history", icon: <FaHistory />, url: "/products" },
      { label: "ourTeam", icon: <AiOutlineTeam />, url: "/products" },
    ],
  },
  {
    page: "about",
    links: [
      { label: "calender", icon: <SlCalender />, url: "/products" },
      { label: "reminder", icon: <BsFillBellFill />, url: "/products" },
    ],
  },
];
export default sublinks;

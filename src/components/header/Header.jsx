import React from "react";
import { useState } from "react";
import Medicine from "../../assets/images/Medicine.svg";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { User } from "./User";
import { Link } from "react-router-dom";
import { product } from "../../assets/data/data"
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../store/actions/productActions';

export const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const handleSearch = () => {
    // Call your backend here
    dispatch(searchProduct(value));
    console.log('Searching for', value);
    console.log("Product", product)
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.target.value.length >= 3) {
      handleSearch();
    }
  };

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

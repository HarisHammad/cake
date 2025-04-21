import React, { useRef } from "react";
import "./addcart.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Addcart() {
  const containerRef = useRef(null); // Reference for scrollable container

  // Function to handle left and right scrolling
  const handleScroll = (direction) => {
    const scrollAmount = 400; // Distance to scroll
    if (direction === "left") {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Left Scroll Button */}
      <ChevronLeftIcon
        className="leftbtn"
        style={{ fontSize: "5rem", cursor: "pointer" }}
        onClick={() => handleScroll("left")}
      />

      {/* Scrollable Container */}
      <div
        className="cartcontainer"
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "25px",
        }}
      >
        {/* Card Items */}
        <div className="card1">
          <img src="items3.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">Sweet Suprise</h2>
          <h3 className="price">$ 98.00</h3>
        </div>
        <div className="card1">
          <img src="items2.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">Sweet Suprise</h2>
          <h3 className="price">$ 98.00</h3>
        </div>

        <div className="card1">
          <img src="items1.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">Cashmere Tank + Bag</h2>
          <h3 className="price">$ 98.00</h3>
        </div>

        <div className="card1">
          <img src="items3.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">DelightFul Lemon</h2>
          <h3 className="price">$ 98.00</h3>
        </div>

        <div className="card1">
          <img src="items2.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">DelightFul Lemon</h2>
          <h3 className="price">$ 98.00</h3>
        </div>
        <div className="card1">
          <img src="items1.jpg.webp" alt="" className="cardimg" />
          <h2 className="cart">Add to cart</h2>
          <h2 className="title">DelightFul Lemon</h2>
          <h3 className="price">$ 98.00</h3>
        </div>
      </div>

      {/* Right Scroll Button */}
      <ChevronRightIcon
        className="rightbtn"
        style={{ fontSize: "5rem", cursor: "pointer" }}
        onClick={() => handleScroll("right")}
      />
    </div>
  );
}




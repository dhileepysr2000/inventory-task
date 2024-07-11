import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid over-body">
        <div className="head-cont">
          <h4> Inventory management system</h4>

          <div className="inside-cont">users</div>
        </div>
        <div className="body-3">
          <div className="con-1 text-center">
            <a href="">
              <MdProductionQuantityLimits className="icons" />
              <h4 className="mt-3">Total Items</h4>
            </a>
          </div>
          <div className="con-2 text-center">
            <a href="">
              <FaBabyCarriage className="icons" />
              <h4 className="mt-3">Add Items</h4>
            </a>
          </div>
          <div className="con-3 text-center">
            <a href="">
              <FaUser className="icons" />
              <h4 className="mt-3">users Details</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

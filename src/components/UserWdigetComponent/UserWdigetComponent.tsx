import React from "react";
import "./UserWdigetComponent.css";
import { FiAlignLeft } from "react-icons/fi";

import { FaCaretDown } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { LiaUserSolid } from "react-icons/lia";

import UserIcon from "../../assets/user-male.jpg";

import Logo from "../../assets/ultikart-logo.png";

import UserListComponent from "../UserListComponent/UserListComponent";

const UserWdigetComponent = () => {
  const [activeListItem, setActiveListItem] = React.useState("users");

  return (
    <div className="UserWdigetComponentContainer">
      <div className="sideNavBarContainer">
        <div className="LogoImage">
          <img src={Logo} alt="ultikart-logo" />
        </div>
        <div>
          <div
            className="sideNavBarText  textColorGrey"
            style={{
              fontSize: "0.7rem",
              fontWeight: 400,
              marginBottom: "0.5rem",
            }}
          >
            MAIN MENU
          </div>
          <ul>
            <li onClick={() => setActiveListItem("dashboard")}>
              <div
                className={`sideNavBarText textColorBlack ${
                  activeListItem === "dashboard" ? "active" : ""
                }`}
                id="dashboard"
              >
                <div>
                  <AiFillDashboard />
                </div>
                <div>&nbsp; Dashboard</div>
              </div>
            </li>
            <li onClick={() => setActiveListItem("users")}>
              <div
                className={`sideNavBarText textColorBlack ${
                  activeListItem === "users" ? "active" : ""
                }`}
                id="users"
              >
                <div>
                  <LiaUserSolid />
                </div>
                <div>&nbsp; Users</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="headerContainer">
          <div className="LogoImageHeaderContainer">
            <img src={Logo} alt="ultikart-logo" />
          </div>
          <div style={{ fontSize: "1.5rem", color: "blueviolet" }}>
            <FiAlignLeft />
          </div>
          <div className="userProfile">
            <div className="userProfilePhoto">
              <img src={UserIcon} alt="male-user-img" />
            </div>
            <div>
              <div className="userProfileName textColorBlack">Frankin Jr.</div>
              <div className="userProfileRole textColorGrey">Super Admin</div>
            </div>
            <div style={{ color: "#cac4c4" }}>
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="userContainer">
          <UserListComponent />
        </div>
      </div>
    </div>
  );
};

export default UserWdigetComponent;

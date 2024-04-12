import React from "react";
import "./UserWdigetComponent.css";
import { FiAlignLeft } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { LiaUserSolid } from "react-icons/lia";
import { MdFilterListAlt } from "react-icons/md";
import { PiSortDescendingFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserIcon from "../../assets/user-male.jpg";
import UserIcon2 from "../../assets/user-female.jpg";
import Logo from "../../assets/ultikart-logo.png";

import TablePagination from "@mui/material/TablePagination";

const UserWdigetComponent = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [activeListItem, setActiveListItem] = React.useState("users");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          <div className="userHeaderContainer">
            <div
              style={{ fontSize: "1rem", fontWeight: "500", margin: "0 1rem" }}
            >
              Users
            </div>
            <div className="userHeaderContainerFilter">
              <div className="userHeaderContainerFilterInside">
                <div
                  className="userHeaderContainerFilterBtn "
                  style={{ borderRadius: "0.3rem 0 0 0.3rem" }}
                >
                  <TfiMenuAlt />
                </div>
                <div
                  className="userHeaderContainerFilterBtn activeBtn"
                  style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
                >
                  <CgMenuGridO />
                </div>
              </div>
              <div className="userHeaderContainerBtn">+ Add User</div>
            </div>
          </div>
          <div className="userBody">
            <div style={{ width: "-webkit-fill-available", height: "33rem" }}>
              <div className="userBodyHeader">
                <div className="userBodyHeaderFilter">
                  <div className="userBodyHeaderFilterBtn">
                    <PiSortDescendingFill />
                    <div
                      className="textColorBlack"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Sort By
                    </div>
                  </div>
                  <div className="userBodyHeaderFilterBtn">
                    <MdFilterListAlt />
                    <div
                      className="textColorBlack"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Filter By
                    </div>
                  </div>
                </div>
                <div className="searchBar">
                  <FaSearch />
                  <input type="text" placeholder="Search here" />
                </div>
              </div>
              <div className="userBodySection">
                {Array.from({ length: 1 }, (_, index) => (
                  <div key={index} className="profileCard">
                    <div className="profilePicture">
                      <img src={UserIcon2} alt="Rowan Torres" />
                    </div>
                    <div className="profileInfo">
                      <p className="name">Rowan Torres</p>
                      <p className="email">rowan.torres@gmail.com</p>
                      <p className="status active">
                        <div className="activeStatusColor"></div>
                        &nbsp; Active
                      </p>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="userBodyFooter">
                <div>Item per page</div>
                <div>12</div>
                <div>1 of 1</div>
                <div>{"< >"}</div>
              </div> */}
              <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWdigetComponent;

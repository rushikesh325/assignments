import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";
import { MdFilterListAlt } from "react-icons/md";
import { PiSortDescendingFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserIcon2 from "../../assets/user-female.jpg";
import TablePagination from "@mui/material/TablePagination";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    renderHeader: () => <strong>{"ID "}</strong>,
    width: 70,
  },
  {
    field: "Name",
    renderHeader: () => <strong>{"Name "}</strong>,
    width: 130,
  },
  {
    field: "Email",
    renderHeader: () => <strong>{"Email "}</strong>,
    width: 200,
  },
  {
    field: "Phone",
    renderHeader: () => <strong>{"Phone "}</strong>,
    type: "number",
    width: 150,
  },
  {
    field: "LastLogin",
    renderHeader: () => <strong>{"Last Login "}</strong>,
    sortable: false,
    width: 100,
  },
  {
    field: "Role",
    renderHeader: () => <strong>{"Role "}</strong>,
    sortable: false,
    width: 160,
  },
  {
    field: "Status",
    renderHeader: () => <strong>{"Status "}</strong>,
    type: "string",
    width: 90,
  },
  {
    field: "Action",
    renderHeader: () => <strong>{"Action "}</strong>,
    type: "number",
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    Name: "Rowan Torres",
    Email: "rowan.torres@gmail.com",
    Phone: 99999999999,
    LastLogin: 6,
    Role: "User",
    Status: "Active",
    Action: null,
  },
  {
    id: 2,
    Name: "Alonzo Perez",
    Email: "alonzo.perez@gmail.com",
    Phone: 99999999999,
    LastLogin: 2,
    Role: "User",
    Status: "Active",
    Action: null,
  },
];

const UserListComponent = () => {
  const [selectedView, setSelectedView] = useState("UserCardView");
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    <>
      <div className="userHeaderContainer">
        <div style={{ fontSize: "1rem", fontWeight: "500", margin: "0 1rem" }}>
          Users
        </div>
        <div className="userHeaderContainerFilter">
          <div className="userHeaderContainerFilterInside">
            <div
              className="userHeaderContainerFilterBtn "
              style={{ borderRadius: "0.3rem 0 0 0.3rem" }}
              onClick={() => setSelectedView("UserTableView")}
            >
              <TfiMenuAlt />
            </div>
            <div
              className="userHeaderContainerFilterBtn activeBtn"
              style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
              onClick={() => setSelectedView("UserCardView")}
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
                <div className="textColorBlack" style={{ fontSize: "0.8rem" }}>
                  Sort By
                </div>
              </div>
              <div className="userBodyHeaderFilterBtn">
                <MdFilterListAlt />
                <div className="textColorBlack" style={{ fontSize: "0.8rem" }}>
                  Filter By
                </div>
              </div>
            </div>
            <div className="searchBar">
              <FaSearch />
              <input type="text" placeholder="Search here" />
            </div>
          </div>
          {selectedView === "UserCardView" ? (
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
          ) : (
            <div className="userBodySection">
              {" "}
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>
            </div>
          )}

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
    </>
  );
};

export default UserListComponent;

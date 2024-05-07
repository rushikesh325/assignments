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
import { FormControl, Select, MenuItem } from "@mui/material";

const UserListComponent = () => {
  const [selectedView, setSelectedView] = useState("UserCardView");
  const [page, setPage] = useState(2);
  const [rows, setRows] = useState([
    {
      id: 1,
      Name: "Rowan Torres",
      Email: "rowan.torres@gmail.com",
      Phone: 99999999999,
      LastLogin: 6,
      Role: "User",
      Status: "Active",
      Action: "action",
    },
    {
      id: 2,
      Name: "Alonzo Perez",
      Email: "alonzo.perez@gmail.com",
      Phone: 99999999999,
      LastLogin: 2,
      Role: "User",
      Status: "Active",
      Action: "noAction",
    },
    {
      id: 3,
      Name: "Rowan Torres",
      Email: "rowan.torres@gmail.com",
      Phone: 99999999999,
      LastLogin: 6,
      Role: "User",
      Status: "Active",
      Action: "action",
    },
    {
      id: 4,
      Name: "Alonzo Perez",
      Email: "alonzo.perez@gmail.com",
      Phone: 99999999999,
      LastLogin: 2,
      Role: "User",
      Status: "Active",
      Action: "noAction",
    },
    {
      id: 5,
      Name: "Rowan Torres",
      Email: "rowan.torres@gmail.com",
      Phone: 99999999999,
      LastLogin: 6,
      Role: "User",
      Status: "Active",
      Action: "action",
    },
    {
      id: 6,
      Name: "Alonzo Perez",
      Email: "alonzo.perez@gmail.com",
      Phone: 99999999999,
      LastLogin: 2,
      Role: "User",
      Status: "Active",
      Action: "noAction",
    },
  ]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const renderCard = (rowData: any) => (
    <div className="profileCard" key={rowData.id}>
      <div className="profilePicture">
        <img src={UserIcon2} alt={rowData.Name} />
      </div>
      <div className="profileInfo">
        <p className="name">{rowData.Name}</p>
        <p className="email">{rowData.Email}</p>
        <p className="status active">
          <div className="activeStatusColor"></div>
          &nbsp; {rowData.Status}
        </p>
      </div>
      <div>
        <BsThreeDotsVertical />
      </div>
    </div>
  );

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  const handleChange = (id: number, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, Action: value } : row))
    );
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      renderHeader: () => <strong>{"ID "}</strong>,
      width: 70,
    },
    {
      field: "Name",
      renderHeader: () => <strong>{"Name "}</strong>,
      width: 200,
    },
    {
      field: "Email",
      renderHeader: () => <strong>{"Email "}</strong>,
      width: 250,
    },
    {
      field: "Phone",
      renderHeader: () => <strong>{"Phone "}</strong>,
      width: 150,
    },
    {
      field: "LastLogin",
      renderHeader: () => <strong>{"Last Login "}</strong>,
      sortable: false,
      width: 150,
      renderCell: (params) => {
        // Calculate age from LastLogin value
        const ageInDays = params.value;
        return <div>{ageInDays} days ago</div>;
      },
    },
    {
      field: "Role",
      renderHeader: () => <strong>{"Role "}</strong>,
      sortable: false,
      width: 100,
    },
    {
      field: "Status",
      renderHeader: () => <strong>{"Status "}</strong>,
      width: 130,
    },
    {
      field: "Action",
      renderHeader: () => <strong>{"Action "}</strong>,
      width: 170,
      renderCell: (params) => (
        <FormControl
          variant="standard"
          style={{
            minWidth: 120,
            padding: "0.6rem",
          }}
        >
          <Select
            value={params.value}
            onChange={(event) =>
              handleChange(params.row.id, event.target.value)
            }
            displayEmpty
            style={{
              border: "2px solid grey",
              borderRadius: 4,
              background: "#fafafa",
            }}
          >
            <MenuItem value={"action"}>Action</MenuItem>
            <MenuItem value={"noAction"}>No Action</MenuItem>
          </Select>
        </FormControl>
      ),
    },
  ];

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
            <>
              <div className="userBodySection">
                {/* {Array.from({ length: 10 }, (_, index) => (
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
                ))} */}
                {paginatedRows.map((row) => renderCard(row))}
              </div>
              <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </>
          ) : (
            <div className="userBodySection">
              <div style={{ height: 500, width: "100%" }}>
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
        </div>
      </div>
    </>
  );
};

export default UserListComponent;

import axios from "axios";
import React, { useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";






const UsersTable = () => {

  const [row, setRow] = useState("");


  const Userdata = async () => {
    const res = await axios.get("http://localhost:8080/users");
    if (res) {
      console.log(res.data);
      const activeUsers = res.data.filter((item) => item.isActive === true);
      setRow(activeUsers);
    } else {
      console.log("error");
    }
  };

  const handleDelete = (index) =>{

       console.log(index);
    setRow(row.filter((item) => {
        return item.id !== index
      }),
    )
    axios.post("http://localhost:8080/deleteLineman", index).then((res) => {
        console.log(res);
        alert(res.data.message);
      }).catch((err)=>console.log(err));
  }
  
     
        

  const columns = [
    { field: "id", headerName: "EMPLOYEE ID", width: 200 },
    { field: "firstName", headerName: "FIRST NAME", width: 200 },
    { field: "lastName", headerName: "LAST NAME", width: 200 },
    { field: "age", headerName: "AGE", width: 100 },
    { field: "email", headerName: "EMAIL", width: 200 },
    {
      field: "action",
      headername: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "5px 10px",
                backgroundColor: "#3bb077",
                marginRight: "40px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Enable
            </button>
            <DeleteOutline sx={{color: "red", cursor: "pointer"}} onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];



  const handleSubmit = (e) => {
    e.preventDefault();
    Userdata();
  };

  

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={row}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
      <Toolbar>
        <Button
          variant="contained"
          sx={{ marginRight: "10px" }}
          onClick={handleSubmit}
        >
          Show LineMans
        </Button>
      </Toolbar>
    </div>
  );
};

export default UsersTable;

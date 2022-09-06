import React from "react";

export const columns = [
  { field: "id", headerName: "EMPLOYEE ID", width: 150 },
  { field: "fname", headerName: "FIRST NAME", width: 150 },
  { field: "lname", headerName: "LAST NAME", width: 150 },
  { field: "age", headerName: "AGE", width: 50 },
  { field: "email", headerName: "EMAIL", width: 300 },
];

export const rows = [
  {
    id: 506933377,
    fname: "Line",
    lname: "Man",
    age: 30,
    email: "lineman@gmail.com",
  },
];

const UserData = () => {
  return <div>UserData</div>;
};

export default UserData;

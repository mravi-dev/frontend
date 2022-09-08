import React, { useState } from "react";
import axios from "axios";
import {
  Toolbar,
  Box,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";

const AddLineMan = () => {
  const initialState = {
    fname: "",
    lname: "",
    age: "",
    mob: "",
    aadhar: "",
    email: "",
    password1: "",
    role: "lineman",
    isActive: true
  }
  const [user, setUser] = useState(initialState);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, age, mob, aadhar, email, password1 } = user;
    if (fname && lname && age && mob && aadhar && email && password1) {
      axios.post("http://localhost:8080/signup", user).then((res) => {
        console.log(res);
        alert(res.data.message);
      });
    } else {
      alert("invalid input");
    }
    setUser(initialState);
  };

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />

      {/* Page Headings */}
      <Container component="main" maxWidth="md">
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 10 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                variant="standard"
                name="fname"
                value={user.fname}
                onChange={handlechange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                variant="standard"
                value={user.lname}
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
                variant="standard"
                value={user.age}
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mob"
                type="number"
                variant="standard"
                value={user.mob}
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                value={user.email}
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="aadhar"
                label="Aadhar Number"
                name="aadhar"
                type="number"
                variant="standard"
                value={user.aadhar}
                onChange={handlechange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="password1"
                label="Password"
                type="password1"
                id="password1"
                variant="standard"
                value={user.password1}
                onChange={handlechange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 6, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Container>

      {/* Assign Button */}
    </Box>
  );
};

export default AddLineMan;

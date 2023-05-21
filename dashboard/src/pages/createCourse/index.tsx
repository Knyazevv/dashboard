import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Container,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import { Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";




const CreateCourse: React.FC = () => {
  const [role, setRole] = useState("Course");
//   const { message } = useTypedSelector((store) => store.Course);
   const { IncertCourse } = useActions();

//   console.log("message ", message);

//   if (message === "Course successfully created.") {
//     return <Navigate to="/" />;
//   }

  const initialValues = {
    title: "",
    description: "",
    price: "",
    imagePath: "",
    categoryId: "",
    categoryName: "",

  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const newCourse = {
        Title: data.get("title"),
        Description: data.get("description"),
        Price: data.get("price"),
        ImagePath: data.get("imagePath"),    
        CategoryId: data.get("categoryId"),
        CategoryName: data.get("categoryName"),
    
    };
    console.log("new Course", newCourse)
    IncertCourse(newCourse);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            onSubmit={() => {}}
            initialValues={initialValues}
            // validationSchema={RegisterSchema}
          >
            {({ errors, touched, isSubmitting, isValid, dirty }) => (
              <Box
                sx={{ my: 3 }}
                onSubmit={handleSubmit}
                component="form"
                noValidate
              >
                <Typography color="textPrimary" variant="h4">
                  New course
                </Typography>
                {/* <Typography color="textSecondary" gutterBottom variant="body2">
                  Use your email to create a new account
                </Typography> */}
                {/* {errors.firstName && touched.firstName ? (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                ) : null} */}
                <Field
                  as={TextField}
                  fullWidth
                  label="Title"
                  margin="normal"
                  name="title"
                  variant="outlined"
                />
                {/* {errors.lastName && touched.lastName ? (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                ) : null} */}
                <Field
                  as={TextField}
                  fullWidth
                  label="Description"
                  margin="normal"
                  name="description"
                  variant="outlined"
                />
                {/* {errors.email && touched.lastName ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null} */}
                <Field
                  as={TextField}
                  fullWidth
                  id="outlined-number"
                  label="Number"
                  margin="normal"
                  name="price"
                  type="text"
                  variant="outlined"
                />

                  <Field
                  as={TextField}
                  fullWidth
                  label="ImagePath"
                  margin="normal"
                  name="imagePath"
                //   type="phone"
                  variant="outlined"
                />

                {/* <FormControl sx={{ width: "100%" }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={role}
                    defaultValue={role}
                    label={role}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Users"}>Users</MenuItem>
                    <MenuItem value={"Administrators"}>Administrators</MenuItem>
                  </Select>
                </FormControl> */}

                
                {/* {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null} */}
                <Field
                  as={TextField}
                  fullWidth
                  label="CategoryId"
                  margin="normal"
                  name="categoryId"
                //   type="password"
                  variant="outlined"
                />
                {/* {errors.confirmPassword && touched.confirmPassword ? (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                ) : null} */}
                <Field
                  as={TextField}
                  fullWidth
                  label="CategoryName"
                  margin="normal"
                  name="categoryName"
                //   type="password"
                  variant="outlined"
                />
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    ml: -1,
                  }}
                ></Box>
                <Box sx={{ py: 2 }}>
                  <Button
                    disabled={!(isValid && dirty)}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {isSubmitting ? "Loading" : "Sign Up Now"}
                  </Button>
                </Box>
              </Box>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default CreateCourse;

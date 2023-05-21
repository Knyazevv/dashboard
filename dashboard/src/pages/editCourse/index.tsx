import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { Field, Formik } from "formik";
  import React from "react";
  import { useActions } from "../../hooks/useActions";
  import { ChangeProfileSchema } from "../auth/validation";
  import { Navigate } from "react-router-dom";
  
  const initialProfileValues = {
    title: "",
    description: "",
    price: "",
 
  };
  
  
  
  
  const EditCourse: React.FC = () => {
    const [block, setBlock] = React.useState(true);
    const { EditCourse,   } = useActions();
  
  
    let selectedCourse = localStorage.getItem("updateCourse");
    if (selectedCourse == null) {
      return <Navigate to="/dashboard/courses"></Navigate>;
    }
  
    let updateCourse = JSON.parse(selectedCourse);
  
    initialProfileValues.title = updateCourse.title;
    initialProfileValues.description = updateCourse.description;
    initialProfileValues.price = updateCourse.price;
 
  
  
  
    const handleBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBlock(event.target.checked);
    };
  
  
    const changeProfile = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const data = new FormData(event.currentTarget);
  
  
      const updatedCourse = {
        Title: data.get("title"),
        Description: data.get("description"),
        Price: data.get("price"),

  
      };
      EditCourse(updatedCourse);
    };
  
    return (
      <>
        <Formik
          validationSchema={ChangeProfileSchema}
          initialValues={initialProfileValues}
          onSubmit={() => { }}
        >
          {({ errors, touched, isValid }) => (
            <Card>
              <Box
                onSubmit={changeProfile}
                component="form"
                noValidate
                style={{ width: "100%" }}
                sx={{ mt: 1 }}
              >
                <CardHeader
                  title="Updating course"
                ></CardHeader>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        label={"Title"}
                        name="title"
                        variant="outlined"
                      />
                      {/* {errors.title && touched.title ? (
                        <div style={{ color: "red" }}>{errors.title}</div>
                      ) : null} */}
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        label={"Description"}
                        name="description"
                        variant="outlined"
                      />{" "}
                      {/* {errors.description && touched.description ? (
                        <div style={{ color: "red" }}>{errors.description}</div>
                      ) : null} */}
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Field
                        as={TextField}
                        fullWidth
                        label={"Price"}
                        name="price"
                        variant="outlined"
                      />
                      {/* {errors.price && touched.price ? (
                        <div style={{ color: "red" }}>{errors.price}</div>
                      ) : null} */}
                    </Grid>
            
                    <Grid item md={6} xs={12}>
  
                      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                        <Button
                        //   disabled={!isValid}
                          color="primary"
                          type="submit"
                          variant="contained"
                        >
                          Save
                        </Button>
                      </Box>
                    </Grid>
  
                  </Grid>
  
                </CardContent>
                <Divider />
              </Box>
   
            </Card>
          )}
        </Formik>
  
      </>
    );
  };
  export default EditCourse;
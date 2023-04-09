import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import React from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ChangeProfileSchema } from "../auth/validation";
import { green, pink, red } from "@mui/material/colors";

const initialProfileValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  role: "",
};

const UserUpdare: React.FC = () => {

  const [block, setBlock] = React.useState(true);


  // const { selectedUser } = useTypedSelector((store) => store.UserReducer);
  const { UpdateUser } = useActions();
  let su = localStorage.getItem("selectedUser");
  if (su == null) {
    return <Box></Box>;
  }
  let selectedUser = JSON.parse(su);

  initialProfileValues.name = selectedUser.name;
  initialProfileValues.surname = selectedUser.surname;
  initialProfileValues.email = selectedUser.email;
  initialProfileValues.phone = selectedUser.phoneNumber;
  initialProfileValues.role = selectedUser.role;


  const handleBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlock(event.target.checked);
  };


  const changeProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const phone = data.get("phone");
    const role = data.get("role");

    const updatedUser = {
      id: selectedUser.id,
      name,
      surname,
      email,
      phone,
      role,
    };
    UpdateUser(updatedUser);
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
                title="Updating user data"
                subheader={"User information"}
              ></CardHeader>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"First name"}
                      name="name"
                      variant="outlined"
                    />
                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Second name"}
                      name="surname"
                      variant="outlined"
                    />{" "}
                    {errors.surname && touched.surname ? (
                      <div style={{ color: "red" }}>{errors.surname}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Email"}
                      name="email"
                      variant="outlined"
                    />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      label={"Phone"}
                      name="phone"
                      variant="outlined"
                    />
                    {errors.phone && touched.phone ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      <Field
                        as={Select}
                        fullWidth
                        name="role"
                        variant="outlined"
                      >
                        <MenuItem value={"Users"}>Users</MenuItem>
                        <MenuItem value={"Administrators"}>
                          Administrators
                        </MenuItem>
                      </Field>
                    </FormControl>
                  </Grid>


                  <Grid item md={6} xs={12}>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                      <Button
                        disabled={!isValid}
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





            <Card>
              <Box style={{ width: "100%" }} sx={{ mt: 1 }} >
                <CardHeader
                  style={{
                    color: "red",

                  }}
                  subheader={"Block or delete user"}
                  title="Danger zone"
                ></CardHeader>
                <CardContent>
                  <Grid container spacing={3}>


                    <Grid item md={6} xs={12}>
                      <Box display="flex" justifyContent="flex-end">
                        {" "}
                        <span
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Block/unblcok user
                          <Checkbox sx={{ '&.Mui-checked': { color: red[700], }, color: green[600] }} />
                        </span>

                      </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>

                      <Button
                       variant="contained"
                        color="error"
                        >
                        Delete user
                  
                      </Button>



                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>


          </Card>
        )}
      </Formik>

    </>
  );
};
export default UserUpdare;

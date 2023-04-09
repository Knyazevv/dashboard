import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";



function createData(
  name: string,
  surname: string,
  email: string,
  role: string
  
) {
  return { name, surname, email, role };
}

const UserInformation: React.FC = () => {


    const { user } = useTypedSelector((store) => store.UserReducer);
  const rows = [createData(user.Name, user.Surname, user.Email, user.Role)];
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={user.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {user.Name}
              </TableCell>
              <TableCell align="center">{user.Surname}</TableCell>
              <TableCell align="center">{user.Email}</TableCell>
              <TableCell align="center">{user.role}</TableCell>
              <TableCell align="center"><Link to="/dashboard/profile" className="btn btn-primary">Edit</Link></TableCell>
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserInformation;

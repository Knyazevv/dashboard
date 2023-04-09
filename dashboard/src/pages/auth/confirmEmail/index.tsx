import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Navigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Label } from "@mui/icons-material";
interface RouteParams extends Record<string, string | undefined> {
  userid: string;
  token: string;
}

const ConfirmEmail: React.FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Box>{searchParams.get("userid")}</Box>
      <Box>{searchParams.get("token")}</Box>
    </>
  );
};
export default ConfirmEmail;

import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailLockIcon from '@mui/icons-material/MailLock';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          ullam numquam vitae sint tempore quod voluptas consectetur voluptatem?
        </p>
      </Box>
      <Box sx={
        {m: 5, width:'600px',ml: 10,"@media (max-width:600px)":{
          width:"300px"
        }}
      }>
        <TableContainer component={Paper}>
          <Table ARIA-lable="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt:1}}/>1234567890 (ToolFree)
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <MailLockIcon sx={{color:'skyblue', pt:1}}/>help@myrest.com
                </TableCell>
              </TableRow>
                <TableRow>
                <TableCell>
                  <AddIcCallIcon sx={{color:'green', pt:1}}/>03216458568
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

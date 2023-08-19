/* eslint-disable */

import { keyframes } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  Header: {
    padding: "15px",
  },
  HeaderText: {
    color: "#004C75",
    fontSize: "16px",
  },
  loginInput: {
    maxWidth: "100%",
    width: "400px",
    border: "2px solid #004d4d",
    borderRadius: "8px",
    backgroundColor: "white",
    background: "white",
    color: "#004d4d",
    height: "40px",
    paddingLeft: "10px",
    marginTop: "9px",
    marginBottom: "30px",
    fontSize: "16px",
    boxShadow: "0px 4px 8px 0px rgb(1,23,26,0.25) inset",
    "& error": {
      border: "2px solid #cc0000",
    },
    "& labelText": {
      position: "relative",
      top: "-0.5rem",
      maxWidth: "auto",
      animation: "showError 300ms forwards 1 ease-in-out",
    },
  },
  inputContainer: {
    maxWidth: "100%",
    "& loginInput": {
      borderRadius: "5px 5px 0 0",
      border: "2px solid #cc0000",
    },
  },
  // @keyframes marginBtm{
  // 0%{
  //     marginBottom:"0",
  // }
  // 100%{
  //     marginBottom:"2.6rem",
  // }
  // }
  buttonL: {
    backgroundColor: "#08afbf",
    color: "white",
    fontSize: "16px",
    fontWeight: "700",
    borderRadius: "50px",
    boxShadow: "0px 4px 8px 0px rgb(1,23,26,0.25) inset",
    paddingTop: "10px",
    paddingBottom: "10px",
    border: "2px solid #004d4d",
    width: "400px",
    "& :hover": {
      backgroundColor: "white",
      color: "#004d4d",
    },
  },
});

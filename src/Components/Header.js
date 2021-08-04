
import React from 'react';
import "./Header.css";
import { TextField, createTheme, ThemeProvider, MenuItem } from "@material-ui/core";
import catergories from "../data/catergories";
const Header = ({ setCatergory, catergory, word, setWord, }) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#d9d8d7",
            },
          type: 'dark',
        },
      }); 


      const handleChange = (Language) => {
          setCatergory(Language);
          setWord("");

      };


    return (
        <div className="header">
            <span className="title"> {word ? word : "The Lexis."}</span>
            <div className="inputs">
                <ThemeProvider theme ={darkTheme}>
                <TextField 
                className="search" 
                label="Search Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                 />
                
        <TextField
          className="select" 
        
          select
          label="Language"
          value={catergory}
          onChange={(e) => handleChange(e.target.value)}
 
        >
            {catergories.map((option) => (
                    <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                ))
            }
          

        </TextField>
        </ThemeProvider>
            

            </div>
        </div>
    )
}

export default Header


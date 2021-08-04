import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container, withStyles  } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from "./Components/Header";
import Definitions from "./Components/Definitions"
import Switch from '@material-ui/core/Switch';
function App() {


  const [word,setWord] = useState('')
  const [meanings, setMeanings] = useState([]);
  const [catergory, setCatergory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[500],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

 
  const dictionaryApi = async () => {
    try {
      const data=await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${catergory}/${word}`
        );

    
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings)

 useEffect(() => {
    dictionaryApi();
   
 }, [word, catergory]);


  return  <div className="App" 
  style={{
  height: "100vh", 
  backgroundColor:LightMode?"#001c4b": "#6277bf",
  color:LightMode?"white" :"white",
  transition:"all 0.5s linear"
  }}>


    <Container maxWidth="md"  style={{display:"flex", flexDirection: "column", height:"100vh", justifyContent:"space-evenly"}}>
     
      <div style={{position:"absolute", top: 0, right:15,paddingTop:10}}>
      <span>{LightMode?"Dark": "Light"} Mode</span>
        <DarkMode checked={LightMode} onChange={() =>setLightMode(!LightMode)} />


      </div>
      <Header 
      catergory={catergory} 
      setCatergory={setCatergory} 
      word={word} 
      setWord={setWord}
      LightMode={LightMode}  />


      {meanings && (
      <Definitions word={word} meanings={meanings} catergory={catergory} />
      )}

    
    </Container>
    </div>

}

export default App;

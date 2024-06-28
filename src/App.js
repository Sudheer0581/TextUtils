import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const [modeText,setModeText] = useState("Enable Dark Mode")
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setModeText('Enable Light Mode')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      setModeText('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" desc="Home" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

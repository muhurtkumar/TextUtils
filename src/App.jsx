import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.....going for interview do learn why exact is used in path below in router dom
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() =>{
  setAlert(null)
  }, 1500)
}

  const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode has been enabled", "success")
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled", "success")
      }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path="/about" element={<About />} /> 
          </Routes>
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App

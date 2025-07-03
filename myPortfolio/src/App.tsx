//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter} from "react-router-dom";
import Index from "./pages/Index";
//import NotFound from "./pages/NotFound";

function App() {


  return (
    <>
      <HashRouter>
        <Index />
      </HashRouter>
    </>
  )
}

export default App

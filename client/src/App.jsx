import {  Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Component from "./Components/Component";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="/components" element={<Component />} />
      </Route>
  </Routes>
    </>
  )
}

export default App

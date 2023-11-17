import About from "./About";
import Header from "./Header";
import Home from "./Home";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:'/',element:<Header/>,
    children:[
    {
      path: "/",element:<Home/> 
    },
    {
      path: "/about",element:<About/> 
    }]
  }
  
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
      
    </div>
  );
}

export default App;

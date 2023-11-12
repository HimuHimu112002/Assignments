import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx';
import DemoOutLayout from './components/DomOutLayout.jsx'
import Service from './pages/Services/Service.jsx'
import AllProject from './pages/AllProject/Project.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Team from './pages/Team/Team.jsx';
import Testimonial from './pages/testimonial/Testimonial.jsx';


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DemoOutLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/servic" element={<Service/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/project" element={<AllProject/>}></Route>
      <Route path="/testimonial" element={<Testimonial/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)

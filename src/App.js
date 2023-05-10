import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import About from './Components/About/About';
import ContactPage from './Components/ContactPage/ContactPage';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/projectsD' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact-us' element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer'
import Home from './Home'
import 'font-awesome/css/font-awesome.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import UserList from './GitHubApi/UserList'
import Contact from './Contact';
import NotFound from './NotFounnd';



function App() {
    return ( 
        <div>
            <Header/>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/users' element={<UserList/>}></Route>
        {/* <Route path='*' element={<Home/>}></Route> */}              
        {/* <Route path='*' element={<Navigate to ='/' />}></Route> */}
        <Route path='*' element={<NotFound/>}></Route>


        </Routes>
        </BrowserRouter>
         <Footer/>
        </div>
    );
}

export default App;

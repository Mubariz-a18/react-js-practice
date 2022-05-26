import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import UserList from './GitHubApi/UserList'
import Contact from './Contact';
import NotFound from './NotFounnd';
import Home from './Home'


const AppRoutes = ()=><BrowserRouter>
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


export default AppRoutes
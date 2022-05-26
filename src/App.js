import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer'
import 'font-awesome/css/font-awesome.css'

import AppRoutes from './AppRoutes';



function App() {
    return ( 
        <div>
        <AppRoutes/>
        <Footer/> 
        </div>
    );
}

export default App;
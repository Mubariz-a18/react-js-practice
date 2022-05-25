import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer'
import UserList from './GitHubApi/UserList'
import 'font-awesome/css/font-awesome.css'

function App() {
    return ( 
        <div>
            <Header/>
            <UserList/>
            <Footer/>
        </div>
    );
}

export default App;

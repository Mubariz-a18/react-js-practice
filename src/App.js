import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer'
import ProductList from './utils/productList';
import 'font-awesome/css/font-awesome.css'

function App() {
    return ( 
        <div>
            <Header/>
            <ProductList/>
            <Footer/>
        </div>
    );
}

export default App;

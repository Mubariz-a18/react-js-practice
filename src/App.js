import './App.css';
import Header from './Header';
import Footer from './Footer'
import Name from './Name';
import Counter from './utils/Counter';

function App() {
  return (<div>
      <Header/>
        <h1>hello world</h1>
        <Counter />
        <img className='cars' alt='imagecar' src='https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg'></img>
        <Name personName='mubariz'></Name>
        <Name personName='imran' age="29"></Name>
        <Footer />
    </div>);
}

export default App;

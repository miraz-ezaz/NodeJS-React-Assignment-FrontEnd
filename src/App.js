import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Header';
import Main from './Main.js';
import './script.js';

function App() {
  const hotelSlug = 'hotel-blue-sky'
  return (
    <div className="App">
      <Header />
      <Main slug={hotelSlug}/>
    </div>
  );
}

export default App;

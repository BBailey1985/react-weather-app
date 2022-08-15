import Search from './components/Search/Search';
import './App.css';
import CurrentWeather from './components/Current-weather/Current-weather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange}/>
     <CurrentWeather />
    </div>
  );
}

export default App;

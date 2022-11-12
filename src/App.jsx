import {useEffect, useState} from 'react';
import CardView from './components/CardView';
import "./App.css";
import Logo from "../src/assets/icons/logo.png";
import {get} from './services';
function App() {
    const [titles, setTitles] = useState([]);

    async function getMovies() {
      const data = await get("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json");
      setTitles(data.entries);
      console.log(data.entries)
    }

    console.log(titles)
    useEffect(() => {
        getMovies();
    }, [])

    return (
      <>
        <div className='titulo'>
            <img src={Logo} className='logo'></img>
        </div>

        <div className='search'>
            <input type="text" className='form-control' placeholder='Title'></input>
        </div>
        
        <div className='titulo-2'>
            <h3>Popular Movies</h3>
        </div>
        
        <div className='contened'>
        <div className='container contenedor'>
        <CardView movies={titles}></CardView>            
          </div>
        </div>
        <div className='container contenedor5 text-center'>
          <div className='form container'>
            <img src={Logo} className='logo'></img>
          </div>
        </div>
      </>
        
    )
}

export default App
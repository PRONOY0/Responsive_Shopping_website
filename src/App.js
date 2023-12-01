import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainPage from './pages/Mainpage'
import { useState,useEffect } from 'react';
import data from './data'
import Card from './components/Card';
import Electronics from './pages/Electronics';
import Men from './pages/Men';
import Women from './pages/Women';
import HomeandLiving from './pages/HomeandLiving';
import Spinner from './components/Spinner';
import './components/Spinner.css'
import Cart from './components/Cart';

function App() {

    const [loading,setLoading] = useState(true)

    function shuffle(array){
        for(let i = array.length - 1; i > 0; i-- ){
            const j = Math.floor(Math.random()*(i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }



    useEffect(() => {
        setTimeout(() => {
          setLoading(false); 
        }, 2000); 
      });
    
    shuffle(data);
    const [Products, setProducts] = useState(data);

    return (
        <div className="App">
            {
                loading ? (<div className=' flex flex-row justify-center items-center h-screen w-screen'>
                    <Spinner/>
                </div>) 
                : 
                (
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp />}/>
                    <Route path='/mainpage' element={<MainPage Products={Products}/>}/>
                    <Route path='/electronics' element={<Electronics Products={Products}/>}/>
                    <Route path='/card' element={<Card/>}/>
                    <Route path='/men' element={<Men Products={Products}/>}/>
                    <Route path='/Women' element={<Women Products={Products}/>}/>
                    <Route path='/homeandliving' element={<HomeandLiving Products={Products}/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                </Routes>
                )
            }
        </div>
    );
}

export default App;
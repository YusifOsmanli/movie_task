import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards/Cards';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [search,setSearch]=useState("stranger")
  const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=7c09e09e`).then(res => {
      console.log(res.data.Search)
      setData(res.data.Search)
    })
  }, [search])

  const deleteWishlist = (index) => {
    setWishlist([...wishlist].slice(index,1))
  };

  return (
    <div className="App">
    <button className="btn btn-light wishlistBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Wishlist</button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Wishlist</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul>
        
        {
            wishlist && wishlist.map((wishlist, index) => {
                return (
                  <div>
                  <img src={wishlist.Poster}/>
                    <li className='list' key={index}> {wishlist.Title} {wishlist.Year}</li>
                    <button className='deleteBtn' onClick={(film)=>{
                      deleteWishlist(film.id)
                    }}>Delete</button>
                  </div>
                )
            })
        }</ul>
        </div>
    </div>
      <Header setSearch={setSearch} wishlist={wishlist}/>
     <div className='all'>
     {
       data && data.map((item, index) => {
          return (
            <Cards item={item} key={index} setWishlist={setWishlist} wishlist={wishlist}/>
          )
        })
      }
     </div>
    </div>
  );
}

export default App
import React from 'react'

const Card = ({ item, setWishlist, wishlist}) => {
    console.log(item);
    const { Poster, Title, Year } = item
    const addToWishlist = () => {
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]))
        setWishlist([...wishlist, item])
    }
    return (

        <div className="card" style={{ width: "20rem" }}>
            <img src={Poster} className="card-img-top" alt="..." style={{ height: "450px" }} />
            <div className="card-body">
                <p className="card-text">{Title}</p>
                <p className="card-text">{Year}</p>
                <button className='btn btn-light' onClick={addToWishlist}>Add To Wishlist</button>
            </div>
        </div>
    )
}

export default Card
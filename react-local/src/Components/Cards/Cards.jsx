import React from 'react'
import Card from '../Card/Card'
const Cards = ({ item, setWishlist, wishlist }) => {

    return (
        <Card item={item} setWishlist={setWishlist} wishlist={wishlist} />
    )
}

export default Cards
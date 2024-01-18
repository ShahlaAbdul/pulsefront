import React, { useContext } from 'react'
import "./style.scss"
import {  Helmet } from 'react-helmet-async';
import { WishlistContext } from '../../context/useWishlistContext';

function Wishlist() {
  const  { wishlist, addWishlist, remoweWishlist, isWishlist }= useContext(WishlistContext)

    return (
        <div>
            <Helmet>
                <title>Wishlist Page</title>
            </Helmet>
            <div className="wishlist">
                {wishlist.map((x)=>
                <ul>
                    <li>{x.name}</li>
                    <li>{x.description}</li>
                    <li>{x.price}</li>
                </ul>
                )}
            </div>
        </div>
    )
}

export default Wishlist
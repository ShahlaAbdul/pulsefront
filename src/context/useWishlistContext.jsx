import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/useLocalStorage';

export const WishlistContext = createContext();

function WishListProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage('wishlist',[])

    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x._id === item._id)
        console.log("adsa",index);
        if (index === -1) {
            setWishlist([...wishlist, item])
            console.log("aa",item,wishlist);
        } else {
            remoweWishlist(item)
        }
        console.log(wishlist);
    }
    function remoweWishlist(item) {
        setWishlist(wishlist.filter((x) => x._id !== item._id))
    }
    function isWishlist(item) {
        return wishlist.findIndex((x) => x._id === item._id) === -1 ? false : true
    }
    return (
        <WishlistContext.Provider value={{ wishlist, addWishlist, remoweWishlist, isWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishListProvider
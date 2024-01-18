import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../context/useWishlistContext'

function OurMenu() {
    const [fetchData, setFetchData] = useState([])
    const { wishlist, addWishlist, remoweWishlist } = useContext(WishlistContext)
    useEffect(() => {
        fetch("http://localhost:3100/")
            .then((res) => res.json())
            .then((data) => setFetchData(data))
    }, [])

    return (
        <section id='ourmenu'>
            <div className="ourmenu">
                <div className="ourmenu_head">
                    <i className="fa-solid fa-drumstick-bite"></i>
                    <div className='our_menu'>
                        <span></span> <h1>Our menu</h1><span></span>
                    </div>
                    <ul className='lunch'>
                        <li>Breakfast</li>
                        <li>Brunch</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                    </ul>
                </div>

                <div className="ourmenu_dishes">
                    {fetchData.map((x) => (
                        <ul className='ourmenu_card' key={x._id}>
                            <li className='name'>
                                {x.name}
                            </li>
                            <li className='desc'>
                                <p>{x.description}</p>
                                <p>..............   .............................................................</p>
                                <span>${x.price}.00</span>
                            </li>
                            <li className='detail'>
                                <button><NavLink to={"/detail/" + x._id} className={"page"}>See</NavLink></button>
                                <div className='icon'>
                                    {wishlist.some((item) => x._id === item._id) ? (
                                         <i className="fa-solid fa-heart red" onClick={() => remoweWishlist(x)}></i>
                                  
                                    ) : (
                                        <i className="fa-solid fa-heart " onClick={() => addWishlist(x)} ></i>
                                    )}
                                </div>
                            </li>
                            <div className="our_dishes_btn">
                            </div>
                        </ul>
                    ))}
                </div>


            </div>

        </section>
    )
}

export default OurMenu
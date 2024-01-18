import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

function Detail() {
    const [detail, setDetail] = useState([])
    const {id} = useParams();
   

    useEffect(() => {
        fetch("http://localhost:3100/"+ id)
            .then((res) => res.json())
            .then((data) => setDetail(data))

    }, [])


    return (
        <div>
            <Helmet>
                <title>Detail Page</title>
            </Helmet>
            <div className="detail">
                <ul>
                    <li>
                        {detail.name}
                        
                    </li>
                    <li>
                        {detail.description}
                    </li>
                    <li>
                        {detail.price}
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Detail
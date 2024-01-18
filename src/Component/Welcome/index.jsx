import React from 'react'
import "./style.scss"

function Welcome() {
    return (
        <div>
        <div className="welcome">
            <div className="welcome_head">
            <i className="fa-solid fa-cloud-meatball"></i>
            <div className='welc'>
            <span></span> <h1>Welcome</h1><span></span>
            </div>
            </div>
            <div className="welcome_years">
                <div className="w_card">
                    <span>2022</span>
                    <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                    </p>
                </div>
                <div className="w_card">
                    <span>2022</span>
                    <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                    </p>
                </div>
                <div className="w_card">
                    <span>2022</span>
                    <p>
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Welcome
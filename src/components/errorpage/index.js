import React from 'react'
import "./error.scss"
import errorgif from "../../assets/errorimge/dribbble_1.gif"
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <section className="error-section">
                <div className="error-video">
                    <img src={errorgif} alt="errorgif" />
                </div>
                <div className="error-section-inner-main">
                    <div className="error-section-main">
                        <div className="error-title-main">
                            <h1>404</h1>
                        </div>
                        <div className="look-pera-main">
                            <div>
                                <h3>Look like you're lost</h3>
                                <p>the page you are looking for not available!</p>
                                <div className="error-button-go-home">
                                    <Link to={"/"}>
                                        <button>
                                            <span>Go To Home</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

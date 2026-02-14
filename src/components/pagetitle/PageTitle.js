import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    const { pageTitle, pagesub, bgImage } = props
    const bgStyle = bgImage ? { background: `url(${bgImage}) no-repeat center top / cover` } : undefined
    return (
        <div className="wpo-breadcumb-area" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{pageTitle}</h2>
                            <ul className="wpo-breadcumb-wrap">
                                <li><Link to="/home">Home</Link></li>
                                <li><span>{pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;

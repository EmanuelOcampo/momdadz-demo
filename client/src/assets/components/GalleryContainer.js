import React from "react"
import { Link } from "react-router-dom";

import Wrapper from "../wrappers/GalleryContainer"
const GalleryContainer = ({ background, labelText, handleClick }) => {
    return (
        <Wrapper>
            <Link to={handleClick}>
                <div className='div-container'>
                    <div className='title-container'>
                        <h1 className='title'>{labelText}</h1>
                    </div>
                    <img src={background} alt={labelText} />
                </div>
            </Link>
        </Wrapper>
    )
}

export default GalleryContainer
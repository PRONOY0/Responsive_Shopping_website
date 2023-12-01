import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <div class="spinnerContainer">
                <div class="spinner"></div>
                <div class="loader">
                    <p>loading</p>
                    <div class="words">
                        <span class="word">Offers</span>
                        <span class="word">Products</span>
                        <span class="word">image</span>
                        <span class="word">Details</span>
                        {/* <span class="word">posts</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner

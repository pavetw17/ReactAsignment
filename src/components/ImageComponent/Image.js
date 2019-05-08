import React from 'react';
import './Image.css'

const image = (props) => {
    return ( 
        <div className="cell">  
            <img src="http://placehold.it/350x150" className="responsive-image"  />
        </div>
    );
}

export default image;
import React from 'react';
import './Image.css'

const image = (props) => {
    return ( 
        <div className="cell"> 
            <figure>
            <img src="http://placehold.it/350x150" className="responsive-image"  />

            <figcaption>
            
                <span style={{float:'left'}}>
                    AAAA
                </span>
                <span style={{float:'right'}}>
                    BBBB
                </span>
            </figcaption>
            </figure>
        </div>
    );
}

export default image;
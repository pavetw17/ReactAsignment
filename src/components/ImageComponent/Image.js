import React from 'react';
import './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'

const image = (props) => {
    const list = {...props.images.data}
    console.log(list)
    let imagesData = Object.values(list).map((item) => {
        console.log(item)
        return (
            <div className="cell" key={item.id}> 
            <figure>
                <img src={item.images.fixed_width.url} className="responsive-image" alt="1"  />
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
    })


    return (
        
        <Aux>
            {imagesData}
        </Aux>
    );
}

export default image;
import React from 'react';
import './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import { faLink, faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const image = (props) => {

    const list = {...props.images}
    let imagesData = Object.values(list).map((item, index) => {	
        return (
            <div className="cell" key={index}> 
            <figure>
                <a className="lightbox" href={'/#' + item.id}  >
                   
                    <span onClick={props.selectImage}> 
                        <img src={item.images.fixed_width.url} className="responsive-image" alt={item.id}  />
                    </span>
                </a>
                
                {props.active ?
                (<div className="lightbox-target" id={item.id}>
                    <img src={item.images.fixed_width.url} alt={item.id}/>
                    <span className="lightbox-close" onClick={props.cancelImage} />
                </div>) : null }
                
                <figcaption>   
                    <span style={{float:'left'}}>
                        <FontAwesomeIcon icon={faLink}  className="link-icon" />
                    </span>
                    <span className="tab-right">
                        <FontAwesomeIcon icon={faEye} className="eye-icon" /> 700 {' '} 
                        <FontAwesomeIcon icon={faComment} className="comment-icon" /> 30 {' '}
                        <FontAwesomeIcon icon={faHeart} className="heart-icon" /> 901
                    </span>
                </figcaption>       
            </figure>
            <span className="username">
                        {item.username}
            </span>
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
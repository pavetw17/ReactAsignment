import React, {Component} from 'react';
import './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import { faLink, faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Image extends Component {

    render() {
        const list = {...this.props.images}
        // const listSlice = Object.values(list).slice(0,20)
        let imagesData = Object.values(list).map((item, index) => {
            // console.log(item)
            return (
                <div className="cell" key={index}> 
                <figure>
                    <a className="lightbox" href={'/#' + item.id}  >
                        <img src={item.images.fixed_width.url} className="responsive-image" alt={item.id}  />
                    </a>
                    <div className="lightbox-target" id={item.id}>
                         <img src={item.images.fixed_width.url} alt={item.id}  />
                        <a className="lightbox-close" href="#"/>
                    </div>
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
}

export default Image;

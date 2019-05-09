import React, {Component} from 'react';
import './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import { faLink, faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Image extends Component {

    handleImage = (link) => {
        console.log(link)
    }

    render() {
        const list = {...this.props.images.data}
        // const listSlice = Object.values(list).slice(0,20)
        let imagesData = Object.values(list).map((item) => {
            // console.log(item)
            return (
                <div className="cell" key={item.id}> 
                <figure>
                    <a className="lightbox" href={'/#' + item.id}>
                        <img src={item.images.fixed_width.url} className="responsive-image" alt={item.id}  />
                    </a>
                    <div className="lightbox-target" id={item.id}>
                         <img src={item.images.fixed_width.url} alt={item.id}  />
                        <a className="lightbox-close" href="#"></a>
                    </div>
                    <figcaption>   
                        <span style={{float:'left'}}>
                            <FontAwesomeIcon icon={faLink} />
                        </span>
                        <span style={{float:'right'}}>
                            <FontAwesomeIcon icon={faEye} style={{color:"#6DB65B"}} /> 700 {' '} 
                            <FontAwesomeIcon icon={faComment} style={{color:"#6DB65B"}} /> 30 {' '}
                            <FontAwesomeIcon icon={faHeart} style={{color:"#6DB65B"}} /> 901
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



/* 
const image = (props) => {
    const list = {...props.images.data}
    // const listSlice = Object.values(list).slice(0,20)
    // console.log(listSlice)
    let imagesData = Object.values(list).map((item) => {
        return (
            <div className="cell" key={item.id}> 
            <figure>
                <span>
                    <img src={item.images.fixed_width.url} className="responsive-image" alt="1"  />
                </span>
                <figcaption>   
                    <span style={{float:'left'}}>
                        AAAA
                    </span>
                    <span style={{float:'right'}}>
                        BBBB
                    </span>
                </figcaption>       
            </figure>
            <span style={{float:'left', marginLeft: "12px"}}>
                        AAAA
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

export default image; */
import React from 'react';
import classes from './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import { faLink, faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const image = (props) => {

    const list = { ...props.images }
    let imagesData = Object.values(list).map((item, index) => {
        return (
            <div className={classes.cell} key={index}>
                <figure>
                    <a className={classes.lightbox} href={'/#' + item.id}  >
                        <span onClick={props.selectImage}>
                            <img src={item.images.fixed_width.url} className={classes.responsive_image} alt={item.id} />
                        </span>
                    </a>

                    {props.active ?
                        (<div className={classes.lightbox_target} id={item.id}>
                            <img src={item.images.fixed_width.url} alt={item.id} />
                            <span className={classes.lightbox_close} onClick={props.cancelImage} />
                        </div>) : null}

                    <figcaption>
                        <span style={{ float: 'left' }}>
                            <FontAwesomeIcon icon={faLink} className={classes.link_icon} />
                        </span>
                        <span className={classes.tab_right}>
                            <FontAwesomeIcon icon={faEye} className={classes.eye_icon} /> 700 {' '}
                            <FontAwesomeIcon icon={faComment} className={classes.comment_icon} /> 30 {' '}
                            <FontAwesomeIcon icon={faHeart} className={classes.heart_icon} /> 901
                    </span>
                    </figcaption>
                </figure>
                <span className={classes.username}>
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
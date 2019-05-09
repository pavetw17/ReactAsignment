import React, {Component} from 'react';
import './Image.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'




class Image extends Component {
    render() {
        const list = {...this.props.images.data}
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
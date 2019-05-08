import React, {Component} from 'react'
// import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'

class ImageList extends Component {
    state ={

    }

    componentDidMount(){

    }

    render() {
        return (
            <Aux>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </Aux>
        );
    }
}

export default ImageList;
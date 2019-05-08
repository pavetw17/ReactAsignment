import React, {Component} from 'react'
import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'

class ImageList extends Component {
    state ={
        images: {}
    }

    componentDidMount(){
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=FuG74WHq1QdFUXq62J2gnqpMjeqx5lVa')
            .then (response => {
              
                this.setState ({ images: response.data})
            })
            .catch (error => {
                this.setState ({ error: true })
            })
    }

    render() {
        // console.log(this.state.images)
        return (
            <Aux>
                <Image images = {this.state.images}/>
            </Aux>
        );
    }
}

export default ImageList;
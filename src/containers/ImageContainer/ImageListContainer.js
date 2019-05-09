import React, {Component} from 'react'
import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'

class ImageList extends Component {
    state = {
        images: {},
        imageItems: 20,
        loadingState: false,
    };
    
    componentDidMount() {
      this.refs.iScroll.addEventListener("scroll", () => {
        if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight - 20){
            this.loadItems();
        }
      });
    }
   
    displayItems(imageItems) {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=FuG74WHq1QdFUXq62J2gnqpMjeqx5lVa&limit='+imageItems)
        .then (response => {
            this.setState ({ images: response.data })
        })
        .catch (error => {
            this.setState ({ error: true })
        })

        return (
                <Image images = {this.state.images}/>
        );
    }
   
    loadItems() {
      this.setState({ loadingState: true });
      setTimeout(() => {
        this.setState({ imageItems: this.state.imageItems + 20, loadingState: false });
      }, 3000);
    }
   


    render() {
      return (
        <Aux >
            <div className='grid' ref="iScroll" style={{ height: "calc(105vh - 100px)", overflow: "auto"}}  >
                {this.displayItems(this.state.imageItems)}
                {this.state.loadingState ? <p className="loading"> 
                   Loading...</p> : ""}
            </div>
        </Aux>
      );
    }
}

export default ImageList;
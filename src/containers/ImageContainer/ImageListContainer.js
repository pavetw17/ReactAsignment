import React, {Component} from 'react'
import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'
import InfiniteScroll from 'react-infinite-scroll-component';


class ImageList extends Component {
    state = {
        images: [],
        imageItems: 20,
        start: 0,  
    };

    componentDidMount() {
      this.fetchMoreData()
    }
   
    fetchMoreData = () => {
      const { imageItems, start } = this.state;
      this.setState({ 
        start: this.state.start + imageItems 
      });

      axios.get("https://api.giphy.com/v1/gifs/trending?api_key=FuG74WHq1QdFUXq62J2gnqpMjeqx5lVa&limit="
                  +imageItems +"&offset=" +start)
      .then(res =>
        {
          this.setState({ 
            images: this.state.images.concat(res.data.data) 
          })
        }
      );
    };
   
    render() {
      return (
        <Aux >
            <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                className="grid"
              >
                <Image images = {this.state.images}/>
            </InfiniteScroll>
        </Aux>
      );
    }
}

export default ImageList;
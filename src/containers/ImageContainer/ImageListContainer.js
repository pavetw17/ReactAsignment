import React, {Component} from 'react'
import axios from 'axios'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'
import InfiniteScroll from 'react-infinite-scroll-component';

const accessKey = 'FuG74WHq1QdFUXq62J2gnqpMjeqx5lVa';
const linkGIPHY = 'https://api.giphy.com/v1/gifs/trending?api_key'
const getLink = `${linkGIPHY}=${accessKey}`

class ImageList extends Component {
    state = {
        images: [],
        imageItems: 20,
        start: 0,
        active: false,
    };

    componentDidMount() {
      this.fetchMoreData();
    }
   
    fetchMoreData = () => {
      const { imageItems, start } = this.state;
     
      this.setState({ 
        start: this.state.start + imageItems
      });
          
      axios.get(getLink + "&limit="+ imageItems +"&offset=" + start)
      .then(res =>
        {
          this.setState({ 
            images: this.state.images.concat(res.data.data) 
          })
        }
      );
    };

    selectHandler = () => {
      this.setState({
        active: true,
      });
    }
  
    cancelHandler = () => {
      const { active } = this.state;
      this.setState({
        active: !active,
      });
    }

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
                <Image images = {this.state.images} active={this.state.active} 
                cancelImage={this.cancelHandler} 
                selectImage={this.selectHandler}/>
            </InfiniteScroll> 
        </Aux>
      );
    }
}

export default ImageList;
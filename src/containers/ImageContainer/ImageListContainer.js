import React, {Component} from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Image from '../../components/ImageComponent/Image'
import * as actions from '../../store/actions/index'
import classes from '../../hoc/Layout/Layout.css'

class ImageList extends Component {
    state = {
        active: false,
    };

    componentDidMount() {
      this.fetchMoreData();
    }
   
    fetchMoreData = () => {
      this.props.onFetchData()
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
                dataLength={this.props.imagesState.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                className={classes.grid}
              >
                <Image images = {this.props.imagesState} active={this.state.active} 
                cancelImage={this.cancelHandler} 
                selectImage={this.selectHandler}/>
            </InfiniteScroll> 
        </Aux>
      );
    }
}

const mapStateToProps = state => {
  return {
    imagesState: state.imageFromGIF.images,
    imageItemsState: state.imageFromGIF.imageItems,
    startState: state.imageFromGIF.start,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(actions.fetchData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageList);
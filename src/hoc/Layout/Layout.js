import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './Layout.css'


class Layout extends Component {
    render(){
        return (
            <Aux>
                <div className={classes.container}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Layout;
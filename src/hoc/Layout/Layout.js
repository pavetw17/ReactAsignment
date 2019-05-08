import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import './Layout.css'


class Layout extends Component {
    render(){
        return (
            <Aux>
                <div className="container">
                    <div class="grid">
                        {this.props.children}
                    </div>
                </div>
            </Aux>
        )
    }
}


export default Layout;
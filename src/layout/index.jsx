import React, {Component} from 'react'
import Header from './header';
import Footer from './footer';

export default class index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    };
}
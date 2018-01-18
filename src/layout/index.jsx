import React, {Component, Fragment} from 'react';
import Header from './header';
import Footer from './footer';

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Fragment>
                    {this.props.children}
                </Fragment>
                <Footer />
            </div>
        );
    }
}

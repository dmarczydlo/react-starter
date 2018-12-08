import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import '../style/index.scss';

const Index = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

Index.propTypes = { children: PropTypes.element.isRequired };

export default Index;

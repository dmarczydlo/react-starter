import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import '../style/index.scss';

const Index = ({children}) => {
    return (
        <div>
            <Header />
            <Fragment>
                {children}
            </Fragment>
            <Footer />
        </div>
    );
};

Index.propTypes = {children: PropTypes.element.isRequired};

export default Index;

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="navbar">
                    <div>
                        <Link
                            name="home"
                            to="/"
                        >
                            {'Counter'}
                        </Link>
                    </div>
                    <div>
                        <Link
                            name="form"
                            to="/form"
                        >
                            {'Form'}
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/abcd"
                        >
                            {'Error'}
                        </Link>
                    </div>
                </div>
            </div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {'React starter'}
                </title>
            </Helmet>
        </Fragment>
    );
};

export default header;

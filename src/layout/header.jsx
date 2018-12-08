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
                            to="/"
                        >
                            {'Counter'}
                        </Link>
                    </div>
                    <div>
                        <Link
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

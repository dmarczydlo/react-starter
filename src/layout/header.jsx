import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const header = () => {
    return (
        <Fragment>
            <div>
                {'Header'}
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

import React from 'react';
import {Link} from 'react-router-dom';
import '../style/index.scss';

const Home = () => {
    return (
        <div className="test">
            <Link
                name="child1"
                to="/child/1"
            >
                {'child 1'}
            </Link>
            <Link
                name="child2"
                to="/child/2"
            >
                {'child 2'}
            </Link>

        </div>

    );
};

export default Home;

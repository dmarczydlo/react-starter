import React from 'react';
import {Link} from 'react-router-dom';
import '../style/index.scss';

const Home = () => {
    return (
        <div className="test">
            <Link to={'/child/1'}>child 1</Link>
            <Link to={'/child/2'}>child 2</Link>

        </div>

    );
};

export default Home;

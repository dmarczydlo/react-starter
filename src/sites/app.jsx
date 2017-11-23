import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../layout';
import Home from './home';

const App = () => {
    return (
        <div>
            <Router>
                <Layout>
                    <Route exact path="/" component={Home} />
                </Layout>
            </Router>
        </div>

    );
};

export default App;

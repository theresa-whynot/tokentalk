import React from 'react';
import TokenTitles2 from './components/TokenTitles2';
import Layout from './components/Layout';
import SiteHeader from './components/SiteHeader';
import './App.css';

const App = () => {
    return (
        <div>
            <Layout>
        <SiteHeader/>
                <TokenTitles2/>
            </Layout>
        </div>
    );
};

export default App;

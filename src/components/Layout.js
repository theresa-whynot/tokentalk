import React from 'react';
import Banner from './Banner';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';


const Layout = (props) => {
    return (
        <Container>
        <NavBar/>
            <div style={{ marginTop: '125px'}} >
                <Banner />
            </div>
            <div>{props.children}</div>
        </Container>
    );
};


export default Layout;



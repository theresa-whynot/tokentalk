import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Banner = () => {
    return (


            <Card style={{ fontFamily: 'Verdana, sans-serif',  backgroundColor:'#f48e24', color: 'white'}}>
                <Card.Body>
                <Card.Title style={{ fontWeight: 'bold', fontSize: '25px'} }>TokenTalk.</Card.Title>
                    <Card.Text>
                        Chat About Today's Most Popular BRC-20 Tokens
                </Card.Text>

                <InputGroup style={{width: '400px'} }>
                    <Form.Control
                        placeholder="Search for popular BRC-20 tokens"
                    />
                    <Button style={{backgroundColor:'black' }} variant="secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>

                </Card.Body>
        </Card>




    );
};

export default Banner;

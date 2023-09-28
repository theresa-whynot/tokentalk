import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TokenTitles2 = () => {
    const [tokenData, setTokenData] = useState([]);

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=brc-20&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en'
                );
                const data = await response.json();
                setTokenData(data);
            } catch (error) {
                console.error('Error fetching token data:', error);
            }
        };

        fetchTokenData();
    }, []);

    return (
        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {tokenData.map((token) => (
                <Card
                    key={token.id}
                    style={{ width: '500px', border: '2px solid white', marginBottom: '20px', marginLeft: '50px' }}
                >
                    <Card.Body>
                        <Card.Title>
                            {token.image ? (
                                <Image src={token.image} roundedCircle style={{ width: '50px', height: '50px' }} />
                            ) : null}
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                {token.name}
                                </Card.Title>

                        <Card.Text>
                            <Row>
                        <Col>
                            Market Cap = ${token.market_cap}<br />
                            Total Volume = {token.total_volume}<br />
                            Total Supply = {token.total_supply}<br />
                                Circulating Supply = {token.circulating_supply}<br />
                                </Col>
                                <Col>
                                    <Button style={{ backgroundColor: 'black', marginLeft: '40px', marginTop: '40px' }} variant="secondary" size="lg">Chat Now</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        
                        <ListGroup.Item> <b>${parseFloat(token.current_price).toFixed(2)}</b> USDUSD 
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                           
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>

                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button style={{ backgroundColor: 'orange' }} variant="secondary">Rate Now</Button>

                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button style={{ backgroundColor: 'orange' }} variant="secondary">+Watch</Button>
                        
                            </ListGroup.Item>
                        
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
};

export default TokenTitles2;

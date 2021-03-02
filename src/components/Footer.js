import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <div class="cryptohopper-web-widget" data-id="4" data-coins="bitcoin,ethereum,cardano,binance-coin,polkadot,ripple,tether,chainlink,stellar" data-numcoins="10" data-theme="midnight" data-realtime="on"></div>
            <Container>
                <Row>
                    <Col className="text-center py-3"> Copyrigth &copy; Frog Crypto</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

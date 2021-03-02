import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>Frog Crypto</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <LinkContainer to='/cart'>
                            <Nav.Link><i className="fa fa-address-book"></i>portfolio</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="cryptohopper-web-widget" data-id="2" data-coins="bitcoin,ethereum,cardano,binance-coin,polkadot,ripple,tether,chainlink" data-numcoins="10" data-theme="dark" data-ticker_position="header"></div>
        </header>
    )
}

export default Header

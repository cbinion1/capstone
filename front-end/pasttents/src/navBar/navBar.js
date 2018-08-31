import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import Login from '../Login/Login';
// import Logout from '../Logout';

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(props) {
        return (
            <div>
                <Navbar color="#DEAE1D" light expand="md" className='navBar'>
					<h1>Past Tents!</h1>
                    <NavbarBrand href="/" image-src="#" ></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Login username={this.props.username} password={this.props.password} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
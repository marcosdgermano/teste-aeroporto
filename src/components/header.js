import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Rotas>
                    <LinkUI to="/">Flights</LinkUI>
                    <LinkUI to="/passengers">Passengers</LinkUI>
                    <LinkUI to="/tickets">Tickets</LinkUI>
                </Rotas>
                <LinkUI isDanger>Suspects</LinkUI>
            </Container>
        );
    }
}

const Rotas = styled.div`
    display: flex;
`;

const Container = styled.div`
    display: flex;
    padding: 7px;
    border-radius: 0 0 8px 8px
    justify-content: space-between;
    margin: 0 4px 10px 4px;
    box-shadow: 0 1px 2px rgba(60,64,67, 0.3)
`;

const LinkUI = styled(Link)`
    color: #fff;
    background-color: ${props => props.isDanger ? `#b80000` : `#47c309`};
    ${props => !props.isDanger && `margin-right: 10px;`}
    border-radius: 10px;
    text-decoration: none;
    padding: 10px 15px;

    &:hover {
        background-color: ${props => props.isDanger ? `#800000` : `#318806`};
    }
`;



export default Header;
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    render() {
        const { children, rout } = this.props;

        return (
            <ItemUI to={rout}>
                {children}
            </ItemUI>
        );
    }
}

const ItemUI = styled(Link)`
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15);
    margin: 4px 4px 10px
    padding: 0 10px 10px;
    text-decoration: none;
    color: #000;

    &:hover {
        box-shadow: 0 3px 4px rgba(60,64,67, 0.3), 0 3px 5px 3px rgba(60,64,67, 0.15);
    }
`;

export default Item;
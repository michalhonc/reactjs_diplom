import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
    display: flex;
    margin: auto 5rem;
    font-size: 2rem;
    line-height: 2;
    font-weight: bold;
    text-transform: uppercase;
    a {
        color: ${props => props.theme.color.white};
    }
`;

const Nav = () => {
    return (
        <NavStyled>
            <Link href="/">
                <a>Home</a>
            </Link>
        </NavStyled>
    );
}
 
export default Nav;
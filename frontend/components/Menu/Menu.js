import React from 'react';
import {  } from 'prop-types';
import { MenuContext } from './MenuContext';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    position: absolute;
    z-index: 999;
    border-left: 1px solid ${props => props.theme.color.borderInput};
    width: 30rem;
    height: 100vh;
    right: 0;
    top: 0;
    background-color: ${(props) => props.theme.color.white};
`;

const StyledBackground = styled.div`
    position: absolute;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
`;

const Menu = (props) => {
    const { state, dispatch } = React.useContext(MenuContext)

    const listener = (e) => {
        if (!document.getElementById('modal-menu').contains(e.target)) {
            dispatch({ type: 'close' })
        }
    }
    
    React.useEffect(() => {
        if (state.opened === false) {
            return null;
        }
        window.addEventListener('click', listener);

        return () => window.removeEventListener('click', listener);
    }, [state.opened])

    if (state.opened === false) return null;

    return (
        <StyledBackground>
            <StyledWrapper id="modal-menu">
                MENU!!!!!
            </StyledWrapper>
        </StyledBackground>
    );
};

Menu.propTypes = {
    
}

Menu.defaultProps = {
    
}

export default Menu;
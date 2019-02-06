import React from 'react';
import {  } from 'prop-types';
import { MenuContext } from './MenuContext';
import styled from 'styled-components';
import Icon from '../Shared/Icon';
import Button from '../styles/Button';

const StyledWrapper = styled.div`
    position: absolute;
    z-index: 999;
    border-left: 1px solid ${props => props.theme.color.borderInput};
    width: 60vw;
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

const StyledCloseButton = styled.svg`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    fill: black;
`;

const Menu = (props) => {
    const modalEl = React.useRef(null);
    const { state, dispatch } = React.useContext(MenuContext)

    if (state.opened === false) return null;

    const listener = (e) => {
        if (modalEl && modalEl.current && !modalEl.current.contains(e.target)) {
            close();
        }
    }

    const close = () => dispatch({ type: 'close' });
    
    React.useEffect(() => {
        window.addEventListener('click', listener);

        return () => window.removeEventListener('click', listener);
    }, [state.opened])


    return (
        <StyledBackground>
            <StyledWrapper ref={modalEl}>
                <Button onClick={close}>
                    <Icon
                        icon="cross"
                        el={StyledCloseButton}
                    />
                </Button>
            </StyledWrapper>
        </StyledBackground>
    );
};

Menu.propTypes = {
    
}

Menu.defaultProps = {
    
}

export default Menu;
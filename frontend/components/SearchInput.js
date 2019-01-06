import React, { useState, Fragment } from 'react';
import {  } from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

const Input = styled.input`
    width: 100%;
    padding: 1.4rem;
    border-radius: 0.4rem;
    border: 1px solid ${props => props.theme.color.borderGray};
    box-shadow: ${props => props.theme.styled.shadow};
    background-color: ${props => props.theme.color.white};
`;

const StyledIcon = styled.svg`
    position: absolute;
    height: 50%;
    margin: auto 0;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    fill: ${props => props.theme.color.black}
`;

const InputWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 50rem;
`;

const Submit = styled.input`
    margin: 0;
    padding: 0;
    position: absolute;
    display: inline;
    background-color: transparent;
`;

const SearchInput = () => {
    const [value, setValue] = useState('');

    return (
        <InputWrapper>
            <form action="/test">
                <Input
                    type="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Hledejte.."
                    />
                <label>
                    <input type="submit" style={{ display: 'none' }} />
                    <Icon icon='search' el={StyledIcon} />
                </label>
            </form>
        </InputWrapper>
    );
};

SearchInput.propTypes = {
    
}

SearchInput.defaultProps = {
    
}

export default SearchInput;
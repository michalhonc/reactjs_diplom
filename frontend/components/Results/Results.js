import React from 'react';
import styled from 'styled-components';
import {  } from 'prop-types';

const url = 'https://api.github.com/users/gaearon/repos';
const MAX_ITEM = 10;
const NON_EXTENDED_ITEM = 5;

const StyledListItem = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 0.5rem;
`;

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
`;

const StyledWrapper = styled.div`
    margin: 2rem 3rem;
`;

const StyledButton = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: #999;
    font-size: 1.4rem;
    line-height: 2rem;
    text-decoration: underline;
    cursor: pointer;
`;

const Results = (props) => {
    const[list, useList] = React.useState([]);
    const[isExtended, setIsExtended] = React.useState(false);

    React.useEffect(() => {
        const req = async () => {
            const response = await (await fetch(url)).json();
            const out = response.slice(0, MAX_ITEM).sort((a, b) => b.size - a.size);
            useList(out);
        }
        req()
    }, [])

    const listToRender = isExtended ? list : list.slice(0, NON_EXTENDED_ITEM);

    if (list.length === 0) {
        return <p>Loading..</p>
    }

    return (
        <StyledWrapper>
            <StyledList>
                {listToRender.map((item, index) => {
                    return (
                        <StyledListItem key={item.id}>
                            <span>{index + 1}.</span>
                            <span>{item.full_name}</span>
                            <span>{item.size}tis.</span>
                        </StyledListItem>
                    )
                })}
            </StyledList>
            {isExtended ? null : <StyledButton onClick={() => setIsExtended(true)}>Zobrazit další</StyledButton>}
        </StyledWrapper>
    );
};

Results.propTypes = {
    
}

Results.defaultProps = {
    
}

export default Results;
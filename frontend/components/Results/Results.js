import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import ResultsList from './ResultsList';

const url = 'https://api.github.com/users/';
const MAX_ITEM = 10;

const StyledWrapper = styled.div`
    margin: 2rem 3rem;
`;

const Results = (props) => {
    const [list, useList] = React.useState([]);
    const [isError, useIsError] = React.useState(false);
    const [isFetching, useIsFetching] = React.useState(false);

    const req = async () => {
        const fetchUrl = `${url}${props.query}/repos`;
        useIsFetching(true);
        useIsError(false);
        try {
            const response = await (await fetch(fetchUrl)).json();
            const out = response.slice(0, MAX_ITEM).sort((a, b) => b.size - a.size);
            useIsFetching(false);
            useList(out);
        } catch(e) {
            useIsFetching(false);
            useIsError(true);
        }
    }

    React.useEffect(() => {
        req();
    }, [props.query])
    
    if (isError) {
        return <p>Jejda, spadlo to..<button onClick={req}>Zkusit znova</button></p>
    }

    if (isFetching) {
        return  <p>Načítám data..</p>
    }

    return (
        <StyledWrapper>
            {Array.isArray(list) && list.length > 0 && (
                <ResultsList list={list} />
            )}
        </StyledWrapper>
    );
};

Results.propTypes = {
    query: string,
}

Results.defaultProps = {
    query: 'gaearon'
}

export default Results;
import React from 'react';
import {  } from 'prop-types';
import styled from 'styled-components';

import SearchInput from '../components/SearchInput';
import Results from '../components/Results/Results';

const Index = () => {
    return (
        <div>
            <SearchInput />
            <Results />
        </div>
    );
};

export default Index;
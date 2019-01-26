import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header/Header';
import Meta from './Header/Meta';

import theme from './styles/config/config';
import { MenuProvider } from './Menu/MenuContext';
import Menu from './Menu/Menu';
  

const StyledPage = styled.div`
    color: ${props => props.theme.color.black};
    position: relative;
`;

const Inner = styled.div`
    max-width: ${props => props.theme.size.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        height: 100%;
        background-color: ${props => props.theme.color.backgroundGray}
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

    h1 {
        margin: 0;
    }
`;

class Page extends Component {
    render() { 
        return (
            <ThemeProvider theme={theme}>
                <MenuProvider>
                    <StyledPage>
                        <Meta />
                        <Menu />
                        <Header />
                        <Inner>
                            {this.props.children}
                        </Inner>
                    </StyledPage>
                </MenuProvider>
            </ThemeProvider>
        );
    }
}
 
export default Page;
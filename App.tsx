import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Routes} from './src/routes/routes';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';
import {Routes} from './src/routes/routes';
import {AuthProvider} from './src/context/AuthContext/AuthContext';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;

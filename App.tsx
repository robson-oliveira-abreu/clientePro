import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { Routes } from './src/routes/routes';
import { AuthProvider } from './src/context/AuthContext/AuthContext';
import { CompanyProvider } from './src/context/CompanyContext/CompanyContext';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <CompanyProvider>
                    <Routes />
                </CompanyProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;

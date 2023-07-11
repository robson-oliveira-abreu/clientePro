import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { Routes } from './src/routes/routes';
import { AuthProvider } from './src/context/AuthContext/AuthContext';
import { CompanyProvider } from './src/context/CompanyContext/CompanyContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App(): JSX.Element {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                        <CompanyProvider>
                            <Routes />
                        </CompanyProvider>
                    </AuthProvider>
                </ThemeProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

export default App;

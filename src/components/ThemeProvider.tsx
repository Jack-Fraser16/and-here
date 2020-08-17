import React, { ReactNode, FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../styles/theme';

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

	return (
		<MuiThemeProvider theme={defaultTheme}>
			{children}
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
	typography: {
		fontFamily: [
			'Open Sans',
    	'-apple-system',
    	'BlinkMacSystemFont',
    	'Segoe UI',
    	'Roboto',
    	'Oxygen',
    	'Ubuntu',
    	'Cantarell',
    	'Fira Sans',
    	'Droid Sans',
    	'Helvetica Neue',
    	'sans-serif'
		].join(','),
		fontSize: 24
	},
	palette: {
		primary: {
			main: '#259ada'
		},
		secondary: {
			main: '#767676'
		}
	}
});

export default defaultTheme
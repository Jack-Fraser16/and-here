import { makeStyles, Theme as defaultTheme} from '@material-ui/core/styles';

export default makeStyles(
	(theme: defaultTheme) => ({
		header: {
			position: 'absolute',
			width: '100%',
			top: '0',
			left: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',

			height: '4em',
			backgroundColor: theme.palette.secondary.main,
			overflow: 'hidden'
		},
		title: {
			fontSize: theme.typography.fontSize
		},
		subtitle: {
		}
	}),
	{ name: 'Header' }
);
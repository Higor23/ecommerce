import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import { SnackbarProvider } from 'notistack';
import App from './containers/App';
import supressNotices from '@/forms/utils/notices';
import PlaceholderDialog from '@/forms/components/PlaceholderDialog/PlaceholderDialog';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
	palette: {
		primary: { main: '#3B88F7' },
		secondary: { main: '#8B8BF9' },
		background: { default: '#FFF' },
		text: {
			primary: '#46494C'
		},
		gradientBg: 'linear-gradient(145.8deg, #B1B1B1 -0.41%, #898989 100%)',
		kaliText: '#46494C',
		// type: 'dark',
	},
	typography: {
		useNextVariants: true,
	},
	overrides: {
		MuiFormControl: {
			root: {
				width: '100%',
				'& #mui-rte-root': {
					marginTop: 25,
				}
			},
		},
		MuiButton: {
			containedSecondary: {
				color: '#fff',
			}
		},
		MuiInputLabel: {
			shrink: {
				fontSize: 14,
				transform: 'scale(1)'
			}
		},
		MuiInputAdornment: {
			positionStart: {
				marginTop: '0 !important'
			},
			positionEnd: {
				position: 'absolute',
				right: 13,
				top: 20,
			},
		},
		MuiInputBase: {
			root: {
				// background: '#fff'
			},
		},
		MuiSelect: {
			select: {
				'&:focus': {
					borderRadius: 4,
					backgroundColor: 'initial',
				}
			}
		},
		MuiExpansionPanelSummary: {
			expandIcon: {
				bottom: 0
			}
		},
		MuiTableCell: {
			footer: {
				borderBottom: 'none',
			}
		},
		MUIRichTextEditor: {
			root: {
				// backgroundColor: "#ebebeb",
				border: '1px solid #e8ebf7',
				borderRadius: 4,
				'&:focus': {
					boxShadow: 'rgba(59, 136, 247, 0.25) 0 0 0 0.2rem',
					borderColor: '#3B88F7',
					outline: 0,
				}
			},
			container: {
				display: "flex",
				flexDirection: "column-reverse"
			},
			editor: {
				// backgroundColor: "#ebebeb",
				padding: "0 20px",
			},
			editorContainer: {
				minHeight: 150,
			},
			toolbar: {
				borderTop: "1px solid #e8ebf7",
				'& .MuiIconButton-root': {
					padding: 10,
				},
				'& .MuiSvgIcon-root': {
					fontSize: '1.2rem',
				},
				// backgroundColor: "#ebebeb"
			},
			placeHolder: {
				// backgroundColor: "#ebebeb",
				paddingLeft: 20,
				width: "inherit"
			},

		},
		MuiChip: {
			outlinedSecondary: {
				borderColor: red[500],
				color: red[500]
			}
		},
		MuiStepIcon: {
			completed: {
				color: green[500] + ' !important'
			}
		},
	}
});

KaliFormsObject.notices = supressNotices();
ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<SnackbarProvider>
			<App />
			<PlaceholderDialog />
		</SnackbarProvider>
	</MuiThemeProvider>,
	document.getElementById('kaliforms-container')
);

import '@scss/main.scss';

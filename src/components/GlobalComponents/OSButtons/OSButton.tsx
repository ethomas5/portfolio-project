import classes from "./os-button-styles/os-button.module.css";

interface Props {
	width?: string | number
	height?: string | number
	children?: React.ReactNode;
}

export default function OSButton({width, height, children}: Props): JSX.Element
export default function OSButton({children}: Props): JSX.Element
export default function OSButton({ width, height, children }: Props) {
	if (width && height) {
		return (
			<button
				style={{ width: `${width}`, height: `${height}` }}
				className={classes.os_button_main}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={classes.os_button_main}>
				{children}
			</button>
		);
	}
}

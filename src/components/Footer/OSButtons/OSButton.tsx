import classes from "./os-button-styles/os-button.module.css";

interface Props {
	image?: string;
	text: string;
}

const handleClick = () => {
	console.log("Click")
}

export default function OSButton({ image, text }: Props) {
	return (
		<button className={classes.start_button_main} onClick={handleClick}>
			<img
				className={classes.logo}
				src={image}
				alt={text}
			/>
			<p className={classes.os_text}>{text}</p>
		</button>
	);
}

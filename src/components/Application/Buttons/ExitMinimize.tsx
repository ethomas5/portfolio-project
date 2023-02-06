import OSButton from "../../GlobalComponents/OSButtons/OSButton";
import classes from "../../../global-styles/application-layout.module.css";

interface Props {
	image: string;
}

export default function ExitMinimize({ image }: Props) {
	return (
		<OSButton
			height='18px'
			width='18px'>
			<img
				className={classes.exit_min_button_image}
				src={image}
				alt='Text'
			/>
		</OSButton>
	);
}

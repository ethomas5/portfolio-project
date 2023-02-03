import OSButton from "../GlobalComponents/OSButtons/OSButton"
import classes from "../GlobalComponents/OSButtons/os-button-styles/os-button.module.css"

interface Props {
  image: string
  text: string
}

export default function StartButton({image, text}: Props) {
  return (
		<div className={classes.start_button}>
			<OSButton>
				<img
					className={classes.logo}
					src={image}
					alt={text}
				/>
				<p className={classes.os_text}>{text}</p>
			</OSButton>
		</div>
  );
}
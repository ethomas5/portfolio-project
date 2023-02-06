import Placeholder from "/images/other_experiences.png"
import classes from "../../../global-styles/application-layout.module.css"

interface Props {
  icon?: string
  name?: string
}

export default function Title({icon, name}: Props) {
  return (
		<div className={classes.title}>
			<img
				className={classes.top_bar_icon}
				src={Placeholder}
				alt='Text'
			/>
			<p>Control Panel</p>
		</div>
  );
}

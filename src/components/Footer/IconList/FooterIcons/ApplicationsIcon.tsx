import FooterIcon from "./FooterIcon";
import Placeholder from "../../../../assets/Placeholder.png";
import classes from "../../../../global-styles/icon-styles.module.css";

export default function ApplicationsIcon() {
	return (
		<div className={classes.all_application_icon}>
			{<FooterIcon image={Placeholder} />}
		</div>
	);
}

import FooterIcon, { FooterIconProps } from "./FooterIcon";
import classes from "../../../../global-styles/icon-styles.module.css";
import { findAllApplications } from "../../../../helper/retrieve-icon-info/fetchInfo";



export default function ApplicationsIcon({handleOnClick}: FooterIconProps) {

	const allApplications = findAllApplications()

	return (
		<div className={classes.all_application_icon}>
			{<FooterIcon text={allApplications?.text} handleOnClick={handleOnClick} image={allApplications?.text} />}
		</div>
	);
}

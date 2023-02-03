import classes from "./footer.module.css"

import OSButton from "../GlobalComponents/OSButtons/OSButton";
import Clock from "./Clock/Clock";
import ThinPipeThing from "./PipeThing/ThinPipeThing";

import FooterIconList from "./IconList/FooterIconList";
import ApplicationsIcon from "./IconList/FooterIcons/ApplicationsIcon";
import StartButton from "./StartButton";

import Placeholder from "../../assets/Placeholder.png"

export default function Footer() {
	return (
		<footer className={classes.main_container}>
			<StartButton image={Placeholder} text="Start"/>
			<ThinPipeThing />
			<ApplicationsIcon /> {/* Using css selectors to render if screen width is below 372px */}
			<FooterIconList />
			<ThinPipeThing />
			<Clock />
		</footer>
	);
}

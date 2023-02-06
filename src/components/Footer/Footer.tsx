import classes from "./footer.module.css"

import Clock from "./Clock/Clock";
import ThinPipeThing from "./PipeThing/ThinPipeThing";

import FooterIconList from "./IconList/FooterIconList";
import ApplicationsIcon from "./IconList/FooterIcons/ApplicationsIcon";
import StartButton from "./StartButton";

import Placeholder from "/images/Placeholder.png"

export interface FooterProps {
	handleOnClick: React.MouseEventHandler<HTMLImageElement>
}

export default function Footer({handleOnClick}: FooterProps) {
	return (
		<footer className={classes.main_container}>
			<StartButton image={Placeholder} text="Start"/>
			<ThinPipeThing />
			<ApplicationsIcon handleOnClick={handleOnClick}/> {/* Using css selectors to render if screen width is below 372px */}
			<FooterIconList handleOnClick={handleOnClick}/> {/* Render if above 372px */}
			<ThinPipeThing />
			<Clock />
		</footer>
	);
}

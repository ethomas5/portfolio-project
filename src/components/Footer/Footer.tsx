import classes from "./footer.module.css"
import OSButton from "./OSButtons/OSButton";
import Clock from "./OSButtons/Clock";
import ThinPipeThing from "./PipeThing/ThinPipeThing";
import FooterIconList from "./IconList/FooterIconList";
import Placeholder from "../../assets/Placeholder.png"

export default function Footer() {
	return (
		<footer className={classes.main_container}>
			<OSButton image={Placeholder} text="Start"/>
			<ThinPipeThing />
			<FooterIconList />
			<ThinPipeThing />
			<Clock />
		</footer>
	);
}

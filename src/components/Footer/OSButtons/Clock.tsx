import { useEffect, useState } from "react";
import { getCurrentTime } from "../../../helper/clock-functions/getCurrentTime";
import classes from "./os-button-styles/os-button.module.css";

export default function Clock() {
	const [time, setTime] = useState(getCurrentTime());

	useEffect(() => {
		setInterval(() => {
			setTime(getCurrentTime());
		}, 1000);
	}, []);

	return (
		<button
			className={classes.clock_button_main + " " + classes.clock_text}>
			{time}
		</button>
	);
}

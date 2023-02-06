import classes from "../../global-styles/application-layout.module.css";
import "../../global-styles/global.css";

import Exit from "../../../public/images/exit.png";
import Minimize from "../../../public/images/minimize.png";
import Maximize from "../../../public/images/maximize.png";

import ExitMinimize from "./Buttons/ExitMinimize";
import Title from "./Title/Title";
import ApplicationContent from "./ApplicationContent/ApplicationContent";
import ApplicationHeader from "./ApplicationContent/ApplicationHeader";
import { ApplicationFormat } from "../../applicationObjectList";

interface Props {
	currApp: ApplicationFormat
}

export default function Application({ currApp }: Props) {

	return (
		<div className={`${classes.base_layout_container} softmicro_border`}>
			<div className={classes.exit_minimize_bar}>
				<Title />

				<div className={classes.all_exit_minimze_buttons}>
					<ExitMinimize image={Minimize} />
					<span className={classes.maximize_button}>
						<ExitMinimize image={Maximize} />
					</span>
					<span className={classes.exit_button}>
						<ExitMinimize image={Exit} />
					</span>
				</div>
			</div>
			<ApplicationHeader appImage={currApp?.image} appName={currApp?.text}/>
			<ApplicationContent>

			</ApplicationContent>
		</div>
	);
}

import classes from "../../global-styles/application-layout.module.css"
import Placeholder from "../../assets/Placeholder.png"
import ExitMinimize from "./Buttons/ExitMinimize";


interface Props {
	icon?: string
	title?: string
}

export default function Application({icon, title}: Props): JSX.Element
export default function Application({icon}: Props): JSX.Element
export default function Application({title}: Props): JSX.Element
export default function Application() {
  return (
		<div className={classes.base_layout_container}>
			<div className={classes.exit_minimize_bar}>
				<ExitMinimize image={Placeholder}/>
			</div>
		</div>
  );
}
import classes from "../../global-styles/application-layout.module.css"

export default function Application() {
  return (
		<div className={classes.base_layout_container}>
			<div className={classes.exit_minimize_bar}>
				<button className={classes.minimize}></button>
				<button className={classes.min}></button>
				<button className={classes.exit}></button>
			</div>
		</div>
  );
}
import classes from "../../../global-styles/application-layout.module.css"

interface Props {
  appName: string | undefined
  appImage: string | undefined
}

export default function ApplicationHeader({appName, appImage}: Props) {
  return (
		<div className={`${classes.application_header} + non_interactive_border`}>
			<p>{appName}</p>
			<img
				className={classes.header_image}
				src={`/images/${appImage}`}
				alt=''
			/>
		</div>
  );
}
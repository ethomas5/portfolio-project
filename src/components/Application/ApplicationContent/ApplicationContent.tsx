import classes from "../../../global-styles/application-layout.module.css"

interface Props {
	children: React.ReactNode
}

export default function ApplicationContent({children}: Props) {
	return <div className={`${classes.main_content} reverse_softmicro_border`}>
		<div className={classes.application_content}>{children}</div>
	</div>;
}

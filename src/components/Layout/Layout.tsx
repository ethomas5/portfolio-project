import classes from "./layout-styles/layout.module.css"

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<div className={classes.background}>
      {children}
		</div>
	);
}

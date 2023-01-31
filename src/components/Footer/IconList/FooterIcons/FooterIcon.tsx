import classes from "../../../../global-styles/icon-styles.module.css";

interface Props {
	image: string;
}

export default function FooterIcon({ image }: Props) {
	return (
		<img
			className={classes.footer_image}
			src={image}
			alt=''
		/>
	);
}

import classes from "../../../../global-styles/icon-styles.module.css";

export interface FooterIconProps {
	image?: string | undefined;
	handleOnClick: React.MouseEventHandler<HTMLElement>
	text?: string | undefined
}

export default function FooterIcon({ image, handleOnClick, text }: FooterIconProps) {

	return (
		<img
			onClick={handleOnClick}
			className={classes.footer_image}
			src={image}
			alt={text}
		/>
	);
}

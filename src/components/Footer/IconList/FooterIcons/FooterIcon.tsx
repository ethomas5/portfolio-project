import classes from "./footer-icon.module.css"

interface Props {
  image: string
}

export default function FooterIcon({ image }: Props) {
  return <img className={classes.image} src={image} alt="" />
}

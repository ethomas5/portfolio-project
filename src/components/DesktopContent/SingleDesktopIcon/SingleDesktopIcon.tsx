import classes from "../../../global-styles/icon-styles.module.css"

interface Props {
  image: string
  text: string
}

export default function SingleDesktopIcon({image, text}: Props) {
  return <div className={classes.desktop_icon}>
    <img className={classes.desktop_icon_image} src={`/src/assets/${image}`} alt={text} />
    <p>{text}</p>
  </div>
}
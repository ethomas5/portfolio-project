import classes from "../../../global-styles/icon-styles.module.css"
import { FooterIconProps } from "../../Footer/IconList/FooterIcons/FooterIcon"

export default function SingleDesktopIcon({image, text, handleOnClick}: FooterIconProps) {

  const handleDoubleClick = () => {
    handleOnClick

  }

  return <div className={classes.desktop_icon}>
    <img onDoubleClick={handleOnClick} className={classes.desktop_icon_image} src={`/images/${image}`} alt={text} />
    <p>{text}</p>
  </div>
}
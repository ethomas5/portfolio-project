import { getApplicationList } from "../../../helper/retrieve-icon-info/fetchInfo"
import SingleDesktopIcon from "../SingleDesktopIcon/SingleDesktopIcon"
import classes from "../../../global-styles/icon-list.module.css"
import { FooterProps } from "../../Footer/Footer"

export default function DesktopIcons({handleOnClick}: FooterProps) {
  const icons = getApplicationList()

  const iconList = icons.map(item => {
    return <SingleDesktopIcon key={item.text} image={item.image} text={item.text} handleOnClick={handleOnClick}/>
  })
  
  return <div className={classes.desktop_icon_list}>{iconList}</div>;
}
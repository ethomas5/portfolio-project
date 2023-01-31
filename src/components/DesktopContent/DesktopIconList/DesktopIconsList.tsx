import { getApplicationList } from "../../../helper/retrieve-icon-info/fetchInfo"
import SingleDesktopIcon from "../SingleDesktopIcon/SingleDesktopIcon"
import classes from "../../../global-styles/icon-list.module.css"

export default function DesktopIcons() {
  const icons = getApplicationList()

  const iconList = icons.map(item => {
    return <SingleDesktopIcon key={item.text} image={item.image} text={item.text}/>
  })
  
  return <div className={classes.desktop_icon_list}>{iconList}</div>;
}
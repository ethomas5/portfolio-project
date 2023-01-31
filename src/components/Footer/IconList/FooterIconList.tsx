import FooterIcon from "./FooterIcons/FooterIcon";
import classes from "../../../global-styles/icon-list.module.css"
import { getApplicationList } from "../../../helper/retrieve-icon-info/fetchInfo";

export default function FooterIconList() {
  const iconInfo = getApplicationList()

  const images = iconInfo.map((item) => {
		return <FooterIcon key={item.text} image={`/src/assets/${item.image}`}/>
  });

  return <div className={classes.icon_list}>
    {images}
  </div>
}
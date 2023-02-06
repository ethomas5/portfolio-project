import FooterIcon from "./FooterIcons/FooterIcon";
import classes from "../../../global-styles/icon-list.module.css"
import { getApplicationList } from "../../../helper/retrieve-icon-info/fetchInfo";
import { FooterProps } from "../Footer";

export default function FooterIconList({handleOnClick}: FooterProps) {
  const iconInfo = getApplicationList()

  const images = iconInfo.map((item) => {
		return <FooterIcon handleOnClick={handleOnClick} key={item.text} text={item.text} image={`/images/${item.image}`}/>
  });

  return <div className={classes.icon_list}>
    {images}
  </div>
}
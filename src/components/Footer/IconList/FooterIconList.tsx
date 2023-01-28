import { Fragment } from "react";
import { applicationList } from "./applicationObjectList";
import FooterIcon from "./FooterIcons/FooterIcon";
import Placeholder from "../../../assets/Placeholder.png"
import classes from "./icon-list-styles/icon-list.module.css"

export default function FooterIconList() {

  const images = applicationList.map((item) => {
		return <FooterIcon key={item.id} image={Placeholder}/>
  });

  return <div className={classes.icon_list}>
    {images}
  </div>
}
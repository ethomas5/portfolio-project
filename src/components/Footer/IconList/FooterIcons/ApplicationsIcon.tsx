import FooterIcon from "./FooterIcon";
import Placeholder from "../../../../assets/Placeholder.png"
import classes from "./footer-icon.module.css"

export default function ApplicationsIcon() {
  return <div className={classes.application_icon}>
    {<FooterIcon image={Placeholder}/>}
  </div>
}
import OSButton from "../../GlobalComponents/OSButtons/OSButton"
import classes from "../../../global-styles/application-layout.module.css"

interface Props {
  image: string
}

export default function ExitMinimize({image}: Props) {
  return ( <OSButton height="10px" width="10px">
    <img className={classes.exit_min_buttons} src={image} alt="Text" />
  </OSButton>
  )
}
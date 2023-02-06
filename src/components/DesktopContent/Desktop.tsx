import { getSpecificApp } from "../../helper/retrieve-icon-info/fetchInfo"
import Application from "../Application/ApplicationLayout"
import DesktopIcons from "./DesktopIconList/DesktopIconsList"
import classes from "./desktop.module.css"

interface Props {
  currApp: string
  handleOnClick: React.MouseEventHandler<HTMLElement>
}

export default function Desktop({currApp, handleOnClick}: Props) {

  const currentApplication = getSpecificApp(currApp);

  return (
    <main className={classes.desktop}>
      <DesktopIcons handleOnClick={handleOnClick}/>
      <Application currApp={currentApplication}/>
    </main>
  )
}
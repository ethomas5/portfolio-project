import DesktopIcons from "./DesktopIconList/DesktopIconsList"
import classes from "./desktop.module.css"

export default function Desktop() {
  return (
    <main className={classes.desktop}>
      <DesktopIcons />
    </main>
  )
}
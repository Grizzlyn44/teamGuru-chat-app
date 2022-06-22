import SvgIcon from "components/Core/SvgIcon/SvgIcon"
import styles from "styles/components/Messages/LeftDrawer.module.scss"

const LeftDrawer = () => {
    return (
        <div className={styles.mainContainer}>
            
        <div className={styles.header}>
            <SvgIcon icon={icons => icons.chatdetails()} width={"3rem"} height={"3rem"} />
            text
        </div>

        </div>
    )
}

export default LeftDrawer
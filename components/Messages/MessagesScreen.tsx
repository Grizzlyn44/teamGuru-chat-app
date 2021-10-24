import LeftDrawer from "components/Messages/LeftDrawer"
import Content from "components/Messages/Content"
import RightDrawer from "components/Messages/RightDrawer"
import styles from "styles/components/Messages/Main.module.scss"

const MessagesScreen = () => {
    return (
        <div className={styles.layout}>
            <LeftDrawer />
            <Content />
            <RightDrawer />
        </div>
    )
}

export default MessagesScreen
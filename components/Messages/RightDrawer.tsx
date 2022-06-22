import SvgIcon from "components/Core/SvgIcon/SvgIcon"
import styles from "styles/components/Messages/RightDrawer.module.scss"

const RightDrawer = () => {
    return (
        <div className={styles.mainContainer}>
            
        <div className={styles.header}>
            <div className={styles.headerLeft}>
            <SvgIcon icon={icons => icons.chatdetails()} width={"1.25rem"} height={"1.25rem"} />
            <span>Chat details</span>
            </div>
            <SvgIcon icon={icons =>icons.closebutton()} width={"2.2rem"} height={"2.2rem"} />
        </div>

        <div className={styles.section}>
            <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderLeft}>
                <span className={styles.name}>Members</span> <span className={styles.numbers}>8</span>
            </div>
                <SvgIcon icon={icons => icons.arrowdown()} width={"3rem"} height={"3rem"} />
            </div>
            <div className={styles.membersInner}>
                <div className={styles.member}>
                    <div className={styles.memberLeft}>
                        <img className={styles.profilePic} src="https://vanishingportrait.com/wp-content/uploads/2019/05/tiffanytrenda-vanishingportrait-identity.jpg"></img>
                        <span>Jennifer Taylor</span>
                        </div>
                    <div className={styles.memberRight}>
                        <SvgIcon icon={icons => icons.callicon()} width={"3rem"} height={"3rem"} />
                        <SvgIcon icon={icons => icons.messageicon()} width={"3rem"} height={"3rem"} />
                    </div>
                </div>
                <div className={styles.member}>
                    <div className={styles.memberLeft}>
                    <img className={styles.profilePic} src="https://zivotvcesku.cz/wp-content/uploads/optimg/2020/12/1c23e9c141a39bc244493fef8d00afe8a07ff16c-w680-h382.jpg"></img>
                    <span>Alan Harper</span>
                    </div>
                    <div className={styles.memberRight}>
                    <SvgIcon icon={icons => icons.calltransparent()} width={"3rem"} height={"3rem"} />
                    <SvgIcon icon={icons => icons.messageicon()} width={"3rem"} height={"3rem"} />
                    </div>
                </div>
                <div className={styles.member}>
                    <div className={styles.memberLeft}>
                    <img className={styles.profilePic} src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/charlie_2.jpg"></img>
                    <span>Charles Francis</span>
                    </div>
                    <div className={styles.memberRight}>
                    <SvgIcon icon={icons => icons.messageicon()} width={"3rem"} height={"3rem"} />
                    </div>
                </div>


            </div>


        </div>
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionHeaderLeft}>
                <span className={styles.name}>Media</span> <span className={styles.numbers}>6487</span>
                </div>
                <SvgIcon icon={icons => icons.arrowdown()} width={"3rem"} height={"3rem"} />
            </div>
            <div className={styles.mediaItems}>
            <img className={styles.mediaPic} src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/charlie_2.jpg"></img>
            <img className={styles.mediaPic} src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/charlie_2.jpg"></img>
            <img className={styles.mediaPic} src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2013/09/charlie_2.jpg"></img>
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionHeaderLeft}>
                <span className={styles.name}>Tasks</span> <span className={styles.numbers}>19</span>
                </div>
                <SvgIcon icon={icons => icons.arrowdown()} width={"3rem"} height={"3rem"} />

            </div>
        </div>
        </div>
    )
}

export default RightDrawer
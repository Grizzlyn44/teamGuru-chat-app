import React from "react"

interface Props {
    loggedIn: boolean;
}

const Navigation = (props:Props) => {

    <header className="navigation-main">

        <div className="navigation-main__left">
            <div className="navigation-main__logo"><span>Team GURU</span></div>
            <div className="navigation-main__links">
                <a href="#">Secteurs</a>
                <a href="#">Notre équipe</a>
                <a href="#">Notre solution</a>
            </div>
        </div>

        <div className="navigation-main__right">
            <a href="#">Some button</a>
        </div>

    </header>

}

export default Navigation
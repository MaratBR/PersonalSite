import React from "react"
import ContentContainer from "../common/content-container"
import texts from "../../resources/texts.json"

export default function About() {
    return <ContentContainer>

        <div className="primary">
            {texts.about.split(/\n+/).map(t => <p>{t}</p>)}
        </div>

        <div className="secondary">
            <img src="https://i.pinimg.com/236x/8c/cb/14/8ccb14f08b8bc959ac99da8c22a57414--hunger-games-movies-the-hunger-games.jpg" alt=""/>
        </div>

    </ContentContainer>
}
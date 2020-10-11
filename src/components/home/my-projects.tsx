import React from "react"
import Project from "./project"
import PhoneImage from "../common/phone-image"
import ContentContainer from "../common/content-container"

type MyProjectsState = {
    isLoading: boolean
}


class MyProjects extends React.Component<{}, MyProjectsState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.setState({
            isLoading: true
        })
    }
    
    render() {
        return <section className="section my-projects">
            <Project 
                noPaddingAtBottom={true} 
                name="GeneralTrans" 
                bg="#333" 
                gradientColor="black"
                tags={["android", "kotlin"]}>
                <ContentContainer noBottomPadding={true}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsa, quibusdam animi incidunt maiores pariatur debitis illum, et laboriosam ab blanditiis, perferendis velit dolores dolorem autem quasi amet tenetur quod!</p>
                    <div style={{height: "250px", overflow: "hidden"}}>
                        <PhoneImage src={require("../../assets/generaltrans.jpg")} width="260px" />
                    </div>
                </ContentContainer>
            </Project>
        </section>
    }
}

export default MyProjects
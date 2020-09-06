import React from "react"
import "./my-projects.tsx.scss"
import Project from "./project"

class MyProjects extends React.Component {
    render() {
        return <section className="section my-projects">
            <Project 
                noPaddingAtBottom={true} 
                name="GeneralTrans" 
                bg="#333" 
                gradientColor="black"
                tags={["mobile", "android", "kotlin"]}>
                <div className="content-block content-block--end nopadding">
                    <div className="primary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nostrum veritatis pariatur, quas assumenda vero nobis omnis iusto est ab ipsum fuga placeat corrupti excepturi dolorem neque reprehenderit cupiditate asperiores.
                    </div>

                    <div className="secondary generaltrans-phone-container">
                        <div className="generaltrans-phone">
                        <div className="generaltrans-phone__app"></div>
                            <div className="generaltrans-phone__frame"></div>
                        </div>
                    </div>
                </div>
            </Project>
        </section>
    }
}

export default MyProjects
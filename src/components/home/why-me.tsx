import React from "react"
import "./why-me.tsx.scss"
import Features from "../common/features"
import Feature from "../common/feature";
import texts from "../../resources/texts.json"

class WhyMe extends React.Component  {
    render() {
        return <section className="why-me section">
        <div className="section__content">
            <Features>
                {
                    texts.features.map((r, i) => {
                        return <Feature key={i} title={r.title} text={r.description} faIconClasses={`${r.icon} fa-6x`} />
                    })
                }
            </Features>
        </div>
    </section>;
    }
}

export default WhyMe;
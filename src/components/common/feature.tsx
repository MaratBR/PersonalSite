import React from "react"
const styles = require("../../styles/components/feature.module.scss");
import { setupAnimationOnMouseOver } from "../../utils/ui";

type FeatureProps = {
    faIconClasses?: string,
    title?: string,
    text?: string
}

export default class Feature extends React.Component<FeatureProps> {
    private rootRef = React.createRef<HTMLDivElement>()
    
    componentDidMount() {
        setupAnimationOnMouseOver(this.rootRef.current)
    }


    render() {
        return <div className={styles.feature} ref={this.rootRef}>
            {this.props.children || [
                <i className={`${styles.featureIcon} ${this.props.faIconClasses}`} />,
                <h3>{this.props.title}</h3>,
                <p>{this.props.text}</p>
            ]}
        </div>
    }
}
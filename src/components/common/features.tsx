import React from "react"
const styles = require("../../styles/components/feature.module.scss");

export default class Features extends React.Component {

    render() {
        return <div className={styles.features}>
            {this.props.children}
        </div>
    }
}
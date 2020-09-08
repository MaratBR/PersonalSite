import React, { CSSProperties } from "react"
const styles = require("../../styles/components/content-container.module.scss");
const {container} = require("../../styles/components/container.module.scss");


type ContentContainerProps = {
    reversed?: boolean,
    wide?: boolean,
    noBottomPadding?: boolean
}

export default class ContentContainer extends React.Component<ContentContainerProps> {

    render() {
        const style: CSSProperties = {}
        if (this.props.noBottomPadding)
            style.paddingBottom = "0"
        return <div className={`${styles.container} ${!this.props.wide ? container : ""}`} style={style}>
            {this.props.children}
        </div>
    }
}
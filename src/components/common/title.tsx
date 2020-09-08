import React from "react"
import { Alignment, justifyContent } from "./css-utils";
const styles = require("../../styles/components/title.module.scss");

type TitleProps = {
    underline?: boolean,
    align?: Alignment
}

export default class Title extends React.Component<TitleProps> {
    render() {
        return <div className={[
                styles.container,
                justifyContent(this.props.align)
            ].join(" ")}>
            <h1 className={
                styles.title + 
                (this.props.underline ? (" " + styles.underline) : "")}>
                {this.props.children}
            </h1>
        </div>
    }
}
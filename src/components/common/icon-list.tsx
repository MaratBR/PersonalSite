import React from "react"
import { Alignment, justifyContent, direction, Direction } from "./css-utils"
const styles = require("../../styles/components/icon-list.module.scss")

type IconListProps = {
    align?: Alignment
    direction?: Direction
}

export default class IconList extends React.Component<IconListProps> {
    render() {
        return <ul className={`${styles.iconList} ${justifyContent(this.props.align)} ${direction(this.props.direction)}`}>
            {this.props.children}
        </ul>
    }
}


type IconProps = {
    scaleAnimation?: boolean,
    faClasses?: string,
    href?: string
}


export class Icon extends React.Component<IconProps> {
    render() {
        return <a href={this.props.href} className={styles.icon}>
            {this.props.children || <i className={this.props.faClasses} />}
        </a>
    }
}
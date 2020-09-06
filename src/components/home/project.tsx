import React, { CSSProperties } from "react"
import "./project.tsx.scss"
import { getTextColorForHexColor } from "../../utils/color"


const TAGS = {
    kotlin: {
        color: '#FF4500'
    },
    android: {
        color: '#3DDC84'
    }
}

type ProjectProps = {
    name: string,
    bg: string,
    accent: string,
    tags: string[],
    noPaddingAtBottom?: boolean,
    gradientColor?: string
}


export default class Project extends React.Component<ProjectProps> {
    get tagsElements() {
        if (!this.props.tags)
            return []
        return this.props.tags.map(tag => {
            const tagMeta = TAGS[tag]
            const style: any = {}
            if (tagMeta) {
                style.backgroundColor = tagMeta.color
                style.color = getTextColorForHexColor(tagMeta.color)
            }
            return <span className="badge" style={style}>
                {tag}
            </span>
        })
    }

    render() {

        const style: CSSProperties = {
            backgroundColor: this.props.bg, 
            color: getTextColorForHexColor(this.props.bg)
        }

        if (this.props.gradientColor)
            style.backgroundImage = `linear-gradient(45deg, ${this.props.gradientColor}, transparent)`
        return <div className={"project" + (this.props.noPaddingAtBottom ? " project--nopaddingbottom" : "")} aria-label={this.props.name} style={style}>
            <div className="container1500">
                <div className="project__name">
                    {this.props.name}
                    {this.tagsElements}
                </div>
                {this.props.children}
            </div>
        </div>
    }
}
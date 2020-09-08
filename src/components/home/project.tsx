import React, { CSSProperties } from "react"
import { getTextColorForHexColor } from "../../utils/color"
import { HEADER_MARGIN, FONT_SIZE_2EM, NOSELECT } from "../common/css-utils"


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
    accent?: string,
    tags?: string[],
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
        return <div className={"" + (this.props.noPaddingAtBottom ? " project--nopaddingbottom" : "")} aria-label={this.props.name} style={style}>
            <div className="container">
                <div className={`${HEADER_MARGIN} ${FONT_SIZE_2EM} ${NOSELECT}`}>
                    <span className="title">{this.props.name}</span>
                    {this.tagsElements}
                </div>
                {this.props.children}
            </div>
        </div>
    }
}
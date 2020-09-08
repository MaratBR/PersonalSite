import React from "react"
const styles = require("../../styles/components/phone-image.module.scss")

type PhoneImageProps = {
    src: string,
    width?: string,
    phoneWidth?: string,
    phoneHeight?: string
}

export default class PhoneImage extends React.Component<PhoneImageProps> {
    render() {
        return <div className={styles.smartphone} style={{width: this.props.phoneWidth, height: this.props.phoneHeight}}>
            <div className={styles.content}>
                <img src={this.props.src} alt="" width={this.props.width || '300px'} />
            </div>
        </div>
    }
}
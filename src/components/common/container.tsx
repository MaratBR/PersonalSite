import React from "react"
const {container} = require("../../styles/components/container.module.scss")

export default function Container({children, className=null}) {
    return <div className={`${container} ${className || ''}`}>
        {children}
    </div>
}
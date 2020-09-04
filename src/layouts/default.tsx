import React from "react"
import "./default.scss"

export default function DefaultLayout({children}) {
    return <div className="layout layout--default">
        {children}
    </div>
}
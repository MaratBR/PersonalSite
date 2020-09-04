import React from "react"
import "./default.scss"

export default function DefaultLayout({children}) {
    return <div class="layout layout--default">
        {children}
    </div>
}
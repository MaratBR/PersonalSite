import React from "react"
import "./default.scss"
import { ParallaxProvider } from 'react-scroll-parallax';

export default function DefaultLayout({children}) {
    return <ParallaxProvider>
        <div className="layout layout--default">
            {children}
        </div>
    </ParallaxProvider>
}
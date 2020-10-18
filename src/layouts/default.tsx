import React from "react"
import "./default.scss"
import { ParallaxProvider } from 'react-scroll-parallax'
import SiteFooter from "../components/common/footer"
import Helmet from "react-helmet"

export default function DefaultLayout({children, title}) {
    return <ParallaxProvider>
        <div className="layout layout--default">
            <Helmet>
                <title>Марат Бурнаев</title>
            </Helmet>
            {children}
            
            <SiteFooter />
        </div>
    </ParallaxProvider>
}
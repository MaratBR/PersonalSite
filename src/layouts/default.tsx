import React from "react"
import "./default.scss"
import { ParallaxProvider } from 'react-scroll-parallax';
import SiteFooter from "../components/common/footer";

export default function DefaultLayout({children}) {
    return <ParallaxProvider>
        <div className="layout layout--default">
            {children}

            <SiteFooter />
        </div>
    </ParallaxProvider>
}
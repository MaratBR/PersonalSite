import React from "react"
import "../styles/global.scss"

import DefaultLayout from "../layouts/default"
import WelcomeScreen from "../components/home/welcome-screen"
import WhyMe from "../components/home/why-me"
import MyProjects from "../components/home/my-projects"
import About from "../components/home/about"
import ContactMe from "../components/home/contact-me"

export default function Home() {
  return <DefaultLayout>
      <WelcomeScreen />
      <WhyMe />
      <About />
      <MyProjects />

      <ContactMe />

  </DefaultLayout>
}
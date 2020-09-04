import React from "react"
import "../styles/global.scss"

import DefaultLayout from "../layouts/default"
import WelcomeScreen from "../components/home/welcome-screen"

export default function Home() {
  return <DefaultLayout>
      <WelcomeScreen />
  </DefaultLayout>
}
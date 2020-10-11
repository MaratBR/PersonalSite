import React from "react"
import Container from "../common/container"
import Title from "../common/title"
import ContactMe from "../home/contact-me"
const styles = require('../../styles/components/about.module.scss');

export default function About() {
    return <Container>
        <Title align="center" underline>Обо мне</Title>

        <div className={styles.aboutText}>
            <p>Привет! Меня зовут Марат, я студент.</p>
            <p>
                Программирование является моим увлечением вот уже 4 года. Я позиционирую себя как программиста полного стека. 
                У меня есть опыт разработки Android приложений на Kotlin, Веб-API на ASP.NET Core и веб-приложений на Python 
                (Django, Flask), классических приложений для Windows с исползованием WPF.
            </p>
        </div>

        <ContactMe />

    </Container>
}
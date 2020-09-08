import React from "react"
import IconList, { Icon } from "../common/icon-list"
import Container from "../common/container"
import Title from "../common/title"

export default class ContactMe extends React.Component {
    render() {
        return <Container className="contact-me">
            <Title align="center" underline={true}>Свяжитесь со мной</Title>

            <IconList align="center">
                <Icon faClasses="fas fa-envelope fa-2x" href="mailto:marat01q@gmail.com" />
                <Icon faClasses="fab fa-vk fa-2x" href="https://vk.com/yet_another_dude" />
            </IconList>
        </Container>
    }
}
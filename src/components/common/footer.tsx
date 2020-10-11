import React from "react"
const styles = require("../../styles/components/footer.module.scss");

export default class SiteFooter extends React.Component {
    render() {
        return <footer className={styles.footer}>
            <span>&copy; Бурнаев Марат, все права защищены</span>
        </footer>
    }
}
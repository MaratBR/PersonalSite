import React from "react"
import Features from "../common/features"
import Feature from "../common/feature";
const styles = require("../../styles/components/why-me.module.scss");

class WhyMe extends React.Component  {
    render() {
        return <section className={styles.whyMe}>
        <Features>
            <Feature title="Мобильная разработка" text="Разработка мобильных приложений под Android с бэкэндом или без" faIconClasses="fas fa-mobile-alt fa-6x" />
            <Feature title="Классические приложения" text="Приложения под Windows с использованием WPF" faIconClasses="fas fa-desktop fa-6x" />
            <Feature title="Веб" text="Разработка веб-сайтов и веб-API на PHP, Python, ASP.NET" faIconClasses="fas fa-external-link-alt fa-6x" />
            <Feature title="Базы данных" text="Проектирование и создание SQL/NoSQL баз данных" faIconClasses="fas fa-database fa-6x" />
        </Features>
    </section>;
    }
}

export default WhyMe;
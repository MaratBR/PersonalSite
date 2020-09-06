import React from "react"
import "./why-me.tsx.scss"


const WhyMe: React.FunctionComponent = () => {
    return <section className="why-me section">
        <div className="section__content">
            <div className="features">
                <div className="feature">
                    <i className="fas fa-mobile-alt fa-6x"></i>
                    <h3>Мобильная разработка</h3>
                    <p>Разработка мобильных приложений под Android с бэкэндом или без</p>
                </div>

                <div className="feature">
                    <i className="fas fa-desktop fa-6x"></i>
                    <h3>Десктоп</h3>
                    <p>Приложения под Windows с использованием WPF</p>
                </div>

                <div className="feature">
                    <i className="fas fa-external-link-alt fa-6x"></i>
                    <h3>Веб</h3>
                    <p>Разработка веб-приложений и веб-API на ASP.NET, Python, PHP</p>
                </div>

                <div className="feature">
                    <i className="fas fa-database fa-6x"></i>
                    <h3>Базы данных</h3>
                    <p>Проектирование и создание SQL/NoSQL баз данных</p>
                </div>
            </div>
        </div>
        <div className="why-me__item"></div>
        <div className="why-me__item"></div>
    </section>;
}

export default WhyMe;
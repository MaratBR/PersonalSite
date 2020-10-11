import React from "react"
const styles = require('../styles/components/404.module.scss');

type NotFoundState = {
    url?: string,
    height?: number,
    width?: number
}

export default class Home extends React.Component<{}, NotFoundState> {
    state: NotFoundState = {}

    componentDidMount() {
        fetch('https://api.thecatapi.com/v1/images/search?size=tiny')
            .then(r => r.json())
            .then(d => d[0])
            .then(({height, width, url}) => {
                if (height > 600) {
                    width *= 600/height;
                    height = 600
                } else if (width > 600) {
                    height *= 600/width;
                    width = 600
                }
                this.setState({height, width, url})
            })
    }

    
    render() {
        return <div className={styles.notFound}>
            <h1>404: Страница не найдена</h1>
            <p>Страница, которую вы ищете не существует, но вот случайное фото коти (Предоставлено <a href="https://thecatapi.com">thecatapi.com</a>):</p>
            <div className={styles.image}>
                <img src={this.state.url} alt={this.state.url} height={this.state.height} width={this.state.width} />
            </div>
            <br/>
            <a href="/">На главную</a>
        </div>
    }
}
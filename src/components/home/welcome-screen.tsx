import React from "react"
import "./welcome-screen.tsx.scss"

const TEXTS = [
    'Android и Web разработчик',
    'студент',
    'пишу код',
    'устал',
    'просто гусь'
]

type WelcomeScreenState = {
    text: string,
    textIndex: number,
    textAppears: boolean,
    emptyTicks: number
}

export default class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
    state = {
        text: TEXTS[0],
        textIndex: 0,
        textAppears: false,
        emptyTicks: 0
    }

    componentDidMount() {
        setTimeout(this.startNextWord.bind(this), 4000)
    }

    startNextWord() {
        const textIndex = this.state.textIndex >= TEXTS.length - 1 ? 0 : this.state.textIndex + 1
        this.setState({textIndex})
        this.letterTick()
    }

    letterTick() {
        const currentText = this.state.text
        const index = this.state.textIndex
        const appears = this.state.textAppears
        if (currentText === TEXTS[index]) {
            // Text is now complete, we can skip the rest
            if (appears)
                this.setState({textAppears: false})
            this.onTextComplete()
            return
        } else if (currentText === '') {
            if (!appears)
                this.setState({textAppears: true})
        }
        if (appears) {
            this.setState({
                text: currentText + TEXTS[index].charAt(currentText.length)
            })
        } else {
            this.setState({
                text: currentText.substring(0, currentText.length - 1)
            })
        }

        setTimeout(this.letterTick.bind(this), 60)
    }

    onTextComplete() {
        setTimeout(this.startNextWord.bind(this), 4000)
    }

    componentWillUnmount() {

    }

    render() {
        return <div className="welcome-screen">
            <div className="welcome-screen__title">
                <span className="welcome-screen__title__text">
                    &mdash; <em>Марат Бурнаев</em> &mdash; 
                </span>
                <span>
                    Я {this.state.text}
                    <span className="welcome-screen__title__blinker" />
                </span>
            </div>

            <div className="welcome-screen__avatar"></div>

            <div className="welcome-screen__hint-arrow">
                <svg viewBox="0 0 100 25" width="100" height="25">
                    <line x1="0" x2="50" y1="0" y2="25" />
                    <line x1="50" x2="100" y1="25" y2="0" />
                </svg>
            </div>

            <svg className="welcome-screen__waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L30,208C60,192,120,160,180,138.7C240,117,300,107,360,133.3C420,160,480,224,540,229.3C600,235,660,181,720,149.3C780,117,840,107,900,128C960,149,1020,203,1080,202.7C1140,203,1200,149,1260,117.3C1320,85,1380,75,1410,69.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </div>
    }
}
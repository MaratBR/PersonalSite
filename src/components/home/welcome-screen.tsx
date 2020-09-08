import React from "react"
import { Parallax } from "react-scroll-parallax"
const styles = require("../../styles/components/welcome.module.scss")
import texts from "../../resources/texts.json"

const TEXTS = texts.typingTexts

type WelcomeScreenState = {
    text: string,
    textIndex: number,
    textAppears: boolean,
    emptyTicks: number,
    scrollState: number
}

export default class WelcomeScreen extends React.Component<{}, WelcomeScreenState> {
    state = {
        text: TEXTS[0],
        textIndex: 0,
        textAppears: false,
        emptyTicks: 0,
        scrollState: 0
    }
    handler = null 
    rootRef: React.RefObject<HTMLDivElement> = React.createRef()
    welcomeTitleBottomRef: React.RefObject<HTMLElement> = React.createRef()
    typingEnabled = true

    componentDidMount() {
        setTimeout(this.startNextWord.bind(this), 4000)
        this.handler = this.onPageScroll.bind(this)
        window.addEventListener('scroll', this.handler)
        this.onPageScroll()
    }

    startNextWord() {
        if (!this.typingEnabled) {
            return
        }
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
        if (this.typingEnabled)
            setTimeout(this.startNextWord.bind(this), 4000)
    }

    onPageScroll() {
        const root = this.rootRef.current
        const bottomEl = this.welcomeTitleBottomRef.current
        if (root && bottomEl) {
            const rect = root.getBoundingClientRect()
            const bottomRect = bottomEl.getBoundingClientRect()

            const state = bottomRect.y < 50 ? 2 :
                rect.y < -150 ? 1 : 0
            if (this.state.scrollState !== state) {
                this.setState({scrollState: state})
                const typingEnabled = state !== 2
                if (typingEnabled !== this.typingEnabled) {
                    this.typingEnabled = typingEnabled
                    if (this.typingEnabled) {
                        this.onTextComplete()
                    }
                }
            }
        }
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handler)
    }

    get scrollState() {
        return this.state.scrollState === 0 ? "" :
            this.state.scrollState === 1 ? styles.scrolledDownState : `${styles.scrolledDownState} ${styles.hiddenState}`
    }

    render() {
        return <div 
            className={`${styles.root} ${this.scrollState}`} 
            ref={this.rootRef}>
            <Parallax y={[-50, 50]}>
                <div className={styles.title}>
                    <span className={`${styles.typingText} title`}>
                        &mdash; <em>{texts.myName}</em> &mdash; 
                    </span>
                    <span ref={this.welcomeTitleBottomRef} aria-label={TEXTS[0]}>
                        Я {this.state.text}
                        <span className={styles.blinker} />
                    </span>
                </div>
            </Parallax>

            <div className={styles.hintArrow}>
                <svg viewBox="0 0 100 25" width="100" height="25">
                    <line x1="0" x2="50" y1="0" y2="25" />
                    <line x1="50" x2="100" y1="25" y2="0" />
                </svg>
            </div>

        </div>
    }
}
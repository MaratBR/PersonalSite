const ANIMATED_CONTAINERS = []

type AnimatedElement = {
    el: HTMLElement,
    maxDegree: number,
    counter: number,
    active: boolean
}

function onMouseMoveOnContainer(this: AnimatedElement, event: MouseEvent) {
    if (this.counter <= 10) {
        this.counter++
        return
    }
    this.counter = 0
    const rect = this.el.getBoundingClientRect()


    const xDiff = event.clientX - (rect.left + Math.floor(rect.width/2))
    const yDiff = (event.clientY - (rect.top + Math.floor(rect.height/2))) * -1

    const xDeg = (xDiff / rect.width / 2).toFixed(2)
    const yDeg = (yDiff / rect.height / 2).toFixed(2)
    const style = "rotateX(" + yDeg + "deg) rotateY(" + xDeg + "deg)"
    this.el.style.transform = style
}

function onMouseLeftContainer(this: AnimatedElement) {
    this.active = false
    setTimeout(() => {
        if (!this.active)
            this.el.style.transform = ""
    }, 500)
}

function onMouseEnterOnContainer(this: AnimatedElement) {
    this.active = true
}

export function setupAnimationOnMouseOver(container: HTMLElement) {
    if (ANIMATED_CONTAINERS.indexOf(container) !== -1)
        return
    const animEl: AnimatedElement = {
        el: container,
        maxDegree: 0.5,
        counter: 0,
        active: false
    }
    container.parentElement.style.perspective = "45px"

    container.addEventListener('mousemove', onMouseMoveOnContainer.bind(animEl))
    container.addEventListener('mouseenter', onMouseEnterOnContainer.bind(animEl))
    container.addEventListener('mouseleave', onMouseLeftContainer.bind(animEl))
}


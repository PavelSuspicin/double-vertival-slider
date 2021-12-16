const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const slidersLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidersLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidersLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidersLength - 1
        }
    }
    rightSlide.style.transform = `translateY(${-activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

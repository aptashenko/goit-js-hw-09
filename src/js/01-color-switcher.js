const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    resetBtn: document.querySelector('[data-reset]'),
    getColor: ()=>`#${Math.floor(Math.random() * 16777215).toString(16)}`,
}
const { resetBtn, bodyEl, startBtn, stopBtn, getColor } = refs;

const bodyBackground = localStorage.getItem('bodyBackground');


bodyBackground
    ? bodyEl.style.background = bodyBackground
    : resetBtn.removeAttribute('disabled');
    
const colorChanger = {
    intervalId: null,
    isActive: false,
    bodyColor: null,
    colorChange(e) {
        if (e.target.dataset.start === '') {
            if (this.isActive) {
                return
            } else {
                this.isActive = true;
                e.target.setAttribute('disabled', true)
                this.intervalId = setInterval(() => {
                    this.bodyColor = getColor();
                    bodyEl.style.background = this.bodyColor;
                    localStorage.setItem('bodyBackground', this.bodyColor);
                }, 1000)
                stopBtn.removeAttribute('disabled');
                resetBtn.removeAttribute('disabled');
            }
        } else if (e.target.dataset.stop === '') {
            this.isActive = false;
            clearInterval(this.intervalId);
            startBtn.removeAttribute('disabled');
            e.target.setAttribute('disabled', true)
        } else if (e.target.dataset.reset === '') {
            localStorage.removeItem('bodyBackground');
            this.isActive = false;
            clearInterval(this.intervalId);
            startBtn.removeAttribute('disabled');
            e.target.setAttribute('disabled', true)
            this.bodyColor = null;
            bodyEl.style.background = null;
        }
    }
}

bodyEl.addEventListener('click', (e) => {
    colorChanger.colorChange(e);
})



window.addEventListener('load', function () {
    const app = document.getElementById('app')
    const resultInput = app.querySelector('#result')

    resultInput.value = ''
    resultInput.focus()

    const minValue = 1
    const maxValue = 10

    const nb1 = getRandomNumber(minValue, maxValue)
    const nb2 = getRandomNumber(minValue, maxValue)
    
    app.querySelectorAll('.nb1').forEach((element) => {
        element.textContent = nb1
    })

    app.querySelectorAll('.nb2').forEach((element) => {
        element.textContent = nb2
    })

    app.querySelector('#result').addEventListener('keyup', (e) => {
        if (e.target.value.length > 2) {
            e.preventDefault()
            e.target.value = e.target.value.slice(0, 2)
            return
        }
        
        app.querySelector('.result').textContent = e.target.value
        changeResultBackground(-1)

        if(e.key === 'Enter') {
            const result = nb1 + nb2 == e.target.value
            changeResultBackground(result)

            if (result) {
                this.setTimeout((e) => {
                    this.location.reload()
                }, 2000)
            }
        }
    })
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function changeResultBackground(val) {
    const result = app.querySelector('.result')

    result.classList.remove('success')
    result.classList.remove('failed')

    console.log(val)

    switch (val) {
        case false: result.classList.add('failed')
            break
        case true: result.classList.add('success')
            break    
    }

}
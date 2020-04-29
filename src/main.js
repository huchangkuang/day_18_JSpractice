let demo = document.querySelector("#demo")
let string = `
大家好，我是一名前端新人
`
let n = 0

// demo.innerHTML = string
let step = () => {
    setTimeout(() => {
        demo.innerHTML = string[n]
        n += 1
        if (n < string.length) {
            step()
        }
    }, 300)
}
step()
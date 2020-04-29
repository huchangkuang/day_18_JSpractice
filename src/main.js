let demo = document.querySelector("#demo")
let string = `
你好，我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color:red;
}
`
let string2 = ""

// string = string.replace(/\n/g,"<br>")
let n = 0

// demo.innerHTML = string.substring(0,n)
let step = () => {
    setTimeout(() => {
        string[n] === "\n" ? string2 += "<br>" : string2 += string[n]
        // console.log(n)
        demo.innerHTML = string2
        n += 1
        if (n < string.length) {
            step()
        }
    }, 100)
}
step()
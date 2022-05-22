// JS работает в 1-ом потоке. Концепция Event loop
const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')
const four = () => console.log('Four')

first() // 1
setTimeout(second, 0) // 4 сторонний API помещает в очередь выполнения, поэтому даже с 0-ым таймингом выполняется в последнюю очередь
third() //2
four() //3
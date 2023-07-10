function exec(fn,a,b){
    fn(a,b)
}

const somarNoTerminal = (x,y) => console.log(x+y)
const subtrairNoTerminal = (x,y) => console.log(x-y)

exec(somarNoTerminal,56,38) //94
exec(subtrairNoTerminal,182,27) //155

// Example of callback with setInterval
// setInterval(()=> console.log('Bem vindo'), 1000)


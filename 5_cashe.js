function cashFunction(func) {
    let cash = {};
    return function(arg) {
        if (cash[arg]) {
            return `Закешированный ответ: ${cash[arg]}`;
        };
        let result = func(arg);
        cash[arg] = result;
        return result;
    }
}

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}

const cashFibo = cashFunction(fibonacci);

console.log(cashFibo(3))
console.log(cashFibo(3))
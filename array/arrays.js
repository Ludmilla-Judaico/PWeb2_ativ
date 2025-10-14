export function sum(list){
    return (Array.isArray(list)) ? list.reduce((acc, num) => acc + num) : NaN
}

export function product(list){
    return (Array.isArray(list)) ? list.reduce((acc, num) => acc * num) : NaN 
}

export function sumOdds(list){
    return (Array.isArray(list)) ? list.map(num => num).filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0) : NaN
}
export const calculatorWin = (arr, bet) =>{
    const [a, b, c] = arr
    if (a.name === b.name && b.name === c.name){
        return [b.x * bet, true]
    }else if (a.name === b.name || b.name === c.name || a.name === c.name){
        return [b.minX * bet, true]
    }

    return [0, false]
}
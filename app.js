const isValid = s => {
    let result = [] //обьявляем массив в котором будет хранится результат
    let par = {
        ')': '(',
        ']': '[',
        '}': '{'
    }//обьект имеющий ключ "(" и значение")"
    for (let i = 0; i < s.length; i++) {
        let item = s[i]//проходим по каждому елементу с помощью индекса
        if (par[item] === undefined) {
            result.push(item)
        }//если в обьекте (par) у ключа "(" нет значения ")" то добавляем его в массив(result)
        else {
            if (par[item] === result[result.length - 1]) result.pop()
            else return false
        }//иначе, если ключ "(" равен последнему значению ")" в массиве(result), то
        //мы удаляем последний елемент из массива(result)
    }
    return (!result.length)//возврощаем false если длинна масива(result) равна нулю и true 
    //если длинна масива(result) больше нуля
}

console.log(isValid("()[]{}"))
//вернет true
console.log(isValid("()[]{})"))
//венет false
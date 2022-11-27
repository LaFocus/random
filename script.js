function random() {
    return Math.floor(Math.random() * 10 + 1)
}

var num = +prompt('Введите желаемое количество примеров')

for (let i = 0; i < num; i++) {
    let a = random()
    let b = random()
    let symb = Math.random()
    if (symb <= 0.25 && symb > 0) {
        symb = '+'
    } else if (symb > 0.25 && symb <= 0.5) {
        symb = '-'
    } else if (symb >= 0.5 && symb > 0.75) {
        symb = '*'
    } else {
        symb = '/'
    }
    let c = +prompt(a + ' ' + symb + ' ' + b + ' = ' + '?')
    let answer = 'Ваш ответ верный: '
    let wrong = 'Ваш ответ неверный: '
    if (symb == '+' && c == a + b) {
        alert(answer + c)
    } else if (symb == '-' && c == a - b) {
        alert(answer + c)
    } else if (symb == '*' && c == a * b) {
        alert(answer + c)
    } else if (symb == '/' && c == a / b) {
        alert(answer + c)
    } else if (symb == '-' && c !== a - b) {
        alert(wrong + c + '. ' + 'Верный ответ: ' + (a - b))
    } else if (symb == '+' && c !== a + b) {
        alert(wrong + c + '. ' + 'Верный ответ: ' + (a + b))
    } else if (symb == '/' && c !== a / b) {
        alert(wrong + c + '. ' + 'Верный ответ: ' + (a / b))
    } else if (symb == '*' && c !== a * b) {
        alert(wrong + c + '. ' + 'Верный ответ: ' + (a * b))
    }
}
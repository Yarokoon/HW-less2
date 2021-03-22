alert('Привет! Это простой тест, который выдаст тебе кол-во правильных ответов и неправильных. Удачи!')

const numberTransform = confirm('Преобразование Number("false") вернет число 0?')
const varReInit = confirm('Значение переменной let нельзя изменить после инициализации')
const mathSqrt = confirm('У объекта Math существует метод для вычисления квадратного корня')
const typeOfLogic = confirm('Результат выполнения логической операции - это булево значение')
const hardJs = confirm('JS - слишком сложный и ему невозможно научиться')

let correctAnswer = 0
let incorrectAnswer = 0

if(numberTransform) {
    incorrectAnswer++   
} else {
    correctAnswer++
}
if(varReInit) {
    incorrectAnswer++
} else {
    correctAnswer++
}
if(mathSqrt) {
    correctAnswer++
} else {
    incorrectAnswer++
}
if(typeOfLogic) {
    correctAnswer++
} else {
    incorrectAnswer++
}
if(hardJs) {
    incorrectAnswer++
} else {
    correctAnswer++
    
}

alert(`Правильных ответов ${correctAnswer}; Неправильных ответов ${incorrectAnswer}`)

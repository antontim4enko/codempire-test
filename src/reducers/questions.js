const initialState = [
    {
        id: 1,
        text: 'JavaScript язык с какой типизацией',
        type: 'select',
        options: ['статической', 'динамической'],
        answer: 'динамической',
    },
    {
        id: 2,
        text: 'Выберете возможные варианты обьявления переменной в JS',
        type: 'checkbox',
        options: ['var', 'const', 'let', 'define', 'include', 'нехай х ='],
        answer: ['var', 'const', 'let'],
    },
    {
        id: 3,
        text: 'Каким инструментом удобно отлаживать React приложения ?',
        type: 'text',
        answer: 'DevTools'
    },
    {
        id: 4,
        text: 'В js переменные объявленные следующим образом: a=3; b=«hello»;',
        type: 'checkbox',
        options: ['создаются в локальном контексте', 'создаются в глобальном контексте', 'создание переменной без ключевого слова var — синтаксическая ошибка' ],
        answer: ['создаются в глобальном контексте', 'создание переменной без ключевого слова var — синтаксическая ошибка']
    },
    {
        id: 5,
        text: 'Что получится, если сложить true + false?',
        type: 'radio',
        options: ['truefalse', '0', '1', 'NaN'],
        answer: 1
    }
];


export default function (state = initialState) {
    return state;
}

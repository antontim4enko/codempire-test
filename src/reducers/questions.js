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
        answer: 'React DevTools'
    }
];


export default function (state = initialState) {
    return state;
}

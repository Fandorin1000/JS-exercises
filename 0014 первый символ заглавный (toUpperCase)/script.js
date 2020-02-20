let question = prompt('Напишите любое слово, мы вам покажем первую бувку большой', '');

alert('первая буква заглавная: ' + question[0].toUpperCase() + question.slice(1));

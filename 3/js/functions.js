

// объявление функции
function isPalindrom(word /* — параметр функции */) { // начало тела функции
    // console.log('Word:', word);
    // console.log('длина:', word.length);

    // console.log('Первая буква:', word[0]);

    // const lastIndex = word.length - 1;
    // console.log('номер последней буквы:', lastIndex);
    // console.log('Последняя буква:', word[lastIndex]);

    // console.log('Половина длинны слова:', word.length / 2);

    //i = 0; проверка: 0 < 3
    //i = 1; проверка: 1 < 3
    //i = 2; проверка: 2 < 3
    //i = 3; проверка: 3 < 3
    // for(let i = 0; i < word.length / 2; i = i + 1) {
    //     console.log('переменная i:', i);
    //     console.log('номер буквы с начала:', i);
    //     const indexFromEnd = (word.length - 1) - i;
    //     console.log('номер буквы с конца:', indexFromEnd);
    //     console.log(word[i], ':', word[indexFromEnd]);
    // }


    for(let i = 0; i < word.length / 2; i = i + 1) {
        const indexFromEnd = (word.length - 1) - i;
        const letterFromStart = word[i];
        const letterFromEnd = word[indexFromEnd];

        if (letterFromStart !== letterFromEnd) {
            return false;
        }
    }

    return true;
/*конец тела функции */
}



// isPalindrom('');
console.log('привет — это палиндром:', isPalindrom('привет'));
console.log('топот — это палиндром:', isPalindrom('топот'));


function compare(x, y) {
    if (x > y) {
        return true;
    }

    return false;
}

const result = compare(3, 2);
console.log('3 больше 2:', result);


if (compare(4,5)) { // -> if (false)
    console.log('x больше y');
} else {
    console.log('x меньше y');
}

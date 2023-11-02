const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const NAMES = [
  'Артур',
  'Сергей',
  'Алишер',
  'Тимур',
  'Кирилл',
  'Николай',
  'Илья',
  'Олег',
  'Артем',
];

const PHOTOS =[

]

const SIMILAR_AVATARS_COUNT = 6;
const SIMILAR_COMMENTARIES_ID = 1000;
const MAX_COMMENTARIES_ON_PHOTO = 6;
const MIN_LIKES_ON_PHOTO = 15;
const MAX_LIKES_ON_PHOTO = 200;



const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
};


function generateRandomObjects() {
  const array = [];

  for (let i = 0; i < 25; i++) {
    const randomObject = {
      id: i + 1,
      name: Object ${i + 1},
      value: Math.random() * 100, // генерация случайного значения

    };
    array.push(randomObject);
  }

  return array;
}


console.log(arrayOfObjects);



function generateObjectsArray() {
  const objectsArray = [];

  for (let i = 1; i <= 25; i++) {
    const objectId = i; // Уникальный идентификатор объекта
    const otherProperty = "Другое свойство " + i; // Другое свойство объекта

    const newObj = new MyObject(objectId, otherProperty);
    objectsArray.push(newObj);
  }

  return objectsArray;
}

console.log(myArray);



const createComment = () => {
  commentId = commentId + 1;
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)]
  };
};

const createPhotoDescription = () => {

  return {
    id: generateIdNumber(),
    url: 'photos/' + generateIdPhoto(),
    description: descriptionExamples[getRandomNumber(0, descriptionExamples.length - 1)],
    likes: getRandomNumber(MIN_LIKES_ON_PHOTO, MAX_LIKES_ON_PHOTO),
    comments: Array.from({length: getRandomNumber(1, MAX_COMMENTARIES_ON_PHOTO)}, createComment),
  }
}



// // const numbers = [];
// // // [1,2,3,4,5]
// // for(let i = 1; i <= 20; i++) {
// //   numbers.push(i);
// // }
// // console.log('numbers:', numbers);




// const createComments = (size) => {
//   const comments = [];
//   for(let i = 0; i < size; i++) {
//     const comment = createComment();
//     comments.push(comment);
//   }

//   return comments;
// };

// let photoId = 0;
// const createPhoto = () => {
//   photoId = photoId + 1;

//   return {
//     id: photoId,
//     url: 'photos/1.jpg',
//     description: '...',
//     likes: 123,
//     comments: [] // createComments()
//   };
// };

// console.log('comments 1:', createComments(5));
// console.log('comments 2:', createComments(9));

// const createComment = () => ({
//   id: generateIdComment(),
//   avatar: 'img/avatar-1.svg',
//   message: messageExamples[getRandomNumber(0, messageExamples.length - 1)],
//   name: nameExamples[getRandomNumber(0, nameExamples.length - 1)],
// });

// const comment = {
//   id: 1,
//   avatar: 'img/avatar-2.svg'
// }




  // function generateObjectsArray() {
  //   const objectsArray = [];

  //   for (let i = 1; i <= 25; i++) {
  //     const objectId = i; // Уникальный идентификатор объекта
  //     const otherProperty = "Другое свойство " + i; // Другое свойство объекта

  //     const newObj = new MyObject(objectId, otherProperty);
  //     objectsArray.push(newObj);
  //   }

  //   return objectsArray;
  // }

  // const myArray = generateObjectsArray();
  // console.log(myArray);

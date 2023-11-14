import { getRandomNumber } from './util.js';

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

const MIN_LIKES_ON_PHOTO = 15;
const MAX_LIKES_ON_PHOTO = 200;
const SIMILAR_AVATARS_COUNT = 6;
const MAX_COMMENTARIES_ON_PHOTO = 30;
const MAX_PHOTOS_COUNT = 25;

const messageGenerator = function () {
  let message = MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];
  if (getRandomNumber(1, 2) === 2) {
    message += ` ${MESSAGES[getRandomNumber(0, MESSAGES.length - 1)]}`;
  }
  return message;
};

let commentId = 0;
const createComment = function () {
  commentId = commentId + 1;
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, SIMILAR_AVATARS_COUNT)}.svg`, // avatar-1.svg
    message: messageGenerator(),
    name: NAMES[getRandomNumber(0, NAMES.length - 1)]
  };
};

let photoId = 0;
const getPhotoDescription = () => {
  photoId = photoId + 1;
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: 'Очень классная фотография',
    likes: getRandomNumber(MIN_LIKES_ON_PHOTO, MAX_LIKES_ON_PHOTO),
    comments: Array.from({length: getRandomNumber(0, MAX_COMMENTARIES_ON_PHOTO)}, createComment),
  };
};

export { getPhotoDescription };

const createPhotos = () => Array.from({ length: MAX_PHOTOS_COUNT }, getPhotoDescription);

export { createPhotos };

const myMessages = [];

const messages = [
  {
    author: 'Sonrisa',
    message: 'Done!!!! Thank you everyone for your awesome help and support!!!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-15T02:43:50.000Z',
  },
  {
    author: 'David',
    message: 'testing the desctructable chat app! whoo!',
    selfDestruct: true,
    destructAt: 20000 + Date.now(),
  },
  {
    author: 'Lisa',
    message: 'i want to see the githubs for these. theyre such amaze',
    selfDestruct: true,
    destructAt: 25000 + Date.now(),
  },
  {
    author: 'Francis',
    message: 'No way, these message can self-destruct!',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    author: 'Sonrisa',
    message: 'Me too!! this is awesome!!',
    selfDestruct: true,
    destructAt: 30000 + Date.now(),
  },
  {
    author: 'Francis',
    message: '+1 ^^^',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    author: 'Matt',
    message: 'How artistic!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-15T02:43:50.000Z',
  },
  {
    author: 'Elliot',
    message: 'This has been very useful for my research. Thanks as well!!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-16T02:43:50.000Z',
  },

  {
    author: 'Joe',
    message: 'Dude, this is awesome. Thanks so much',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-18T00:43:50.000Z',
  },
  {
    author: 'Lisa',
    message: 'Happy New Year Everybody!!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-19T00:43:50.000Z',
  },
];

const users = [
  { username: 'David' },
  { username: 'Lisa' },
  { username: 'Francis' },
  { username: 'Sonrisa' },
  { username: 'Joe' },
  { username: 'Elliot' },
  { username: 'Matt' },
  { username: 'david' },
];

module.exports = { users, messages };

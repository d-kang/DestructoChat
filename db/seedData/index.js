const myMessages = [];

const messages = [
  {
    username: 'Sonrisa',
    message: 'This Message will not self destruct',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-15T02:43:50.000Z',
  },
  {
    username: 'David',
    message: 'This Message will self Destruct in 10 seconds',
    selfDestruct: true,
    destructAt: 10000 + Date.now(),
  },
  {
    username: 'Lisa',
    message: 'This Message will self Destruct in 15 seconds.',
    selfDestruct: true,
    destructAt: 15000 + Date.now(),
  },
  {
    username: 'Francis',
    message: 'This Message will self Destruct in 20 seconds.',
    selfDestruct: true,
    destructAt: 20000 + Date.now(),
  },
  {
    username: 'Sonrisa',
    message: 'This Message will self Destruct in 25 seconds.',
    selfDestruct: true,
    destructAt: 25000 + Date.now(),
  },
  {
    username: 'David',
    message: 'This Message will not self destruct',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-18T02:43:50.000Z',
  },
  {
    username: 'Lisa',
    message: 'This Message will self Destruct in 30 seconds.',
    selfDestruct: true,
    destructAt: 30000 + Date.now(),
  },
  {
    username: 'Francis',
    message: 'This message will not self destruct.',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    username: 'Sonrisa',
    message: 'This Message will self Destruct in 35 seconds.',
    selfDestruct: true,
    destructAt: 35000 + Date.now(),
  },
  {
    username: 'Matt',
    message: 'How artistic!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-15T02:43:50.000Z',
  },
  {
    username: 'Elliot',
    message: 'This has been very useful for my research. Thanks as well!!',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-16T02:43:50.000Z',
  },
  {
    username: 'Jenny',
    message: 'Elliot you are always so right :)',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-17T02:43:50.000Z',
  },
  {
    username: 'Joe',
    message: 'Dude, this is awesome. Thanks so much',
    selfDestruct: false,
    destructAt: -1,
    createdAt: '2018-02-18T00:43:50.000Z',
  },
  {
    username: 'Lisa',
    message: 'No Problem!',
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
  { username: 'Jenny' },
  { username: 'Elliot' },
  { username: 'Matt' },
  { username: 'david' },
];

module.exports = { users, messages };

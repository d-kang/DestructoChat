const messages = [
  {
    username: 'sonrisa',
    message: 'This Message will not self destruct',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    username: 'david',
    message: 'This Message will self Destruct in 10 seconds',
    selfDestruct: true,
    destructAt: 10000 + Date.now(),
  },
  {
    username: 'lisa',
    message: 'This Message will self Destruct in 15 seconds.',
    selfDestruct: true,
    destructAt: 15000 + Date.now(),
  },
  {
    username: 'francis',
    message: 'This Message will self Destruct in 20 seconds.',
    selfDestruct: true,
    destructAt: 20000 + Date.now(),
  },
  {
    username: 'sonrisa',
    message: 'This Message will self Destruct in 25 seconds.',
    selfDestruct: true,
    destructAt: 25000 + Date.now(),
  },
  {
    username: 'david',
    message: 'This Message will not self destruct',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    username: 'lisa',
    message: 'This Message will self Destruct in 30 seconds.',
    selfDestruct: true,
    destructAt: 30000 + Date.now(),
  },
  {
    username: 'francis',
    message: 'This message will not self destruct.',
    selfDestruct: false,
    destructAt: -1,
  },
  {
    username: 'sonrisa',
    message: 'This Message will self Destruct in 35 seconds.',
    selfDestruct: true,
    destructAt: 35000 + Date.now(),
  },
];

const users = [
  { username: 'david' },
  { username: 'lisa' },
  { username: 'francis' },
  { username: 'sonrisa' },
];

module.exports = { users, messages };

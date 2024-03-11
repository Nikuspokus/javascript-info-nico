// Await Intro (async return promise)

// const x = async () => {
//   return 16;
// };

// console.log(x());

// x().then((v) => {
//   console.log(v);
// });

// const getX = async (_) => {
//   const number = await x();
//   console.log(number);
// };

// getX();

const newX = async (success = true) => {
  if (success) return 16;
  throw new Error("Probleme");
};

// newX(false).catch((e) => console.log(e));

// const getX = async (_) => {
//   try {
//     const number = await newX(true);
//     console.log(number);
//   } catch (e) {
//     console.log(e);
//   }
// };

// getX();

// const sleep = (msec) => {
//   return new Promise((r) => setTimeout(r, msec));
// };

// sleep(3000).then((v) => {
//   console.log("3 seconds !");
// });

const x = (_) => {
  return sleep(2000).then((v) => 16);
};
const y = (_) => {
  return sleep(2000).then((v) => 40);
};
const z = (_) => {
  return sleep(2000).then((v) => 85);
};

// const getX = async (_) => {
//   const number = await x();
//   console.log(number);
// };

// getX();

// const numbers = async (_) => {
//   const getX = await x();
//   console.log(getX);
//   const getY = await y();
//   console.log(getY);
//   const getZ = await z();
//   console.log(getZ);
// };

// numbers();

// const promiseAll = async (_) => {
//   const number = [x(), y(), z()];
//   const [getX, getY, getZ] = await Promise.all(number);
//   console.log(getX);
//   console.log(getY);
//   console.log(getZ);
// };

// promiseAll();

// Await loops

const numbers = {
  x: 16,
  y: 40,
  z: 85,
};

const letterNumbers = ["x", "y", "z"];

const sleep = (msec) => {
  return new Promise((r) => setTimeout(r, msec));
};

const getNumbers = (number) => {
  return sleep(1000).then((v) => {
    numbers[number];
  });
};

const myLoop = async (_) => {
  for (let i = 0; i < letterNumbers.length; i++) {
    const number = letterNumbers[i];
    const myNumbers = await getNumbers(number);
    console.log(myNumbers);
  }
};

myLoop();

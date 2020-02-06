import data from './../questionData';

const newData = [];

while (newData.length < 10) {
  createRandomArray();
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * Math.ceil(max));
}

function createRandomArray() {
  let dataLength = data.length;
  const index = getRandomInt(dataLength);
  const output = data.splice(index - 1, 1);
  newData.push(...output);
}

export default newData;
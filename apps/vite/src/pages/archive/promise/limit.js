console.clear();
// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function. The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

// const result = [];
// let taskQueue = [];
// let currentActiveTask = 0;

// // pls don't promisify this
function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;
  setTimeout(() => {
    callback('User' + id);
  }, randomRequestTime);
}

async function mapLimit(inputs, limit, iterateeFn, callback) {
  const fn = (params) =>
    new Promise((rs) => {
      iterateeFn(params, rs);
    });

  const list = Array.from(inputs);
  let result = [];
  while (list.length) {
    const processList = list.splice(0, limit);
    const processResult = await Promise.all(processList.map(fn));
    result = result.concat(processResult);
  }

  callback(result);
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log('output', allResults); // ["User1", "User2", "User3", "User4", "User5"]
});

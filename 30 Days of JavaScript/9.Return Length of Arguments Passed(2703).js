// Write a function argumentsLength that returns the count of arguments passed to it.

function argumentsLength(...args) {
  try {
    const jsonArray = JSON.parse(JSON.stringify(args));

    if (!Array.isArray(jsonArray)) throw new Error("It's not valid JSON.");

    if (!(0 <= args.length || args.length <= 1000))
      throw new Error('Arguments length should be between 0 and 1000');

    return args.length;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

console.log(argumentsLength({}, null, '3'));

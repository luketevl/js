const animals = {
  camel: 3,
  llama: 2,
  alpaca: 5
}

const animalsMap = new Map(Object.entries(animals))
console.log(animalsMap.has('llama'));


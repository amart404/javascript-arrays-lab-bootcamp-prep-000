var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(string) {
  return kittens.push(string)
}
function destructivelyPrependKitten(string) {
  return kittens.unshift(string)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop() 
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(string) {
  return kittens.concat(string)
}
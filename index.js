const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}


function appendCat(name) {
  return [...cats, name];        // spread + add at end
}

function prependCat(name) {
  return [name, ...cats];        // add at start
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1); // copy except last
}

function removeFirstCat() {
  return cats.slice(1);          // copy except first
}













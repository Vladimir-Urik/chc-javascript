const vysledek = document.getElementById('vysledek-mrdky');

let random = 0;
randomCislo();

function randomCislo() {
  random = Math.floor(Math.random() * 10000);

  const eight = toEights();
  const binary = toBinary();
  const hexa = to16();

  vysledek.innerHTML = "10ková <span>"+ random +"</span><br />Binary: <span>"+ binary +"</span><br />  Osmickova: <span>"+ eight +"</span><br />  Hexa: <span>"+ hexa +"</span>";
}

function getNumbers() {
  return random.toString();
}

function toBinary() {
  return convert(2);
}

function toEights() {
  return convert(8);
}
function to16() {
  return convert(16);
}

function convert(numberer) {
  const numbers = getNumbers();
  return parseInt(numbers, 10).toString(numberer);
}

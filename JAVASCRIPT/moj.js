// Zmienne
console.log("Testowanie");

console.log("Jak masz na imię?");
const first_name = "Tomek";
console.log(first_name);

console.log("Ile masz lat?");
let age = 23;
console.log(age);

console.log("Ulubiona potrawa?");
let dish = "pizza";
console.log(dish);

console.log(`${first_name} uwielbia danie: ${dish}`);

const name_friend = "Kacper";
const name_pet = "York";

console.log(
	`Cześć, mój kolega ma na imię ${name_friend}. On ma psa o imieniu ${name_pet}.`
);

const age_pet = 5;

console.log("Jego pies ma " + age_pet + " lat");

// Stringi

const product = "Kawa";
console.log(typeof product);

const quote = `Cytat książki "Lubię wiersze" `;
console.log(quote);

const food = "cheese";
console.log(`Ser ma ${food.length} liter w języku Angielskim`);

const big = "Tekst wielkimi literami";
console.log(big.toUpperCase());

const small = "Tekst małymi literami";
console.log(small.toLowerCase());

const dateEngland = new Date();
console.log(dateEngland.toLocaleDateString("en"));

const datePoland = new Date();
console.log(dateEngland.toLocaleDateString("pl"));

const lastName = "kowalski";
console.log(`${lastName.charAt(0).toUpperCase()}owalski`);
console.log(`${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`);

const one = "zrób wielkie litery";
console.log(one.toUpperCase());

const two = "ZRÓB Z TEGO TEKSTU MAŁE LITERY!";
console.log(two.toLowerCase());

const three = "(&@@&#@ usuniemy te znaki z przodu";
const substring = three.slice(8);
console.log(substring);

const four = 'sprwadz czy w tekście jest słowo "Czy"';
const fourCheck = four.includes("czy");
console.log(fourCheck);

const five =
	'w konsoli tylko wyświetlimy ze słowa wielką literę l "wyświetlimy"';
const fiveCheck = five.search("l");

console.log(fiveCheck);

const fiveFinal = five.charAt(7).toUpperCase();
console.log(fiveFinal);

const six =
	"zamień każde słowo bieganie na triathlon, ok? bieganie to fajny sport.";
const sixChange = six.replace("bieganie", "triathlon");
const sixChangeTwo = sixChange.replace("bieganie", "triathlon");
console.log(sixChangeTwo);

const seven = "podziel, ten, string, od, przecinków";
const sevenCheck = seven.split([","], [5]);
console.log(sevenCheck);

// Number

const num1 = "45";
console.log(`Ze stringa dostaniemy int.`);
console.log(num1 * 1);

const num2 = 1234.23123;
console.log(num2.toFixed());

const num3 = 1234.23123;
console.log(num2.toFixed(2));

const num4 = "1234";
console.log(parseInt(num4));

// Boolean

const a = true;
const b = false;

console.log(b);

if (10 > 4) {
	console.log(a);
} else {
	console.log(b);
}

// Obliczanie długości tekstu jaki wpiszemy

let typeText = document.querySelector(".typeText");
let typed = document.querySelector(".typed");

let onkeydown = function () {
	typed.textContent = typeText.value.length + 1;
};

typeText.addEventListener("keydown", onkeydown);

// undefined i null
let c;
console.log(c);

let d = null;
console.log(d);

// typy złożone

let colors = ["red", "gray", "blue", "yellow"];
console.log(colors[2]);

function test() {
	console.log("jestem w funkcji🙂");
}

test();

const person = {
	name: "Patrycja",
	age: 24,
	favourite_dish: "pizza",
};

console.log(person);

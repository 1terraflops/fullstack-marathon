const guestList = new WeakSet();
const menu = new Map();
const bankVault = new WeakMap();
const coinCollection = new Set();

// guestList - WeakSet
const Kate = {name: "Kate"};
const Bob = {name: "Bob"};
const Alex = {name: "Alex"};
const Jane = {name: "Jane"};
const Sheryl = {name: "Sheryl"};

guestList.add(Kate);
guestList.add(Bob);
guestList.add(Alex);
guestList.add(Jane);
guestList.add(Sheryl);

console.log(`guestList:`);
console.log(`Has Kate?: ${guestList.has(Kate)}`);
console.log(`Has Anastasia?: ${guestList.has({name: "Anastasia"})}`);

guestList.delete(Bob);
console.log(`Has Bob?: ${guestList.has(Bob)}`);

console.log(`Size of guestList: ${guestList.size}\n`);  // should result in "undefined"

// Non-iterable -> guestList.forEach(guest => {console.log(guest)}); would result in error
// Does not have clear method

// menu - Map
console.log(`Menu:`);
menu.set("Pizza", 200);
menu.set("Spaghetti Bolognese", 150);
menu.set("Tiramisu", 220);
menu.set("Spaghetti aglio e olio", 80);
menu.set("Lasagna", 300);

menu.delete("Spaghetti aglio e olio");

console.log(menu.entries());
console.log(`Size of menu: ${menu.size}`);
console.log(`Has Pizza: ${menu.has("Pizza")}`);

console.log(`All prices:`)
menu.forEach((item) => {console.log(item)});

menu.clear();
console.log(`Menu after clearing the collection:`);
console.log(menu.entries());

// bankVault - weakMap
const client1 = {name: "David", credentials: "1234"}
const client2 = {name: "Meg", credentials: "5462"}
const client3 = {name: "Jake", credentials: "7654"}
const client4 = {name: "Quentin", credentials: "8356"}
const client5 = {name: "Adam", credentials: "9835"}

bankVault.set(client1, "some secret stuff");
bankVault.set(client2, "my steam password is...");
bankVault.set(client3, "money");
bankVault.set(client4, "*empty*");
bankVault.set(client5, "full of diamonds");

bankVault.delete(client4)
console.log(`Has client4: ${bankVault.has(client4)}`);

console.log(`client1: ${bankVault.get(client1)}`);
console.log(`deleted client4: ${bankVault.get(client4)}`); // should result in "undefined"
console.log(`bankVault size: ${bankVault.size}`); // should result in "undefined"

// Non-iterable -> bankVault.forEach(item => {console.log(item)}); would result in error
// Does not have clear method

// coinCollection - Set
console.log("Set:");
const coin1 = { country: "UA", value: 1 };
const coin2 = { country: "US", value: 2 };
const coin3 = { country: "UK", value: 5 };
const coin4 = { country: "FR", value: 10 };
const coin5 = { country: "PL", value: 50 };

coinCollection.add(coin1);
coinCollection.add(coin2)
coinCollection.add(coin3);
coinCollection.add(coin4);
coinCollection.add(coin5);

coinCollection.delete(coin3);

console.log(coinCollection);
console.log(`coinCollection size: ${coinCollection.size}`);

console.log("Countries:")
coinCollection.forEach((item) => {console.log(item.country)});

coinCollection.clear();
console.log(`coinCollection after clearing the collection:`);
console.log(coinCollection)
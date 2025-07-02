class Human {
    constructor(firstName = 'Stonks', lastName = 'Guy', gender = 'Mannequin', age = '5') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 200;

        setTimeout(() => {
            p.style.visibility = "visible";
            p.textContent = "I'm hungry🥺👉👈"
            setInterval(() => {
                this.calories -= this.calories > 0 ? 200 : 0;
                this.setProperties();
            }, 60000)
        }, 5000);
    }

    sleepFor() {
        const seconds = document.getElementById('sleep_input').value * 1000;
        p.textContent = "I'm sleeping💤";
        p.style.visibility = "visible";

        setTimeout(() => {
            p.textContent = "I'm awake now🥱";
            setTimeout(() => p.style.visibility = "hidden", 2000);
        }, seconds);
    }

    feed() {
        p.style.visibility = "visible";

        if (this.calories > 500) {
            p.textContent = "I'm not hungry🤤";
            setTimeout(() => p.style.visibility = "hidden", 3000);
        }
        else {
            p.textContent = "Nom nom nom😋";

            setTimeout(() => {
                this.calories += 200;
                this.setProperties();

                if (this.calories < 500) {
                    p.textContent = "I'm still hungry🥺";
                    setTimeout(() => {
                        p.style.visibility = "hidden";
                    }, 2000);
                }
                else {
                    p.style.visibility = "hidden";
                }
            }, 10000);
        }
    }

    setProperties() {
        document.getElementById('properties').innerHTML =
            `First Name: ${this.firstName}<br>
        Last Name: ${this.lastName}<br>
        Age: ${this.age}<br>
        Gender: ${this.gender}<br>
        Calories: ${this.calories}`;
    }
}

class Superhero extends Human {
    constructor(firstName = 'SuperStonks', lastName = 'guy', gender = 'SuperMannequin', age = '5') {
        super(firstName, lastName, gender, age);
        this.calories = 600;
    }

    fly() {
        p.style.visibility = "visible";
        p.textContent = "I'm flying!🦅";

        setTimeout(() => p.style.visibility = "hidden", 10000);
    }

    fightWithEvil() {
        p.style.visibility = "visible";
        p.textContent = "Khhhh-chh... Bang-g-g-g... Evil is defeated!🎉";

        setTimeout(() => p.style.visibility = "hidden", 3000);
    }

    checkStonks() {
        p.style.visibility = "visible";
        if (Math.floor(Math.random() * 2) === 1) {
            p.textContent = "Stonks good!!!!";
            document.querySelector('img').src = "assets/images/stonks.png";
        }
        else {
            p.textContent = "Stonks bad :(";
            document.querySelector('img').src = "assets/images/not_stonks.jpg";
        }

        setTimeout(() => {
            p.style.visibility = "hidden";
            document.querySelector('img').src = "assets/images/Superhero.png";
        }, 3000);
    }

    setProperties() {
        super.setProperties();
    }
}

const div = document.getElementById('human-methods');
const sleepBtn = document.querySelector('#sleep_button');
const feedBtn = document.querySelector('#feed_button');
const transformBtn = document.querySelector('#transform-into-superhero');

const stonksBtn = document.createElement('button');
stonksBtn.textContent = "Check Stonks📈";
stonksBtn.style.visibility = "hidden";
div.appendChild(stonksBtn);

const p = document.createElement('p');
p.textContent = "1";
p.style.visibility = "hidden";
div.appendChild(p);

const human = new Human();
human.setProperties();

let isSuperHuman = false;

sleepBtn.addEventListener('click', () => {
    isSuperHuman ? superHuman.fly() : human.sleepFor();
});

feedBtn.addEventListener('click', () => {
    isSuperHuman ? superHuman.fightWithEvil() : human.feed();
});

const superHuman = new Superhero();

stonksBtn.addEventListener('click', () => {
    superHuman.checkStonks();
});

transformBtn.addEventListener('click', () => {
    if (human.calories > 500) {
        document.querySelector('h1').textContent = "Superhooman";
        document.querySelector('img').src = "assets/images/Superhero.png";
        document.querySelector('label').style.display = "none";
        document.querySelector('input').style.display = "none";
        superHuman.setProperties();
        sleepBtn.textContent = "Fly✈️"
        feedBtn.textContent = "Fight👊"
        stonksBtn.style.visibility = "visible";
        isSuperHuman = true;
    }
});
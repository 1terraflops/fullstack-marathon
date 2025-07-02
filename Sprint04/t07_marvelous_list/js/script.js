const buttonList = document.querySelectorAll('button');

const title = document.querySelector('h1');
const date = document.getElementById('date');
const actor1 = document.getElementById('actor1');
const actor2 = document.getElementById('actor2');
const actor3 = document.getElementById('actor3');
const actor4 = document.getElementById('actor4');
const info = document.getElementById('info');
const poster = document.querySelector('img');

buttonList.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Kill Bill') {
            title.textContent = 'Kill Bill';
            date.textContent = 'October 10, 2003';
            actor1.textContent = 'Uma Thurman';
            actor2.textContent = 'David Carradine';
            actor3.textContent = 'Lucy Liu';
            actor4.textContent = 'Daryl Hannah';
            info.textContent = 'Kill Bill: Volume 1 is a 2003 American martial arts action film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a group of assassins (Lucy Liu, Daryl Hannah, Vivica A. Fox and Michael Madsen) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. Her journey takes her to Tokyo, where she battles the yakuza.';
            poster.src = 'assets/images/Vbyty_Billa_I_poster.jpg';
        }
        else if (e.target.textContent === 'Joker') {
            title.textContent = 'Joker';
            date.textContent = 'October 4, 2019';
            actor1.textContent = 'Raphael Phoenix';
            actor2.textContent = 'Robert De Niro';
            actor3.textContent = 'Zazie Olivia';
            actor4.textContent = 'Frances Conroy';
            info.textContent = 'Joker is a 2019 American psychological thriller film directed by Todd Phillips from a screenplay he co-wrote with Scott Silver. Based on DC Comics characters, it stars Joaquin Phoenix and provides an alternative origin story for the Joker. The film follows Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent into mental illness and nihilism inspires a violent countercultural revolution against the wealthy in a decaying Gotham City. Pictures and DC Films in association with Village Roadshow Pictures, Bron Creative and Joint Effort.';
            poster.src = 'assets/images/Joker_(2019_film)_poster.jpg';
        }
        else if (e.target.textContent === 'Interstellar') {
            title.textContent = 'Interstellar';
            date.textContent = 'November 7, 2014';
            actor1.textContent = 'Matthew McConaughey';
            actor2.textContent = 'Anne Hathaway';
            actor3.textContent = 'Jessica Chastain';
            actor4.textContent = 'Michael Caine';
            info.textContent = 'Interstellar is a 2014 epic science fiction film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.';
            poster.src = 'assets/images/Interstellar_film_poster.jpg';
        }
    });
});
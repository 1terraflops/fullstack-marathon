try {
    const animal_name = window.prompt("What animal is the superhero most similar to?");
    const animalExp = RegExp(/^[a-zA-Z]{1,20}$/);
    if (!animalExp.test(animal_name)) throw new Error("Name must be less than 20 characters and only contain 1 word made out of letters`");

    const gender = window.prompt("Is the superhero male or female?")
    const genderExp = RegExp(/^(male|female)?$/i);
    if (!genderExp.test(gender)) throw new Error("Gender must be only male, female, or blank");

    const age = window.prompt("How old is the superhero?")
    const ageExp = RegExp(/^[1-9][0-9]{1,5}$/);
    if (!ageExp.test(age)) throw new Error("Age must be less than 5 characters, be a number and can't start from 0");

    switch(true) {
        case gender.toLowerCase() === "male" && Number(age) < 18:
            window.alert(`The superhero name is: ${animal_name}-boy`);
            break;
        case gender.toLowerCase() === "male" && Number(age) > 18:
            window.alert(`The superhero name is: ${animal_name}-man`);
            break;
        case gender.toLowerCase() === "female" && Number(age) < 18:
            window.alert(`The superhero name is: ${animal_name}-girl`);
            break;
        case gender.toLowerCase() === "female" && Number(age) > 18:
            window.alert(`The superhero name is: ${animal_name}-woman`);
            break;
        case gender === "" && Number(age) < 18:
            window.alert(`The superhero name is: ${animal_name}-kid`);
            break;
        case gender === "" && Number(age) > 18:
            window.alert(`The superhero name is: ${animal_name}-hero`);
            break;
    }
}
catch (err) {
    window.alert(err.message);
}
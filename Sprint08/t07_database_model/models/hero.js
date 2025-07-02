// NOTE: remember to npm init -y AND npm i mysql2
// NOTE: when testing use await keyword: await hero.find(1);

import Model from '../model.js'

class Hero extends Model {
    constructor(name, description, class_role) {
        super({ name, description, class_role });
    }
}

export default Hero;
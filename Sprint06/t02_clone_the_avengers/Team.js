class Team {
    constructor(id, avengers = []) {
        this.id = id;
        this.avengers = avengers;
    }

    battle(damage) {
        this.avengers.forEach(avenger => {
            avenger.hp -= damage.damage;
        });

        for (let i = this.avengers.length - 1; i >= 0; i--) {
            if (this.avengers[i].hp <= 0) {
                this.avengers.splice(i, 1);
            }
        }
    }

    calculateLosses(clonedTeam) {
        const losses = Math.abs(this.avengers.length - clonedTeam.avengers.length);

        if (losses === 0) {
            console.log('We haven\'t lost anyone in this battle!')
        }
        else {
            console.log(`In this battle we lost ${losses} Avengers.`);
        }
    }

    clone() {
        let clone = [];
        this.avengers.forEach(avenger => {
           clone.push(avenger);
        });

        return new Team(this.id, clone);
    }
}

module.exports.Team = Team;
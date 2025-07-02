const fs = require('fs');
const { XMLBuilder, XMLParser } = require('fast-xml-parser');
const AvengerQuote = require('./AvengerQuote.js');
const Comment = require('./Comment.js');

class ListAvengerQuotes {
    constructor() {
        this.quotes = [
            new AvengerQuote(1, 'Invincible', 'You dad, Ill still have you', ['https://amazon-invincible.fandom.com/wiki/Invincible?file=Invincible+%28Mark+Grayson%29.png'], 'April 30, 2021', new Comment('This is a comment').comment),
            new AvengerQuote(2, 'Omni man', 'Maybe this time youll learn', ['https://amazon-invincible.fandom.com/wiki/Omni-Man?file=Omni-ManProfile.png'], 'April 30, 2021', new Comment('This is a comment').comment),
            new AvengerQuote(3, 'Atom Eve', 'You are not your dad, Mark', ['https://amazon-invincible.fandom.com/wiki/Atom_Eve?file=Atom-EveProfile.png'], 'March 05, 2024', new Comment('This is a comment').comment),
            new AvengerQuote(4, 'Rex Splode', 'There is no universe in which I wake up at 6:00 am and the world isnt on fire', ['https://amazon-invincible.fandom.com/wiki/Rex_Splode?file=Rex-SplodeProfile.png'], 'April 23, 2021', new Comment('This is a comment').comment),
        ];
        this.xml = '';
    }

    toXML() {
        const builder = new XMLBuilder({
            ignoreAttributes: false,
            format: true,
        });

        const xmlObject = {
            catalog: {
                quote: this.quotes
            }
        };

        this.xml = builder.build(xmlObject);
        fs.writeFileSync(__dirname + '/avenger_quote.xml', this.xml);

        return this.xml;
    }

    fromXML() {
        const parser = new XMLParser();

        const data = fs.readFileSync(__dirname + '/avenger_quote.xml', 'utf-8');

        return parser.parse(data);
    }
}

module.exports = ListAvengerQuotes;
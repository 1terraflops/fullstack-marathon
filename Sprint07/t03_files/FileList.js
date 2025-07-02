const fs = require('fs');

module.exports = class FileList {
    getList() {
        const dir = __dirname + '/tmp/';

        if (!fs.existsSync(dir)) {
            return [];
        }

        return fs.readdirSync(dir);
    }

    hasFiles() {
        return this.getList().length > 0;
    }

    getHTMLList() {
        let html = '<ul>';

        this.getList().forEach(file => {
            html += `<li><a href="/select-file?file=${file}">${file}</a></a></li>`;
        });

        return html + '</ul>';
    }
}
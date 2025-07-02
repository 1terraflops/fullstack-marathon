import Model from '../model.js';
import connection from "../db.js";

class User extends Model {
    constructor(login = '', password = '', fullname = '', email = '', status = 'user') {
        super({login, password, fullname, email, status});
    }

    static find(login) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users WHERE login = ?', [login], (err, res) => {
                if (err) {
                    return reject(new Error('Failed to process a query: ' + err));
                }
                else {
                    if (!res[0]) {
                        return resolve({error_code: 'USER_NOT_FOUND', error_message: 'User not found'});
                    }

                    resolve(res[0]);
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
                if (err) return reject(new Error(`Failed to process a query: ${err}`));
                if (!res[0]) return reject(new Error(`Failed to process a query: ${err}`));

                connection.query('DELETE FROM users WHERE id = ?', [id], (err, res) => {
                    if (err) return reject(err);
                    resolve(res[0]);
                });
            });
        });
    }

    static save(login, password, fullname, email, status = 'user') {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users WHERE login = ?', [login], (err, res) => {
                if (err) return reject(new Error(`Failed to process a query: ${err}`));

                if (!res[0]) {
                    connection.query('INSERT INTO users(login, password, fullname, email_address, status)' +
                        'VALUES (?, ?, ?, ?, ?)', [login, password, fullname, email, status],
                        (err, res) => {
                            if (err) {
                                return reject({error_code: 'EMAIL_EXISTS', error_message: 'This email already exists'});
                            }

                            resolve(res);
                        });
                }
                else {
                    return reject({error_code: 'USER_EXISTS', error_message: 'This user already exists'});
                }
            });
        });
    }
}

export default User;
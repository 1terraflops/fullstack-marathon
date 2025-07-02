USE ucode_web;

CREATE TABLE IF NOT EXISTS powers (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type ENUM('attack', 'defense')
);

CREATE TABLE IF NOT EXISTS races (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) UNIQUE NOT NULL,
    description TINYTEXT NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps'),
    race_id INT UNSIGNED,
    FOREIGN KEY (race_id) REFERENCES races(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS heroes_powers (
    hero_id INT NOT NULL,
    power_id INT UNSIGNED NOT NULL,
    power_points INT UNSIGNED NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (power_id) REFERENCES powers(id) ON DELETE CASCADE,
    PRIMARY KEY (hero_id, power_id)
);

CREATE TABLE IF NOT EXISTS teams (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS heroes_teams(
    hero_id INT NOT NULL,
    team_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    PRIMARY KEY (hero_id, team_id)
);
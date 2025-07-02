USE ucode_web;

SELECT heroes.name, teams.name
FROM heroes
    LEFT JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    LEFT JOIN teams ON teams.id = heroes_teams.team_id;

SELECT heroes.name, powers.name
FROM powers
    LEFT JOIN heroes_powers ON powers.id = heroes_powers.power_id
    LEFT JOIN heroes ON heroes.id = heroes_powers.hero_id;

SELECT heroes.name, powers.name, teams.name
FROM heroes
    INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    INNER JOIN powers ON heroes_powers.power_id = powers.id
    INNER JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    INNER JOIN teams ON heroes_teams.team_id = teams.id;
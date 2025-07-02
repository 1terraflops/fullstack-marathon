USE ucode_web;

SELECT heroes.name, SUM(heroes_powers.power_points) AS total_points FROM heroes
INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
GROUP BY heroes.id ORDER BY total_points DESC
LIMIT 1;

SELECT heroes.name, SUM(heroes_powers.power_points) AS total_defense_points FROM heroes
INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
INNER JOIN powers ON heroes_powers.power_id = powers.id
WHERE powers.type = 'defense' GROUP BY heroes.id ORDER BY total_defense_points ASC
LIMIT 1;

SELECT heroes.name AS hero_name, SUM(heroes_powers.power_points) AS total_power FROM heroes
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
JOIN teams ON heroes_teams.team_id = teams.id
GROUP BY heroes.id HAVING COUNT(DISTINCT teams.id) = 1 AND MAX(teams.name) = 'Avengers'
ORDER BY total_power DESC;

SELECT teams.name AS team_name, SUM(heroes_powers.power_points) AS total_power FROM teams
JOIN heroes_teams ON teams.id = heroes_teams.team_id
JOIN heroes ON heroes_teams.hero_id = heroes.id
JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
WHERE teams.name IN ('Avengers', 'Hydra')
GROUP BY teams.id ORDER BY total_power ASC;
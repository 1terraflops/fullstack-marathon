USE ucode_web;

SELECT heroes.name AS hero_name FROM heroes
JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
JOIN teams ON heroes_teams.team_id = teams.id
WHERE heroes.race_id != (SELECT id FROM races WHERE name = 'Human')
AND LOWER(heroes.name) LIKE '%a%' AND heroes.class_role IN ('tankman', 'healer')
GROUP BY heroes.id HAVING COUNT(DISTINCT teams.id) >= 2 ORDER BY heroes.id ASC
LIMIT 1;
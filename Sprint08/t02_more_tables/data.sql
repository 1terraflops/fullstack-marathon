USE ucode_web;

INSERT INTO races (name) VALUES ('Human'), ('Kree'), ('Asgardian'), ('Elf');

INSERT INTO powers (name, type) VALUES ('bloody fist', 'attack'), ('iron shield', 'defense'),
                                       ('lightning strike', 'attack'), ('force barrier', 'defense');

INSERT INTO teams (name) VALUES ('Avengers'), ('Hydra'), ('Guardians');

INSERT INTO heroes (name, description, class_role, race_id) VALUES
('Thor', 'God of Thunder', 'dps', 3),
('Captain America', 'Super soldier', 'tankman', 1),
('Ronan', 'Kree radical', 'dps', 2),
('Black Widow', 'Spy and assassin', 'healer', 1),
('Alaric', 'A mighty tankman skilled in defense.', 'tankman', 4);

INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES
(1, 3, 150),
(1, 2, 200),
(2, 2, 200),
(3, 1, 11),
(3, 4, 180),
(5, 1, 190);

INSERT INTO heroes_teams (hero_id, team_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2),
(5, 1),
(5, 2);
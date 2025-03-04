CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  length INTEGER,
  meta_score NUMERIC,
  user_score NUMERIC,
  price NUMERIC
);

CREATE TABLE developers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  founded INTEGER
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE game_genres (
  id SERIAL PRIMARY KEY,
  game_id INTEGER REFERENCES games(id),
  genre_id INTEGER REFERENCES genres(id)
);

CREATE TABLE game_developers (
  id SERIAL PRIMARY KEY,
  game_id INTEGER REFERENCES games(id),
  developer_id INTEGER REFERENCES developers(id)
)
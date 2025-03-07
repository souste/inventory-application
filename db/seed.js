const pool = require("./pool");

const seedDB = async () => {
  try {
    await pool.query(`
        INSERT INTO games (name, length, meta_score, user_score, price)
        VALUES
        ('Grand Theft Auto 6', 100, NULL, NULL, 80),
        ('Baldur’s Gate 3', 150, 9.6, 9.2, 70),
        ('Elden Ring', 150, 9.6, 8.2, 70),
        ('Kingdom Come Deliverance 2', 150, 8.8, 8.5, 70);
      `);
    await pool.query(`
        INSERT INTO developers (name, founded)
        VALUES
            ('Rockstar Games', 1998),
            ('Larian Studios', 1996),
            ('FromSoftware', 1986),
            ('Warhorse Studios', 2011),
            ('Other', 0000);
            `);
    await pool.query(`
        INSERT INTO genres (name, description)
        VALUES
            ('FANTASY', 'Sword and Sorcery'),
            ('OPEN WORLD', 'With world map, can go anywhere'),
            ('DRIVING', 'Racing, driving around in a car'),
            ('ACTION', 'Hacking and Slashing'),
            ('OTHER', 'Everything Else');
            `);
    await pool.query(`
  INSERT INTO game_genres (game_id, genre_id)
  VALUES
  (1, 2),
  (1, 3),
  (2, 1),
  (3, 1),
  (3, 4),
  (4, 1),
  (4, 4)
  `);
    await pool.query(`
  INSERT INTO game_developers (game_id, developer_id)
  VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4)
  `);

    console.log("Database Successfully Seeded");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

seedDB();

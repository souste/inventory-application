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
            ('Warhorse Studios', 2011);
            `);
    await pool.query(`
        INSERT INTO genres (name, description)
        VALUES
            ('Fantasy', 'Sword and Sorcery'),
            ('Open World', 'With world map, can go anywhere'),
            ('Driving', 'Racing, driving around in a car'),
            ('Action', 'Hacking and Slashing');
            `);
    console.log("Database Successfully Seeded");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

seedDB();

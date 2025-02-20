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
    console.log("Database Successfully Seeded");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

seedDB();

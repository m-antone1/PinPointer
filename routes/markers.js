//more user routes for marking maps and deleting those markers

const express = require("express");
const router = express.Router();
module.exports = db => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT * FROM maps
    JOIN markers on markers.map_id = maps.id
    ORDER BY maps.user_id;`
    )
      .then(data => {
        const markers = data.rows;
        res.send({
          markers
        });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    router.post("/delete/:id", (req, res) => {
      return db.query(`DELETE FROM markers WHERE id = $1`, [req.params.id]);
    });
  });
router.post("/edit/:id", (req, res)  => {
  console.log("whats going on", req.body)
  const id = req.params.id;
  const title = "req.body.title";
  db.query(`
  UPDATE markers
  SET title = $1
  WHERE id = $2
  `, [ title, id])
  .catch(err => console.log(err));
})

  return router;
};

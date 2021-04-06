const express = require("express");
const router = express.Router();
module.exports = db => {
  router.get("/", (req, res) => {
    const getFavourites = function (email, limit) {
      const queryParams = [];

      let queryString = `
          SELECT * FROM users
          JOIN user_maps ON user_maps.user_id = users.id
          JOIN maps ON maps.id = user_maps.map_id
          WHERE true
          `;

      if (email) {
        queryParams.push(email);
        queryString += `AND users.id = $${queryParams.length} `;
      }


      queryParams.push(limit);
      queryString += `
        LIMIT $${queryParams.length};
        `;

      return db.query(queryString, queryParams).then(res => res.rows);
    };
    getFavourites(Number(req.cookies["user_id"]), 10)
      .then(maps => {
        res.send({
          maps
        });
      })
      .catch(e => {
        console.error(e);
        res.status(500).send(e);
      });
  });

  router.post("/", (req, res) => {
    let user_id = Number(req.cookies["user_id"]);
    let map_id = req.body.mapid;

    const queryParams = [user_id, map_id];

    let queryString = ` INSERT INTO user_maps (user_id, map_id) VALUES ($1,$2) returning * `;

    db.query(queryString, queryParams)
      .then(data => res.json(data.rows[0]))
      .catch(e => res.status(500).send(e));
  });
  return router;
};

//routes for creating new maps

const express = require("express");
const router = express.Router();
module.exports = db => {
  const createNewMarker = function (
    user_id, map_id, title, description, image_url, address, latitude, longitude
  ) {
    const queryParams = [
      user_id, map_id, title, description, image_url, address, latitude, longitude
    ];
    let queryString = ` INSERT INTO markers (user_id, map_id, title, description, image_url, address, latitude, longitude) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) `;


    return db.query(queryString, queryParams).then(res => res.rows[0]);
  };



  router.get("/", (req, res) => {
    const getAllMaps = function (limit) {
      const queryParams = [];

      let queryString = `
          SELECT * FROM maps
          `;

      queryParams.push(limit);
      queryString += `
        LIMIT $${queryParams.length};
        `;
      return db.query(queryString, queryParams).then(res => res.rows);
    };

    //retrieve up to ten maps
    getAllMaps(10)
      .then(maps => {
        res.send({
          maps
        }).catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.get("/new", (req, res) => {
    res.render("map_form", {
      foo: "test"
    });
  });

  router.get("/user", (req, res) => {
    const getMapsByEmail = function (email, limit) {
      const queryParams = [];

      let queryString = `
          SELECT * FROM users
          JOIN maps on maps.user_id = users.id
          WHERE true
          `;

      if (email) {
        queryParams.push(email);
        queryString += `AND user_id = $${queryParams.length} `;
      }

      queryParams.push(limit);
      queryString += `
        LIMIT $${queryParams.length};
        `;

      return db.query(queryString, queryParams).then(res => res.rows);
    };
    getMapsByEmail(Number(req.cookies["user_id"]), 10)
      .then(maps => {
        res.send({
          maps
        }).catch(err => {
          res.status(500).json({
            error: err.message
          });
        });
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  const createNewMap = function (
    user_id, title, description, image_url, active
  ) {

    const queryParams = [user_id, title, description, image_url, active];

    let queryString = ` INSERT INTO maps (user_id, title, description, image_url, active) VALUES ($1,$2,$3,$4,$5) `;

    return db.query(queryString, queryParams).then(res => res.rows[0]);
  };

  router.post("/", (req, res) => {
    let data = req.body;
    let user_id = req.cookies["user_id"];
    let active = true;
    createNewMap(user_id, data.title, data.description, data.image_url, active);

    res.redirect("/");
  });

  router.post("/markers", (req, res) => {
    let data = req.body;
    createNewMarker(
      data.user_id, data.map_id, data.title, data.description, data.image_url, data.address, data.latitude, data.longitude
    );
    res.send(`<h1> ${data} </h1>`);
  });

  return router;
};

const { authJwt } = require("../middleware");
const controller = require("../controllers/draft.controller");
const controller_running = require("../controllers/runner.controller");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/running/save_draft",
  // [authJwt.verifyToken],
  controller.save_draft,
  );
  app.post("/api/running/register",
  // [authJwt.verifyToken],
  controller_running.register_runing,
  );
};
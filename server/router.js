const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireSignIn = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function(app) {
  app.post("/signup", Authentication.signup);
  app.post("/signin", requireSignIn, Authentication.signin);
};

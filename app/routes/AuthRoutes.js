const authJwt = require("../middlewares/authMiddleware");
const controller = require("../controllers/authContoller");



module.exports = function(app){
      app.use(function(req,res,next){
            res.header(
                  "Access-Control-Allow-headers",
                   "x-access-token ,Origin , Content-Type , Accept"
            );
            next();
      })

      app.post("/api/auth/signup",[
            authJwt.checkDuplicateUsernameOrEmail
      ],
      controller.signup
      )

      app.post("/api/auth/signin",controller.signin)
}
const path = require('path')
const { User } = require(path.join(__dirname, "../models"));

module.exports = {
  async getUser (req, res) {
      try{
        if(req.params.id.includes("@")){
          const otherUsers = await User.findAll();
          res.send(otherUsers)
        }
        else{
          const user = await User.findOne({
            where: {
              id: req.params.id,
            }
          })
          res.send(user)
        }
      }
      catch (err) {
          res.status(500).send({
              error: "An error occured. list controller index catch"
          })
          return;
      }
    },
}

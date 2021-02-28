const { List } = require("../models");
const { User } = require("../models");


module.exports = {
  async index (req, res) {
    try{
      if(req.params.id.includes("@")){
        const otherUsers = await User.findAll();
        res.send(otherUsers)
      }
      else{
        const list = await List.findAll({
          where: {
            UserId: req.params.id
          }
        })
        res.send(list)
      }

    }
    catch (err) {
      res.status(500).send({
          error: "An error occured. list controller index catch"
      })
      return;
    }
  },
  async post (req, res) {
    try{
      const list = await List.create({
        title: req.body.title,
        completed: req.body.completed,
        editing: req.body.editing,
        locked: req.body.locked,
        UserId: req.body.UserId
      })
      res.send(list)
    }
    catch (err) {
      res.status(500).send({
          error: `An error occured. list controller post catch ${err}`,
      })
      return;
    }
  },
  async changeList (req, res) {
    try{
      if(req.body.hasOwnProperty("changeCheckState")){
        const list = await List.findOne({
          where: {
            id: req.body.changeCheckState,
          }
        })
        list.completed = !list.completed
        await list.save();
        res.send(list)
      }
      else if(req.body.hasOwnProperty("beingEditing")){
        const list = await List.findOne({
          where: {
            id: req.body.beingEditing,
          }
        })
        list.editing = !list.editing;
        await list.save();
        res.send(list)
      }
      else if(req.body.hasOwnProperty("ListId") && req.body.hasOwnProperty("newListTitle")){
        const list = await List.findOne({
          where: {
            id: req.body.ListId,
          }
        })
        list.title = req.body.newListTitle;
        list.editing = false;
        await list.save();
        res.send(list)
      }
      else if(req.body.hasOwnProperty("changeVisibilityState")){
        const list = await List.findOne({
          where: {
            id: req.body.changeVisibilityState,
          }
        })
        list.locked = !list.locked;
        await list.save();
        res.send(list)
      }
      else if(req.body.hasOwnProperty("changeSecretState")){
        const user = await User.findOne({
          where: {
            id: req.body.changeSecretState,
          }
        })
        user.isProfileSecret = !user.isProfileSecret;
        await user.save();
        res.send(user)
      }
      else if(req.body.hasOwnProperty("willBeAdmin")){
        const user = await User.findOne({
          where: {
            id: req.body.willBeAdmin,
          }
        })
        user.isAdmin = !user.isAdmin;
        await user.save();
        res.send(user)
      }

    }
    catch (err) {
      return res.status(500).send({
          error: "An error occured. list controller patch catch"
      })
    }
  },
  async delete (req, res) {
    try{
      if(req.body.hasOwnProperty("deleteOne")){
        const list = await List.findOne({
          where: {
            id: req.body.deleteOne
          }
        })
        list.destroy();
        res.send(list);
      }
      else if(req.body.hasOwnProperty("deleteAll")){
        const id = req.body.deleteAll;
        await List.destroy({
          where: {
            UserId: id,
          }
        })
      }
      else if(req.body.hasOwnProperty("deleteUser")){
        const id = req.body.deleteUser;
        await User.destroy({
          where: {
            id: id,
          }
        })
        const deletedUsersList = await List.findAll({
          where: {
            UserId: id
          }
        })
        res.send(deletedUsersList);
      }
    }
    catch (err) {
      return res.status(500).send({
          error: `An error occured. delete all catch ${err}`
      })
    }
  },

}

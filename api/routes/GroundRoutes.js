'use strict';
module.exports = function(app) {
  var groundStuff = require('../controllers/GroundController');

  app.route('/ground')
    .get(groundStuff.list_all_grounds)
    .post(groundStuff.add_ground);


  app.route('/ground/:groundId')
    .get(groundStuff.get_a_ground)
    .put(groundStuff.update_a_ground)
    .delete(groundStuff.delete_a_ground);

	  app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
	});
};
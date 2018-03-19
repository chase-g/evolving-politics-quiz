/* Get homepage */
const index = function(res, req) {
  req.render('index', {title: 'Political Typology'});
};

module.exports = {
  index
};

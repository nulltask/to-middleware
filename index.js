
/**
 * Expose middleware.
 *
 * @param {Server} server
 * @return {Function}
 */

module.exports = function(server) {
  return function(req, res) {
    server.emit('request', req, res);
  }; 
};

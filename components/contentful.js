var noflo = require('noflo');

exports.getComponent = function() {
  var c = new noflo.Component();
  c.description = 'Get data from Contentful';
  c.icon = 'database';
  c.inPorts.add('space', {
    datatype: 'string',
    description: 'Contentful Space ID'
  });
  c.inPorts.add('accessToken', {
    datatype: 'string',
    description: 'Contentful Access Token'
  });
  c.outPorts.add('out', {
    datatype: 'object'
  });
  c.process(function (input, output) {
    
  });
  /*
  noflo.helpers.WirePattern(c, {
    "in": ['in'],
    out: 'out',
    forwardGroups: true,
    async: true
  }, function(data, groups, out, callback) {
    // do something with data
    // send output
    out.send(data);
    // tell WirePattern we are done
    return callback();
  });
  */
  return c;
};

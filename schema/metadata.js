// Copyright 2011 Joyent, Inc.  All rights reserved.

var util = require('util');

var Validator = require('../lib/schema/validator');



///--- API

function Metadata() {
  Validator.call(this, {
    name: 'capimetadata',
    required: {
      cn: 1
    }
  });
}
util.inherits(Metadata, Validator);



///--- Exports

module.exports = {
  createInstance: function() {
    return new Metadata();
  }
};
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
  var nameArray = this.name.split(' ');
  return nameArray[0];
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  var nameArray = this.name.split(' ');
  if (nameArray.length > 1) {
    return nameArray[nameArray.length - 1];
  } else {
    return this.name;
  }
});

module.exports = schema;

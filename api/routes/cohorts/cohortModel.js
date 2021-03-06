'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const { schema: studentSchema } = require('../students/studentModel');

const cohortSchema = exports.schema = new Schema({
  year: Number,
  cohort: {
    type: String,
    enum: [
      'spring',
      'summer',
      'fall',
      'winter',
    ]
  },
  program: String,
  students: [studentSchema],
});


exports.model = mongoose.model('Cohorts', cohortSchema);

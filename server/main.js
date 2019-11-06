import { Meteor } from 'meteor/meteor';
import runDebugModels from './testmodels';

Meteor.startup(() => {
  if (process.env.TESTRUN) {
    runDebugModels();
  }
});

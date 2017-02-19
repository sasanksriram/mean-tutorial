'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('meanTutorialApp.signup', [])
  .controller('SignupController', SignupController)
  .name;

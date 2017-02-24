import angular from 'angular';
import humanizeNumberFilter from './filters/humanizeNumber.filter';

const commonModule = angular.module('common', []);

humanizeNumberFilter.register(commonModule);

export default commonModule.name;

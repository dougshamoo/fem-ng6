// style dependencies
import 'normalize.css';
import './app.styl';

// angular dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

// components
import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  ngAnimate,
  home.name
]);

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'System Runtime',
  tagline: 'A JavaScript library that runs systems',
  url: 'https://designfirst.io/systemruntime/',
  baseUrl: '../',

  projectName: '',
  organizationName: '',

  headerLinks: [],

  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#f8f8f8',
    secondaryColor: '#f8f8f8'
  },

  copyright: 'System Runtime is distributed under Apache License 2.0 - Copyright © 2018 Erwan Carriou',

  highlight: {
    theme: 'zenburn'
  },

  scripts: [
    '../js/links.js',
    '../js/clipboard.js',
    '../js/copy.js'
  ],

  onPageNav: 'separate'
};

module.exports = siteConfig;

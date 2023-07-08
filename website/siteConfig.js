const siteConfig = {
  title: 'System Runtime',
  tagline: 'A JavaScript library that runs systems',
  url: 'https://designfirst.io',
  baseUrl: '../../',

  projectName: '',
  organizationName: '',

  headerLinks: [ 
    { languages: true }
  ],

  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  translationRecruitingLink: 'https://crowdin.com/project/system-runtime',

  colors: {
    primaryColor: '#f8f8f8',
    secondaryColor: '#f8f8f8'
  },

  copyright: 'System Runtime is distributed under Apache License 2.0 - Copyright © 2023 Erwan Carriou',

  highlight: {
    theme: 'zenburn',
    themeUrl : '../../css/zenburn.css'
  },

  scripts: [
    '../../js/links.js',
    '../../js/clipboard.js',
    '../../js/copy.js'
  ],

  onPageNav: 'separate',
  scrollToTop: true,
  disableHeaderTitle: false

};

module.exports = siteConfig;


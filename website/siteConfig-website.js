const siteConfig = {
  title: 'System Runtime',
  tagline: 'A JavaScript library that runs systems',
  url: 'https://designfirst.io',
  baseUrl: '/systemruntime/documentation/',

  projectName: '',
  organizationName: '',

  headerLinks: [
    { doc: 'what-is-system-runtime', label: 'DOCUMENTATION' },
    { href: 'https://github.com/design-first/system-runtime/issues', label: 'SUPPORT' },
    { href: 'https://github.com/design-first/system-runtime', label: 'GITHUB' }
  ],

  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  translationRecruitingLink: 'https://crowdin.com/project/system-runtime',

  colors: {
    primaryColor: '#f8f8f8',
    secondaryColor: '#f8f8f8'
  },

  copyright: 'System Runtime is distributed under Apache License 2.0 - Copyright © 2019 Erwan Carriou',

  highlight: {
    theme: 'zenburn'
  },

  scripts: [
    '../../js/links-website.js',
    '../../js/clipboard.js',
    '../../js/copy.js'
  ],

  onPageNav: 'separate',
  scrollToTop: true,
  disableHeaderTitle: false

};

module.exports = siteConfig;

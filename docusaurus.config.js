// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const modifyVars = require('./scripts/config.theme.js');
// const tableRemark = require('./src/remark/table');
// const ulRemark = require('./src/remark/ul');
// const math = require('./src/remark/remark-math');
// const imageList = require('./src/remark/imageList');

const config = {
  title: 'StoneDB',
  tagline: 'StoneDB',
  url: 'https://stonedb.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StoneAtom', // Usually your GitHub org/user name.
  projectName: 'stonedb-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: { 
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
      zh: { 
        label: '简体中文',
        htmlLang: 'zh',
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editLocalizedFiles: false,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://https://github.com/StoneAtom/stonedb/edit/main/website/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.less'),
        },
      }),
    ],
  ],
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'StoneDB',
          src: 'img/logo_stonedb.svg',
          href: '/',
          target: '_self',
        },
        hideOnScroll: true,
        items: [
          {
            to: '/docs/download', 
            label: 'Download',
            key: 'Download'
          },
          {
            label: 'Docs',
            to: '/docs/intro',
            key: 'Docs',
          },
          {
            to: '/community/main',
            label: 'Community',
            key: 'Community',
          },
          {
            type: 'custom-github',
            position: 'right'
          },{
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        copyright: `Copyright © The StoneAtom-tech ALL Rights Reserved`,
        links: [
          {
            label: '@StoneDB2022',
            href: 'https://twitter.com/StoneDB2022',
            icon: 'icon-a-bianzu2'
          },
          {
            label: 'dev@stonedb.io',
            href: '#',
            icon: 'icon-a-bianzu17beifen2',
            onclick: 'subscribe'
          },
          {
            label: ' ',
            href: 'https://join.slack.com/t/stonedb/shared_invite/zt-18loq1bo1-nqlQ5qZ4WwTbx5ykIigAcQ',
            icon: 'icon-a-bianzu18beifen2'
          },
          {
            label: 'StoneAtom/stonedb',
            href: 'https://github.com/StoneAtom/stonedb',
            icon: 'icon-a-bianzu4',
          }
        ]
      },
      prism: {
        
      },
    }),
  scripts: [
    'https://unpkg.com/libpag@latest/lib/libpag.min.js',
  ],
  plugins: [
    require.resolve("./plugins/fetch-repo/index"),
    [
      "docusaurus-plugin-less", 
      {
        lessOptions: {
          modifyVars,
          javascriptEnabled: true,
        }
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'community',
        id: 'community',
        routeBasePath: 'community',
        blogSidebarCount: 0
        // remarkPlugins: [ulRemark],
        // rehypePlugins: [katex],
      }
    ],
    // [
    //   require.resolve("./plugins/community/index"),
    //   {
    //     path: 'community',
    //     id: 'community',
    //     routeBasePath: 'community',
    //     sidebarPath: false,
    //   }
    // ]
  ],
};

module.exports = config;

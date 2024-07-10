import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stangerup Cloud Documentation',
  tagline: 'All your information in one place',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://learn.stangerup.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://code.westerkam.org/stangerup-cloud/stangerup-cloud-docs/src/branch/main/',
        },
        blog: {
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Stangerup Cloud Changelog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://code.westerkam.org/stangerup-cloud/stangerup-cloud-docs/src/branch/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Stangerup Cloud',
      logo: {
        alt: 'Stangerup Cloud',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/changelog', label: 'Changelog', position: 'left' },
        {
          href: 'https://console.stangerup.cloud',
          label: 'Cloud Console',
          position: 'right',
        },
        {
          href: 'https://status.stangerup.cloud',
          label: 'System Status',
          position: 'right',
        },
        //{
        //  href: 'https://github.com/stangerup-cloud/stangerup-cloud-docs',
        //  position: 'right',
        //  className: 'header-github-link',
        //  'aria-label': 'GitHub repository',
        //},
      ],
    },
    footer: {
      style: 'light',

      copyright: `Copyright © ${new Date().getFullYear()} Stangerup Cloud`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      // The application ID provided by Algolia
      appId: 'G6KSM2T20L',

      // Public API key: it is safe to commit it
      apiKey: 'e45eb17bb5b19db60ef55a75ef04934f',

      indexName: 'learn-stangerup',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

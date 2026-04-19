// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DerpyNewbie',
    tagline: '',
    favicon: 'https://derpynewbie.dev/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://derpynewbie.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/knowledge/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'derpynewbie', // Usually your GitHub org/user name.
    projectName: 'knowledge', // Usually your repo name.

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'https://derpynewbie.dev/images/Profile_Peace.png',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'DerpyNewbie Icon',
                    src: 'https://derpynewbie.dev/icon_512.png',
                    style: {borderRadius: '50%'}
                },
                items: [
                    {
                        to: 'https://derpynewbie.dev/',
                        label: 'Home',
                        position: 'left',
                    },
                    {
                        to: 'https://derpynewbie.dev/works',
                        label: 'Works',
                        position: 'left',
                    },
                    {
                        to: 'https://derpynewbie.dev/social',
                        label: 'Social',
                        position: 'left',
                    },
                    {
                        to: 'https://derpynewbie.dev/docs',
                        label: 'Docs',
                        position: 'left',
                    },
                    {
                        to: '/',
                        position: 'left',
                        label: 'Knowledge',
                    },
                    {
                        href: 'https://derpynewbie.dev/vpm-repos',
                        label: 'VPM Repos',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} DerpyNewbie. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;

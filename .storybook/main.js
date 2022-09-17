module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-tailwind-dark-mode",
    // "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  babel: async options => ({
    ...options,
    plugins: [
      [
        "module-resolver",
        {
          root: ["../"],
          alias: {
            "~": "./src",
            "@logger": "./logger",
          },
        },
      ],
    ],
  }),
}

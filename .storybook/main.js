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
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
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
          },
        },
      ],
    ],
  }),
}

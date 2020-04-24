const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: {
          parser: "typescript",
          prettierConfig: {
            trailingComma: "es5",
            tabWidth: 2,
            semi: true,
            singleQuote: false,
          },
        },
      },
    ],
    include: [path.resolve(__dirname, "../src")],
    enforce: "pre",
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};

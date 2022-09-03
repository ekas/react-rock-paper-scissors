const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "@swatch_1": "#fefefd",
              "@swatch_2": "#39393b",
              "@swatch_3": "#989898",
              "@swatch_4": "#fed835",
              "@swatch_5": "#e5e3c8",
              "@swatch_6": "#968650",
              "@swatch_7": "#faf1a0",
              "@swatch_8": "#f4a93d",
              "@swatch_9": "#fff",
            },
          },
        },
      },
    },
  ],
};

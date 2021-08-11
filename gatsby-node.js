exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-backdrop-filter/,
              use: loaders.null(),
            },
            {
              test: /html2canvas/,
              use: loaders.null(),
            },
            {
              test: /resize-observer-polyfill/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
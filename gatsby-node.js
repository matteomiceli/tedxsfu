exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: "react-backdrop-filter",
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
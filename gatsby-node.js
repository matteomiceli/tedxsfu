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
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  require("./src/content/teams").forEach((currentTeamInfo, index) => {
    actions.createPage({
      path: `/team/${currentTeamInfo.href}`,
      component: require.resolve(`./src/pages/team/teamBios.jsx`),
      context: { teamInfo: currentTeamInfo },
    });
  });
};

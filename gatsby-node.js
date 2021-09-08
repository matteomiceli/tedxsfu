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
  // building the team bio page
  require("./src/content/teams").forEach((currentTeamInfo, index) => {
    actions.createPage({
      path: `/team/${currentTeamInfo.href}`,
      component: require.resolve(`./src/pages/team/teamBios.jsx`),
      context: { teamInfo: currentTeamInfo },
    });
  });
  // building video page
  require("./src/content/speakers").forEach((currentSpeakerInfo, index) => {
    actions.createPage({
      path: `/${currentSpeakerInfo.slug}`,
      component: require.resolve(`./src/template/VideoPageTemplate.jsx`),
      context: { speakerInfo: currentSpeakerInfo },
    });
  });
};

/**
 * Converting images into webp in build time
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const getAllFiles = (dirPath, exts, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, exts, arrayOfFiles);
      return;
    }

    // its not a directory
    const extension = path.extname(file);

    // add to record if the extension matches
    if (exts.some((str) => `.${str}` === extension))
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
  });

  return arrayOfFiles;
};

// crawl the image directory covert them to webp
exports.onPreInit = async () => {
  const IMAGE_DIR = "static/images/";
  const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif"];

  console.log(`Gathering images under ${IMAGE_DIR}...`);
  const allImages = getAllFiles(IMAGE_DIR, IMAGE_EXTENSIONS);

  console.log(`Converting images into webp...`);

  // parallel process all the images
  await Promise.all(
    allImages.map(async (imgPath) => {
      const relativeImgPath = path.relative(__dirname, imgPath);
      const extName = path.extname(relativeImgPath);
      // const fileName = path.basename(relativeImgPath, extName);
      const pathWithoutExt = relativeImgPath.substring(
        0,
        relativeImgPath.indexOf(extName)
      );
      const writeFilePathWebp = pathWithoutExt + ".webp";
      const writeFilePathWebpHalf = pathWithoutExt + "@half.webp";
      const writeFileLoading = pathWithoutExt + "@loading.webp";

      console.log(`Writing "${writeFilePathWebp}"`);
      // get the image and converting it into webp
      await sharp(relativeImgPath).webp().toFile(writeFilePathWebp);

      console.log(`Writing "${writeFilePathWebpHalf}"`);
      await sharp(relativeImgPath)
        .metadata()
        .then(({ width }) =>
          sharp(relativeImgPath)
            .resize(Math.round(width * 0.5))
            .toFile(writeFilePathWebpHalf)
        );

      console.log(`Writing "${writeFileLoading}"`);
      await sharp(relativeImgPath).resize(16).blur(3).toFile(writeFileLoading);
    })
  );
};

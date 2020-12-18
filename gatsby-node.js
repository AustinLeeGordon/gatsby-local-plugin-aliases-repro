const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        utils: path.join(__dirname, "./utils"),
      },
    },
  })
}

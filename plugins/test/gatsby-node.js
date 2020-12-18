const { upper } = require("utils")

exports.onPreInit = ({ reporter }) => {
  reporter.info(upper("test"))
}

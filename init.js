const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

function init (...args) {
  const [targetDir, appName, managerTool, templateName] = args
  try {
    const dirname = path.dirname(require.resolve(`${templateName}/package.json`, { paths: [targetDir] }))
    const templateDir = path.join(dirname, 'template')
    if (fs.existsSync(templateDir)) {
      fs.copySync(templateDir, targetDir)
    } else {
      console.error(
        `could not locate supplied template: ${chalk.green(templateDir)}`
      )
      return
    }
  } catch (error) {
    console.error(chalk.red(error))
  }
}

module.exports = init
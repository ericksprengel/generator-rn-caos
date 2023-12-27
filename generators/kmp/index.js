var yaml = require('js-yaml')
var fs = require('fs')
var Generator = require('yeoman-generator')

const FILES = [{
  destinationPath: 'ios/kmp/kmpFeatures/',
  template: 'features/ios/kmpFeature.swift',
  fileType: 'mainFile'
},
{
  destinationPath: 'android/app/src/main/java/br/com/stone/ton/kmp/plugins/',
  template: 'features/android/kmpFeature.kt',
  fileType: 'mainFile'
}]

// const parseArrayFromString = (str) =>
//   str ? str.split(',').map((item) => item.trim()) : []

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor (args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // Next, add your custom code
    // this.option('babel') // This method adds support for a `--babel` flag
    this.argument('yaml', { type: String, required: false })

    var yamlFile = this.options['yaml']
    if (yamlFile) {
      this.yamlDoc = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'))
      this.log(this.yamlDoc)
    }
  }

  async prompting () {
    if (this.yamlDoc) {
      return
    }
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'featureName',
        message: 'Qual o nome de sua feature?'
      }
    ])
    const result = await this.prompt(
      {
        type: 'input',
        name: 'featurePluginName',
        message: 'Qual o nome do Plugin de sua feature?',
        default: `${this.answers.featureName}Plugin`
      }
    )
    this.answers = { ...this.answers, featurePluginName: result.featurePluginName }
  }

  writing () {
    if (!this.yamlDoc) {
      const featureName = this.answers.featureName
      const featurePluginName = this.answers.featurePluginName

      this._writeScreen({
        featureName,
        featurePluginName
      })

      return
    }

    for (var fullPath in this.yamlDoc) {
      this.log('fullPath:', fullPath)
      const featureName = fullPath.slice(0, fullPath.lastIndexOf('/'))
      const featurePluginName = fullPath.slice(1, fullPath.lastIndexOf('/'))
      this.log({
        featureName,
        featurePluginName
      })
      this._writeScreen({
        featureName,
        featurePluginName
      })
    }
  }

  _writeScreen ({ featureName, featurePluginName }) {
    for (const item of FILES) {
      const isIos = item.destinationPath.includes('ios')

      const fileName = {
        mainFile: `${featureName}.${isIos ? 'swift' : 'kt'}`
      }

      this.fs.copyTpl(
        this.templatePath(item.template),
        this.destinationPath(
          item.destinationPath + fileName[item.fileType]
        ),
        {
          featureName,
          lowerCaseFeatureName: featureName.toLowerCase(),
          featurePluginName
        }
      )
    }
  }
}

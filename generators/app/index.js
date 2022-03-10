var yaml = require('js-yaml')
var fs = require('fs')
var helpers = require('./helpers')
var Generator = require('yeoman-generator')

const FILES = [
  'index.tsx',
  'tests/index.test.tsx',
  'ui/index.tsx',
  'ui/styles.ts',
  'ui/tests/componentStates.tsx',
  'ui/tests/index.stories.ts',
  'ui/tests/index.test.tsx'
]

const parseArrayFromString = (str) => str
  ? str.split(',').map(item => item.trim())
  : []

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
      // this.log(this.yamlDoc)
    }
  }

  async prompting () {
    if (this.yamlDoc) {
      return
    }
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'feature',
        message: 'What feature will be deployed?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Your screen name:'
      },
      {
        type: 'input',
        name: 'uiParams',
        message: 'Your ui params (ex.: name, fullname):'
      },
      {
        type: 'input',
        name: 'inputs',
        message: 'List input views (ex.: email, password):'
      },
      {
        type: 'input',
        name: 'actions',
        message: 'List button actions:'
      }
    ])
  }

  writing () {
    if (!this.yamlDoc) {
      const states = ['default', 'loading', 'genericError', 'networkError']
      const featureName = this.answers.feature
      const screenName = this.answers.name
      const uiParams = parseArrayFromString(this.answers.uiParams)
      const inputs = parseArrayFromString(this.answers.inputs)
      const actions = parseArrayFromString(this.answers.actions)

      this._writeScreen({
        featureName,
        screenName,
        states,
        uiParams,
        inputs,
        actions
      })

      return
    }

    for (var fullPath in this.yamlDoc) {
      this.log('fullPath:', fullPath)
      const screenYaml = this.yamlDoc[fullPath]
      const featureName = fullPath.slice(0, fullPath.lastIndexOf('/'))
      const screenName = fullPath.slice(fullPath.lastIndexOf('/') + 1)
      const states = parseArrayFromString(screenYaml.states)
      const uiParams = parseArrayFromString(screenYaml.params)
      const inputs = parseArrayFromString(screenYaml.inputs)
      const actions = parseArrayFromString(screenYaml.actions)
      // this.log({
      //   componentPath, componentName, states, inputs, actions
      // })
      this._writeScreen({
        featureName,
        screenName,
        states,
        uiParams,
        inputs,
        actions
      })
    }
  }

  _writeScreen ({
    featureName,
    screenName,
    states,
    uiParams,
    inputs,
    actions
  }) {
    for (const item of FILES) {
      this.fs.copyTpl(
        this.templatePath('features/screens/' + item),
        this.destinationPath('src/features/' + featureName + '/screens/' + screenName + '/' + item),
        {
          featureName,
          screenName,
          states,
          uiParams,
          inputs,
          actions,
          helpers
        }
      )
    }
  }
}

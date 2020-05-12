var yaml = require('js-yaml')
var fs = require('fs')
var helpers = require('./helpers')
var Generator = require('yeoman-generator')

const CONTAINER_FILES = [
  'index.tsx',
  'styles.ts',
  'tests/componentStates.tsx',
  'tests/index.stories.ts',
  'tests/index.test.tsx'
]

const SCREEN_FILES = [
  'index.tsx',
  'index.test.tsx'
]

const parseArrayFromString = (str) => str ? str.split(',') : []

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
        name: 'name',
        message: 'Your screen/container name:'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Your screen/container path dir:'
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
      const states = ['default', 'loading', 'error']
      const componentPath = this.answers.path
      const componentName = this.answers.name
      const inputs = this.answers.inputs ? this.answers.inputs.split(',') : []
      const actions = this.answers.actions ? this.answers.actions.split(',') : []
      this._writeContainer({
        componentPath, componentName, states, inputs, actions
      })
      this._writeScreen({
        componentPath, componentName, states, inputs, actions
      })
      return
    }
    for (var fullPath in this.yamlDoc) {
      this.log('fullPath:', fullPath)
      const screenYaml = this.yamlDoc[fullPath]
      const componentPath = fullPath.slice(0, fullPath.lastIndexOf('/'))
      const componentName = fullPath.slice(fullPath.lastIndexOf('/') + 1)
      const states = parseArrayFromString(screenYaml.states)
      const inputs = screenYaml.inputs ? screenYaml.inputs.split(',') : []
      const actions = screenYaml.actions ? screenYaml.actions.split(',') : []
      this.log({
        componentPath, componentName, states, inputs, actions
      })
      this._writeContainer({
        componentPath, componentName, states, inputs, actions
      })
      this._writeScreen({
        componentPath, componentName, states, inputs, actions
      })
    }
  }

  _writeContainer ({
    componentPath,
    componentName,
    states,
    inputs,
    actions
  }) {
    for (const item of CONTAINER_FILES) {
      this.fs.copyTpl(
        this.templatePath('container/' + item),
        this.destinationPath('src/containers/' + componentPath + '/' + componentName + '/' + item),
        {
          componentName,
          componentPath,
          states,
          inputs,
          actions,
          helpers
        }
      )
    }
  }

  _writeScreen ({
    componentPath,
    componentName,
    states,
    inputs,
    actions
  }) {
    for (const item of SCREEN_FILES) {
      this.fs.copyTpl(
        this.templatePath('screen/' + item),
        this.destinationPath('src/screens/' + componentPath + '/' + componentName + '/' + item),
        {
          componentName,
          componentPath,
          states,
          inputs,
          actions,
          helpers
        }
      )
    }
  }
}

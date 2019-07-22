var helpers = require('./helpers')
var Generator = require('yeoman-generator')

const CONTAINER_FILES = [
  'index.js',
  'index.stories.js',
  'index.test.js',
  'styles.js'
]

const SCREEN_FILES = [
  'index.js'
]

module.exports = class extends Generator {
  // The name `constructor` is important here
  // constructor (args, opts) {
  //   // Calling the super constructor is important so our generator is correctly set up
  //   super(args, opts)

  //   // Next, add your custom code
  //   // this.option('babel') // This method adds support for a `--babel` flag
  //   this.argument('name', { type: String })
  // }

  async prompting () {
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
        name: 'actions',
        message: 'List button actions:'
      }
    ])
  }

  writing () {
    // this.log('cool feature', this.answers.cool)
    this._writeContainer()
    this._writeScreen()
  }

  _writeContainer () {
    const componentPath = this.answers.path
    const componentName = this.answers.name
    const actions = this.answers.actions.split(',')

    for (const item of CONTAINER_FILES) {
      this.fs.copyTpl(
        this.templatePath('container/' + item),
        this.destinationPath('src/containers/' + componentPath + '/' + componentName + '/' + item),
        {
          componentName,
          actions
        }
      )
    }
  }

  _writeScreen () {
    const componentPath = this.answers.path
    const componentName = this.answers.name
    const actions = this.answers.actions.split(',')

    for (const item of SCREEN_FILES) {
      this.fs.copyTpl(
        this.templatePath('screen/' + item),
        this.destinationPath('src/screens/' + componentPath + '/' + componentName + '/' + item),
        {
          componentName,
          componentPath,
          actions,
          helpers
        }
      )
    }
  }
}

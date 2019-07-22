import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import <%= componentName %> from '.'

describe('<%= componentName %> container', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <<%= componentName %>
<% for (const action of actions) { -%>
        <%= action %>={() => null}
<% } -%>
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

<% for (const action of actions) { %>
  test('<%= action %> should be called', () => {
    const <%= action %> = jest.fn()

    const instance = shallow(
      <<%= componentName %>
<% for (const actionI of actions) { -%>
        <%= actionI %>={<%- actionI === action ? actionI : '() => null' %>}
<% } -%>
      />
    )
    instance.find('Button').at(2).simulate('press')

    expect(<%= action %>).toBeCalled()
  })
<% } -%>
})

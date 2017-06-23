import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
        </Container>
      </Menu>
    )
  }
}

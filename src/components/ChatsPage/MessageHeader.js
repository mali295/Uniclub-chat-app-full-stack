import React, { Component } from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react';

export class MessageHeader extends Component {
  render() {
    let { activeChannel } = this.props
    return (
      <Segment>
        <Header as="h2">
          <Icon name="bullhorn" />
          <Header.Content>{ activeChannel.name[0].toUpperCase() + activeChannel.name.slice(1) }</Header.Content>
          
        </Header>
      </Segment>
    )
  }
}

export default MessageHeader

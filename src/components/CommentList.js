import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import CommentItems from './CommentItems'
import { config } from '../config'

class Comments extends Component {
  state = {
    loading: true,
    comments: []
  };

  componentWillMount() {
    firebase.initializeApp(config.firebase);
    this.firedata = firebase.database().ref('/comments');
    this.firedata.on('value', snapshot => {
      this.setState({
        loading: false,
        comments: snapshot.val()
      })
    });
  }

  componentWillUnmount() {
    this.firedata.off();
  }

  render() {
    const { className } = this.props;
    const { loading, comments } = this.state;

    return (
      <Container className={ className }>
        <Header as="h3" dividing>Comments</Header>
        <CommentItems loading={ loading } comments={ comments }/>
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Container>
    )
  }
}

export default Comments
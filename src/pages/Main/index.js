import React, { Component } from 'react'
import { FaCat } from 'react-icons/fa'

import api from '../../services/api'
import { Container, Button, List } from './styles'

class Main extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    this.showGifs()
  }
 
  async showGifs() {
    const response = await api.get('&mime_types=gif&limit=4&size=full')
    this.setState({ cats: response.data })
  }


  render() {
    return (
      <Container>
        <h1>CatZone <FaCat /></h1>
        <Button type='button' onClick={() => this.showGifs()}>Mais Gifs</Button>
        <List>
          {this.state.cats.map( cat => (
            <img key={cat.id} src={cat.url} alt="Cat gif"/>
          ))}
        </List>
      </Container>
    )
  }
}

export default Main
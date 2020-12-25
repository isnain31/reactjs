import React, {Component} from 'react'
import List from './List';
import Title from './Title';


const favoriteArtists= ['Mark Knophler', 'David Gilmore', 'George Harrision']

const favoriteGames= ['Cricket', 'Football', 'Kicker','Bowling']

class Main extends Component {

    render () {
  
        return (<div> <Title title="Favorite Artists"/> <List items={favoriteArtists}/> <Title title="Favorite Games"/>  <List items={favoriteGames}/> </div>)
  
    }
  
  }

  export default Main
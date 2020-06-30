import React from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'

// function changeString() {
//   return 'Hello Phil'
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  async componentDidMount() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await res.json()
    this.setState({ monsters: users })
  }

  handleChange = (e) => this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App

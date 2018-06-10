class Root extends Component {
  render() {
    return (
      <HashRouter hashType={ "hashbang" }>
        <App />
      </HashRouter>
    )
  }
}

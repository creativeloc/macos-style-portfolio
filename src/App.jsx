import { Dock, Navbar, Welcome } from "#components"

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Welcome />
        <Dock />
      </div>
    </main>
  )
}
export default App

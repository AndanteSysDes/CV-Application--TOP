import CardHolder from './components/CardHolder'
import './styles/App.css'
import { initialGeneralInfo, initialEducationInfo, initialWorkingInfo } from './data';


function App() {

  return (
    <div>
      <h1>CV Application</h1>

      <CardHolder title="General information" initialInfo={initialGeneralInfo}  />
      <CardHolder title="Education" initialInfo={initialEducationInfo}  />
      <CardHolder title="Experience" initialInfo={initialWorkingInfo}  />

    </div>
  )
}

export default App

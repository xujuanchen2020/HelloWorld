import './App.css'
import React, {useState, useEffect} from 'react'
import Loading from './Components/Loading'
import Tours from './Components/Tours'

const url='https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return (   
    <main>
      <h2>
        <Loading />
      </h2>
    </main>
  )
  }
  return (
    <main>
      <h2>
        <Tours tours={tours} />
      </h2>
    </main>
  )
}

export default App;

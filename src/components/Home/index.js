import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [iplData, setIplData] = useState([])
  const [isLoader, setIsLoader] = useState(true)
  const fetching = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await fetchData.json()
    setIplData(teams)
    setIsLoader(false)
  }
  useEffect(() => {
    fetching()
  }, [])
  return (
    <>
      <div className="home-container p-5 ">
        <div className="homeContainer d-flex justify-content-center align-items-center w-100">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="team banner"
            width="50"
          />
          <h1 className="">IPL Dashboard</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {isLoader ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            iplData.map(item => <TeamCard item={item} key={item.id} />)
          )}
        </div>
      </div>
    </>
  )
}
export default Home

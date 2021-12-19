import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const [teamData, setTeamData] = useState({})
  const [isLoader, setIsLoader] = useState(true)
  const [reacentMatches, setReacentMatches] = useState([])
  const {id} = useParams()
  const teamColors = {
    CSK: '##f7db00',
    RCB: '#a4261d',
    MI: ' #13418b',
    KKR: '#5755a7',
    SH: '#f26d22',
    KXP: '#d91c1f',
    RR: '#da237b',
    DC: '#4f5db0',
  }
  const fetching = async () => {
    const fetchData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await fetchData.json()
    const {recent_matches: reacent} = data
    setTeamData(data)
    setReacentMatches(reacent)
    setIsLoader(false)
  }
  useEffect(() => {
    fetching()
  }, [])

  return (
    <div style={{backgroundColor: teamColors[id]}}>
      {isLoader ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div
          className="teammatchContainer d-flex flex-column justify-content-center align-items-center w-100"
          style={{backgroundColor: teamColors[id]}}
        >
          <img src={teamData.team_banner_url} alt={id} width="100%" />
          <LatestMatch teamData={teamData} />
          <div className="container">
            <div className="row">
              {reacentMatches.map(item => (
                <MatchCard item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamMatches

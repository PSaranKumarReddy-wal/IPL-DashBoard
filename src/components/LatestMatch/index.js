import './index.css'

const LatestMatch = ({teamData}) => {
  const {latest_match_details: team} = teamData
  return (
    <div className="latestmatch d-flex align-items-center justify-content-between w-100">
      <div className="d-flex flex-column">
        <h1 className="mb-4">{team.competing_team}</h1>
        <h4 className="mb-3">{team.date}</h4>
        <h6>{team.venue}</h6>
        <h6>{team.result}</h6>
      </div>
      <div>
        <img src={team.competing_team_logo} alt={team.id} />
      </div>
      <div className="d-flex flex-column matchDetail">
        <h5 className="mb-3">First Innings</h5>
        <h6 className="mb-3">{team.first_innings}</h6>
        <h5 className="mb-3">Second Innings</h5>
        <h6 className="mb-3">{team.second_innings}</h6>
        <h5 className="mb-3">Man Of The Match</h5>
        <h6 className="mb-3">{team.man_of_the_match}</h6>
        <h5 className="mb-3">Umpires</h5>
        <h6 className="mb-3">{team.umpires}</h6>
      </div>
    </div>
  )
}
export default LatestMatch

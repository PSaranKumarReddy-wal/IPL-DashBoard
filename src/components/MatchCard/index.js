import './index.css'

const MatchCard = ({item}) => {
  const winLoss = item.match_status === 'Won' ? 'green' : 'red'
  return (
    <div className="p-4 d-flex flex-column align-items-center col-xl-3 carddesign justify-content-between">
      <img
        src={item.competing_team_logo}
        alt={item.competing_team}
        width="40%"
        height="35%"
      />
      <h2 className="m-3">{item.competing_team}</h2>
      <h6>{item.result}</h6>
      <h3 style={{color: winLoss}}>{item.match_status}</h3>
    </div>
  )
}

export default MatchCard

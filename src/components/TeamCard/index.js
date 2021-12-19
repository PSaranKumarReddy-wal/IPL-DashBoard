import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({item}) => (
  <div className="iplCard">
    <Link to={`/teams-matches/${item.id}`}>
      <div className="d-flex align-items-center ">
        <img src={item.team_image_url} alt={item.id} className="card-image" />
        <h5 className="m-3">{item.name}</h5>
      </div>
    </Link>
  </div>
)

export default TeamCard

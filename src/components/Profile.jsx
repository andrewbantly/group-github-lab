import { useParams } from 'react-router-dom';
import gitTogetherTeam from '../tempData';

export default function Profile() {
  
  const { id } = useParams();

  
  const selectedTeamMember = gitTogetherTeam.find((member) => member.name === id);


  return (
  <>
  <div className="homeContainer">
  <div className="homeCardLink">
  <div className="homeCard">
  <h2 className="homeCardName">{selectedTeamMember.name}</h2>
  <img src={selectedTeamMember.image} className="homeCardImage"></img>
  <p className="homeCardInfo">{selectedTeamMember.bio}</p>
  </div>
  </div>
  </div>
  </>
  )
}
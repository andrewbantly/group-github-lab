import {useParams} from 'react-router-dom'
import gitTogetherTeam from '../tempData'


export default function Profile() {

    const {id} = useParams()


    return(
        <>
        <div className="homeContainer">
            <p>Profile</p>
        </div>
        </>
    )
}
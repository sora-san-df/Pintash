import {useNavigate} from 'react-router-dom';
import '../styles/Profile.css'

const Profile = ()=>{
    
    const toHomeNavi = useNavigate();

    const toHome=()=>{
        toHomeNavi('/')
    }
    return(
        <>
        <div className='profileContainer'>
            <figure>
            <img  className='profileImage' src='https://i.pinimg.com/736x/2f/5c/63/2f5c638540bbe9e3108bf13403e08423.jpg' alt='profile photo'/>
            </figure>
            <h1>user Name</h1>
            <div className='profileStats'>
                <p>Followers</p>
                <p>Following</p>
            </div>
            <div>
                <ul className='profileOptions'>
                    <li>share</li>
                    <li>Edit profile</li>
                    <li onClick={toHome}>Home</li>
                </ul>
            </div>
            <img className='licka'src="https://tenor.com/view/licka-gif-27127048.gif"/>
        </div>
        </>
    );
}

export {Profile}


import react from 'react';
import "./profile.css";
import MyPosts from "./MyPosts/MyPosts.jsx"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const Profile = (props) => {
    return (
        <div className="profile">
        <ProfileInfo />
        <MyPosts posts = {props.posts}/>
        </div>
        );
};
export default Profile;
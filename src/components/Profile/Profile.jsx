import react from 'react';
import "./profile.css";
import MyPosts from "./MyPosts/MyPosts.jsx"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const Profile = () => {
    return (
        <div className="profile">
        <ProfileInfo />
        <MyPosts/>
        </div>
        );
};
export default Profile;
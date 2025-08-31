// src/components/UserProfile.jsx
const UserProfile = (props) => {
return (
<div className="user-card">
<h2>{props.name}</h2>
<p>Age: {props.age}</p>
<p>{props.bio}</p>
</div>
);
};


export default UserProfile;

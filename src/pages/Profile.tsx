const Profile = () => {
  return (
    <>
      <h1>Hello user</h1>
      <div className="profile-details">
        <img
          src="https://i.pinimg.com/736x/ee/e7/ee/eee7ee781d177742e1b964fe666a43a6.jpg"
          style={{ width: "40vh" }}
        />
        <p>
          <strong>Name:</strong>
        </p>
        <p>
          <strong>Member since:</strong>
        </p>
        <p>
          <strong>Current streak:</strong>
        </p>
      </div>
    </>
  );
};
export default Profile;

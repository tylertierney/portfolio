import { useUser } from "../context/authContext";

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>PROFILE</h1>
      <p>{user?.username}</p>
    </div>
  );
};

export default Profile;

// export async function getStaticProps(context) {
//   return {
//     props: {
//       protected: true,
//     },
//   };
// }

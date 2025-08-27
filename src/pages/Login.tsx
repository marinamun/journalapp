import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response: any) => {
    console.log(response);
  };

  const errorMessage = () => {
    console.log("Error logging in with google");
  };
  return (
    <>
      <h3>Login with google</h3>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </>
  );
};
export default Login;

import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

const Login = () => {
  const responseMessage = async (response: CredentialResponse) => {
    try {
      const nodeResponse = await fetch(
        "http://localhost:3000/api/auth/google-credential",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: response.credential,
          }),
        }
      );

      const data = await nodeResponse.json();
      if (data.success) {
        console.log("✅Login successful");
        window.location.href = `/dashboard/${data.userId}`;
      }
    } catch (error) {
      console.error("❌Login error:", error);
    }
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

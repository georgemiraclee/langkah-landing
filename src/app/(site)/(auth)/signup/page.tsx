import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Langkah Kembang Anak",
};

const SignupPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignupPage;

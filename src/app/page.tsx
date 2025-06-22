import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Page = async () => {
   const session = await auth();
   if(!session) redirect("/sign-in")
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <h1 className="text-blue-700 font-serif font-semibold text-xl">Visa Verification Enquiry</h1>
        <p className="text-gray-600">Enter the details of the visa to be verified </p>
        <p className="font-medium">Please enter these details exactly as they appear in the visa holder current passport</p>
        
        <p className="text-gray-600">your transit visa has been approved</p>
      </div>

      <SignOut />
    </>
  );
};

export default Page;

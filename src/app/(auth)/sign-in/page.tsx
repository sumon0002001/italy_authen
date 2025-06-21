
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth, signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth()
  if(session) redirect("/")
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Visa Verification Enquiry</h1>

     

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
          Enter the details of the visa to be verified.
          </span>
          
        </div>
        <br />
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
          Please enter these details exactly as they appear in the visa holder current passport.
 
          </span>
          
        </div>
      </div>

      {/* Email/Password Sign In */}
      <form
        className="space-y-4"
        action={async (formData: FormData) => {
          "use server";
          await executeAction({
            actionFn: async() => {
              await signIn("credentials", formData)
            }
          })
        }}
      >
        <Input
          name="family name"
          placeholder="Family Name"
          type="name"
          required
          autoComplete="name"
        />
        <Input
          name="passport"
          placeholder="Passport Nationality"
          type="passport"
          required
          autoComplete="passport"
        />
           <Input
          name="number"
          placeholder="Passport Number"
          type="number"
          required
          autoComplete="number"
        />
           <Input
          name="gender"
          placeholder="Gender"
          type="name"
          required
          autoComplete="name"
        />
           <Input
          name="number"
          placeholder="Visa Approval Number"
          type="number"
          required
          autoComplete="number"
        />
        <Button className="w-full" type="submit">
          Check Visa
        </Button>
      </form>

   
    </div>
  );
};

export default Page;

import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

type SearchParamProps = {
  params: {
    userId: string;
  };
};

const Register = async ({ params: { userId } }: SearchParamProps) => {
  try {
    const user = await getUser(userId).catch((error) => {
      console.error("Error fetching user:", error);
      redirect("/error-page"); // Redirect to a custom error page if fetching user fails
    });

    const patient = await getPatient(userId).catch((error) => {
      console.error("Error fetching patient:", error);
      return null; // Allow patient to be null
    });

    if (patient) {
      redirect(`/patients/${userId}/new-appointment`); // Redirect if the patient exists
    }

    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="mb-12 h-10 w-fit"
              priority
            />

            <RegisterForm user={user} />

            <p className="copyright py-12">© 2024 CarePluse</p>
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="register"
          className="side-img max-w-[390px]"
          priority
        />
      </div>
    );
  } catch (error) {
    console.error("An error occurred in the Register component:", error);
    redirect("/error-page"); // Handle unexpected errors
  }
};

export default Register;
  
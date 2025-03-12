import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

interface PageProps {
  params: Promise<{ userId: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function NewAppointment({ params }: PageProps) {
  // First, await the params Promise to get the actual object
  const resolvedParams = await params;
  // Then extract userId from the resolved object
  const { userId } = resolvedParams;

  const patient = await getPatient(userId);
  

  // Handle case where patient or $id is missing
  if (!patient || !patient.$id) {
    console.error("Patient not found or missing $id");
    return <div>Error: Patient data is unavailable.</div>;
  }

  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP VERIFICATION */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px flex-1 justify-between]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId} // Now userId is safely accessed
            patientId={patient.$id} // Safe to access now
          />

          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[80px]"
      />
    </div>
  );
}

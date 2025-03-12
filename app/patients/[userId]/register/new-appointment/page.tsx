import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

interface PageProps {
  params: { userId: string };
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NewAppointment({ params, searchParams }: PageProps) {
  const { userId } = params;

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  console.log(resolvedSearchParams); // Just for debugging

  const patient = await getPatient(userId);

  if (!patient || !patient.$id) {
    console.error("Patient not found or missing $id");
    return <div>Error: Patient data is unavailable.</div>;
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px flex-1 justify-between]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm type="create" userId={userId} patientId={patient.$id} />

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

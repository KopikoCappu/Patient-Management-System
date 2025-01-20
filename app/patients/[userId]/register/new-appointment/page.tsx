import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

interface Params {
  params: { userId: string };
}

export default async function NewAppointment({ params }: Params) {
  const { userId } = await params; // Await params since it's asynchronous
  const patient = await getPatient(userId); // Fetch patient details

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
            userId={userId}
            patientId={patient.$id} // Assuming patient object has $id property
          />

          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 CarePulse</p>
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

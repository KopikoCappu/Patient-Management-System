import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto" aria-label="Patient registration">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={160}
            alt="CarePulse Logo"
            className="mb-12 w-fit"
            priority
          />

          <PatientForm />

          <footer className="mt-20 flex justify-between text-sm">
            <p className="text-dark-600 xl:text-left">
              © {new Date().getFullYear()} CarePulse
            </p>
            <Link 
              href="/?admin=true" 
              className="text-green-500"
              aria-label="Access admin portal"
            >
              Admin
            </Link>
          </footer>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={800}
        width={800}
        alt="Patient onboarding illustration"
        className="side-img max-w-[50%]"
        priority
      />
    </div>
  );
}
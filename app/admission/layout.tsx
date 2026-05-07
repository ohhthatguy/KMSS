import AdmissionBanner from "@/components/admission/AdmissionBanner";

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AdmissionBanner />

      <main className="p-6 bg-surface sm:p-14 ">{children}</main>
    </section>
  );
}

import AboutBanner from "@/components/about/AboutBanner";
import FindUs from "@/components/Home/FindUs";
export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AboutBanner />

      <main className="p-6 bg-surface sm:p-14 ">{children}</main>
      <FindUs />
    </section>
  );
}

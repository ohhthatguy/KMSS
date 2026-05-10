import AboutBanner from "@/components/about/AboutBanner";
import AboutSideBar from "@/components/about/AboutSideBar";
import FindUs from "@/components/Home/FindUs";
export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AboutBanner />

      {/* <main className="p-6 bg-surface sm:p-14 ">{children}</main> */}
      <main className="p-6 bg-surface sm:p-14  grid gap-10 grid-cols-1 xs:grid-cols-[1.5fr_0.5fr] items-start">
        {children}
        <AboutSideBar />
      </main>
      <FindUs />
    </section>
  );
}

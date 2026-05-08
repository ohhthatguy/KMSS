import AboutSideBar from "@/components/about/AboutSideBar";
import KmssIntro from "@/components/about/KmssIntro";
import KmssPhilosophy from "@/components/about/KmssPhilosophy";
const page = () => {
  return (
    <section className="grid gap-10 grid-cols-[1.5fr_0.5fr] items-start">
      <div className="grid gap-10">
        <KmssIntro />
        <KmssPhilosophy />
      </div>

      <AboutSideBar />
    </section>
  );
};

export default page;

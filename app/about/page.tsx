// import AboutSideBar from "@/components/about/AboutSideBar";
import KmssIntro from "@/components/about/KmssIntro";
import KmssPhilosophy from "@/components/about/KmssPhilosophy";
import BasicAnimationProvider from "@/provider/animation/BasicAnimationProvider";
const page = () => {
  return (
    <section className="grid gap-10">
      <KmssIntro />
      <BasicAnimationProvider>
        <KmssPhilosophy />
      </BasicAnimationProvider>
    </section>
  );
};

export default page;

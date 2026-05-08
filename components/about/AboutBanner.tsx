import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className=" px-4 py-4">
      <div className=" h-[calc(50vh)] rounded-2xl relative w-full  overflow-hidden">
        <div className="absolute  w-full h-full shrink-0 ">
          <Image
            src="/Feature1/school.jpeg"
            alt="+2 students of KMSS"
            fill
            className="object-bottom object-cover "
          />
        </div>

        {/* gradient */}
        <div className="absolute z-10 opacity-40 inset-0 bg-gradient-hero-crousel "></div>
        {/* <div className="absolute z-10 inset-0 opacity-40 bg-[linear-gradient(to_right,#232933,#4d595e,)]"></div> */}
      </div>
    </div>
  );
};

export default AboutBanner;

import Image from "next/image";

const AdmissionBanner = () => {
  return (
    <div className=" px-4 py-4">
      <div className=" h-[calc(50vh)] rounded-2xl relative w-full  overflow-hidden">
        <div className="absolute  w-full h-full shrink-0 ">
          <Image
            src="/Feature1/students.jpg"
            alt="+2 students of KMSS"
            fill
            className="object-cover "
          />
        </div>

        {/* gradient */}
        <div className="absolute z-10 opacity-40 inset-0 bg-gradient-hero-crousel "></div>

        {/* decorative piece  */}
        {/* <div className="absolute z-10  bg-primary text-white">
          Admission Open
        </div> */}

        {/* <section className="absolute flex px-8 flex-col gap-4 inset-0 items-center animate-[slideUp_0.8s_ease-out_forwards] justify-center z-10">
          <div className="text-h3 text-gray-100 text-center leading-6 italic font-bold ">
            Welcome to KMSS Family
          </div>

          <div className="text-p text-white text-center ">subtitle</div>
        </section> */}
      </div>
    </div>
  );
};

export default AdmissionBanner;

import { scholarShipData } from "@/components/about/data/scholarShipData";
import ScholarshipCard from "@/components/about/reusables/ScholarshipCard";
import type { scholarShipDataType } from "@/components/about/type";
import BasicAnimationProvider from "@/provider/animation/BasicAnimationProvider";
const page = () => {
  return (
    <section className="grid gap-8">
      <div className="text-center">
        <h4 className=" font-semibold">
          <b className="underline"> Scholarships</b> in Khadga Memorial
          Secondary School
        </h4>
        <p>Welcome to KMSS Scholarship Opportunities! </p>
      </div>

      <p className="text-justify">
        At KMSS, we encourage students and parents to explore the scholarship
        programs available at our institution. Through our scholarship support
        system, eligible students can apply for academic, merit-based, and
        need-based scholarships designed to support their educational journey.
        Our goal is to make quality education more accessible by recognizing
        talent, dedication, and potential, while helping students achieve their
        academic dreams in a supportive learning environment.
      </p>

      <p>All the available Scholarships at KMSS:</p>

      <div className="grid gap-4">
        <BasicAnimationProvider>
          {scholarShipData.map((e: scholarShipDataType, index: number) => (
            <ScholarshipCard key={index} data={e} />
          ))}
        </BasicAnimationProvider>
      </div>
    </section>
  );
};

export default page;

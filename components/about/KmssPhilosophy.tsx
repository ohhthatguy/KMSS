import { objectiveData } from "./data/objectiveData";
import type { objectiveDataType } from "./type";

const KmssPhilosophy = () => {
  return (
    <section className="grid gap-14">
      <div className="grid gap-8 bg-dark  p-4">
        <div className="">
          <h4 className=" font-semibold">Our Philosophy</h4>
          <label className="italic  text-muted-text">
            &quot; Guiding Students Toward Purposeful Lives &quot;
          </label>
        </div>
        <p className="">
          Human is a social being,for this identity, he goes on struggling till
          his death. KMSS is helping its students for overall development like
          social, mental, physical ,moral etc.to compete with the burning
          problems.
        </p>
      </div>

      <div className="grid bg-dark rounded-2xl ">
        <h4 className="  font-semibold p-4 ">Our Objectives</h4>

        <div className="py-3  sm:py-4 flex justify-around  items-center gap-2 sm:gap-8 flex-wrap">
          {objectiveData.map((e: objectiveDataType, index: number) => {
            const Icon = e.icon;
            return (
              <div
                className="bg-light  rounded-xl hover:cursor-pointer transition-transform duration-500 scale-100 hover:scale-105 grid gap-6 w-56 border border-border p-4"
                key={index}
              >
                <div className=" ">
                  <Icon className="" size={54} />
                </div>

                <div className=" grid gap-4">
                  <p className="">{e.title}</p>

                  <label className=" leading-tight text-justify w-full inline-block ">
                    {e.description}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KmssPhilosophy;

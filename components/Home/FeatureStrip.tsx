import { FeatureStripData } from "./data/featureStripData";
import type { FeatureStripDataType } from "./type";

const FeatureStrip = () => {
  return (
    <section className=" p-6 sm:p-14 flex justify-around  items-center gap-2 sm:gap-8 flex-wrap ">
      {FeatureStripData.map((e: FeatureStripDataType, index: number) => {
        const Icon = e.icon;
        return (
          <div
            className="bg-light rounded-xl hover:cursor-pointer transition-transform duration-500 scale-100 hover:scale-105 grid gap-6 w-56 border border-border p-2"
            key={index}
          >
            <div className=" ">
              <Icon className="" size={54} />
            </div>

            <div className="leading-tight ">
              <p className="">{e.title}</p>

              <label className="font-bold  w-full inline-block text-right">
                {e.amount} +
              </label>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeatureStrip;

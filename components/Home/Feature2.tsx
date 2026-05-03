import Feature2Slider from "./client-comp/Feature2Slider";

const Feature2 = () => {
  return (
    <section className=" p-6 sm:p-14   bg-surface flex flex-col-reverse sm:flex-row  gap-8">
      <Feature2Slider />

      <section className="flex-[1.5]  flex flex-col py-8 sm:py-0 gap-4 justify-center items-center   ">
        <div className="grid gap-2">
          <div className="">
            <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
              <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
              <div>
                Sports in <span className="text-blue-500">KMSS</span>
              </div>
            </label>
          </div>

          <h2 className="leading-tight">
            Leading in both education and sports
          </h2>
        </div>
        <p className="">
          Khadga Memorial Secondary School (KMSS) is a renowned service oriented
          educational institution of Tikapur area, established by Tikapur
          Development Committee in the year 2044 B.S. This institution is run by
          the Public Educational Trust. It provides curricular programmes from
          PG to grade twelve. This public educational trust is named in memory
          of late Khadga Bahadur Singh, who made a significant contribution to
          the development of Tikapur area as a well planned city.
        </p>

        <div className="  w-full  ">
          <button className=" primary_btn ">Know More</button>{" "}
        </div>
      </section>
    </section>
  );
};

export default Feature2;

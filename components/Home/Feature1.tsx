import Image from "next/image";
import Link from "next/link";

const Feature1 = () => {
  return (
    <section className=" p-6 sm:p-14 bg-surface grid   sm:grid-cols-[1.5fr_2fr] items-start gap-4">
      <section className="flex flex-col py-8 sm:py-0 gap-4 justify-center items-center h-full  ">
        <div className="grid gap-2">
          <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
            <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
            <div>
              About <span className="text-blue-500">KMSS</span>
            </div>
          </label>

          <h2 className="leading-tight">
            Trusted Educational Institution Serving From 2044 BS
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

        <div className="   w-full  ">
          <Link href={"/about"} className=" primary_btn w-fit">
            Know More
          </Link>{" "}
        </div>
      </section>
      <section className="   h-[100vh] py-8 flex flex-col justify-between gap-2">
        <div className="relative  sm:h-9/12 sm:w-11/12 h-full w-full hidden sm:block">
          <Image
            src="/Feature1/school.jpeg"
            alt="school view of KMSS"
            priority
            fill
            className="object-center rounded-2xl"
          />
        </div>

        <div className="relative sm:h-9/12 sm:w-11/12 h-full w-full sm:self-end">
          <Image
            src="/Feature1/TEACHERALL.jpeg"
            alt="Teachers of KMSS"
            priority
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
    </section>
  );
};

export default Feature1;

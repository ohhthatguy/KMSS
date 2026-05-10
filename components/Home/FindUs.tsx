import BlogListAnimationProvider from "@/provider/animation/BlogListAnimationProvider";
import { findUsData } from "./data/findUsData";
import type { findusDatatype } from "./type";
const FindUs = () => {
  return (
    <section className=" p-6 sm:p-14 bg-surface  ">
      <div className="grid w-full gap-2">
        <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
          <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
          <div>
            Come to <span className="text-blue-500">KMSS</span>
          </div>
        </label>

        <h2 className="leading-tight">Come for a visit!</h2>
      </div>

      <div className="grid sm:grid-cols-[1.5fr_1fr] gap-8 mt-8">
        <div className="grid gap-4 sm:gap-0 ">
          <p>
            Located in the historic heart of the valley, Heritage Academy offers
            a serene and inspiring environment for academic pursuit. Visit our
            campus to experience our community firsthand.
          </p>

          {/* <div className="grid  grid-cols-2 grid-rows-2 gap-4 "> */}
          <BlogListAnimationProvider animationOptionData="findUs">
            {findUsData.map((e: findusDatatype, index: number) => {
              const Icon = e.icon;
              return (
                <div
                  className="grid rounded-xl bg-light hover:cursor-pointer transition-transform duration-500 scale-100 hover:scale-105 gap-4 border border-border p-2"
                  key={index}
                >
                  <div>
                    <Icon size={36} className=" " />
                  </div>
                  <div className="grid gap-4">
                    <div>{e.title}</div>
                    <label className="sm:text-right break-all">
                      {e.description}
                    </label>
                  </div>
                </div>
              );
            })}
          </BlogListAnimationProvider>
          {/* </div> */}
        </div>

        <div className=" flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.678455085762!2d81.12054057453699!3d28.519320389214567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20cfe5c4656cd%3A0x62fdacd4fa8ec9f9!2sKhadga%20Memorial%20English%20Boarding%20School!5e0!3m2!1sen!2snp!4v1777718773510!5m2!1sen!2snp"
            // width="600"
            className="w-full"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;

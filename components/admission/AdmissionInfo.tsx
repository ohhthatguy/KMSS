import AdmssionInfoSection from "./client-comp/AdmssionInfoSection";

const AdmissionInfo = () => {
  return (
    <section className="p-6 bg-surface sm:p-14 flex flex-col gap-14">
      <div className="grid gap-2">
        <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
          <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
          <div>
            Admission <span className="text-blue-500">OPEN</span>
          </div>
        </label>

        <h3 className="leading-tight">
          Admissions are currently open for students of batch 2083.
        </h3>

        <p className="leading-tight text-gray-300">
          Our school offers a nurturing Montessori program for young learners,
          along with comprehensive education from Class 1 to Class 10. For
          higher studies, we provide Class 11 and 12 in the Management stream,
          preparing students for future academic and professional success. Join
          us to experience a supportive learning environment focused on growth,
          discipline, and excellence.
        </p>
      </div>

      <AdmssionInfoSection />
    </section>
  );
};

export default AdmissionInfo;

import AdmissionInfo from "@/components/admission/AdmissionInfo";
import Admissionprocess from "@/components/admission/Admissionprocess";
import AdmssionInfoSection from "@/components/admission/client-comp/AdmssionInfoSection";
const page = () => {
  return (
    <section className="flex flex-col gap-14">
      <AdmissionInfo />
      <AdmssionInfoSection />
      <Admissionprocess />
    </section>
  );
};

export default page;

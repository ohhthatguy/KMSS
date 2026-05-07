import OnlineAdmissionForm from "@/components/admission/client-comp/OnlineAdmissionForm";

const page = () => {
  return (
    <section>
      <div className="grid gap-2">
        <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
          <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
          <div>
            Online <span className="text-blue-500">Admission</span>
          </div>
        </label>

        <h3 className="leading-tight">Please Fill up this form</h3>
      </div>

      <div>
        <OnlineAdmissionForm />
      </div>
    </section>
  );
};

export default page;

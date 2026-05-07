import Link from "next/link";
import { CiLink } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

const Admissionprocess = () => {
  return (
    <div className="grid gap-2">
      <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
        <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
        <div>
          Admission <span className="text-blue-500">Process</span>
        </div>
      </label>

      <h3 className="leading-tight">Two ways of Admisson in KMSS</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-border bg-light p-8 rounded-2xl">
          <h4 className="leading-tight">Apply Admission Online</h4>

          <p className="leading-tight text-gray-300 mt-4">
            <label>
              Students and parents may also visit the KMSS campus directly for
              admission inquiries and registration. Our staff will provide
              complete guidance regarding classes, facilities, and the admission
              process. This option is ideal for those who prefer in-person
              consultation and school visits before enrollment.{" "}
            </label>
          </p>

          <div className="  w-full  mt-4">
            <Link
              href="/admission/online-admission"
              className="primary_btn text-lg"
            >
              <CiLink /> proceed
            </Link>
          </div>
        </div>
        <div className="border border-border bg-light p-8 rounded-2xl">
          <h4 className="leading-tight">Direct School Visit</h4>

          <p className="leading-tight text-gray-300 mt-4">
            <label>
              Students and parents may also visit the KMSS campus directly for
              admission inquiries and registration. Our staff will provide
              complete guidance regarding classes, facilities, and the admission
              process. This option is ideal for those who prefer in-person
              consultation and school visits before enrollment.{" "}
            </label>
          </p>

          <div className="  w-full  mt-4">
            <button className=" primary_btn text-lg">
              <FiMapPin /> visit
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissionprocess;

import Image from "next/image";
import Link from "next/link";
import NaviagteToTopBtn from "./client-comp/NaviagteToTopBtn";
const Footer = () => {
  return (
    <div className="p-6 sm:px-14 sm:py-20 grid gap-8 sm:grid-cols-[2fr_1.5fr]">
      <div className="w-full  grid gap-4">
        <div className="flex gap-4 items-center">
          <Link href="/" className="relative block h-16 w-18  ">
            <Image
              src="/Header/KMSS-logo-1.png"
              alt="KMSS LOGO"
              className="object-contain"
              fill
              priority
            />
          </Link>

          <h4>KMSS</h4>
        </div>

        <p>
          Located in the historic heart of the valley, Heritage Academy offers a
          serene and inspiring environment for academic pursuit. Visit our
          campus to experience our community firsthand.
        </p>

        <div className="mt-2">
          <NaviagteToTopBtn />
        </div>
      </div>

      <div className="flex he sm:justify-around items-center gap-8 ">
        <div>
          <div>Sitemap</div>

          <div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
          </div>
        </div>

        <div>
          <div>Sitemap</div>

          <div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

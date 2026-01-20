import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="p-12 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl text-black dark:text-white">
        Contact <span className="text-[#DC143C]">info</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto p-8">
        <img


          alt="contact"
          src={"/img/contact.png"}
          className="hidden md:block w-1/2 rounded-xl object-cover"
        />

        <div className="flex-1 text-gray-800 dark:text-white space-y-6 text-lg">
          <div className="flex items-center gap-4">
            <Phone className="text-[#DC143C]" />
            <a
              href="tel:7788949197"
              className="hover:underline hover:text-[#DC143C] transition"
            >
              +91 77889 49197
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#DC143C]" />
            <a
              href="mailto:rajsainathpatro@gmail.com"
              className="hover:underline hover:text-[#DC143C] transition"
            >
              rajsainathpatro@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#DC143C] mt-1" />
            <p className="text-base leading-relaxed">
              Bhavani Nagar 2nd Line,
              <br />
              Gatebazar, Berhampur,
              <br />
              Ganjam, Odisha - 760001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

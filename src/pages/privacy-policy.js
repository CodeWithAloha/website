import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { TextBlock } from "./terms-of-use";

const PrivacyPolicy = () => {
  return (
    <>
      <section
        className="h-screen px-6 pb-20 overflow-x-hidden 
      bg-gradient-to-tr from-cyan-200 to bg-white xl:px-60 "
      >
        <NavBar />
        <h1 className="text-xl font-semibold py-6 text-center mx-auto w-2/3 2xl:text-4xl">
          {" "}
          Code with Aloha Privacy Policy
        </h1>
        <p className="pt-10 2xl:text-xl">
          Your privacy is important to us. This Privacy Policy outlines how Code
          with Aloha collects, uses, and protects any information you provide
          while using our website.
        </p>

        <TextBlock
          title="Information We Collect:"
          text="We do not collect any personal information from visitors to our website. 
          We do not use cookies or other tracking technologies to gather any data."
        />
        <TextBlock
          title="Links to External Websites:"
          text="Our website may contain links to external websites. Please note that 
          we have no control over the content, privacy policies, or practices of these external sites. 
          Therefore, we cannot be responsible for the protection and privacy of any information you 
          provide while visiting such sites. 
          Please exercise caution and review the privacy policies of any external websites you visit."
        />
        <TextBlock
          title="Changes to This Privacy Policy:"
          text="We may update this Privacy Policy from time to time. 
          Any changes will be posted on this page. We recommend checking this page periodically 
          to ensure you are aware of any updates."
        />

        <TextBlock
          title="Contact Us:"
          text="TIf you have any questions or concerns about our Privacy Policy, 
          please contact us at info@codeforhawaii.org."
        />

        <TextBlock title="Last updated: " text="June 2023" />

        <Link
          href="/"
          className="text-orange-600 font-satisfy text-lg cursor-pointer hover:text-orange-400"
        >
          <div className="flex flex-row gap-2 justify-center items-center py-6 font-semibold xl:py-12">
            <IoMdArrowBack />
            <p>Back Home</p>
          </div>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

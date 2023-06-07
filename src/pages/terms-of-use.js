import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react'
import Link from "next/link";
import {IoMdArrowBack} from 'react-icons/io'

export const TextBlock =({title, text}) => {
  return (
    <div>
      <h2 className="text-md font-semibold py-3 2xl:text-2xl">{title}</h2>
      <p className='2xl:text-xl'>{text}</p>
    </div>
  );
}

const TermsOfUse = () => {
  return (
    <>
      <section
        className="h-screen px-6 pb-20 overflow-x-hidden 
      bg-gradient-to-tr from-cyan-200 to bg-white xl:px-60 "
      >
        <NavBar />
        <h1 className="text-xl font-semibold py-6 text-center mx-auto w-2/3 2xl:text-4xl">
          {" "}
          Code with Aloha Terms of Use
        </h1>

        <TextBlock
          title="1. Acceptance of Terms"
          text="By using the Website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms."
        />
        <TextBlock
          title="2. Use of the Website"
          text="Code with Aloha provides the Website for informational purposes only.
          You may browse, read, and engage with the content on the Website. 
          You agree to use the Website in a manner consistent with its purpose,
          which includes accessing information about the projects, team members,
          and Meetup meetings organized by Code with Aloha."
        />
        <TextBlock
          title="3. Intellectual Property"
          text="All content on the Website, including but not limited to text,
          graphics, logos, button icons, images, audio clips, and software, is
          the property of Code with Aloha or its content suppliers and is
          protected by applicable copyright laws. 
          You may not reproduce, distribute, modify, publicly display, or create
          derivative works of any portion of the Website without the prior
          written consent of Code with Aloha."
        />

        <TextBlock
          title="4. Third-Party Links"
          text="The Website may contain links to third-party websites or resources
          that are not owned or controlled by Code with Aloha. We have no
          control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third-party websites or resources.
          Code with Aloha shall not be liable for any loss or damage caused or
          alleged to be caused by or in connection with the use of any such
          content, goods, or services available on or through any third-party
          websites or resources."
        />

        <TextBlock
          title="5. Disclaimer of Warranties"
          text='The Website is provided on an "as is" and "as available" basis. Code
          with Aloha makes no warranties or representations of any kind, express
          or implied, regarding the Website, its content, or any information
          obtained through the Website.
          Code with Aloha does not warrant that the Website will be error-free,
          uninterrupted, or free from viruses or other harmful components. You
          agree that your use of the Website is at your own risk.'
        />
        <TextBlock
          title="6. Limitation of Liability"
          text="To the fullest extent permitted by applicable law, Code with Aloha
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses, resulting from your
          access to or use of the Website."
        />
        <TextBlock
          title="7. Governing Law and Jurisdiction"
          text="These Terms shall be governed by and construed in accordance with the
          laws of Hawaii. Any disputes arising out of or in connection with
          these Terms shall be subject to the exclusive jurisdiction of the
          courts of Hawaii."
        />

        <Link
          href="/"
          className="text-orange-600 font-satisfy text-lg cursor-pointer hover:text-orange-400"
        >
          <div className='flex flex-row gap-2 justify-center items-center py-6 font-semibold xl:py-12'>
            <IoMdArrowBack /> 
            <p>Back Home</p>
          </div>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default TermsOfUse

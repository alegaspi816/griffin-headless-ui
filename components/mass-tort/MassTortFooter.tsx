"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MassTortLegalModal from "@/components/mass-tort/MassTortLegalModal";

type MassTortFooterProps = {
  privacyPolicyContent: string;
};

const termsContent = (
  <>
    <h2>Attorney Advertising</h2>
    <p>
      This webpage&apos;s content is provided for informational purposes only by Griffin Law, PLC, located at 1120 S Dobson Rd, Suite 230 Chandler, AZ 85286. This site contains general information that may not be up to date, assumes findings of fact, and is for illustrative purposes only. A more detailed analysis of your particular data would be required to obtain a better estimate of what you are owed. There is no guarantee that a Court or Arbitrator would rule in your favor. This does not create a client-attorney relationship. It is not intended to provide legal advice. For legal advice, you will need to consult an attorney at Griffin Law, PLC. Past results are not indicative of future results and do not guarantee any particular outcome.
    </p>

    <h2>Disclaimer: No Attorney-Client Relationship</h2>
    <p>
      Simply contacting Griffin Law, PLC by email or otherwise will not establish an attorney-client relationship between you and Griffin Law, PLC. Transmission of information between Griffin Law, PLC and you is not intended to, and will not create, an attorney-client relationship between Griffin Law, PLC and you. No such relationship will exist unless and until a partner at Griffin Law, PLC expressly and explicitly agrees in a written agreement letter with you that the firm will undertake an attorney-client relationship with you.
    </p>
    <p>
      As a result, you should not transmit any confidential or sensitive information to us until a formal attorney-client relationship has been established. Griffin Law, PLC does not agree to accept and/or maintain the secrecy of any unsolicited information you send to us unless an attorney-client relationship currently exists between us. Griffin Law, PLC cannot permit an attorney-client relationship to exist until we have obtained all necessary information and evaluated all relevant information concerning potential conflicts of interest.
    </p>
    <p>
      Even in the absence of a conflict of interest, Griffin Law, PLC, in its sole discretion, may decide not to enter into an attorney-client relationship with you. The information and content contained on this site are not intended to constitute legal advice, and you should contact an attorney before relying on any such information or content.
    </p>

    <h2>Association with Co-Counsel</h2>
    <p>
      Griffin Law, PLC may refer prospective clients to partner law firms across the country that have established relationships with Griffin Law, PLC and possess experience handling similar cases. In certain matters, Griffin Law, PLC may directly provide legal representation and may also collaborate with other attorneys nationwide to ensure comprehensive legal support.
    </p>
    <p>
      Please note that laws vary by state. This website provides general information and examples of rules or case outcomes that may apply in some jurisdictions. These examples should not be interpreted as guarantees that the same laws or results apply in your state or in any specific case.
    </p>
    <p>
      One particularly important legal rule is the statute of limitations, which sets strict deadlines for filing a lawsuit. Missing this deadline, no matter how valid the claim or severe the injury, can result in the case being dismissed. While some states allow two years to file negligence claims, others may allow more or less time.
    </p>
  </>
);

const MassTortFooter = ({ privacyPolicyContent }: MassTortFooterProps) => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer id="footer">
      <div className="tseg-footer relative py-12 bg-black text-white">
        {/* Background Pattern Span */}
        <span className="bg-pattern absolute inset-0 pointer-events-none"></span>

        <div className="container mx-auto px-4 relative z-10">
          {/* Top Row: Logo */}
          <div className="flex justify-center w-full mb-12">
              <Image 
                src="/griffin-plc.png" 
                width={150} 
                height={94} 
                alt="Griffin Law Logo" 
                className="img-fluid h-auto"
              />
          </div>

          {/* Bottom Row: Info Columns */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
            
            {/* Left Column: Privacy/Terms */}
            <div className="w-full lg:w-1/4">
              <div className="terms-privacy text-center lg:text-left">
                <button type="button" onClick={() => setIsPrivacyOpen(true)} className="text-white text-sm hover:underline">
                  Privacy Policy
                </button>
                <span className="mx-2 text-sm opacity-50">|</span>
                <button type="button" onClick={() => setIsTermsOpen(true)} className="text-white text-sm hover:underline">
                  Terms
                </button>
              </div>
            </div>

            {/* Center Column: Copyright */}
            <div className="w-full lg:w-1/2 text-center">
              <p className="text-sm opacity-80 mb-0">
                Copyright &copy; {currentYear}, Griffin Law, PLC. All Rights Reserved.
              </p>
            </div>

            {/* Right Column: TSEG Logo */}
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
              <div className="flex items-center w-full lg:w-auto justify-center lg:justify-end">
                <Link href="https://www.tseg.com/" target="_blank" className="power-by">
                  <svg className="tseg-logo-svg fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355.36 98.91" style={{ width: '100px' }}>
                    <g>
                      <polygon points="37.38 42.05 46.74 48.8 66.52 36.86 67.2 36.44 71.47 33.87 72.08 33.49 74.84 31.83 72.4 34.02 71.87 34.5 68.06 37.93 67.48 38.44 46.66 57.15 37.38 42.05"/>
                      <path d="m28.88,27.94c5.01-4.36,11.55-7,18.71-7,7.64,0,14.57,3,19.69,7.89l-5.17,3.12c-3.94-3.27-9-5.24-14.52-5.24-5.22,0-10.03,1.76-13.86,4.71-2.49,1.92-4.57,4.35-6.09,7.12-1.77,3.24-2.78,6.95-2.78,10.9,0,12.56,10.18,22.73,22.73,22.73s22.73-10.18,22.73-22.73c0-1.53-.15-3.02-.44-4.47l4.83-4.34c.9,2.77,1.39,5.74,1.39,8.81,0,15.75-12.76,28.51-28.51,28.51-12.86,0-23.72-8.51-27.28-20.2-1.19-.21-2.1-1.25-2.1-2.5v-11.62c0-1.25.91-2.29,2.1-2.5.89-2.92,2.23-5.64,3.95-8.08,1.33-1.89,2.89-3.61,4.62-5.13Z"/>
                      <path d="m18.21,51.81h-2.07c-.23,1.49-1.5,2.64-3.05,2.67h-.07s-7.02,0-7.02,0h-2.86C1.44,54.48.03,53.1,0,51.4v-.05s0,0,0,0v-3.77h0s0-.06,0-.06h0c.03-1.71,1.44-3.09,3.15-3.09h9.94c1.54.03,2.82,1.19,3.05,2.68h2.07v4.71Z"/>
                      <path d="m96.29,40.76c.5,2.82.76,5.73.76,8.7s-.26,5.87-.76,8.7l-7.97,1.16c-1.03,4.29-2.73,8.31-4.96,11.98l4.82,6.46c-1.65,2.35-3.52,4.59-5.61,6.68-2.1,2.1-4.34,3.97-6.68,5.61l-6.46-4.82c-3.66,2.23-7.69,3.93-11.98,4.96l-1.16,7.97c-2.82.5-5.73.76-8.7.76s-5.87-.26-8.7-.76l-1.16-7.97c-4.29-1.03-8.31-2.73-11.98-4.96l-6.46,4.82c-2.35-1.65-4.59-3.52-6.68-5.61-2.1-2.1-3.97-4.34-5.61-6.68l4.82-6.46c-1.95-3.19-3.48-6.65-4.53-10.33h5.92s.52-.03.52-.03c.43.53.91,1.01,1.45,1.43,5.13,12.87,17.7,21.96,32.4,21.96,19.25,0,34.86-15.61,34.86-34.86S66.85,14.59,47.59,14.59c-14.7,0-27.27,9.09-32.4,21.96-.54.42-1.02.9-1.45,1.43l-.52-.02h-.2s-5.72,0-5.72,0c1.05-3.67,2.58-7.14,4.53-10.33l-4.82-6.46c1.65-2.35,3.52-4.59,5.61-6.68,2.1-2.1,4.34-3.97,6.68-5.61l6.46,4.82c3.66-2.23,7.69-3.93,11.98-4.96l1.16-7.97c2.82-.5,5.73-.76,8.7-.76s5.87.26,8.7.76l1.16,7.97c4.29,1.03,8.31,2.73,11.98,4.96l6.46-4.82c2.35,1.65,4.59,3.52,6.68,5.61,2.1,2.1,3.97,4.34,5.61,6.68l-4.82,6.46c2.23,3.66,3.93,7.69,4.96,11.98l7.97,1.16Z"/>
                    </g>
                    <g>
                      <path d="m168.86,34.63h-19.89v44.27h-15.98v-44.27h-20.06v-13.98h55.92v13.98Z"/>
                      <path d="m217.63,42.54c6.66,0,12.65,5.66,12.65,12.65v11.07c0,6.66-5.66,12.65-12.65,12.65h-44.11v-13.98h37.78c1.75,0,3-1.33,3-3.08v-2.16c0-1.91-1.25-3.16-3-3.16h-25.88c-6.74,0-12.73-6.08-12.73-13.15v-10.07c0-6.66,5.66-12.65,12.73-12.65h42.44v13.98h-36.2c-1.75,0-3,1.17-3,3.08v1.83c0,1.66,1.25,3,3,3h25.96Z"/>
                      <path d="m289.86,78.91h-50.27V20.65h50.27v13.98h-34.29v7.66h27.88v13.98h-27.88v8.65h34.29v13.98Z"/>
                      <path d="m355.36,42.46v36.45h-43.86c-6.66,0-12.73-5.66-12.73-12.65v-32.87c0-6.74,5.66-12.73,12.73-12.73h42.19v13.98h-35.37c-2,0-3.58,1.58-3.58,3.58v23.14c0,2,1.58,3.58,3.58,3.58h21.64v-8.49h-14.4v-13.98h29.79Z"/>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PRIVACY MODAL --- */}
      <MassTortLegalModal 
        id="privacy-policy-modal"
        title="Privacy Policy"
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      >
        <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
      </MassTortLegalModal>

      <MassTortLegalModal
        id="terms-modal"
        title="Terms"
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      >
        {termsContent}
      </MassTortLegalModal>
    </footer>
  );
};

export default MassTortFooter;

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer bg-gray-900 text-white">
//       <div className="footer-upper">
//         <div className="max-w-screen-xl px-4 pt-1 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-14">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            
//             {/* Logo */}
//             <div className="lg:col-span-2">
//               <Link href="/" className="inline-block">
//                 <Image src="/griffin-plc.png" alt="Griffin Law, PLC logo" width={120} height={103} />
//                 <span className="sr-only">Griffin Law, PLC logo</span>
//               </Link>
//             </div>

//             {/* Contact Us */}
//             <div className="footer-contact-col lg:col-span-3">
//               <p className="nav-title text-start uppercase text-sm font-semibold mb-4">Contact Us</p>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex items-start gap-3">
//                   <span className="footer-icon-cont flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28" className="fill-current">
//                         <path d="M160 252.6C160 166.6 231.1 96 320 96C408.9 96 480 166.6 480 252.6C480 302.9 454.1 362 418.6 418.2C384.6 472 344.6 518.7 320 545.6C295.4 518.7 255.4 471.9 221.4 418.2C185.9 362 160 302.9 160 252.6zM320 64C214 64 128 148.4 128 252.6C128 371.9 248.2 514.9 298.4 569.4C310.2 582.2 329.8 582.2 341.6 569.4C391.8 514.9 512 371.9 512 252.6C512 148.4 426 64 320 64zM368 256C368 282.5 346.5 304 320 304C293.5 304 272 282.5 272 256C272 229.5 293.5 208 320 208C346.5 208 368 229.5 368 256zM320 176C275.8 176 240 211.8 240 256C240 300.2 275.8 336 320 336C364.2 336 400 300.2 400 256C400 211.8 364.2 176 320 176z" />
//                     </svg>
//                   </span>
//                   <a href="https://maps.app.goo.gl/5EjPcV9Uw17iH6JX9" target="_blank" rel="noopener noreferer" className="hover:opacity-80">
//                     1120 S Dobson Rd, Suite 230 <br />
//                     Chandler, AZ 85286
//                   </a>
//                 </li>

//                 <li className="flex items-center gap-3">
//                   <span className="footer-icon-cont flex items-center justify-center">
//                     <svg className="w-6 h-6 shrink-0 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="26">
//                         <path d="M64 186.5L64 184L64.1 184C65.3 152.9 91 128 122.5 128L517.5 128C549 128 574.6 152.9 575.9 184L576 184L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 186.5zM544 239.6L367.3 369.1C339.1 389.7 300.8 389.7 272.7 369.1L96 239.6L96 448C96 465.7 110.3 480 128 480L512 480C529.7 480 544 465.7 544 448L544 239.6zM544 186.5C544 171.9 532.1 160 517.5 160L122.5 160C107.9 160 96 171.9 96 186.5C96 194.9 100 202.9 106.8 207.9L291.6 343.3C308.5 355.7 331.5 355.7 348.4 343.3L533.2 207.8C540 202.8 544 194.9 544 186.4z" />
//                     </svg>
//                   </span>
//                   <a href="mailto:contact@griffinlawplc.com" className="hover:opacity-80">contact@griffinlawplc.com</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Links */}
//             <div className="footer-quick-links-col lg:col-span-4">
//               <p className="nav-title text-start uppercase text-sm font-semibold mb-4">Quick Links</p>
//               <ul className="grid grid-cols-2 gap-y-2 text-sm text-start">
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/mass-torts">Mass Torts</Link></li>
//                 <li><Link href="/contact-us">Contact Us</Link></li>
//                 <li><Link href="/privacy-policy">Privacy Policy</Link></li>
//                 <li><Link href="/terms-of-use">Terms of Use</Link></li>
//                 <li><Link href="/sitemap">Sitemap</Link></li>
//               </ul>
//             </div>

//             {/* About Us */}
//             <div className="lg:col-span-3">
//               <p className="nav-title text-start uppercase text-sm font-semibold mb-4">About Us</p>
//               <p className="text-start text-sm leading-relaxed">Griffin Law, PLC provides exceptional, personalized legal representation...</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom border-t border-gray-800">
//         <div className="pt-6 pb-6 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center sm:flex sm:justify-between sm:text-left items-center">
//             <div className="text-xs">
//               <span className="powered-by-tseg flex items-center justify-center gap-2">
//                 <span>Powered by </span>
//                 <a href="https://www.tseg.com/" target="_blank" title="TSEG">
//                   <svg xmlns="http://www.w3.org/2000/svg" id="tseg-logo" className="tseg-logo" data-name="Layer 1" viewBox="0 0 355.36 98.91"><g className="icon-group"><polygon className="cls-3 check" points="37.38 42.05 46.74 48.8 66.52 36.86 67.2 36.44 71.47 33.87 72.08 33.49 74.84 31.83 72.4 34.02 71.87 34.5 68.06 37.93 67.48 38.44 46.66 57.15 37.38 42.05" fill="#9DCB3B"></polygon><g className="gear"><path className="cls-3" d="m96.29,40.76c.5,2.82.76,5.73.76,8.7s-.26,5.87-.76,8.7l-7.97,1.16c-1.03,4.29-2.73,8.31-4.96,11.98l4.82,6.46c-1.65,2.35-3.52,4.59-5.61,6.68-2.1,2.1-4.34,3.97-6.68,5.61l-6.46-4.82c-3.66,2.23-7.69,3.93-11.98,4.96l-1.16,7.97c-2.82.5-5.73.76-8.7.76s-5.87-.26-8.7-.76l-1.16-7.97c-4.29-1.03-8.31-2.73-11.98-4.96l-6.46,4.82c-2.35-1.65-4.59-3.52-6.68-5.61-2.1-2.1-3.97-4.34-5.61-6.68l4.82-6.46c-1.95-3.19-3.48-6.65-4.53-10.33h5.92s.52-.03.52-.03c.43.53.91,1.01,1.45,1.43,5.13,12.87,17.7,21.96,32.4,21.96,19.25,0,34.86-15.61,34.86-34.86S66.85,14.59,47.59,14.59c-14.7,0-27.27,9.09-32.4,21.96-.54.42-1.02.9-1.45,1.43l-.52-.02h-.2s-5.72,0-5.72,0c1.05-3.67,2.58-7.14,4.53-10.33l-4.82-6.46c1.65-2.35,3.52-4.59,5.61-6.68,2.1-2.1,4.34-3.97,6.68-5.61l6.46,4.82c3.66-2.23,7.69-3.93,11.98-4.96l1.16-7.97c2.82-.5,5.73-.76,8.7-.76s5.87.26,8.7.76l1.16,7.97c4.29,1.03,8.31,2.73,11.98,4.96l6.46-4.82c2.35,1.65,4.59,3.52,6.68,5.61,2.1,2.1,3.97,4.34,5.61,6.68l-4.82,6.46c2.23,3.66,3.93,7.69,4.96,11.98l7.97,1.16Z" fill="#9DCB3B"></path><path className="gap-fill" d="m18.21,51.81h-2.07c-.23,1.49-1.5,2.64-3.05,2.67h-.07s-7.02,0-7.02,0h-2.86C1.44,54.48.03,53.1,0,51.4v-.05s0,0,0,0v-3.77h0s0-.06,0-.06h0c.03-1.71,1.44-3.09,3.15-3.09h9.94c1.54.03,2.82,1.19,3.05,2.68h2.07v4.71Z" fill="#FFFFFF"></path></g><g className="magnifying-glass"><path className="cls-2" d="m28.88,27.94c5.01-4.36,11.55-7,18.71-7,7.64,0,14.57,3,19.69,7.89l-5.17,3.12c-3.94-3.27-9-5.24-14.52-5.24-5.22,0-10.03,1.76-13.86,4.71-2.49,1.92-4.57,4.35-6.09,7.12-1.77,3.24-2.78,6.95-2.78,10.9,0,12.56,10.18,22.73,22.73,22.73s22.73-10.18,22.73-22.73c0-1.53-.15-3.02-.44-4.47l4.83-4.34c.9,2.77,1.39,5.74,1.39,8.81,0,15.75-12.76,28.51-28.51,28.51-12.86,0-23.72-8.51-27.28-20.2-1.19-.21-2.1-1.25-2.1-2.5v-11.62c0-1.25.91-2.29,2.1-2.5.89-2.92,2.23-5.64,3.95-8.08,1.33-1.89,2.89-3.61,4.62-5.13Z" fill="#FFFFFF"></path><path className="cls-2" d="m18.21,51.81h-2.07c-.23,1.49-1.5,2.64-3.05,2.67h-.07s-7.02,0-7.02,0h-2.86C1.44,54.48.03,53.1,0,51.4v-.05s0,0,0,0v-3.77h0s0-.06,0-.06h0c.03-1.71,1.44-3.09,3.15-3.09h9.94c1.54.03,2.82,1.19,3.05,2.68h2.07v4.71Z" fill="#FFFFFF"></path></g></g><g className="letter-group"><path className="cls-1 t" d="m168.86,34.63h-19.89v44.27h-15.98v-44.27h-20.06v-13.98h55.92v13.98Z" fill="#FFFFFF"></path><path className="cls-1 s" d="m217.63,42.54c6.66,0,12.65,5.66,12.65,12.65v11.07c0,6.66-5.66,12.65-12.65,12.65h-44.11v-13.98h37.78c1.75,0,3-1.33,3-3.08v-2.16c0-1.91-1.25-3.16-3-3.16h-25.88c-6.74,0-12.73-6.08-12.73-13.15v-10.07c0-6.66,5.66-12.65,12.73-12.65h42.44v13.98h-36.2c-1.75,0-3,1.17-3,3.08v1.83c0,1.66,1.25,3,3,3h25.96Z" fill="#FFFFFF"></path><path className="cls-1 e" d="m289.86,78.91h-50.27V20.65h50.27v13.98h-34.29v7.66h27.88v13.98h-27.88v8.65h34.29v13.98Z" fill="#FFFFFF"></path><path className="cls-1 g" d="m355.36,42.46v36.45h-43.86c-6.66,0-12.73-5.66-12.73-12.65v-32.87c0-6.74,5.66-12.73,12.73-12.73h42.19v13.98h-35.37c-2,0-3.58,1.58-3.58,3.58v23.14c0,2,1.58,3.58,3.58,3.58h21.64v-8.49h-14.4v-13.98h29.79Z" fill="#FFFFFF"></path></g></svg>
//                 </a>
//               </span>
//             </div>
//             <p className="mt-4 text-xs sm:order-first sm:mt-0">
//               © Copyrights {currentYear}. Griffin Law, PLC
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ menuItems = [] }: { menuItems?: any[] }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-900 text-white">
      <div className="footer-upper">
        <div className="max-w-screen-xl px-4 pt-1 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

            {/* Logo */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/griffin-plc.png"
                  alt="Griffin Law, PLC logo"
                  width={120}
                  height={103}
                />
                <span className="sr-only">Griffin Law, PLC logo</span>
              </Link>
            </div>

            {/* Contact Us */}
            <div className="footer-contact-col lg:col-span-3">
              <p className="nav-title text-start uppercase text-sm font-semibold mb-4">
                Contact Us
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="footer-icon-cont flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="28" height="28" className="fill-current">
                      <path d="M160 252.6C160 166.6 231.1 96 320 96C408.9 96 480 166.6 480 252.6C480 302.9 454.1 362 418.6 418.2C384.6 472 344.6 518.7 320 545.6C295.4 518.7 255.4 471.9 221.4 418.2C185.9 362 160 302.9 160 252.6zM320 64C214 64 128 148.4 128 252.6C128 371.9 248.2 514.9 298.4 569.4C310.2 582.2 329.8 582.2 341.6 569.4C391.8 514.9 512 371.9 512 252.6C512 148.4 426 64 320 64zM368 256C368 282.5 346.5 304 320 304C293.5 304 272 282.5 272 256C272 229.5 293.5 208 320 208C346.5 208 368 229.5 368 256zM320 176C275.8 176 240 211.8 240 256C240 300.2 275.8 336 320 336C364.2 336 400 300.2 400 256C400 211.8 364.2 176 320 176z" />
                    </svg>
                  </span>

                  <a
                    href="https://maps.app.goo.gl/5EjPcV9Uw17iH6JX9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    1120 S Dobson Rd, Suite 230 <br />
                    Chandler, AZ 85286
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <span className="footer-icon-cont flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="26" className="fill-current">
                      <path d="M64 186.5L64 184L64.1 184C65.3 152.9 91 128 122.5 128L517.5 128C549 128 574.6 152.9 575.9 184L576 184L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 186.5zM544 239.6L367.3 369.1C339.1 389.7 300.8 389.7 272.7 369.1L96 239.6L96 448C96 465.7 110.3 480 128 480L512 480C529.7 480 544 465.7 544 448L544 239.6zM544 186.5C544 171.9 532.1 160 517.5 160L122.5 160C107.9 160 96 171.9 96 186.5C96 194.9 100 202.9 106.8 207.9L291.6 343.3C308.5 355.7 331.5 355.7 348.4 343.3L533.2 207.8C540 202.8 544 194.9 544 186.4z" />
                    </svg>
                  </span>

                  <a href="mailto:contact@griffinlawplc.com" className="hover:opacity-80">
                    contact@griffinlawplc.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links (DYNAMIC NOW) */}
            <div className="footer-quick-links-col lg:col-span-4">
              <p className="nav-title text-start uppercase text-sm font-semibold mb-4">
                Quick Links
              </p>

              <ul className="grid grid-cols-2 gap-y-2 text-sm text-start">
                {menuItems.length === 0 && (
                  <li className="text-red-400">Footer menu not found</li>
                )}

                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link href={item.uri}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="lg:col-span-3">
              <p className="nav-title text-start uppercase text-sm font-semibold mb-4">About Us</p>
              <p className="text-start text-sm leading-relaxed">Griffin Law, PLC provides exceptional, personalized legal representation against insurance companies and corporations. We champion the wronged, preparing every case for trial to gain maximum negotiation leverage and ensure accessible justice with dedicated partnership.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom border-t border-gray-800">
       <div className="pt-6 pb-6 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center sm:flex sm:justify-between sm:text-left items-center">
            <div className="text-xs">
              <span className="powered-by-tseg flex items-center justify-center gap-2">
                <span>Powered by </span>
                  <a href="https://www.tseg.com/" target="_blank" title="TSEG">
                    <svg xmlns="http://www.w3.org/2000/svg" id="tseg-logo" className="tseg-logo" data-name="Layer 1" viewBox="0 0 355.36 98.91"><g className="icon-group"><polygon className="cls-3 check" points="37.38 42.05 46.74 48.8 66.52 36.86 67.2 36.44 71.47 33.87 72.08 33.49 74.84 31.83 72.4 34.02 71.87 34.5 68.06 37.93 67.48 38.44 46.66 57.15 37.38 42.05" fill="#9DCB3B"></polygon><g className="gear"><path className="cls-3" d="m96.29,40.76c.5,2.82.76,5.73.76,8.7s-.26,5.87-.76,8.7l-7.97,1.16c-1.03,4.29-2.73,8.31-4.96,11.98l4.82,6.46c-1.65,2.35-3.52,4.59-5.61,6.68-2.1,2.1-4.34,3.97-6.68,5.61l-6.46-4.82c-3.66,2.23-7.69,3.93-11.98,4.96l-1.16,7.97c-2.82.5-5.73.76-8.7.76s-5.87-.26-8.7-.76l-1.16-7.97c-4.29-1.03-8.31-2.73-11.98-4.96l-6.46,4.82c-2.35-1.65-4.59-3.52-6.68-5.61-2.1-2.1-3.97-4.34-5.61-6.68l4.82-6.46c-1.95-3.19-3.48-6.65-4.53-10.33h5.92s.52-.03.52-.03c.43.53.91,1.01,1.45,1.43,5.13,12.87,17.7,21.96,32.4,21.96,19.25,0,34.86-15.61,34.86-34.86S66.85,14.59,47.59,14.59c-14.7,0-27.27,9.09-32.4,21.96-.54.42-1.02.9-1.45,1.43l-.52-.02h-.2s-5.72,0-5.72,0c1.05-3.67,2.58-7.14,4.53-10.33l-4.82-6.46c1.65-2.35,3.52-4.59,5.61-6.68,2.1-2.1,4.34-3.97,6.68-5.61l6.46,4.82c3.66-2.23,7.69-3.93,11.98-4.96l1.16-7.97c2.82-.5,5.73-.76,8.7-.76s5.87.26,8.7.76l1.16,7.97c4.29,1.03,8.31,2.73,11.98,4.96l6.46-4.82c2.35,1.65,4.59,3.52,6.68,5.61,2.1,2.1,3.97,4.34,5.61,6.68l-4.82,6.46c2.23,3.66,3.93,7.69,4.96,11.98l7.97,1.16Z" fill="#9DCB3B"></path><path className="gap-fill" d="m18.21,51.81h-2.07c-.23,1.49-1.5,2.64-3.05,2.67h-.07s-7.02,0-7.02,0h-2.86C1.44,54.48.03,53.1,0,51.4v-.05s0,0,0,0v-3.77h0s0-.06,0-.06h0c.03-1.71,1.44-3.09,3.15-3.09h9.94c1.54.03,2.82,1.19,3.05,2.68h2.07v4.71Z" fill="#FFFFFF"></path></g><g className="magnifying-glass"><path className="cls-2" d="m28.88,27.94c5.01-4.36,11.55-7,18.71-7,7.64,0,14.57,3,19.69,7.89l-5.17,3.12c-3.94-3.27-9-5.24-14.52-5.24-5.22,0-10.03,1.76-13.86,4.71-2.49,1.92-4.57,4.35-6.09,7.12-1.77,3.24-2.78,6.95-2.78,10.9,0,12.56,10.18,22.73,22.73,22.73s22.73-10.18,22.73-22.73c0-1.53-.15-3.02-.44-4.47l4.83-4.34c.9,2.77,1.39,5.74,1.39,8.81,0,15.75-12.76,28.51-28.51,28.51-12.86,0-23.72-8.51-27.28-20.2-1.19-.21-2.1-1.25-2.1-2.5v-11.62c0-1.25.91-2.29,2.1-2.5.89-2.92,2.23-5.64,3.95-8.08,1.33-1.89,2.89-3.61,4.62-5.13Z" fill="#FFFFFF"></path><path className="cls-2" d="m18.21,51.81h-2.07c-.23,1.49-1.5,2.64-3.05,2.67h-.07s-7.02,0-7.02,0h-2.86C1.44,54.48.03,53.1,0,51.4v-.05s0,0,0,0v-3.77h0s0-.06,0-.06h0c.03-1.71,1.44-3.09,3.15-3.09h9.94c1.54.03,2.82,1.19,3.05,2.68h2.07v4.71Z" fill="#FFFFFF"></path></g></g><g className="letter-group"><path className="cls-1 t" d="m168.86,34.63h-19.89v44.27h-15.98v-44.27h-20.06v-13.98h55.92v13.98Z" fill="#FFFFFF"></path><path className="cls-1 s" d="m217.63,42.54c6.66,0,12.65,5.66,12.65,12.65v11.07c0,6.66-5.66,12.65-12.65,12.65h-44.11v-13.98h37.78c1.75,0,3-1.33,3-3.08v-2.16c0-1.91-1.25-3.16-3-3.16h-25.88c-6.74,0-12.73-6.08-12.73-13.15v-10.07c0-6.66,5.66-12.65,12.73-12.65h42.44v13.98h-36.2c-1.75,0-3,1.17-3,3.08v1.83c0,1.66,1.25,3,3,3h25.96Z" fill="#FFFFFF"></path><path className="cls-1 e" d="m289.86,78.91h-50.27V20.65h50.27v13.98h-34.29v7.66h27.88v13.98h-27.88v8.65h34.29v13.98Z" fill="#FFFFFF"></path><path className="cls-1 g" d="m355.36,42.46v36.45h-43.86c-6.66,0-12.73-5.66-12.73-12.65v-32.87c0-6.74,5.66-12.73,12.73-12.73h42.19v13.98h-35.37c-2,0-3.58,1.58-3.58,3.58v23.14c0,2,1.58,3.58,3.58,3.58h21.64v-8.49h-14.4v-13.98h29.79Z" fill="#FFFFFF"></path></g></svg>
                  </a>
              </span>
            </div>
            <p className="mt-4 text-xs sm:order-first sm:mt-0">
              © Copyrights {currentYear}. Griffin Law, PLC
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
import React from "react";
function Footer() {
  return (
    <>
      {/* Footer */}
      <section>
        <div className="max-w-screen-xl mx-auto h-16 px-4 flex justify-between items-center">
          <div className="sm:text-sm text-xs font-semibold text-center text-white">Designed by Thanh Tùng</div>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <a className="sm:text-sm text-xs text-white font-bold ml-2 hover:text-slate-300" target="_blank" href="https://drive.google.com/file/d/1Qwk8FXMWtwlWlP5C6-3i16xfAgmzriAY/view?usp=sharing" rel="noreferrer">View My CV</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

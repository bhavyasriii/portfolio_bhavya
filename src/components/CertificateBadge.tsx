import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX } from "react-icons/fi";

export default function CertificateBadge() {
  const [open, setOpen] = useState(false);

  const certificateImage = "/images/google-ux-certificate.png";
  const certificateVerifyLink =
    "https://www.coursera.org/account/accomplishments/specialization/certificate/J7SG3XBTPKW1";

  return (
    <>
      {/* Hero badge */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-6 flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-left shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                   dark:border-white/10 dark:bg-white/5 dark:shadow-none"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/10">
          <img
            src="/images/google-g-logo.png"
            alt="Google"
            className="h-8 w-8 object-contain"
          />
        </div>

        <div>
          <div className="text-xs font-medium text-black/45 dark:text-white/45">
            Certification
          </div>
          <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">
            Google UX Design
          </div>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]
                         dark:border-white/10 dark:bg-[#0f172a]"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
                <div>
                  <h3 className="text-base font-semibold text-black/90 dark:text-white/90">
                    Google UX Design Certificate
                  </h3>
                  <p className="mt-1 text-xs text-black/50 dark:text-white/50">
                    Click outside or press close to dismiss
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black/70 transition hover:bg-black/5
                             dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
                  aria-label="Close certificate modal"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              <div className="max-h-[80vh] overflow-auto bg-[#f8fafc] p-4 dark:bg-[#0b1220]">
                <img
                  src={certificateImage}
                  alt="Google UX Design Certificate"
                  className="mx-auto h-auto w-full rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10"
                />
              </div>

              <div className="flex justify-end border-t border-black/10 px-5 py-4 dark:border-white/10">
                <a
                  href={certificateVerifyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90
                             dark:bg-white dark:text-black"
                >
                  <FiExternalLink />
                  Verify Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
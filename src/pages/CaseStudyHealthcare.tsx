import Navbar from "../components/Navbar";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CaseStudyHealthcare() {
  const navigate = useNavigate();

  const figmaProtoUrl =
    "https://www.figma.com/proto/38iWrXstNdy8IQxXWPJPVe/Untitled?node-id=1-2&scaling=fit-width&content-scaling=responsive";

  const figmaEmbedUrl =
    "https://www.figma.com/embed?embed_host=share&url=" +
    encodeURIComponent(figmaProtoUrl);

  return (
    <div className="min-h-screen bg-[#f4f5f6] dark:bg-[#0b1220]">
      <Navbar />

      <div className="px-4 md:px-6 pt-24 pb-6">
        <div className="mx-auto max-w-7xl">
          
          {/* Top bar */}
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 hover:bg-black/5
                           dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <FiArrowLeft />
                Back
              </button>

              <div>
                <h1 className="text-lg md:text-xl font-semibold text-black/85 dark:text-white/85">
                  Patient Appointment Booking — Case Study
                </h1>
                <p className="text-xs md:text-sm text-black/50 dark:text-white/50">
                  Best viewed in Figma for full reading comfort
                </p>
              </div>
            </div>

            <a
              href={figmaProtoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90
                         dark:bg-white dark:text-black"
            >
              <FiExternalLink />
              Open in Figma
            </a>
          </div>

          {/* Embed */}
          <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#0f172a]">
            <iframe
              title="Patient Appointment Booking Case Study"
              src={figmaEmbedUrl}
              className="w-full h-[85vh] min-h-[700px]"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </div>
  );
}
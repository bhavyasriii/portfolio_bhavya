import { useMemo } from "react";
import Navbar from "../components/Navbar";

type MotionVideo = {
  id: string;
  videoSrc: string; // must be /public path like "/motion/airpods-motion.mp4"
};

function publicUrl(pathFromPublic: string) {
  const clean = pathFromPublic.startsWith("/") ? pathFromPublic.slice(1) : pathFromPublic;
  return `${import.meta.env.BASE_URL}${clean}`;
}

export default function MotionGallery() {
  const videos: MotionVideo[] = useMemo(
    () => [
      { id: "airpods", videoSrc: "/motion/airpods-motion.mp4" },

      // ✅ Add more videos like this:
      // { id: "study-2", videoSrc: "/motion/study-2.mp4" },
      // { id: "study-3", videoSrc: "/motion/study-3.mp4" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#f4f5f6] px-5 py-10 dark:bg-[#0b1220]">
      <Navbar />

      <div className="pt-20">
        <div
          className="mx-auto max-w-6xl rounded-[28px] border border-black/5 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                     dark:border-white/10 dark:from-[#0f172a] dark:via-[#0b1b33] dark:to-[#111827] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-black/90 dark:text-white/90">
            My Motion Studies / Designs
          </h1>

          <div className="mt-6 space-y-6">
            {videos.map((v) => {
              const src = publicUrl(v.videoSrc);

              return (
                <div
                  key={v.id}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-black shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                             dark:border-white/10 dark:shadow-none"
                >
                  {/* ✅ Keeps full video visible (no cropping) */}
                  <div className="aspect-video w-full">
                    <video
                      key={src}
                      className="h-full w-full object-contain bg-black"
                      controls
                      playsInline
                      preload="auto"
                      onLoadedData={(e) => {
                        const vid = e.currentTarget;
                        vid.play().catch(() => {});
                      }}
                      onError={(e) => {
                        // @ts-ignore
                        console.log("Video failed:", src, e?.currentTarget?.error);
                      }}
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
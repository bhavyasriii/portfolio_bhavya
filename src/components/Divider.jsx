
export default function Divider({ flip = false }) {
  return (
    <div className={`overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Blue to Purple gradient */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,192C672,181,768,107,864,85.3C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

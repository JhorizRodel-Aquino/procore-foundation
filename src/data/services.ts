import ferro from "@/assets/svc-ferro.jpg";
import rebound from "@/assets/svc-rebound.jpg";
import compressive from "@/assets/svc-compressive.jpg";
import coring from "@/assets/svc-coring.jpg";

export type Service = {
  slug: string;
  code: string;
  title: string;
  short: string;
  tagline: string;
  image: string;
  method: string;
  standard: string;
  deliverables: string[];
  applications: string[];
  process: { step: string; detail: string }[];
  description: string;
};

export const services: Service[] = [
  {
    slug: "concrete-coring",
    code: "PC-01",
    title: "Concrete Coring",
    short: "Precision extraction of cylindrical concrete samples.",
    tagline: "Multiple holes. Clean cuts. No structural surprises.",
    image: coring,
    method: "Diamond-bit rotary core drilling with water cooling.",
    standard: "ASTM C42 / C39",
    deliverables: [
      "Extracted core specimens (labeled)",
      "Certificate of Calibration",
      "Signed & sealed structural report",
      "3D core-location documentation",
    ],
    applications: [
      "As-built verification for existing structures",
      "Utility, ductwork, and MEP penetrations",
      "Sample extraction for compressive strength testing",
      "Historic structure assessment",
    ],
    process: [
      { step: "Scope", detail: "Site walkthrough and coring plan review with the structural engineer." },
      { step: "Scan", detail: "Non-destructive ferro scan performed at every target to protect rebar and post-tension." },
      { step: "Core", detail: "Precision wet coring with dust and slurry control." },
      { step: "Report", detail: "Signed and sealed documentation delivered with 3D imagery." },
    ],
    description:
      "Certified concrete coring for structural investigation, MEP penetrations, and as-built verification — always preceded by non-destructive scanning to avoid rebar and post-tension damage.",
  },
  {
    slug: "rebar-scanning",
    code: "PC-02",
    title: "Rebar / Ferro Scanning",
    short: "See inside your concrete before you drill.",
    tagline: "Detect what's inside your concrete before drilling and coring.",
    image: ferro,
    method: "Electromagnetic pulse induction (ferro scanner) with 2D/3D mapping.",
    standard: "BS 1881-204 / ACI 228.2R",
    deliverables: [
      "Rebar location & depth map",
      "3D scan images",
      "Signed structural interpretation",
      "Certificate of Calibration",
    ],
    applications: [
      "Pre-coring / pre-drilling clearance",
      "As-built reinforcement documentation",
      "Cover meter verification",
      "Post-tension cable location",
    ],
    process: [
      { step: "Setup", detail: "Grid layout and reference marking on the target element." },
      { step: "Scan", detail: "Line and area scans capture rebar in both axes." },
      { step: "Map", detail: "Real-time 2D/3D rebar mapping on-device." },
      { step: "Certify", detail: "Interpretation signed and sealed by a licensed structural engineer." },
    ],
    description:
      "Non-destructive rebar and ferro scanning to precisely locate reinforcement, cover depth, and post-tension before any coring or drilling — avoiding costly structural damage.",
  },
  {
    slug: "rebound-hammer-test",
    code: "PC-03",
    title: "Rebound Hammer Test",
    short: "Non-destructive concrete strength assessment.",
    tagline: "Non-destructive strength assessment, in-place and on-schedule.",
    image: rebound,
    method: "Schmidt rebound hammer with calibrated impact energy.",
    standard: "ASTM C805 / BS EN 12504-2",
    deliverables: [
      "Rebound index tabulation",
      "Estimated compressive strength",
      "Certificate of Calibration",
      "Signed & sealed structural report",
    ],
    applications: [
      "In-place strength estimation of hardened concrete",
      "Uniformity assessment across a member",
      "Rapid pre-screening prior to coring",
      "Quality control on new construction",
    ],
    process: [
      { step: "Prep", detail: "Test surface cleaned and lightly ground where needed." },
      { step: "Impact", detail: "Minimum 10 valid rebound readings per test area." },
      { step: "Compute", detail: "Rebound index converted to estimated compressive strength." },
      { step: "Certify", detail: "Signed and sealed report with calibration certificate." },
    ],
    description:
      "Fast, non-destructive rebound hammer testing to assess in-place concrete strength — ideal for uniformity checks and as a pre-screening step before coring.",
  },
  {
    slug: "compressive-strength-test",
    code: "PC-04",
    title: "Concrete Compressive Strength Test",
    short: "Certified lab crushing of concrete specimens.",
    tagline: "Lab-crushed cylinders. Real numbers. Sealed results.",
    image: compressive,
    method: "Hydraulic compression testing machine to failure.",
    standard: "ASTM C39 / C42",
    deliverables: [
      "Compressive strength (f'c) results",
      "Failure mode documentation",
      "Certificate of Calibration",
      "Signed & sealed structural certification",
    ],
    applications: [
      "Verification of design strength (f'c) for as-built structures",
      "Investigation of suspect concrete",
      "Acceptance testing for new pours",
      "Forensic and litigation support",
    ],
    process: [
      { step: "Receive", detail: "Cores or cylinders logged, measured, and prepped for testing." },
      { step: "Load", detail: "Controlled hydraulic loading to failure per ASTM C39." },
      { step: "Record", detail: "Peak load, failure mode, and strength calculated." },
      { step: "Certify", detail: "Signed and sealed by a licensed structural engineer." },
    ],
    description:
      "Certified compressive strength testing of concrete cores and cylinders — signed and sealed by a licensed structural engineer with calibration certificates included.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

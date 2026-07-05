export function Brand({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/procore-logo.png"
      alt="PROCORE Engineering+ by Centris"
      className={`${className} w-auto object-contain`}
      width={512}
      height={128}
    />
  );
}

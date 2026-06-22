import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function LogoLockup({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xl font-semibold tracking-normal text-white sm:text-2xl ${className}`}
    >
      <Image alt="" aria-hidden height={28} src="/logo.png" width={25} />
      Neuvara
    </span>
  );
}

export function BrainLogo({ size = 28 }: { size?: number }) {
  return (
    <Image
      alt=""
      aria-hidden
      height={size}
      src="/logo.png"
      width={Math.round(size * (25 / 28))}
    />
  );
}

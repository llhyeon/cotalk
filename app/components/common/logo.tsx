import Image from 'next/image';

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width = 100, height = 100 }: LogoProps) {
  return (
    <>
      <Image
        src={'/logo/logo.svg'}
        alt="로고"
        width={width}
        height={height}
        priority
      />
    </>
  );
}

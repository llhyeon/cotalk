import Logo from '../components/common/logo';

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <section className="px-10">
      <div className="flex justify-center mt-20">
        <Logo width={267} height={267} />
      </div>
      {children}
    </section>
  );
}

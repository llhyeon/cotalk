import Logo from '../components/common/logo';

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <section className="px-10">
      <div className="flex justify-center mt-10">
        <Logo width={230} height={230} />
      </div>
      {children}
    </section>
  );
}

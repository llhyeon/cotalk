import Logo from '../components/common/logo';

type RegisterLayoutProps = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <section className="px-10 relative">
      <div className="flex justify-center mt-20">
        <Logo width={267} height={267} />
      </div>
      {children}
    </section>
  );
}

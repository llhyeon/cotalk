import Logo from '../components/common/logo';

type RegisterLayoutProps = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <section className="px-10">
      <div className="flex justify-center mt-10">
        <Logo width={230} height={230} />
      </div>
      {children}
    </section>
  );
}

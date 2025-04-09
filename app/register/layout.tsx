import Logo from '../components/common/logo';
import MotionDiv from '../components/common/motion-div';

type RegisterLayoutProps = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <MotionDiv>
      <section className="px-10 ">
        <div className="flex justify-center mt-20">
          <Logo width={267} height={267} />
        </div>
        {children}
      </section>
    </MotionDiv>
  );
}

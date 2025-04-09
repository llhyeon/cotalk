import Button from './components/common/button';
import Logo from './components/common/logo';
import MotionDiv from './components/common/motion-div';

export default function Home() {
  return (
    <MotionDiv>
      <section className="px-19 pt-[183px]">
        <h1 className="sr-only">메인 페이지</h1>
        <Logo width={301} height={301} />
        <Button className="mt-44" type="link" href="/login">
          시작하기
        </Button>
      </section>
    </MotionDiv>
  );
}

import Button from './components/common/button';
import Logo from './components/common/logo';

export default function Home() {
  return (
    <section className="pt-[183px]">
      <h1 className="sr-only">메인 페이지</h1>
      <div className="flex justify-center">
        <Logo width={301} height={301} />
      </div>
      <Button className="mt-44 w-[70%] mx-auto" type="link" href="/login">
        시작하기
      </Button>
    </section>
  );
}

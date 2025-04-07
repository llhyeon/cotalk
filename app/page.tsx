import Input from './components/common/input';

export default function Home() {
  return (
    <>
      <Input
        label="이메일"
        type="email"
        name="email"
        placeholder="이메일을 입력하세요"
        isLabelShow
      />
    </>
  );
}

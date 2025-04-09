import Button from '../common/button';
import Input from '../common/input';

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-1 items-end">
        <Input
          type="text"
          name="nickname"
          className="flex-1"
          label="닉네임"
          placeholder="8글자 이상"
          isLabelShow
        />
        <Button className="w-auto">중복확인</Button>
      </div>
      <Input
        label="이메일"
        type="email"
        name="email"
        placeholder="이메일 형식으로 입력하세요"
        isLabelShow
      />
    </form>
  );
}

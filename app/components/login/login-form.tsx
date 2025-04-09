'use client';

import Button from '../common/button';
import Input from '../common/input';

export default function LoginForm() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get('email'));
    console.log(formData.get('password'));
  };

  return (
    <form className="mt-10" onSubmit={handleLogin}>
      <fieldset className="flex flex-col gap-2">
        <legend className="sr-only">로그인</legend>
        <Input
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일을 입력하세요"
          isLabelShow
        />
        <Input
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          isLabelShow
        />
        <Button className="mt-22" type="submit">
          로그인
        </Button>
      </fieldset>
    </form>
  );
}

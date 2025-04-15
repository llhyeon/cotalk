'use client';

import { SetStateAction, useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import ProfileModal from './profile-modal';
import { AnimatePresence } from 'framer-motion';
import inputReg from '@/app/utils/regex';
import DisabledButton from '../common/disabled-button';

type Error = {
  nickname?: React.ReactNode | null;
  email?: React.ReactNode | null;
  password?: React.ReactNode | null;
  passwordConfirm?: React.ReactNode | null;
};

export default function RegisterForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 각 input 별 상태관리
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // supabase에 저장할 외부 프로필 이미지 경로

  // 객체로 각 타입별 에러메세지 상태관리
  const [error, setError] = useState<Error>({});

  // 각 input ChangeEvent 핸들링
  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
    setter: React.Dispatch<SetStateAction<string>>
  ) => {
    switch (type) {
      case 'nickname':
        const nicknameValue = e.target.value;

        if (!inputReg('nickname', nicknameValue)) {
          setError((prev) => ({
            ...prev,
            nickname: '영문, 숫자 조합의 8글자 이상으로 입력하세요.',
          }));
        } else {
          setError((prev) => ({
            ...prev,
            nickname: null,
          }));
        }
        setter(nicknameValue);
        return;
      case 'email':
        const emailValue = e.target.value;

        if (!inputReg('email', emailValue)) {
          setError((prev) => ({
            ...prev,
            email: '이메일 형식으로 입력해주세요.',
          }));
        } else {
          setError((prev) => ({
            ...prev,
            email: null,
          }));
        }
        setter(emailValue);
        return;
      case 'password':
        const passwordValue = e.target.value;

        if (!inputReg('password', passwordValue)) {
          setError((prev) => ({
            ...prev,
            password: '영문, 숫자, 특수문자 조합으로 8글자 이상 입력해주세요.',
          }));
        } else {
          setError((prev) => ({
            ...prev,
            password: null,
          }));
        }
        setter(passwordValue);
        return;
      case 'passwordConfirm':
        const passwordConfirmValue = e.target.value;
        console.log(password, passwordConfirmValue);

        if (password !== passwordConfirmValue) {
          setError((prev) => ({
            ...prev,
            passwordConfirm: '같은 비밀번호를 입력해주세요.',
          }));
        } else {
          setError((prev) => ({
            ...prev,
            passwordConfirm: null,
          }));
        }

        setter(passwordConfirmValue);
        return;
    }
  };

  //

  // 회원가입 버튼 활성화 조건
  const canSubmit =
    nickname &&
    email &&
    password &&
    passwordConfirm &&
    !error.nickname &&
    !error.email &&
    !error.password &&
    !error.passwordConfirm;

  return (
    <>
      <form className="flex flex-col gap-1">
        <div className="flex gap-1 items-end">
          <Input
            type="text"
            name="nickname"
            className="flex-1"
            label="닉네임"
            placeholder="8글자 이상 영어"
            value={nickname}
            onChange={(e) => handleChangeInput(e, 'nickname', setNickname)}
            isLabelShow
          />
          {nickname && !error.nickname ? (
            <Button className="w-auto px-4">중복확인</Button>
          ) : (
            <DisabledButton className="w-auto px-4">중복확인</DisabledButton>
          )}
        </div>
        {error.nickname && (
          <ErrorMessage>{error.nickname as string}</ErrorMessage>
        )}
        <Input
          label="이메일"
          value={email}
          onChange={(e) => handleChangeInput(e, 'email', setEmail)}
          type="email"
          name="email"
          placeholder="이메일 형식으로 입력하세요"
          isLabelShow
        />
        {error.email && <ErrorMessage>{error.email as string}</ErrorMessage>}
        <Input
          label="비밀번호"
          value={password}
          onChange={(e) => handleChangeInput(e, 'password', setPassword)}
          type="password"
          name="password"
          placeholder="영문, 숫자, 특수문자 조합으로 8글자 이상"
          isLabelShow
        />
        {error.password && (
          <ErrorMessage>{error.password as string}</ErrorMessage>
        )}
        <Input
          label="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) =>
            handleChangeInput(e, 'passwordConfirm', setPasswordConfirm)
          }
          type="password"
          name="passwordConfirm"
          placeholder="같은 비밀번호를 입력하세요"
          isLabelShow
        />
        {error.passwordConfirm && (
          <ErrorMessage>{error.passwordConfirm as string}</ErrorMessage>
        )}
        <button
          type="button"
          className="my-4 border border-primary rounded-full text-primary py-1 mx-10 text-base"
          onClick={() => setIsModalOpen(true)}
        >
          프로필 이미지 선택
        </button>
        {canSubmit ? (
          <Button type="submit">회원가입</Button>
        ) : (
          <DisabledButton>회원가입</DisabledButton>
        )}
      </form>
      <AnimatePresence>
        {isModalOpen && <ProfileModal setIsModalOpen={setIsModalOpen} />}
      </AnimatePresence>
    </>
  );
}

function ErrorMessage({ children }: { children: string }) {
  return <p className="text-red-600 text-xs ml-2">{children}</p>;
}

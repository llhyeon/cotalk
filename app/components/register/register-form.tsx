'use client';

import { useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import ProfileModal from './profile-modal';
import { AnimatePresence } from 'framer-motion';

export default function RegisterForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <form className="flex flex-col gap-2">
        <div className="flex gap-1 items-end">
          <Input
            type="text"
            name="nickname"
            className="flex-1"
            label="닉네임"
            placeholder="8글자 이상"
            isLabelShow
          />
          <Button className="w-auto px-4">중복확인</Button>
        </div>
        <Input
          label="이메일"
          type="email"
          name="email"
          placeholder="이메일 형식으로 입력하세요"
          isLabelShow
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          placeholder="영문, 숫자, 특수문자 조합으로 8글자 이상"
          isLabelShow
        />
        <Input
          label="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          placeholder="같은 비밀번호를 입력하세요"
          isLabelShow
        />
        <button
          type="button"
          className="my-4 border border-primary rounded-full text-primary py-1 mx-10 text-base"
          onClick={() => setIsModalOpen(true)}
        >
          프로필 이미지 선택
        </button>
        <Button type="submit">회원가입</Button>
      </form>
      <AnimatePresence>
        {isModalOpen && <ProfileModal setIsModalOpen={setIsModalOpen} />}
      </AnimatePresence>
    </>
  );
}

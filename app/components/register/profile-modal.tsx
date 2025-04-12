'use client';

import { SetStateAction, useRef, useState } from 'react';
import Button from '../common/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProfileModalProps = {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ProfileModal({ setIsModalOpen }: ProfileModalProps) {
  // input요소 ref로 연결하기 위한 useRef
  const inputRef = useRef<HTMLInputElement>(null);

  // 유저가 선택한 이미지 파일 경로 상태 관리
  const [profilePath, setProfilePath] = useState<string>('');

  // button을 클릭하여 input 요소 클릭하게 만들기
  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current?.click();
    }
  };

  // 이미지 프로필 설정 함수
  const handleProfileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    const file = e.target.files?.[0];

    if (!file) return;

    const imgPath = URL.createObjectURL(file);
    setProfilePath(imgPath);
  };
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[80%] h-[60%] bg-white rounded-lg flex flex-col items-center justify-around">
        <p className="font-bold text-lg text-primary mt-2">
          프로필 사진을 선택하세요
        </p>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleProfileSelect}
        />
        <button aria-label="프로필 이미지 업로드" onClick={handleButtonClick}>
          <div className="relative w-[280px] h-[280px]">
            <Image
              className="rounded-full"
              src={profilePath || 'default-user.svg'}
              alt="유저 프로필"
              fill
              priority
            />
          </div>
        </button>
        <div className="flex gap-3">
          <Button onClick={() => setIsModalOpen(false)}>닫기</Button>
        </div>
      </div>
    </motion.div>
  );
}

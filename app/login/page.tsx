import Link from 'next/link';
import LoginForm from '../components/login/login-form';

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-2">
      <LoginForm />
      <p className="self-end font-semibold">
        계정이 없으신가요 ?{' '}
        <Link href="/register" className="text-blue-700">
          회원가입
        </Link>
      </p>
    </div>
  );
}

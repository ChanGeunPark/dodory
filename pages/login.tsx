import Input from "@components/Input";
import useMutation from "@libs/client/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface LoginUser {
  user_id: string;
  password: string;
}

export default function Login() {
  const { register, watch, handleSubmit } = useForm<LoginUser>();
  const [user, { data, loading }] = useMutation("/api/users/confirm");

  const router = useRouter();

  const onvalid = (data: LoginUser) => {
    user(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div>
      <div className="bg-[#F9F9F9] min-h-[700px] flex justify-center items-center flex-col border">
        <div className="pb-16">
          <h1 className="font-semibold text-2xl text-center">
            dodo:&#41;re 로그인
          </h1>
          <p className="font-medium text-zinc-500 text-center mt-2">
            dodore에 오신것을 진심으로 환영합니다
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onvalid)}
          className="w-[520px] max-w-full mx-auto"
        >
          <input
            {...register("user_id", { required: true })}
            type="text"
            className="w-full h-14 bg-white border rounded-md px-5 mb-10"
            placeholder="아이디"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full h-14 bg-white border rounded-md px-5 mb-3"
            placeholder="비밀번호"
          />
          <div className="text-zinc-500 flex justify-end items-center">
            <a>아이디 찾기</a>
            <span className="w-[1px] bg-gray-300 h-5 block mx-3"></span>
            <a>비밀번호 변경</a>
          </div>

          <button
            type="submit"
            className="mt-10 text-center w-full bg-zinc-500 py-4 font-semibold text-white rounded-full"
          >
            로그인
          </button>
          <Link href="/join">
            <a className="mt-3 block text-center w-full border border-zinc-400 py-4 font-semibold text-zinc-500 rounded-full">
              회원가입
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
}

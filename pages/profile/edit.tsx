import Input from "@components/Input";
import { NextPage } from "next";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import ProfileLayout from "@components/ProfileLayout";
import useUser from "@libs/client/useUser";
import Image from "next/image";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
interface joinForm {
  user_id: string;
  password: string;
  password_confire: string;
  phone: number;
  address: string;
  name: string;
  email?: string;
  errors: string;
  avatar: FileList;
  detailedAddress: string;
}

const EditProfile: NextPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<joinForm>();

  const router = useRouter();
  const { user } = useUser();
  const [isPopupOpen, setIsPopupOpen] = useState(false); //팝업
  const password = useRef<HTMLInputElement | any>();
  const [editProfile, { data, loading }] = useMutation("/api/users/me");
  const openPostCode = () => {
    return setIsPopupOpen(true);
  }; //주소 모달 열기
  const closePostCode = () => {
    return setIsPopupOpen(false);
  }; //주소 모달 닫기
  const [submitting, setSubmitting] = useState(false);
  const handlePostCode = async (data: any) => {
    //duam 주소
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);
    await setValue("address", fullAddress);
    closePostCode();
  }; //duam 주소

  useEffect(() => {
    if (user?.user_id) setValue("user_id", user.user_id);
    if (user?.password) setValue("password", user.password);
    if (user?.name) setValue("name", user.name);
    if (user?.phone) setValue("phone", user.phone);
    if (user?.email) setValue("email", user.email);
    if (user?.address) setValue("address", user.address);
    if (user?.detailedAddress)
      setValue("detailedAddress", user.detailedAddress);
  }, []);

  const [avatarImg, setAvatarImg] = useState("");
  const avatar = watch("avatar");
  password.current = watch("password");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarImg(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onValid = async ({
    address,
    avatar,
    detailedAddress,
    name,
    password,
    phone,
    user_id,
    email,
  }: joinForm) => {
    if (avatar && avatar.length > 0) {
      const { id, uploadURL } = await (await fetch("/api/files")).json();
      const avatarform = new FormData();
      avatarform.append("file", avatar[0], id);
      await fetch(uploadURL, { method: "POST", body: avatarform });
      editProfile({
        address,
        avatar: id,
        detailedAddress,
        name,
        password,
        phone,
        user_id,
        email,
      });
    } else {
      editProfile({
        address,
        detailedAddress,
        name,
        password,
        phone,
        user_id,
        email,
      });
    }
  };

  return (
    <ProfileLayout menuName="edit">
      <form
        onSubmit={handleSubmit(onValid)}
        className="bg-white p-10 rounded-lg shadow-lg"
      >
        <label className="block w-24 h-24 rounded-full mx-auto bg-gray-300 cursor-pointer relative">
          <span className="flex justify-center items-center w-8 h-8 bg-red-400 absolute right-0 top-0 rounded-full z-10 opacity-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
          {avatarImg ? (
            <Image
              layout="fill"
              className="object-cover rounded-full"
              src={avatarImg}
            ></Image>
          ) : user?.avatar ? (
            <Image
              layout="fill"
              className="object-cover rounded-full"
              src={`https://imagedelivery.net/anvL-_ABM0Z5KQo2YmJX4g/${user.avatar}/avatar`}
              quality="100"
            ></Image>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 stroke-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
          <input type="file" {...register("avatar")} className="hidden" />
        </label>
        <p className="text-center text-zinc-500 mt-1">{user?.name}</p>
        <div>
          <Input
            label="아이디"
            name="user_id"
            register={register("user_id", {
              required: "아이디는 필수입니다.",
              minLength: {
                value: 5,
                message: "5글자 이상 입력해 주세요",
              },
            })}
            placeholder="아이디를 입력해주세요"
            important={true}
            type="text"
          />
          <p className="text-red-500 mt-1">{errors.user_id?.message}</p>
        </div>

        <div className="mt-9">
          <Input
            label="비밀번호"
            register={register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 8글자이상 사용해주세요",
              },
            })}
            name="password"
            important={true}
            type="password"
            moreText="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
          />
        </div>

        <div className="mt-9">
          <Input
            label="비밀번호 확인"
            register={register("password_confire", {
              required: "비밀번호 확인해주세요",
              validate: (value) =>
                value === password.current || "비밀번호와 일치하지 않습니다",
            })}
            name="password_check"
            important={true}
            type="password"
          />
          <p className="mt-1 text-red-500">
            {errors.password_confire?.message}
          </p>
        </div>

        <div className="mt-9">
          <Input
            label="이름"
            name="name"
            register={register("name", { required: "이름은 필수입니다." })}
            important={true}
            type="text"
            placeholder="이름을 입력해주세요"
          />
          <p className="mt-1 text-red-500">{errors.name?.message}</p>
        </div>

        <div className="mt-9">
          <Input
            label="핸드폰"
            name="phone"
            register={register("phone", { required: "핸드폰은 필수입니다." })}
            important={true}
            type="number"
            placeholder="핸드폰 번호를 입력해주세요"
          />
          <p className="mt-1 text-red-500">{errors.name?.message}</p>
        </div>

        <div className="mt-9">
          <Input
            label="이메일"
            name="email"
            register={register("email")}
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>

        <div className="mt-9">
          <label htmlFor="">
            주소<span className="text-red-500">*</span>
          </label>
          <div id="popupDom">
            {isPopupOpen && (
              <div className="fixed w-full h-full left-0 top-0 z-10">
                <span
                  className="block fixed bg-[rgba(0,0,0,0.5)] left-0 top-0 z-10 w-full h-full"
                  onClick={() => {
                    closePostCode();
                  }}
                >
                  {/*clouse*/}
                </span>

                <div className="fixed left-1/2 top-1/2 -translate-x-1/2 w-[500px] max-w-[90%] -translate-y-1/2 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      closePostCode();
                    }}
                    className="postCode_btn w-full"
                  >
                    <svg
                      className="w-8 h-8 stroke-white float-right"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                  <div className="rounded-md overflow-hidden">
                    <DaumPostcode onComplete={handlePostCode} />
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="text"
                {...register("address", { required: "주소는 필수입니다." })}
                id="address"
                readOnly
                className="w-2/3 h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400"
                name="address"
              />
              <button
                type="button"
                className="w-1/3 h-10 rounded-md bg-zinc-600 mt-2 px-3 outline-none text-white"
                onClick={openPostCode}
              >
                우편번호 검색
              </button>
            </div>
            <input
              type="text"
              className="w-full h-10 rounded-md bg-zinc-100 mt-2 px-3 outline-none focus:ring-2 focus:ring-red-400"
              {...register("detailedAddress", {
                required: "상세주소를 입력해주세요",
              })}
              name="detailedAddress"
              placeholder="상세주소 입력"
            />
            <p>{errors.address?.message}</p>
            <p>{errors.detailedAddress?.message}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-16 bg-red-500 text-white text-xl mt-10 rounded-md"
        >
          {submitting ? "loading" : "정보변경"}
        </button>
      </form>
    </ProfileLayout>
  );
};

export default EditProfile;

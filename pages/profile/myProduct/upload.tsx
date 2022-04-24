import Input from "@components/Input";
import ProfileLayout from "@components/ProfileLayout";
import TextArea from "@components/TextArea";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import Loading from "@components/Loading";

interface UploadProductForm {
  name: string;
  price: number;
  deliveryCharge?: number; //배송비
  description?: string; //상품설명
  precautions?: string; // 주의사항
  xSize?: number;
  ySize?: number;
  mainThumb?: FileList;
  thumb1?: FileList;
  thumb2?: FileList;
  thumb3?: FileList;
}

export default function uploadProduct() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadProductForm>();
  const { user } = useUser();
  const [mainThumbPriview, setMainThumbPriview] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [thumb1Priview, setThumb1Priview] = useState("");
  const [thumb2Priview, setThumb2Priview] = useState("");
  const [thumb3Priview, setThumb3Priview] = useState("");
  const [uploadProducts, { data, loading }] = useMutation("/api/products");
  const router = useRouter();

  const mainThumbFile = watch("mainThumb");
  const thumbFile1 = watch("thumb1");
  const thumbFile2 = watch("thumb2");
  const thumbFile3 = watch("thumb3");

  const onValid = async ({
    name,
    price,
    deliveryCharge,
    description,
    precautions,
    xSize,
    ySize,
    thumb1,
    thumb2,
    thumb3,
  }: UploadProductForm) => {
    setLoadingUpload(true);
    if (mainThumbFile && mainThumbFile.length > 0) {
      const { id: mainThumbId, uploadURL } = await (
        await fetch("/api/files")
      ).json();
      const mainForm = new FormData(); //메인 썸네일

      mainForm.append("file", mainThumbFile[0], mainThumbId); //메인 이미지 name
      await (await fetch(uploadURL, { method: "POST", body: mainForm })).json();

      let thumb1Name = ""; //이미지1 name

      if (thumbFile1 && thumbFile1.length > 0) {
        const { id: thumb1Id, uploadURL: uploadURL1 } = await (
          await fetch("/api/files/1")
        ) //url을 변경해서 따로따로 파일 올리도록 변경
          .json();
        const thumb1Form = new FormData();
        thumb1Name = thumb1Id;
        thumb1Form.append("file", thumbFile1[0], thumb1Name);
        await fetch(uploadURL1, { method: "POST", body: thumb1Form });
      }

      let thumb2Name = ""; //이미지2 name
      if (thumbFile2 && thumbFile2.length > 0) {
        const { id: thumb2Id, uploadURL: uploadURL2 } = await (
          await fetch("/api/files/2")
        ) //url을 변경해서 따로따로 파일 올리도록 변경
          .json();
        const thumb2Form = new FormData();
        thumb2Name = thumb2Id;
        thumb2Form.append("file", thumbFile2[0], thumb2Name);
        await fetch(uploadURL2, { method: "POST", body: thumb2Form });
      }

      let thumb3Name = ""; //이미지3 name
      if (thumbFile3 && thumbFile3.length > 0) {
        const { id: thumb3Id, uploadURL: uploadURL3 } = await (
          await fetch("/api/files/3")
        ) //url을 변경해서 따로따로 파일 올리도록 변경
          .json();
        const thumb3Form = new FormData();
        thumb3Name = thumb3Id;
        thumb3Form.append("file", thumbFile3[0], thumb3Name);
        await fetch(uploadURL3, { method: "POST", body: thumb3Form });
      }

      uploadProducts({
        mainThumb: mainThumbId,
        thumb1: thumb1?.length == 0 ? "" : thumb1Name,
        thumb2: thumb2?.length == 0 ? "" : thumb2Name,
        thumb3: thumb3?.length == 0 ? "" : thumb3Name,
        name,
        price,
        deliveryCharge,
        description,
        precautions,
        xSize,
        ySize,
      });
      setLoadingUpload(false);
      if (!loading) {
        router.push(`/profile/myProduct/${user?.id}`);
      }
    }

    //uploadProducts(data);
  };

  useEffect(() => {
    if (mainThumbFile && mainThumbFile.length > 0) {
      const file = mainThumbFile[0];
      setMainThumbPriview(URL.createObjectURL(file));
    }
  }, [mainThumbFile]);

  useEffect(() => {
    if (thumbFile1 && thumbFile1.length > 0) {
      const file1 = thumbFile1[0];
      setThumb1Priview(URL.createObjectURL(file1));
    }
  }, [thumbFile1]);

  useEffect(() => {
    if (thumbFile2 && thumbFile2.length > 0) {
      const file2 = thumbFile2[0];
      setThumb2Priview(URL.createObjectURL(file2));
    }
  }, [thumbFile2]);

  useEffect(() => {
    if (thumbFile3 && thumbFile3.length > 0) {
      const file3 = thumbFile3[0];
      setThumb3Priview(URL.createObjectURL(file3));
    }
  }, [thumbFile3]);

  return (
    <ProfileLayout menuName="myProduct">
      <form onSubmit={handleSubmit(onValid)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="mb-2 flex justify-between">
              <h3>상품 이미지</h3>
              {errors.mainThumb ? (
                <p className="text-red-500 text-sm">
                  {errors.mainThumb?.message}
                </p>
              ) : null}
            </div>

            {mainThumbPriview ? (
              <img
                src={mainThumbPriview}
                className="w-full text-gray-600d object-cover border-gray-300 aspect-video rounded-md"
              />
            ) : (
              <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  {...register("mainThumb", {
                    required: "상품이미지는 필수입니다",
                  })}
                  className="hidden"
                  type="file"
                  accept="image/*"
                />
              </label>
            )}
            <div className="flex mt-3 items-center space-x-3">
              {thumb1Priview ? (
                <div className="w-1/3">
                  <img
                    src={thumb1Priview}
                    className="w-full text-gray-600 object-cover aspect-square border-gray-300 rounded-md"
                  />
                </div>
              ) : (
                <label className="w-1/3 cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300  aspect-square rounded-md">
                  <span>세부이미지1</span>
                  <input
                    {...register("thumb1")}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                </label>
              )}
              {thumb2Priview ? (
                <div className="w-1/3">
                  <img
                    src={thumb2Priview}
                    className="w-full text-gray-600 object-cover aspect-square border-gray-300 rounded-md"
                  />
                </div>
              ) : (
                <label className="w-1/3 cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300  aspect-square rounded-md">
                  <span>세부이미지2</span>
                  <input
                    {...register("thumb2")}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                </label>
              )}
              {thumb3Priview ? (
                <div className="w-1/3">
                  <img
                    src={thumb3Priview}
                    className="w-full text-gray-600 object-cover aspect-square border-gray-300 rounded-md"
                  />
                </div>
              ) : (
                <label className="w-1/3 cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300  aspect-square rounded-md">
                  <span>세부이미지3</span>
                  <input
                    {...register("thumb3")}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                </label>
              )}
            </div>
          </div>
          <section className="space-y-3">
            <div>
              <Input
                label="상품이름"
                name="name"
                register={register("name", {
                  required: "상품 이름을 작성해주세요.",
                })}
                errorText={errors.name?.message}
              />
            </div>
            <div>
              <Input
                label="가격"
                type="number"
                name="price"
                register={register("price", { required: "가격은 필수입니다." })}
                errorText={errors.price?.message}
              />
            </div>
            <div>
              <Input
                label="배송비"
                name="deliveryCharge"
                register={register("deliveryCharge")}
                type="number"
              />
            </div>

            <div>
              <TextArea
                label="상품설명"
                name="description"
                register={register("description", {
                  required: "상품설명을 작성해 주세요.",
                })}
                errorText={errors.description?.message}
              />
            </div>

            <div>
              <TextArea
                label="주의사항 및 사이즈정보"
                name="precautions"
                register={register("precautions")}
              />
              <div className="mt-3 flex items-center">
                <input
                  type="number"
                  {...register("xSize")}
                  name="xSize"
                  placeholder="가로 10cm"
                  className="w-1/2 bg-zinc-100 rounded-md ring-2 ring-zinc-300 p-2 focus:ring-orange-500 outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-zinc-400 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <input
                  type="number"
                  {...register("ySize")}
                  name="ySize"
                  placeholder="세로 20cm"
                  className="w-1/2 bg-zinc-100 rounded-md ring-2 ring-zinc-300 p-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>
          </section>
        </div>
        <button
          type="submit"
          className="block bg-blue-500 text-white py-3 rounded-full font-semibold w-[300px] max-w-full mx-auto mt-6"
        >
          상품 업로드
        </button>
        {loadingUpload ? <Loading /> : null}
      </form>
    </ProfileLayout>
  );
}

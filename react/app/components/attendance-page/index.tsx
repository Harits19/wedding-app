import { useText } from "@/app/core/hooks/use-text";
import InViewWrapper from "../inview-wrapper";
import { FaChevronDown } from "react-icons/fa";
import { useGuest } from "@/app/core/hooks/use-guest";
import Background1 from "../background-1";
import { Controller, useForm } from "react-hook-form";
import {
  AttendanceModel,
  AttendanceType,
} from "@/app/core/models/attendance-model";
import Input from "../input";
import { useAttendance } from "@/app/core/hooks/use-attendance";
import RenderError from "../render-error";
import { GreetingModel } from "@/app/core/models/greeting-model";
import { useGreeting } from "@/app/core/hooks/use-greeting";

export default function AttendanceView({
  onSubmitSuccess,
}: {
  onSubmitSuccess: () => void;
}) {
  const text = useText();
  const inputClassName =
    "bg-wedprimary-color px-4 py-3 text-base w-full outline-none rounded-lg placeholder-opacity-30";

  const { post } = useAttendance();
  const { trigger, isMutating, data, error } = post;

  console.log("error", error, data?.data, isMutating);
  const { name } = useGuest();
  const listAttendance: Record<AttendanceType, string> = {
    attend: text.sayaAkanDatang,
    not_attend: text.maafSayaTidakBisaDatang,
    not_sure: text.sayaMasihRagu,
  };

  const { control, handleSubmit } = useForm<AttendanceModel>({
    defaultValues: {
      attendance: "attend",
      name,
    },
  });

  const { post: postGreeting } = useGreeting();
  const {
    trigger: triggerGreeting,
    isMutating: isMutatingGreeting,
    data: dataGreeting,
    error: errorGreeting,
  } = postGreeting;

  return (
    <div className="text-black">
      <InViewWrapper className="animate-fade-in-top-bottom w-full">
        <Controller
          control={control}
          name="name"
          rules={{
            required: {
              value: true,
              message: "Required",
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <Input
                onChange={field.onChange}
                className={`${inputClassName} `}
                placeholder={text.silahkanIsiNamaAnda}
                defaultValue={name}
                info={fieldState.error?.message}
              />
            );
          }}
        />
        <div className="h-4" />

        <div className={`relative w-full rounded-lg overflow-hidden`}>
          <Controller
            control={control}
            name="attendance"
            render={({ field }) => (
              <select
                value={field.value}
                onChange={field.onChange}
                className={`${inputClassName} text-white`}
              >
                {Object.entries(listAttendance).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="h-full pr-4 absolute right-0 bg-wedprimary-color top-0 flex flex-col items-center justify-center">
            <FaChevronDown className="text-white" />
          </div>
        </div>

        <div className="h-4" />
        <Controller
          control={control}
          name="message"
          rules={{
            required: { value: true, message: "Required" },
          }}
          render={(messageForm) => (
            <>
              <textarea
                value={messageForm.field.value}
                placeholder={text.silahkanIsiPesanAnda}
                onChange={messageForm.field.onChange}
                className={`${inputClassName} backdrop-blur text-black bg-white bg-opacity-50`}
              />
              <RenderError message={messageForm.fieldState.error?.message} />
            </>
          )}
        />
      </InViewWrapper>

      <div className="h-8" />
      <InViewWrapper className="animate-fade-in-bottom-top w-full">
        <button
          className="px-4 py-3 text-lg text-white bg-wedbackground-color rounded-lg w-full"
          onClick={() => {
            handleSubmit(async (value) => {
              if (!value.message) return;
              await trigger({ ...value, message: undefined });
              await triggerGreeting({
                message: value.message,
                name: value.name,
              });
              onSubmitSuccess();
            })();
          }}
        >
          Simpan
        </button>
      </InViewWrapper>
    </div>
  );
}

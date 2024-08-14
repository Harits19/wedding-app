import { useText } from "@/app/core/hooks/use-text";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import { useGuest } from "@/app/core/hooks/use-guest";
import ButtonBrown from "../button-brown";
import { useGreeting } from "@/app/core/hooks/use-greeting";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { GreetingModel } from "@/app/core/models/greeting-model";
import RenderError from "../render-error";
import Input from "../input";

export default function GreetingPage() {
  const { name } = useGuest();

  const { handleSubmit, control, reset } = useForm<GreetingModel>({
    defaultValues: {
      name,
    },
  });
  const text = useText();
  const { get, post } = useGreeting();
  const { data, isLoading } = get;
  const { trigger, isMutating } = post;

  const greeting = data?.data ?? [];

  const inputClassName =
    "w-full px-4 py-3 rounded-lg bg-white outline-none shadow-lg";

  const Gradient = ({ className = "" }: { className?: string }) => (
    <div
      className={`bg-gradient-to-b from-wedbackground-color to-transparent left-0 bottom-0 right-0 h-8  absolute z-auto mx-4 rounded-lg ${className}`}
    />
  );

  return (
    <Background2 className="mx-0">
      <div className="flex flex-1 justify-center flex-col w-full items-center font-cardo text-black">
        <InViewWrapper className="animate-fade-zoom text-[37px]">
          {text.doaDanUcapan}
        </InViewWrapper>

        <div className="h-10" />

        <InViewWrapper className="animate-fade-in-bottom-top w-full font-poppins px-4">
          <Controller
            control={control}
            name="name"
            rules={{
              required: { value: true, message: "Required" },
            }}
            render={(nameForm) => (
              <Input
                value={nameForm.field.value}
                placeholder={text.silahkanIsiNamaAnda}
                defaultValue={name}
                onChange={nameForm.field.onChange}
                className={inputClassName}
                info={nameForm.fieldState.error?.message}
              />
            )}
          />
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
                  className={inputClassName}
                />
                <RenderError message={messageForm.fieldState.error?.message} />
              </>
            )}
          />
          <div className="h-8" />
          <ButtonBrown
            isLoading={isMutating}
            className="w-full px-4 py-3 flex flex-col items-center justify-center"
            onClick={() => {
              handleSubmit(async (value) => {
                await trigger(value);
                reset();
              })();
            }}
          >
            {text.kirimkanUcapan}
          </ButtonBrown>
        </InViewWrapper>
        <div className="h-12" />

        <div className="w-full mx-4">
          <div className="relative rounded-lg overflow-hidden">
            <InViewWrapper className=" h-[400px] shadow overflow-y-scroll rounded-lg gap-y-4 flex flex-col p-4 mx-4  bg-wedbackground-color">
              {isLoading
                ? "Loading"
                : greeting.map((item) => (
                    <InViewWrapper
                      className="animate-fade-in-bottom-top shadow-lg bg-white text-left rounded-lg flex flex-col p-4 items-stretch w-fit"
                      key={item.id}
                    >
                      <div className="text-wedDriftwood">{item.name}</div>
                      <div className="h-1" />
                      <div className="font-poppins">{item.message}</div>
                      <div className="h-4" />
                      <div className="text-xs opacity-30 text-right">
                        {moment(item.createdAt).format("DD/MM/YYYY")}
                      </div>
                    </InViewWrapper>
                  ))}
            </InViewWrapper>
            <Gradient className="top-0" />
            <Gradient className="bottom-0 rotate-180" />
            <Gradient className="top-0" />
            <Gradient className="bottom-0 rotate-180" />
          </div>
        </div>
      </div>
    </Background2>
  );
}

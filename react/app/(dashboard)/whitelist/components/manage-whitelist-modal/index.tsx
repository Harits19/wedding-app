import Input from "@/app/components/input";
import { Button } from "@/app/components/ui/button";
import { Dialog } from "@/app/components/ui/dialog";
import { useWhitelist } from "@/app/core/hooks/use-whitelist";
import { WhitelistModel } from "@/app/core/models/whitelist-model";
import { useForm, Controller } from "react-hook-form";

export default function ManageWhitelistModal({
  item,
  showModal,
  setShowModal,
}: {
  item?: { id: number; name?: string };
  showModal: boolean;
  // eslint-disable-next-line no-unused-vars
  setShowModal: (value: boolean) => void;
}) {
  const { post, update } = useWhitelist();

  const isUpdate = Boolean(item);

  const { control, handleSubmit } = useForm<WhitelistModel>({
    defaultValues: {
      id: item?.id,
      name: item?.name,
    },
  });

  const onSubmit = (value: WhitelistModel) => {
    if (isUpdate) {
      return update.trigger(value);
    } else {
      return post.trigger([value]);
    }
  };

  return (
    <>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: {
              value: true,
              message: "Required",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Name"
              {...field}
              info={fieldState.error?.message}
            />
          )}
        />
        <Button
          loading={post.isMutating}
          onClick={handleSubmit(async (value) => {
            await onSubmit(value);
            setShowModal(false);
          })}
        >
          Submit
        </Button>
      </Dialog>
    </>
  );
}

import { Button } from "@/app/components/ui/button";
import { useWhitelist } from "@/app/core/hooks/use-whitelist";
import { WhitelistModel } from "@/app/core/models/whitelist-model";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ManageWhitelistModal from "../manage-whitelist-modal";
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/app/components/ui/alert-dialog";

export default function EditWhitelist({ item }: { item: WhitelistModel }) {
  const { del } = useWhitelist();

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="flex flex-row gap-x-2">
      <AlertDialog open={showDelete} onOpenChange={setShowDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              {item.name} from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await del.trigger(item);
                setShowDelete(false);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button
        variant={"destructive"}
        onClick={async () => {
          setShowDelete(true);
        }}
      >
        <FaTrash />
      </Button>
      <Button
        onClick={async () => {
          setShowEdit(true);
        }}
      >
        <FaEdit />
      </Button>
      <ManageWhitelistModal
        item={{ id: item.id, name: item.name }}
        showModal={showEdit}
        setShowModal={setShowEdit}
      />
    </div>
  );
}

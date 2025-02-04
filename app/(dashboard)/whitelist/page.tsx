"use client";

import { useWhitelist } from "../../core/hooks/use-whitelist";
import ManageWhitelistModal from "./components/manage-whitelist-modal";
import { Button } from "../../components/ui/button";
import WedTable from "../../components/table";
import { useState } from "react";
import EditWhitelist from "./components/edit-whitelist";

export default function Page() {
  const { get } = useWhitelist();
  const whitelist = get.data?.data ?? [];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add Whitelist</Button>
      <ManageWhitelistModal showModal={showModal} setShowModal={setShowModal} />

      <WedTable
        list={whitelist}
        items={{
          name: {
            title: "Name",
            cell: (value) => value.name,
          },
          action: {
            title: "Action",
            cell: (item) => <EditWhitelist item={item} />,
          },
        }}
      />
    </>
  );
}

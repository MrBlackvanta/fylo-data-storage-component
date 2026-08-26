import { storage } from "@/data";

import RemainingCallout from "./remaining-callout";
import StorageMeter from "./storage-meter";

export default function StorageCard() {
  return (
    <div className="relative w-full rounded-card bg-card p-8 pb-13 lg:w-135 lg:p-10">
      <p className="text-center text-body lg:text-left">
        You’ve used <strong>{storage.usedGb} GB</strong> of your storage
      </p>
      <div className="mt-4">
        <StorageMeter usedGb={storage.usedGb} totalGb={storage.totalGb} />
      </div>
      <div className="mt-2.5 flex justify-between text-meta font-bold lg:mt-2">
        <p>0 GB</p>
        <p>{storage.totalGb} GB</p>
      </div>
      <RemainingCallout remainingGb={storage.totalGb - storage.usedGb} />
    </div>
  );
}

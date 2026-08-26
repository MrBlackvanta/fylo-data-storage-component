import { BrandCard, StorageCard } from "@/components";
import { Attribution } from "@/components/layout";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 items-center justify-center px-6">
        <h1 className="sr-only">Fylo data storage</h1>
        <div className="flex w-full max-w-81.5 flex-col gap-4 pb-9 lg:w-auto lg:max-w-none lg:flex-row lg:items-end lg:gap-7.5 lg:pb-0">
          <BrandCard />
          <StorageCard />
        </div>
      </main>
      <Attribution />
    </>
  );
}

type StorageMeterProps = {
  usedGb: number;
  totalGb: number;
};

export default function StorageMeter({ usedGb, totalGb }: StorageMeterProps) {
  return (
    <div aria-hidden="true" className="h-5 rounded-full bg-page/50 p-0.75">
      <div
        style={{ width: `${(usedGb / totalGb) * 100}%` }}
        className="relative h-full rounded-full bg-linear-to-r/srgb from-meter-start to-meter-end"
      >
        <span className="absolute top-1/2 right-0.5 size-2.5 -translate-y-1/2 rounded-full bg-white" />
      </div>
    </div>
  );
}

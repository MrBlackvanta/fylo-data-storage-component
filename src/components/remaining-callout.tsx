type RemainingCalloutProps = {
  remainingGb: number;
};

export default function RemainingCallout({
  remainingGb,
}: RemainingCalloutProps) {
  return (
    <p className="absolute bottom-0 left-1/2 flex w-max -translate-x-1/2 translate-y-1/2 items-start gap-2.25 rounded-card bg-white px-6 py-4 lg:v-callout-tail lg:-top-11.75 lg:right-10 lg:bottom-auto lg:left-auto lg:translate-none lg:rounded-br-none">
      <span className="text-amount font-bold text-page">{remainingGb}</span>
      <span className="mt-3.75 text-meta font-bold tracking-label text-label uppercase">
        GB Left
      </span>
    </p>
  );
}

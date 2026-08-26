import {
  DocumentIcon,
  FolderIcon,
  FyloLogo,
  UploadIcon,
} from "@/components/icons";

const quickActions = [
  { label: "Documents", Icon: DocumentIcon },
  { label: "Folders", Icon: FolderIcon },
  { label: "Upload", Icon: UploadIcon },
];

export default function BrandCard() {
  return (
    <div className="w-full rounded-card rounded-tr-notch bg-card py-10 pl-10.25 lg:w-87.5">
      <FyloLogo className="text-white" />
      <ul className="mt-8.25 flex gap-4">
        {quickActions.map(({ label, Icon }) => (
          <li key={label}>
            <button
              type="button"
              aria-label={label}
              className="grid size-12 place-items-center rounded-card bg-page text-icon transition-colors hover:text-pale"
            >
              <Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

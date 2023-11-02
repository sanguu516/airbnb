"use client";

interface MeunItemProps {
  onClick: () => void;
  label: string;
}

export default function MeunItem({ onClick, label }: MeunItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
}

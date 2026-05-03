import { Bone, Ear, Heart, Stethoscope, Syringe } from "lucide-react";
import type { LucideProps } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  stethoscope: Stethoscope,
  heart: Heart,
  ear: Ear,
  syringe: Syringe,
  bone: Bone,
  tooth: Stethoscope, // fallback — Lucide doesn't have Tooth
};

interface DepartmentIconProps {
  name: string;
  className?: string;
}

export function DepartmentIcon({ name, className }: DepartmentIconProps) {
  const Icon = ICON_MAP[name.toLowerCase()] ?? Stethoscope;
  return <Icon className={className} />;
}

import { Atom } from 'react-loading-indicators';

interface LoadingProps {
  className?: string;
  fullScreen?: boolean;
}

export default function Loading({ className = "", fullScreen = true }: LoadingProps) {
  const containerClass = fullScreen
    ? "min-h-screen w-full bg-slate-950"
    : "w-full h-full min-h-[50px]";

  return (
    <div className={`flex items-center justify-center ${containerClass} ${className}`}>
      <Atom color="#9333ea" size="medium" text="Loading..." textColor="#ffffff" />
    </div>
  );
}

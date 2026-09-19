import { ReactNode } from "react";
export default function MagneticButton({ children, href = "#", className = "" }: { children: ReactNode; href?: string; className?: string }) { return <a href={href} className={`inline-flex items-center justify-center ${className}`}>{children}</a> }

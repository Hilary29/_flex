"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RegisterButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function RegisterButton({ children, className, onClick }: RegisterButtonProps) {
  return (
    <Button
      className={cn("bg-[#1b3d74] hover:bg-[#152f58] text-white font-medium transition-colors", className)}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

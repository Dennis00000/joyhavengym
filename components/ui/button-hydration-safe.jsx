import { Button } from "@/components/ui/button"

export function ButtonHydrationSafe(props) {
  return <Button {...props} suppressHydrationWarning />
} 
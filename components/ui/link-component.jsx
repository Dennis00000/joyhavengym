export function LinkComponent({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props} suppressHydrationWarning>
        {children}
      </a>
    </Link>
  )
} 
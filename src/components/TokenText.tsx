interface TokenTextProps {
  children: string;
}

export default function TokenText({ children }: TokenTextProps) {
  return <span>{children}</span>;
}

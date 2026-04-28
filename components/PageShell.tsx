export default function PageShell({
  header,
  children,
  footer,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

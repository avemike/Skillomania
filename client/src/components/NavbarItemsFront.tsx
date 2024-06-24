export function NavbarItemsFront({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <li>
      <a href={href} className="{`font-bold`}">
        {text}
      </a>
    </li>
  );
}

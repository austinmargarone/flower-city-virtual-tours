type Props = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

const PageHeader = ({ eyebrow, title, children }: Props) => {
  return (
    <header className="mx-auto max-w-[48rem] px-[1rem] pt-[2rem] text-center md:pt-[3rem]">
      {eyebrow && (
        <p className="font-bold uppercase tracking-[0.15em] text-tan">{eyebrow}</p>
      )}
      <h1 className="h1 mt-2">{title}</h1>
      {children && (
        <div className="mt-4 text-lg leading-relaxed text-lightblue">{children}</div>
      )}
    </header>
  );
};

export default PageHeader;

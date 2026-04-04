import { cn } from "@/libs/cn";

export default function Title({
  title,
  subTitle,
  desc,
  exSt,
  exStTitle,
  exStSubTitle,
}: {
  title?: any;
  subTitle?: string;
  desc?: string;
  exSt?: string;
  exStTitle?: string;
  exStSubTitle?: string;
}) {
  return (
    <div
      className={cn(
        "flex text-center w-full mt-[50px] mb-[24px] leading-[25px] md:leading-[35px] flex-col justify-center items-center",
        exSt
      )}
    >
      {title && (
        <div
          className={cn(
            "md:text-[36px] text-[20px] font-[400] md:font-[600] text-primary",
            exStTitle
          )}
        >
          {title}
        </div>
      )}

      <div
        className={cn(
          "text-foreground font-[600] md:text-[42px] text-[28px] max-w-md tracking-tight mb-2",
          exStSubTitle
        )}
      >
        {subTitle}
      </div>
      <div
        className={cn(
          "text-default-500 font-[400] lg:text-[1.4rem] text-[1.1rem] max-w-md",
          exStSubTitle
        )}
      >
        <span className="font-[600] text-2xl bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
          {desc}
        </span>
      </div>
    </div>
  );
}

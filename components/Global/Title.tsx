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
        "flex text-center  w-full mt-[50px] mb-[24px] leading-[25px] md:leading-[35px] flex-col  justify-center items-center",
        exSt && exSt
      )}
    >
      {title && (
        <div
          className={cn(
            "md:text-[36px] text-[20px] font-[400] md:font-[600]  text-teal-700 ",
            exStTitle && exStTitle
          )}
        >
          {title}
        </div>
      )}

      <div
        className={cn(
          "text-white font-[600] md:text-[42px] text-[28px] max-w-md tracking-tight mb-2",
          exStSubTitle && exStSubTitle
        )}
      >
        {subTitle}
      </div>
      <div
        className={cn(
          "text-white/80 font-[400] lg:text-[1.4rem] text-[1.1rem] max-w-md",
          exStSubTitle && exStSubTitle
        )}
      >
        <span className="font-[600] text-2xl bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          {desc}
        </span>
      </div>
    </div>
  );
}

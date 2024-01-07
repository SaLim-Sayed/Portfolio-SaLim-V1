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
        "flex text-center  w-full mt-[50px] mb-[24px] leading-[35px] flex-col  justify-center items-center",
        exSt && exSt
      )}
    >
      {title && (
        <div
          className={cn(
            "md:text-[36px] text-[24px] font-[600] text-teal-700 ",
            exStTitle && exStTitle
          )}
        >
          {title}
        </div>
      )}
       
        <div
          className={cn(
            "text-darkColor-20 font-[400] lg:text-[1.2rem] text-[1rem] max-w-md",
            exStSubTitle && exStSubTitle
          )}
        >
          {subTitle}{" "}
          {desc && (
            <span className="font-[600] text-xl text-orange-300">{desc} </span>
          )}
        </div>
     
    </div>
  );
}

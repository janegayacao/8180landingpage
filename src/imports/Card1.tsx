import imgGeminiGeneratedImageGebg1Ggebg1Ggebg1 from "../assets/img_05.png";

function Frame1() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <img alt="" className="absolute inset-0 object-cover object-right pointer-events-none size-full" src={imgGeminiGeneratedImageGebg1Ggebg1Ggebg1} />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" style={{ backgroundImage: "linear-gradient(41.7408deg, rgb(0, 98, 255) 1.0278%, rgb(0, 0, 0) 9.1269%, rgba(0, 0, 0, 0) 65.432%)" }}>
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end not-italic p-[23.364px] relative size-full text-white">
          <div className="font-['Agdasima:Regular',sans-serif] leading-[0.76] min-w-full relative shrink-0 text-[32px] md:text-[46.728px] tracking-[-0.9346px] w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">Digital</p>
            <p>Transformation</p>
          </div>
          <p className="font-['Open_Sauce_Sans:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[12px] md:text-[18.691px] tracking-[-0.3738px]">
            {`User-centric digital experience `}
            <br aria-hidden="true" />
            {`that ensures consistency `}
            <br aria-hidden="true" />
            and effectivity for the customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[11.682px] items-start justify-end overflow-clip relative rounded-[20px] size-full" data-name="Card1">
      <Frame1 />
      <Frame />
    </div>
  );
}
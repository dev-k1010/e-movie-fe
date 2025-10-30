import { ArrowRightOutlined } from "@ant-design/icons";

// NavItem.jsx
export default function DemoItemInnerpage({
  mainText = "trang chủ",
  hoverText = "Home",
  index = "(1)",
}) {
  return (
    <div className="row-span-1 h-full flex flex-col relative group overflow-hidden">
      {/* Nội dung */}
      <div className="flex justify-between items-center h-full px-12 z-10">
        {/* Logo nhỏ + tiêu đề */}
        <div className="font-serif flex justify-center items-center space-x-6 font-medium">
          {/* Hình vuông xoay */}
          <span className="relative w-3 aspect-square grid grid-cols-2 grid-rows-2 gap-[1.5px] rotate-45">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="bg-black w-full h-full"></span>
            ))}
          </span>

          {/* Chữ tiêu đề */}
          <span className="font-serif uppercase text-5xl transition-transform duration-700 group-hover:translate-x-9">
            {mainText}
          </span>
        </div>

        {/* Vòng tròn + text đổi khi hover */}
        <div className="group">
          {/* Vòng tròn */}
          <div className="aspect-square w-16 relative rounded-full bg-black transition-colors duration-700 group-hover:bg-transparent ">
            {/* Index ban đầu */}
            <span className="absolute inset-0 grid place-items-center text-[#cdcdcd] text-2xl font-serif font-medium leading-none transition-opacity duration-500 group-hover:opacity-0 -translate-y-[1px]">
              {index}
            </span>

            {/* Hover */}
            <div className="flex justify-center opacity-0 items-center text-5xl  h-full -translate-x-24 transition duration-700 group-hover:opacity-100 group-hover:translate-x-0">
              &rarr;
            </div>
          </div>
        </div>
      </div>

      {/* Thanh ngang */}
      <div className="relative w-full h-[3px] flex flex-col justify-end">
        <div className="h-[1px] bg-black w-full"></div>
        <div className="absolute inset-0 h-full bg-[#3f3f3f] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
      </div>

      {/* Lớp phủ mờ khi hover */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
    </div>
  );
}

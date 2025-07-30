import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadMoreButton from "@/components/LoadMoreButton";
import Image from "next/image";

export default function Home() {

  const article1 = [
    {
      image: "/p1_home.jpg",
      name: "Thủ tướng yêu cầu về đích sớm 3 dự án cao tốc, sân bay, cảng biển tại Quảng Trị",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
      desc: "Chiều ngày 26/7, trong chương trình công tác tại tỉnh Quảng Trị, Thủ tướng Phạm Minh Chính đã đi kiểm tra tiến độ dự án đường cao tốc Vạn Ninh – Cam Lộ, dự án cảng hàng không Quảng Trị, dự án cảng biển.",
      highlight1: [
        "Từ sân bay Quảng Trị đến tham vọng đưa hàng không Việt Nam 'cất cánh' của bầu Hiển"
      ],
      highlight2: [
        "Huy động 656 máy móc, trên 1.500 nhân công 'tăng tốc' thi công cao tốc Vạn Ninh - Cam Lộ, phần đầu hoàn thành"
      ],
    },
    {
      image: "/p1_home.jpg",
      name: "Cần chính sách ưu đãi phát triển “nhà ở thương mại vừa túi tiền” ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',

    }, {
      image: "/p1_home.jpg",
      name: "Thêm một chìa khóa giải “cơn khát” điện cho các trung tâm dữ liệu AI: Giải pháp tới từ những cục pin xe điện tưởng như là rác khó xử lý ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',

    }, {
      image: "/p2_home.jpg",
      name: "VietinBank Capital không còn là cổ đông lớn tại Petrosetco sau nửa năm ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Tài chính",
      desc: "TVietinBank Capital đã bán ra 7,8 triệu cổ phiếu PET trong phiên 23/7, qua đó giảm sở hữu xuống còn 2,2 triệu cổ phiếu (tỷ lệ 2,06%) đồng thời không còn là cổ đông lớn của Petrosetco."
    },
    {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }, {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }, {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }
  ]

  const topNews = [
    {
      id: 1,
      title:
        "Mua hàng tỷ mét khối khí đốt Nga với giá hời nhất châu Âu, quốc gia ủng hộ EU cương quyết không áp lệnh trừng phạt Moscow bất chấp sức ép từ phương Tây",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
    },
    {
      id: 2,
      title:
        "Bác yêu cầu của phía Ukraine, quốc gia EU bất ngờ dỡ lệnh đóng băng hơn 400 triệu USD tài sản của 'ông lớn' khí đốt Nga",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
    },
    {
      id: 3,
      title:
        "GELEX lãi kỷ lục trong quý 2, lợi nhuận kinh doanh lõi tăng gần 3 lần cùng kỳ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
    },
    {
      id: 4,
      title:
        "Danh sách cổ đông nhận bổ thưởng ROS giá 5.466 - 7.215 đồng/cp, người nhận nhất 180 tỷ, có cả công ty chứng khoán",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
    },
    {
      id: 5,
      title:
        "Danh sách cổ đông nhận bổ thưởng ROS giá 5.466 - 7.215 đồng/cp, người nhận nhất 180 tỷ, có cả công ty chứng khoán",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
    },
  ]


  const article2 = [
    {
      image: "/p2_home.jpg",
      name: "VietinBank Capital không còn là cổ đông lớn tại Petrosetco sau nửa năm ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
      tag: "Tài chính",
      desc: "TVietinBank Capital đã bán ra 7,8 triệu cổ phiếu PET trong phiên 23/7, qua đó giảm sở hữu xuống còn 2,2 triệu cổ phiếu (tỷ lệ 2,06%) đồng thời không còn là cổ đông lớn của Petrosetco."
    },
    {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
      tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }, {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
      tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }, {
      image: "/p2_home.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
      tag: "Kinh doanh",
      desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
    }
  ]

  const banner = [
    {
      image: "/banner.jpg",
      name: "VietinBank Capital không còn là cổ đông lớn tại Petrosetco sau nửa năm ",
      slug: '/'
    },
    {
      image: "/banner.jpg",
      name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
      slug: '/'
    }
  ]



  return (
    <>
      <Header />

      <div className=" pb-5 pt-[125px] lg:pb-[50px] lg:pt-[30px] md:pb-[35px]  md:pt-[130px] ">
        <div className="container ">
          <div>
            <div className="flex lg:gap-4.5  flex-col lg:flex-row gap-0.5">
              <div className="border-r border-[rgba(0,0,0,0.05)] pb-[15px] mb-[15px] lg:pr-[19px] lg:w-[50%] lg:m-0 lg:border-r lg:border-[rgba(0,0,0,0.05)]">
                <a href={article1[0].slug} className="block">
                  <Image
                    src={article1[0].image}
                    alt={article1[0].name}
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                  <h2 className="text-lg font-bold mt-2 leading-snug">{article1[0].name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{article1[0].desc}</p>
                </a>
              </div>

              <div className="lg:w-[50%] w-[100%]">
                <div className="grid grid-cols-2 ">
                  {article1.slice(1, 5).map((item, index) => (
                    <a
                      key={index}
                      href={item.slug}
                      className={`p-4.5 border-[rgba(0,0,0,0.05)]  ${index === 1 || index === 0 ? 'pt-0' : ''} 
                       ${index === 0 || index === 2 ? 'pl-0' : ''} 
                       ${index === 1 || index === 3 ? 'pr-0' : ''}   ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={120}
                        className="lg:w-full lg:h-[100px] w-full h-[240px] object-cover"
                      />
                      <h3 className="text-sm font-semibold mt-2">{item.name}</h3>
                    </a>
                  ))}
                </div>

              </div>


            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4.5 border-t border-b border-[rgba(0,0,0,0.05)] pb-2.5 ">
              {article1.slice(5, 7).map((item, index) => (
                <a
                  key={index}
                  href={item.slug}
                  className={` flex gap-3 p-4.5 border-[rgba(0,0,0,0.05)] ${index === 0 ? 'border-r' : ''} ${index === 0 || index === 1 ? 'pl-0' : ''} `}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={0}
                    className="lg:h-[auto] object-cover lg:w-[50%] aspect-[240/160]"
                  />
                  <div className="w-[50%]">
                    <h3 className="font-semibold text-[15px] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>

      <div className="!bg-[#357982]  pb-5 pt-[15px] lg:pb-[50px] lg:pt-[30px] md:pb-[35px]  md:pt-[20px]">
        <div className="container">
          <div className="lg:flex gap-4.5 flex-col lg:flex-row">
            <div className=" flex flex-col gap-3 border-b border-[rgba(255,255,255,0.1)] pb-[15px] mb-[15px] pr-[19px] lg:pr-[19px] lg:w-[50%] lg:m-0 lg:border-r lg:border-[rgba(255,255,255,0.05)]">
              <a href={article2[0].slug} className="block relative w-full h-auto aspect-[465/310] ">
                <Image
                  fill
                  sizes="100vw"
                  quality={100}
                  src={article2[0].image}
                  alt={article2[0].name}
                  className="object-cover "
                />
              </a>
              <h3 className="text-white  text-[20px] lg:text-[22px] md:text-[15px] font-bold">{article2[0].name}</h3>
              <h4 className="text-white/50 text-[13px]" >{article2[0].tag}</h4>
              <p className="text-white/50 text-[13px]" >{article2[0].desc}</p>

            </div>

            <div className=" flex flex-row lg:w-[50%] w-[100%] ">
              <div className="flex flex-col gap-5">
                {article2.slice(1).map((item, index) => (
                  <a
                    key={index}
                    href={item.slug}
                    className="flex gap-5 border-[rgba(255,255,255,0.1)] border-b pb-3.5 last:border-none"
                  >
                    <div className=" w-[50%] relative aspect-[240/160]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className=" w-[40%] lg:w-[50%] !h-auto object-cover "
                        fill
                        quality={100}
                        sizes="100vw"
                      />
                    </div>
                    <div className="w-[60%] lg:w-[50%] flex flex-col gap-2.5">
                      <h3 className=" text-white text-[16px] lg:text-[15px] md:text-[18px] font-bold">
                        {item.name}
                      </h3>
                      <h4 className="text-white/50 text-[13px]">{item.tag}</h4>
                      <p className="text-white/50 text-[13px] line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="pb-5 pt-[15px] lg:pb-[50px] lg:pt-[30px] md:pb-[35px]  md:pt-[60px]">
        <div className="container">
          <div className=" flex gap-4.5 w-full lg:flex-row flex-col">
            <div className="w-[100%] flex flex-col gap-4.5 border-[rgba(0,0,0,0.05)] pb-[15px] mb-[15px] pr-[15px] lg:pr-[15px] lg:w-[70%] lg:m-0 lg:border-r lg:border-[rgba(0,0,0,0.05)]">
              {article2.slice(0).map((item, index) => (
                <a
                  key={index}
                  href={item.slug}
                  className="flex gap-5  border-b border-[rgba(0,0,0,0.05)] pb-7 pt-3 ">
                  <div className="w-[40%] relative aspect-[240/160]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover !h-auto"
                      fill
                      quality={100}
                      sizes="100vw"
                    />
                  </div>
                  <div className="w-[60%] flex flex-col gap-2.5">
                    <h3 className=" text-black text-[16px] lg:text-[15px] md:text-[18px] font-bold">
                      {item.name}
                    </h3>
                    <h4 className="text-[#555] text-[13px]">{item.tag}</h4>
                    <p className="text-[#797A7E] text-[13px] ">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}

              <LoadMoreButton/>
            </div>

            <div className="lg:w-[30%] flex flex-col gap-4.5 pt-3 w-[100%]">
              <div className="flex flex-col gap-3 border-b border-[rgba(0,0,0,0.05)] pb-4">
                <div className="relative text-center text-black before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0 lg:before:w-[10%] lg:after:w-[10%]  sm:before:w-[30%] sm:after:w-[30%]  before:w-[10%] after:w-[10%]  before:h-[4px] after:h-[4px] before:bg-red-700 after:bg-red-700 before:translate-y-[-50%] after:translate-y-[-50%]">
                  <a ><div className="pr-9 pl-11 sm:text-[18px] text-[16px] font-black leading-1.4">Diễn đàn Thẩm định giá</div></a>
                </div>
                <a href={article2[0].slug} className=" relative w-full h-auto aspect-[300/200]">
                  <Image
                    fill
                    sizes="100vw"
                    quality={100}
                    src={article2[0].image}
                    alt={article2[0].name}
                    className="w-full  object-cover"
                  />
                </a>
                <h3 className="text-black text-[15px] font-bold">
                  {article2[0].name}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {article2.slice(0).map((item, index) => (
                  <a
                    key={index}
                    href={item.slug}>
                    <div key={index} className="flex gap-3 border-b border-[rgba(0,0,0,0.05)] pb-3">
                      <div className="w-[30%] relative aspect-[100/70]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full !h-auto object-cover"
                          fill
                          quality={100}
                          sizes="100vw"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-black text-[14px] font-semibold">{item.name}</h4>
                      </div>
                    </div>
                  </a>
                ))}

              </div>

              {/* banner */}
              <div className="lg:flex lg:flex-col lg:gap-5 hidden  ">
                {banner.map((item, index) => (
                  <a key={index} href={item.slug} className="border-b border-[rgba(0,0,0,0.05)] pb-9 pt-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={500}
                      quality={100}
                      className="object-cover w-full h-auto"
                    />
                  </a>
                ))}
              </div>

              {/* đọc nhiều */}

              <div className="flex flex-col gap-5 border-b border-[rgba(0,0,0,0.05)] pb-6">
                <div className="relative text-black before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0 lg:before:w-[10%] lg:after:w-[50%] md:before:w-[3%] md:after:w-[80%] sm:before:w-[5%] sm:after:w-[75%] before:w-[8%] after:w-[45%] before:h-[4px] after:h-[4px] before:bg-red-700 after:bg-red-700 before:translate-y-[-50%] after:translate-y-[-50%]">
                  <a ><div className="pr-9 pl-11 text-[18px] font-black leading-1.4">Đọc nhiều</div></a>
                </div>
                <div className="">
                  <ul className="space-y-3 mt-2">
                    {topNews.map((item) => (
                      <li key={item.id} className="flex items-start gap-2">
                        <span className="text-[15px] font-black text-[#D8D3CD] min-w-[20px]">
                          {item.id}.
                        </span>
                        <p className="text-[15px] text-black font-bold leading-snug">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>



              {/* nhip cau doanh nghiệp */}
              <div className="flex flex-col gap-3 border-b border-[rgba(0,0,0,0.05)] pb-4">

                <div className="relative text-black text-center before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0 lg:before:w-[10%] lg:after:w-[10%]  sm:before:w-[30%] sm:after:w-[30%]  before:w-[10%] after:w-[10%]  before:h-[4px] after:h-[4px] before:bg-red-700 after:bg-red-700 before:translate-y-[-50%] after:translate-y-[-50%]">
                  <a ><div className="pr-2.5 pl-2.5 sm:text-[18px] text-[16px] font-black leading-1.4">Nhịp cầu doanh nghiệp</div></a>
                </div>


                <a href={article2[0].slug} className=" relative w-full h-auto aspect-[300/200]">
                  <Image
                    fill
                    sizes="100vw"
                    quality={100}
                    src={article2[0].image}
                    alt={article2[0].name}
                    className="w-full  object-cover"
                  />
                </a>
                <h3 className="text-black text-[15px] font-bold">
                  {article2[0].name}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {article2.slice(0).map((item, index) => (
                  <a
                    key={index}
                    href={item.slug}>
                    <div key={index} className="flex gap-3 border-b border-[rgba(0,0,0,0.05)] pb-3">
                      <div className="w-[30%] relative aspect-[100/70]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full !h-auto object-cover"
                          fill
                          quality={100}
                          sizes="100vw"
                        />
                      </div>
                      <div className="w-[70%]">
                        <h4 className="text-black text-[14px] font-semibold">{item.name}</h4>
                      </div>
                    </div>
                  </a>
                ))}

              </div>

              {/* dặc san*/}
              <div className="flex flex-col gap-5 ">
                <div className="relative text-black before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0 lg:before:w-[10%] lg:after:w-[50%] md:before:w-[3%] md:after:w-[80%] sm:before:w-[5%] sm:after:w-[75%] before:w-[8%] after:w-[45%] before:h-[4px] after:h-[4px] before:bg-red-700 after:bg-red-700 before:translate-y-[-50%] after:translate-y-[-50%]">
                  <a ><div className="pr-9 pl-11 text-[18px] font-black leading-1.4">Đặc sản</div></a>
                </div>
                <a href={banner[0].slug} className=" pt-3">
                  <Image
                    src={banner[0].image}
                    alt={banner[0].name}
                    width={800}
                    height={500}
                    quality={100}
                    className="object-cover w-full h-auto"
                  />
                </a>
              </div>


            </div>





          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

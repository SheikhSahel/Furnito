import Image from "next/image";
import React from "react";
import HeadingPeraTxt from "@/utils/HeadingPeraTxt";
import Button from "@/utils/Button";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";



const ProductCard = ({ image, discount, isNew, title, subtitle, price, oldPrice  }) => {

  
    return (
      <div className="w-285 relative group">
        <div>
          <div className="w-285 h-300 overflow-hidden relative">
            <Image
              src={image}
              quality={100}
              className="w-285 h-300 object-cover"
              alt={title}
            />
            {discount && (
              <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-redDis z-[5] flex justify-center items-center">
                <HeadingPeraTxt
                  level="h6"
                  className="text-sm font-medium text-white capitalize"
                  text={`-${discount}%`}
                />
              </div>
            )}
            {isNew && (
              <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-greenNew z-[5] flex justify-center items-center">
                <HeadingPeraTxt
                  level="h6"
                  className="text-sm font-medium text-white capitalize"
                  text="New"
                />
              </div>
            )}
          </div>
          <div className="pt-4 pl-4 pb-30 pr-5 flex flex-col gap-y-[8px] bg-protxtbg">
            <HeadingPeraTxt
              level="h4"
              className="text-2xl font-semibold text-smallText capitalize"
              text={title}
            />
            <HeadingPeraTxt
              level="span"
              className="text-base font-medium text-productspan"
              text={subtitle}
            />
            <div className="flex justify-between gap-x-4 items-center">
              <HeadingPeraTxt
                level="h5"
                className="text-xl font-semibold text-secHeding"
                text={`BDT ${price.toLocaleString()}`}
              />
              {oldPrice && (
                <span className="text-sm font-normal text-proCrosTxt">
                  <s>BDT {oldPrice.toLocaleString()}</s>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 bg-[#00000091] w-full h-full z-10 text-white flex justify-center items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible">
          <div>
            <div className="flex justify-center items-center">
              <Button
                className="py-3 px-[58px] bg-white text-boxH text-base font-semibold"
                btntxt="Add to cart"
              />
            </div>
            <ul className="mt-6 flex items-center gap-x-5">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-base gap-x-[2px] font-semibold"
                >
                  <IoMdShare className="text-base" />
                  <span>Details</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-base gap-x-[2px] font-semibold"
                >
                  <FaArrowRightArrowLeft className="text-base" />
                  <span>Compare</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-base gap-x-[2px] font-semibold"
                >
                  <FaRegHeart className="text-base" />
                  <span>Like</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;

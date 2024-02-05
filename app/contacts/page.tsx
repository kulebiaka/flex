import React from "react";
import contctsAlice from "@/public/images/contscts-alice.jpg";
import Image from "next/image";
import FlexLogoBig from "@/components/logo424_114";
import PageTemplate from "@/components/PageTemplate";

const Contacts = () => {
  return (
    <PageTemplate title="contacts">
      <section className="mx-auto flex max-w-[900px] items-center justify-between md:flex-wrap md:px-10 sm:block sm:w-[468px] sm:p-0 xs:w-[340px]">
        <div className="w-[468px] xs:w-full ">
          <div className="flex justify-between overflow-hidden rounded-[20px]">
            <div className="xs:w-[100px]">
              <Image src={contctsAlice} alt="" />
            </div>
            <div className="xs:hover-[75px] w-[324px] bg-white p-[12px_17px] xs:w-[235px] xs:p-[8px_12px]">
              <h2 className="text-[20px] font-[700] xs:text-[14px]">
                Hello, Im Alice
              </h2>
              <p className="xs:text-[12px]">
                If you have a problem or question, <br /> feel free to get in
                touch.
              </p>
            </div>
          </div>
          <div>
            <div className="mt-[16px] rounded-[20px] bg-white p-[22px_35px] xs:p-[16px_25px]">
              <form action="">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="mb-[12px] w-[254px] bg-[#D9D9D9] p-[6px] xs:w-[186px]"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="ml-[14px] w-[130px] bg-[#D9D9D9] p-[6px] xs:ml-[10px] xs:w-[94px]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="mb-[11px] w-full bg-[#D9D9D9] p-[6px]"
                />
                <textarea
                  placeholder="Please, describe your problem or questions as many detailed as you can. Confidential 100% "
                  className="w-full bg-[#D9D9D9] p-[6px]"
                />
                <button
                  disabled={true}
                  className="mt-[12px] w-full bg-[#D9D9D9] p-[6px]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-[20px] sm:mt-[35px] sm:flex sm:items-center sm:justify-between xs:block">
          <div>
            <h3 className="font-semibold">Our contacts</h3>
            <div className="mt-[15px] flex items-center">
              <span>
                <Image
                  src={"/images/contacts-phone.png"}
                  alt=""
                  width={25}
                  height={25}
                />
              </span>
              <span className="pl-[17px]">(555) 123-4567</span>
            </div>
            <p className="py-[30px] text-[18px] sm:py-[10px_20px]">
              321 FlexFit Lane <br /> Brooklyn, NY 11201 <br /> United States
            </p>
          </div>

          <div>
            <h3 className="mb-[15px] font-semibold">Follow us</h3>
            <div className="flex space-x-[30px]">
              <a href="#">
                <Image
                  src={"/icons/contacts-instagram.png"}
                  alt=""
                  width={35}
                  height={35}
                />
              </a>
              <a href="#">
                <Image
                  src={"/icons/contacts-telegram.png"}
                  alt=""
                  width={35}
                  height={35}
                />
              </a>
              <a href="#">
                <Image
                  src={"/icons/contacts-twitter.png"}
                  alt=""
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-[40px] w-full md:hidden">
        <div className="mx-auto w-[424px]">
          <h2 className=" text-[25.588px] text-[#0D0D0D]">
            STRETCHING AND FITNESS STUDIO
          </h2>
          <FlexLogoBig color="#0D0D0D" />
        </div>
      </section>

      <section className="my-[30px] w-full">
        <Image
          src={"/images/contacts-map.jpg"}
          alt=""
          width={1297}
          height={537}
          className="w-full"
        />
      </section>
    </PageTemplate>
  );
};

export default Contacts;

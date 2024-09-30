import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import drone from "@/public/images/drone.png";
import star from "@/public/images/star.png";
import driconcard from "@/public/icons/driconcard.svg";
import locationicon from "@/public/icons/locationicon.svg";
import timeicon from "@/public/icons/timeicon.svg";
import callicon from "@/public/icons/callicon.svg";

function CardDocter() {
  return (
    <Card className="w-[400px] xl:w-[370px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-center bg-[#EEF2FA] w-full rounded-t-xl">
          <Image src={drone} alt="drone" className="pt-3" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h1 className="text-[21px] text-[#363636] font-semibold">
          Dr.Jonaton ad
        </h1>
        <div className="flex items-center">
          {" "}
          <Image
            src={star}
            alt="star"
            width={22}
            height={22}
            className="mt-3"
          />
          <Image
            src={star}
            alt="star"
            width={22}
            height={22}
            className="mt-3"
          />
          <Image
            src={star}
            alt="star"
            width={22}
            height={22}
            className="mt-3"
          />
          <Image
            src={star}
            alt="star"
            width={22}
            height={22}
            className="mt-3"
          />
          <Image
            src={star}
            alt="star"
            width={22}
            height={22}
            className="mt-3"
          />
        </div>
        <div className="flex items-center mt-5 gap-3">
          <Image src={driconcard} alt="driconcard" width={22} height={22} />
          <span className="text-sm text-[#363636] font-medium">
            Heart Surgeon
          </span>
        </div>
        <div className="flex items-center mt-5 gap-3">
          <Image src={locationicon} alt="driconcard" width={22} height={22} />
          <span className="text-sm text-[#363636] font-medium">Erbil, IRQ</span>
        </div>
        <div className="flex items-center mt-5 gap-3">
          <Image src={timeicon} alt="driconcard" width={22} height={22} />
          <span className="text-sm text-[#363636] font-medium">
            08:30 AM - 5:30 PM
          </span>
        </div>
        <div className="flex items-center mt-5 gap-3">
          <Image src={callicon} alt="driconcard" width={22} height={22} />
          <span className="text-sm text-[#363636] font-medium underline">
            Call
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <button className="text-[#026985] w-[171px] h-[45px] border-2 border-[#026985] rounded-[7px] text-base font-medium">
          View Profile
        </button>
        <button className="bg-[#026985] text-white w-[171px] h-[45px] border-2 border-[#026985] rounded-[7px] text-base font-medium">
          Book Appointment
        </button>
      </CardFooter>
    </Card>
  );
}

export default CardDocter;

import React from "react";

import { Root } from "./Base";
import { RiCloudLine, RiSeedlingLine, RiTreeLine } from "@remixicon/react";

export interface AssessmentCardProps {
    title: string;
    tags: string[];
    issues: string[];
    assessmentData: string[];
    publishedDate: Date;
}

/** Primary UI component for user interaction */
export const AssessmentCard = ({
  title,
  tags,
  issues,
  assessmentData,
  publishedDate,
  ...props
}: AssessmentCardProps) => {


        const formattedDate = new Date(publishedDate).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        });
      
        const formattedTime = new Date(publishedDate).toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });


  return (
    <div className="w-[358px] h-[372px] p-6 bg-bg-white-0 rounded-2xl border border-stroke-soft-200 flex-col justify-center items-start gap-4 inline-flex">
    <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="text-label-xl text-text-strong-950">{title}</div>
        </div>
        <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-10 flex-col justify-center items-start gap-2 flex">
                <div className="text-text-sub-600 text-[11px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">tags</div>
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="px-2 py-0.5 bg-success-light rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-success-dark text-label-sm leading-none">{tags[0]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-success-light rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-success-dark text-label-sm leading-none">{tags[1]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-success-light rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-success-dark text-label-sm leading-none">{tags[2]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-success-light rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-success-dark text-label-sm leading-none">{tags[3]}</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch h-10 flex-col justify-center items-start gap-2 flex">
                <div className="text-text-sub-600 text-[11px] font-medium font-['Inter'] uppercase leading-3 tracking-tight">issues</div>
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="px-2 py-0.5 bg-[#c0eaff] rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-[#124b68] text-label-sm leading-none">{issues[0]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-[#c0eaff] rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-[#124b68] text-label-sm leading-none">{issues[1]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-[#c0eaff] rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-[#124b68] text-label-sm leading-none">{issues[2]}</div>
                    </div>
                    <div className="px-2 py-0.5 bg-[#c0eaff] rounded-[999px] justify-center items-center gap-0.5 flex overflow-hidden whitespace-nowrap">
                        <div className="text-[#124b68] text-label-sm leading-none">{issues[3]}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[0px] border border-stroke-soft-200"></div>
    </div>
    <div className="grid grid-cols-2 gap-4"> 
        <div className="w-full rounded-lg flex-col justify-start items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
                <RiTreeLine className="w-4 h-4 text-primary-base" />
                <div className="text-text-sub-600 text-label-sm leading-none">Species Observed</div>
            </div>
            <div className="self-stretch text-[#0d111b] text-base font-medium font-['Inter'] leading-normal">{assessmentData[0]}</div>
        </div>
        <div className="w-full rounded-lg flex-col justify-start items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <RiSeedlingLine className="w-4 h-4 text-primary-base" />
                <div className="text-text-sub-600 text-label-sm leading-none">Soil Moisture</div>
            </div>
            <div className="self-stretch text-[#0d111b] text-base font-medium font-['Inter'] leading-normal">{assessmentData[1]}</div>
        </div>
        <div className="w-full rounded-lg flex-col justify-start items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <RiCloudLine className="w-4 h-4 text-primary-base" />
                <div className="text-text-sub-600 text-label-sm leading-none">Carbon Ton Stock</div>
            </div>
            <div className="self-stretch text-[#0d111b] text-base font-medium font-['Inter'] leading-normal">{assessmentData[2]}</div>
        </div>
        <div className="w-full rounded-lg flex-col justify-start items-start inline-flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <RiCloudLine className="w-4 h-4 text-primary-base" />
                <div className="text-text-sub-600 text-label-sm leading-none">Carbon Ton Potential</div>
            </div>
            <div className="self-stretch text-[#0d111b] text-base font-medium font-['Inter'] leading-normal">{assessmentData[3]}</div>
        </div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-[0px] border border-stroke-soft-200"></div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-text-sub-600 text-xs font-normal font-['Inter'] leading-none">Published on {formattedDate} at {formattedTime}</div>
        <div className="p-1.5 bg-primary-base rounded-lg  justify-center items-center gap-1 flex overflow-hidden">
            <div className="px-1 justify-center items-center flex">
                <div className="text-white text-sm font-medium font-['Inter'] leading-tight">View Details</div>
            </div>
        </div>
    </div>
</div>
  );
};

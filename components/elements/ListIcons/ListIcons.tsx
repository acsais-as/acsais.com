import { JSX } from "react";
import { ListIconsProps } from "./ListIcons.props";
import { CheckCircle } from "lucide-react";
import Ptag from "../Ptag/Ptag";

const ListIcons = ({ children }: ListIconsProps): JSX.Element => {
  return (
    <div className="h-auto flex items-start flex-col justify-left mt-2">
      <div className="mr-2 flex flex-row items-center justify-center max-w-prose">
        <CheckCircle className="text-[#006262] w-[20px] flex-none align-baseline" />
        <Ptag size="p" className="self-auto ml-2">
          {children}
        </Ptag>
      </div>
    </div>
  );
};

export default ListIcons;

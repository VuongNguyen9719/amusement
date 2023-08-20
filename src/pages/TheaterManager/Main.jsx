import QuickInfoChair from "./QuickInfoChair";
import ScreenChoiceChair from "./ScreenChoiceChair";

function Main() {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-[60px]  ">
            <div className="flex w-[740px] h-[60px] items-center justify-center rounded bg-[#E3E8EF]">
                <p className="text-[#4B5565] text-2xl not-italic font-medium leading-8">Màn chiếu</p>
            </div>
            <ScreenChoiceChair />
            <QuickInfoChair />
        </div>
     );
}

export default Main;
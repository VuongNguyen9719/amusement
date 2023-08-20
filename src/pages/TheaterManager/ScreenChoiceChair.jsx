import TypeChairDouble from "./TypeChairDouble";
import TypeChairNomal from "./TypeChairNomal";
import TypeChairSpecial from "./TypeChairSpecial";

function ScreenChoiceChair() {
    return (
        <div className="flex flex-col gap-y-6 ">
            <TypeChairNomal />
            <TypeChairDouble />
            <TypeChairSpecial />
        </div>
    );
}

export default ScreenChoiceChair;
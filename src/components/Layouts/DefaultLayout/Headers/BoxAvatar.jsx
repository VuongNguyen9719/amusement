import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BoxAvatar(props) {
    return (
        <div
            className="flex items-center"
        >
            <div
                className="w-[44px] h-[44px] rounded-[12px] border border-solid border-[#EEF2FF] mr-[12px]"
            >

            </div>
            <div
                className="flex flex-col justify-center mr-[10px] w-[140px]"
            >
                <p className="overflow-hidden text-[#364152] text-sm not-italic font-medium leading-5">Nguyễn Văn A</p>
                <p className="text-xs not-italic font-normal leading-4 overflow-hidden text-[#9AA4B2]">Giám đốc</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faChevronDown} size="sm" style={{ color: '#9AA4B2' }} />
            </div>
        </div>
    );
}

export default BoxAvatar;
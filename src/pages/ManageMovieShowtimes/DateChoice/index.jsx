import CurrentChoice from "./CurrentChoice";
import Datepicker from "./Calendar";
import Scrollbar from '@formControls/Scrollbar'

function Index() {
    return (
        <Scrollbar
            className="w-[334px] flex-none flex flex-col items-start self-stretch rounded-2xl bg-white p-[20px] h-full"
        >
            <Datepicker />
            <CurrentChoice />
        </Scrollbar>
    );
}

export default Index;
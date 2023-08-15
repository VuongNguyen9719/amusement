import Filter from "./Filter";
import ListGroupFilm from "./ListGroupFilm";

function Index() {
    return (
        <div
            className="flex-1 rounded-xl bg-[#FFF] h-full flex flex-col gap-y-[12px]"
        >
            <Filter />
            <ListGroupFilm />
        </div>
    );
}

export default Index;
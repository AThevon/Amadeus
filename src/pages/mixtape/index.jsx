import Header from "@/components/Header/Header";
import Mixtape from "@/components/Mixtape/Mixtape";

const PageMixtape = () => {
    return (
        <>
            <Header title="Our projects" />
            <Mixtape collection="mixtape" />
        </>
    );
};

export default PageMixtape;
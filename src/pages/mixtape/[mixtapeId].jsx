import Header from "@/components/Header/Header";
import SingleMixtape from "@/components/SingleMixtape/SingleMixtape";
import { useRouter } from 'next/router';

const PageMixtape = () => {
    const { mixtapeId } = useRouter().query;
    return (
        <>
            <Header title="Mixtape" />
            <SingleMixtape mixtapeId={mixtapeId} />
        </>
    );
};

export default PageMixtape;
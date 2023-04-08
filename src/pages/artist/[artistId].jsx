import Header from "@/components/Header/Header";
import SingleArtist from "@/components/SingleArtist/SingleArtist";
import { useRouter } from 'next/router';

const PageSingleArtist = () => {
        const { artistId } = useRouter().query;
    return (
        <>
            <Header title="Artist" />
            <SingleArtist artistId={artistId} />
        </>
    );
};


export default PageSingleArtist;
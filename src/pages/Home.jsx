import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeClipTextSection from "../components/HomeClipTextSection";
import HomeFirstInfo from "../components/HomeFirstInfo";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta name="description" content="TicketDorm, buy and sell tickets to your favorite concerts, sports games and theater shows with ease and confidence." />
            <title>TicketDorm — Unlock Unforgettable Experiences with TicketDorm</title>
            </Helmet>
            <main>
                <HomeHeroSection />
                <HomeClipTextSection />
                <HomeFirstInfo />
            </main>
        </HelmetProvider>
    );
};

export default Home;
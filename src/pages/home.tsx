import HomeLanding from "../components/home-components/langing.tsx";
import HomeMenu from "../components/home-components/menu.tsx";
import HomeSecondLanding from "../components/home-components/second-landing.tsx";
import HomeBranches from "../components/home-components/branches.tsx";

const HomePage = () => {
    return (
        <>
            <HomeLanding />
            <HomeMenu />
            <HomeSecondLanding />
            <HomeBranches />
        </>
    );
};
export default HomePage;

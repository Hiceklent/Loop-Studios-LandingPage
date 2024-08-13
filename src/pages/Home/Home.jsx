import "./Home.scss";
import OurCreationsGalery from "../../components/OurCreationGalery/OurCreationsGalery";
import SectionPrimary from "../../components/main/SectionPrimary/SectionPrimary";
import SectionSecondary from "../../components/main/SectionSecondary/SectionSecondary";

const Home = () => {
	return (
		<>
			<main>
				<SectionPrimary />
				<SectionSecondary />
				<OurCreationsGalery />
			</main>
		</>
	);
};

export default Home;

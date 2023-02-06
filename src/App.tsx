import Layout from "./components/Layout/Layout";
import "modern-normalize/modern-normalize.css";
import "./global-styles/global.css";
import Footer from "./components/Footer/Footer";
import Desktop from "./components/DesktopContent/Desktop";
import { useState } from "react";

export default function App() {
	const [getCurrApplication, setGetCurrApplication] = useState("bio");

	const handleOnClick = (event: React.MouseEvent<HTMLImageElement>) => {
		setGetCurrApplication(event.currentTarget.alt);
	};
	console.log(getCurrApplication);
	return (
		<main className='App'>
			<Layout>
				<Desktop
					currApp={getCurrApplication}
					handleOnClick={handleOnClick}
				/>
				<Footer
					handleOnClick={handleOnClick}
				/>
			</Layout>
		</main>
	);
}

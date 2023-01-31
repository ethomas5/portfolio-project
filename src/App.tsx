import Layout from "./components/Layout/Layout";
import 'modern-normalize/modern-normalize.css'
import "./global-styles/global.css"
import Footer from "./components/Footer/Footer";
import Desktop from "./components/DesktopContent/Desktop";

export default function App() {
	return (
		<main className="App">
			<Layout> 
				<Desktop />
				<Footer />
			</Layout>
		</main>
	);
}

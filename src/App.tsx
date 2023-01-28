import Layout from "./components/Layout/Layout";
import 'modern-normalize/modern-normalize.css'
import "./global.css"
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<main className="App">
			<Layout> 
				<Footer />
			</Layout>
		</main>
	);
}

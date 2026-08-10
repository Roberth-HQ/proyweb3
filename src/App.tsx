import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Products />
                <Services />
                <About />
                <Careers />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
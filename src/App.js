import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleSmoothScroll = (event) => {
            if (event.target.tagName === "A" && event.target.hash) {
                event.preventDefault();

                const targetId = event.target.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }

                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Header */}
            <header>
                <div className="logo-container">
                    <img src="/spectre.png" alt="Spectre Logo" className="header-logo" />
                </div>
                <nav>
                    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#join">Join Us</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section with Video Background */}
            <section id="hero" className="hero">
                <video autoPlay loop muted className="background-video">
                    <source src="C:/Users/alexa/Downloads/BG.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="logo-overlay">
                    <img src="/spectre.png" alt="Spectre Logo" className="hero-logo" />
                    <h1>SPECTRE UMN</h1>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <h2>About Us</h2>
                <p>We are United,</p>
                <p>We are Stunt performers,</p>
                <p>We are Family</p>
                <p>Spectre adalah Unit Kegiatan Mahasiswa (UKM) yang berfokus di bidang stunt action untuk dunia perfilman. Tujuan dari UKM ini adalah memberikan dan mengasah ilmu yang dibutuhkan oleh para anggota untuk berperforma di dunia perfilman dengan tingkat standar profesional. Ilmu tersebut terdiri dari teknik gerakan menyerang, jatuhan, aksi reaksi dan gun handling yang dicakup dari berbagai macam beladiri. Ketika skill-skill tersebut telah dikuasai, para anggota akan dapat berkarya di bidang perfilman diantaranya adalah menjadi stuntman, fight choreographer, stunt coordinator dan fight director.
                    Nama Spectre tidak asing lagi di dunia perfilman, UKM ini telah berada di bawah naungan tim Ultimate Stunt Fighter yang sudah masuk ke dalam industri perfilman tingkat tinggi dan anggotanya pun telah bermain di film-film seperti The Raid, The Night Come From Us dan Gundala sehingga, koneksi untuk menyalurkan para anggota ke dunia perfilman tidak lah perlu diragukan.
                </p>
            </section>

            {/* Embed Instagram Posts Below About Us Section */}
            <section id="instagram">
                <h2>What to Expect</h2>
                <div className="instagram-posts">
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C57MT3LS7Tn/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C7RSAWEyfTs/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C6A4_N7rP5o/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements">
                <h2>Our Achievements</h2>
                <div className="achievements-grid">
                    <div className="achievement">
                        <a href="https://www.imdb.com/title/tt1899353/" target="_blank" rel="noopener noreferrer">
                            <img src="/TheRaid.jpg" alt="The Raid Movie Poster" />
                            <h3>The Raid</h3>
                            <p>Collaborated as stunt crew for the globally acclaimed movie The Raid.</p>
                        </a>
                    </div>
                    <div className="achievement">
                        <a href="https://www.imdb.com/title/tt8237172/" target="_blank" rel="noopener noreferrer">
                            <img src="/Gundala.jpg" alt="Gundala Movie Poster" />
                            <h3>Gundala</h3>
                            <p>Played a pivotal role in crafting stunt sequences for Gundala.</p>
                        </a>
                    </div>
                    <div className="achievement">
                        <a href="https://www.imdb.com/title/tt6116856/" target="_blank" rel="noopener noreferrer">
                            <img src="/TheNight.jpg" alt="The Night Comes for Us Movie Poster" />
                            <h3>The Night Comes for Us</h3>
                            <p>Part of the dynamic action team for The Night Comes for Us.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <section id="join" className="footer-section">
                    <h2>Join Us</h2>
                    <p>Interested in becoming a part of SPECTRE UMN? Contact us or follow our social media for more information!</p>
                    <div className="social-icons">
                        <a href="https://line.me/R/ti/g/U5DCuSU9Y2" target="_blank" rel="noopener noreferrer">
                            <img src="/Line_logo.png" alt="Line Icon" className="social-icon" />
                            Line
                        </a>
                        <a href="https://instagram.com/spectre_umn" target="_blank" rel="noopener noreferrer">
                            <img src="/Instagram_icon.png" alt="Instagram Icon" className="social-icon" />
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/p/Ultimate-Stunt-Fighters-100064451029954/" target="_blank" rel="noopener noreferrer">
                            <img src="/Facebook_icon.png" alt="Facebook Icon" className="social-icon" />
                            Facebook
                        </a>
                    </div>
                </section>
            </footer>

            {/* Add Instagram Embed Script */}
            <script async defer src="//www.instagram.com/embed.js"></script>
        </>
    );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
        // Only apply smooth scroll for anchor tags with href starting with #
        if (event.target.tagName === "A" && event.target.hash) {
            event.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section's ID from the anchor's href
            const targetId = event.target.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Height of the fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    // Attach event listener to all anchor tags in the document
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup the event listener
    return () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.removeEventListener("click", handleSmoothScroll);
        });
    };
}, []);

return (
        <>
            {/* Header */}
            <header>
              <div class="logo-container">
                <img src="/spectre.png" alt="Spectre Logo" class="header-logo"></img>
              </div>
                <nav>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#join">Join Us</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="hero" className="hero">
              <div class="logo-container">
                <img src="/spectre.png" alt="Spectre Logo" class="header-logo"></img>
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
                Nama Spectre tidak asing lagi di dunia perfilman, UKM ini telah berada di bawah naungan tim Ultimate Stunt Fighter yang sudah masuk ke dalam industri perfilman tingkat tinggi dan anggotanya pun telah bermain di film-film seperti The Raid, The Night Come From Us dan Gundala sehingga, koneksi untuk menyalurkan para anggota ke dunia perfilman tidak lah perlu diragukan.</p>
            </section>

            <section id="achievements">
                <h2>Our Achievements</h2>
                <div className="achievements-grid">
                    <div className="achievement">
                        <img src="/TheRaid.jpg" alt="The Raid Movie Poster" />
                        <a
                            href="https://line.me/R/ti/g/U5DCuSU9Y2https://www.imdb.com/title/tt1899353/fullcredits?mode=desktop&ref_=m_ft_dsk"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a>
                        <h3>The Raid</h3>
                        <p>Collaborated as stunt crew for the globally acclaimed movie *The Raid*.</p>
                    </div>
                    <div className="achievement">
                        <img src="/Gundala.jpg" alt="Gundala Movie Poster" />
                        <h3>Gundala</h3>
                        <p>Played a pivotal role in crafting stunt sequences for *Gundala*.</p>
                    </div>
                    <div className="achievement">
                        <img src="/TheNight.jpg" alt="The Night Comes for Us Movie Poster" />
                        <h3>The Night Comes for Us</h3>
                        <p>Part of the dynamic action team for *The Night Comes for Us*.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <section id="join" title="Join Us">
                    <div className="social-icons">
                        <p>
                            Interested in becoming a part of SPECTRE UMN? Contact us or follow our social media for more information!
                        </p>
                        <a
                            href="https://line.me/R/ti/g/U5DCuSU9Y2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/Line_logo.png"
                                alt="Line Icon"
                                style={{ width: '24px', height: '24px', verticalAlign: 'middle' }}
                            />
                        </a>
                        <a
                            href="https://instagram.com/spectre_umn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/Instagram_icon.png"
                                alt="Instagram Icon"
                                style={{ width: '24px', height: '24px', verticalAlign: 'middle' }}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/p/Ultimate-Stunt-Fighters-100064451029954/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/Facebook_icon.png"
                                alt="Facebook Icon"
                                style={{ width: '24px', height: '24px', verticalAlign: 'middle' }}
                            />
                        </a>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default App;

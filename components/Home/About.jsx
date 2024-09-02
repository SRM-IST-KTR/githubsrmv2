function AboutUs() {
    return (
        <div className="AboutUsContainer mt-80 lg:mt-20">
            <section className="about-us">
                <h2 className="about-us-title text-4xl font-bold">About Us</h2>
                <p className="about-us-description">
                    <br />
                    GitHub Community SRM is the official student-led community
                    affiliated with GitHub, spearheading the open-source
                    revolution at SRMIST. With the vision of revolutionising the
                    technical world, we constantly strive to impart the best
                    knowledge on emerging technologies. We have reached 1k+
                    followers on Instagram, and nearly 500 followers on LinkedIn
                    within 6 months.
                    <br />
                    <br />
                    At GitHub Community SRM, we believe in a friendly work
                    environment, developing and nurturing students at an apt
                    pace. This qualifies us as the first community in SRMIST,
                    Kattankulathur. So what are you waiting for, go ahead and
                    register on the link in bio and become a part of this
                    vibrant community!
                </p>
            </section>

            <style jsx>{`
                .AboutUsContainer {
                    display: flex;
                    justify-content: center;
                    padding: 10px;
                }
                .about-us {
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
                    background: rgba(12, 16, 20, 0.7);
                    box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.5);
                    transition: box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    color: #fff;
                    padding: 50px;
                    max-width: 1200px;
                    transition: box-shadow 0.3s ease;
                    font-size: 24px;
                }

                .about-us:hover {
                    box-shadow: 0px 0px 30px 10px rgba(13, 255, 78, 1);
                }
                .about-us h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
}

export default AboutUs;

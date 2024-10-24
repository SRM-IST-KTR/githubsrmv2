import React from "react";

function AboutUs() {
    return (
        <div className="lg:mt-2 mt-14 lg:px-48 p-8 rounded-2xl"style={{ marginTop: '2.7cm' }}>
            <section className="about-us lg:p-10 py-8 px-6 rounded-2xl">
                <h2 className="lg:text-5xl text-3xl md:text-4xl font-bold font-poppins mb-6">
                    About Us
                </h2>
                <p className="font-dmSans lg:text-2xl text-md md:text-lg text-left">
                    GitHub Community SRM is the official student-led community
                    affiliated with GitHub, spearheading the open-source
                    revolution at SRMIST. With the vision of revolutionising the
                    technical world, we constantly strive to impart the best
                    knowledge on emerging technologies.
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
                .about-us {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
                    background: rgba(12, 16, 20, 0.7);
                    box-shadow: 0px 0px 10px 4px rgba(13, 255, 78, 0.5);
                    transition: box-shadow 0.3s ease;
                    color: #fff;
                }

                .about-us:hover {
                    box-shadow: 0px 0px 30px 10px rgba(13, 255, 78, 1);
                }
            `}</style>
        </div>
    );
}

export default AboutUs;

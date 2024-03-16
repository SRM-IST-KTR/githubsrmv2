import React from "react";

const Index = () => {
    return (
        <>
            <div className="bg-transparent">
                <div className="0px mx-auto p-24 font-family:Inter">
                    <h1 className="text-4xl font-bold">GitHub</h1>
                    <h2 className="text-4xl font-bold">Community SRM</h2>
                    <p className="mt-4 text-lg justify-content: space-evenly">
                        The Official student-led community affiliated with
                        GitHub
                    </p>
                    <p className="text-lg justify-content: space-evenly">
                        spearheading the open-source revolution at SRMIST
                    </p>
                    <p
                        className="mt-4 text-lg font-weight:700 text-black text-center  bg-green-500 justify-center" /*This is horrendus btw */
                        style={{
                            width: "187px",
                            height: "44px",
                            borderRadius: "30px",
                        }}
                    >
                        Join Us
                    </p>
                </div>
            </div>

            <section class="flex-auto px-20 m-10 hover:ring-green-600">
                <div className="px-20  py-10 bg-transparent shadow-lg shadow-green-400 rounded-lg  ">
                    <h2 class="text-4xl font-bold">About Us</h2>
                    <p class="text-lg text-white  mt-5">
                        GitHub Community SRM is the official student-led
                        community affiliated with GitHub, spearheading the
                        open-source revolution at SRMIST. With the vision of
                        revolutionising the technical world, we constantly
                        strive to impart the best knowledge on emerging
                        technologies. We have reached 1k+ followers on
                        Instagram, and nearly 500 followers on LinkedIn within 6
                        months
                    </p>
                    <p class="text-lg text-white y mt-5">
                        At GitHub Community SRM, we believe in a friendly work
                        environment, developing and nurturing students at an apt
                        pace. This qualifies us as the first community in
                        SRMIST, Kattankulathur. So what are you waiting for, go
                        ahead and register on the link in bio and become a part
                        of this vibrant community!
                    </p>
                </div>
            </section>

            <section class="mt-10 self-center ">
                <h2 class="text-4xl font-bold text-center p-10">Our Domains</h2>
                <div class=" container flex self-auto justify-center place-content-center">
                    <div class="box-border h-30 w-30 rounded-md px-4 py-4 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:shadow-lime-900 duration-300">
                        <h3>Technical</h3>
                    </div>
                    <div class="shadow-md rounded-md px-4 py-4 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:shadow-lime-900 duration-300">
                        <h3>Creatives</h3>
                    </div>
                    <div class="shadow-md rounded-md px-4 py-4 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:shadow-lime-900 duration-300">
                        <h3>Corporate</h3>
                    </div>
                    <div class="shadow-md rounded-md px-4 py-4 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:shadow-lime-900 duration-300">
                        <h3>Content</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;

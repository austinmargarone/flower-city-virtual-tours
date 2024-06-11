import Link from "next/link";

const About = () => {
  return (
    <article className="flex justify-center flex-col ">
      <div>
        <h1 className="sm:h1 h1mobile flex justify-center">About</h1>
        <p className="p flex justify-center  max-w-[850px] mx-auto">
          Our company thrives on the forefront of technology, employing
          state-of-the-art tech stacks to craft dynamic digital solutions that
          propel businesses forward. With an unwavering focus on innovation, we
          continuously push the boundaries of possibility, delivering
          industry-leading products that resonate with our clients and their
          customers alike. Partner with us to experience the pinnacle of web
          development excellence.
        </p>
        <div className="flex justify-center mt-[1.25rem]">
          <Link href="/build">
            <button className="hero-button shadow-lg flex mx-auto">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default About;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar";
import aboutImage1 from "../../Media/about-img-1.jpg";
import service1 from "../../Media/service-01.png";
import service2 from "../../Media/service-02.png";
import service3 from "../../Media/service-03.png";
import client1 from "../../Media/client-01.png";
import client2 from "../../Media/client-02.png";
import client3 from "../../Media/client-03.png";
import client4 from "../../Media/client-04.png";
import client5 from "../../Media/client-05.png";
import client6 from "../../Media/client-06.png";
import client7 from "../../Media/client-07.png";
import client8 from "../../Media/client-08.png";
import bgPattern from "../../Media/bg-pattern-01.jpg";
import { Link } from "react-router-dom";
import teamMembersPic1 from "../../Media/team-01.jpg";
import teamMembersPic3 from "../../Media/team-03.jpg";
import teamMembersPic4 from "../../Media/team-04.jpg";
import teamMembersPic5 from "../../Media/team-05.jpg";
import { BsFacebook, BsPinterest, BsYoutube } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Footer from "../Footer/Footer";

const About = () => {
  const [mousein, setMousein] = useState(false);

  return (
    <div>
      <Helmet>
        <title>About | StudioDvoid</title>
      </Helmet>
      <NavBar />
      <div className="lg:pt-44 md:pt-40 pt-28 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-5/6 w-[90%] mx-auto text-secondary"
        >
          <p className="md:text-[12px] text-[10px] tracking-widest mb-2">
            WE ARE STUDIO D' VOID
          </p>
          <p className="xl:text-[42px] lg:text-[30px] md:text-[33px] text-[21px] md:font-[700] font-[600] lg:w-[95%] w-full">
            Our bulding are inspired by the challenge of balancing function &
            beauty .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-[98%] mx-auto lg:mt-16 md:mt-10 mt-8 lg:mb-24 md:mb-20 mb-12"
        >
          <img src={aboutImage1} alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:gap-10 gap-6 lg:grid-cols-2 grid-cols-1 xl:w-5/6 w-[90%]  mx-auto"
        >
          <div className="grid grid-cols-2 gap-6 text-secondary">
            <div>
              <p className="lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold">
                18 +
              </p>
              <p className="md:text-[12px] text-[10px] tracking-widest mb-2">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div>
              <p className="lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold">
                126 +
              </p>
              <p className="md:text-[12px] text-[10px] tracking-widest mb-2">
                HAPPY CLIENTS
              </p>
            </div>
            <div>
              <p className="lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold">
                224 +
              </p>
              <p className="md:text-[12px] text-[10px] tracking-widest mb-2">
                COMPLETED PROJECTS
              </p>
            </div>
            <div>
              <p className="lg:text-4xl md:text-[30px] text-[25px] md:mb-3 mb-1 font-bold">
                16 +
              </p>
              <p className="md:text-[12px] text-[10px] tracking-widest mb-2">
                DESIGN ARWARDS
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-4 gap-2 text-secondary">
            <p className="md:text-[15px] text-[13px] md:leading-loose leading-relaxed font-[300] md:font-[400]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              galax accusantium doloremque laudantium, totam rem aper ein iam
              sha eaque ipsa quae ab illo inventore veritatis et quasi
              architecto luniso beatae vitae dicta sunt explicabo.
            </p>
            <p className="md:text-[15px] text-[13px] md:leading-loose leading-relaxed font-[300] md:font-[400]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              vshaun oluptatem sequi nesciunt.
            </p>
          </div>
        </motion.div>

        <div className="text-center w-5/6 mt-24 mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:text-[12px] text-[10px] tracking-widest mb-2 text-secondary"
          >
            WHAT WE DO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:text-5xl md:text-[42px] sm:text-[35px] text-[28px] font-bold text-secondary"
          >
            Our specilization
          </motion.h1>
          <div className="mt-10 gap-12 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]"
            >
              <div className="flex justify-center my-[18px]">
                <img src={service1} alt="" />
              </div>
              <h1 className="text-xl font-[500] text-secondary">
                ARCHITECTURE
              </h1>
              <p className="text-[13px] font-[300] text-accent">
                Lorem ipsum dolor sit amet, consectetur adipist pricing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l md:border-0 border-b pb-8 md:pb-0 border-[#272727]"
            >
              <div className="flex justify-center my-[18px]">
                <img src={service2} alt="" />
              </div>
              <h1 className="text-xl font-[500] text-secondary">INTERIOR</h1>
              <p className="text-[13px] font-[300] text-accent">
                Lorem ipsum dolor sit amet, consectetur adipist pricing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="xl:py-40 py-12 px-8 flex flex-col gap-6 xl:border-l xl:border-r border-[#272727]"
            >
              <div className="flex justify-center my-[18px]">
                <img src={service3} alt="" />
              </div>
              <h1 className="text-xl font-[500] text-secondary">PLANNING</h1>
              <p className="text-[13px] font-[300] text-accent">
                Lorem ipsum dolor sit amet, consectetur adipist pricing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: `url(${bgPattern})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
          className="my-20"
        >
          <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto lg:w-5/6 w-full items-center">
            <div className="lg:col-span-1 text-center md:pt-[4rem] pt-[3rem]">
              <p className="lg:text-[12px] text-[9px] tracking-[4px] mb-2 text-secondary">
                AWESOME PARTNER
              </p>
              <p className="xl:text-[42px] lg:text-[35px] text-[30px] mt-2 text-secondary font-[600]">
                Our Clients
              </p>
            </div>
            <div className="md:my-20 my-10 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-12 justify-items-center items-center lg:col-span-3 py-6">
              <img src={client1} alt="" />
              <img src={client2} alt="" />
              <img src={client3} alt="" />
              <img src={client4} alt="" />
              <img src={client5} alt="" />
              <img src={client6} alt="" />
              <img src={client7} alt="" />
              <img src={client8} alt="" />
            </div>
          </div>
        </motion.div>

        <div className="w-[80%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 text-center"
          >
            <p className="lg:text-[12px] text-[9px] tracking-[4px] mb-2 text-secondary">
              AWESOME PEOPLE
            </p>
            <p className="xl:text-[42px] lg:text-[35px] text-[30px] mt-2 text-secondary font-[600]">
              Meet the team
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 mt-16 md:mb-36 mb-24">
            {/* Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(1)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 1 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic1}
                  alt="Pic"
                />

                {/* Bottom Gradient */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                {/* Social Icons */}
                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  SONJA PORTER
                </Link>

                <p className="text-accent text-[15px]">
                  <small>Co-manage Associated</small>
                </p>
              </div>
            </motion.div>

            {/* Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(2)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 2 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic3}
                  alt="Pic"
                />

                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  MARION LAWSON
                </Link>

                <p className="text-accent text-[15px]">
                  <small>Interior Desinger</small>
                </p>
              </div>
            </motion.div>

            {/* Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(3)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 3 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic4}
                  alt="Pic"
                />

                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  Brad Green
                </Link>

                <p className="text-accent text-[15px]">
                  <small>CEO - Main Architect</small>
                </p>
              </div>
            </motion.div>

            {/* Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(4)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 4 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic5}
                  alt="Pic"
                />

                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  KIM HARRINGTON
                </Link>

                <p className="text-accent text-[15px]">
                  <small>Architect - Photographer</small>
                </p>
              </div>
            </motion.div>

            {/* Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(5)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 5 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic1}
                  alt="Pic"
                />

                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 5
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 5
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  TYRONE CURTIS
                </Link>

                <p className="text-accent text-[15px]">
                  <small>Architect - Designer</small>
                </p>
              </div>
            </motion.div>

            {/* Member 6 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="card items-center"
            >
              <figure
                onMouseEnter={() => setMousein(6)}
                onMouseLeave={() => setMousein(false)}
                className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-2"
              >
                <img
                  className={`w-full h-full object-cover duration-500 ${
                    mousein === 6 ? "scale-110" : "scale-100"
                  }`}
                  src={teamMembersPic3}
                  alt="Pic"
                />

                <div
                  className={`absolute bottom-0 left-0 w-full h-[50%]
                bg-gradient-to-t from-black/80 to-transparent
                duration-500 ${
                  mousein === 6
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                ></div>

                <div
                  className={`absolute bottom-8 left-0 right-0 flex justify-center gap-5
                text-white text-xl duration-500 ${
                  mousein === 6
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                >
                  <Link className="hover:text-accent duration-300">
                    <BsFacebook />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiOutlineInstagram />
                  </Link>

                  <Link className="hover:text-accent duration-300">
                    <AiFillLinkedin />
                  </Link>
                </div>
              </figure>

              <div className="text-center mt-5">
                <Link className="text-secondary text-xl font-[500] uppercase">
                  JODI RIVERA
                </Link>

                <p className="text-accent text-[15px]">
                  <small>Interior Designer</small>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;

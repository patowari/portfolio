import HeroImg from "@/assets/images/hero.jpg";
import EvuLogo from "@/assets/images/evu.png";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Programmer, AI Engineer, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Md Zubayer Hossain Patowari, a passionate AI Engineer and Full-Stack Developer
                specializing in building intelligent, real-world solutions across healthcare, automation,
                and communication platforms. I have extensive professional experience working with
                multinational and global organizations such as{" "}
                <span className="font-bold">Evu Inc., VFXB, USAID, and Breakthrough Action</span>.
                I thrive on creating impactful, scalable systems using modern AI and web technologies.
              </p>
              <p className="text-white">
                 My expertise spans <span className="font-bold">natural language processing, computer vision, and generative AI</span>—paired with
                  full-stack technologies like React, Next.js, FastAPI, Flask, Docker, and cloud deployment on AWS.
                  I thrive in building scalable, high-performance systems and creating impactful digital solutions
                  for diverse industries.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. My work across multinational
                    teams continues to expand the possibilities of AI and software
                    development worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Zubayer Patowari | AI Engineer & CTO at a Multinational Company
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-22 w-44" // Tailwind: h-32 = 128px, w-64 = 256px
                        src={EvuLogo}
                        alt="Evu Logo"
                        height={88}
                        width={176}
                      />
                      <span className="text-white">Inc.</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

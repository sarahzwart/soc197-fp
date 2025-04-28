"use client";

//import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/Navigation";
import { Leaf, Globe, HandHeart, Search } from "lucide-react";
import earthAnimation from "../../../public/earth2.json";
import dynamic from "next/dynamic";

const fadeInVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      duration: 0.6,
    },
  },
};
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const scrollToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Home() {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#f4f4f4] via-[#dff7fc] to-[#dbebd5] min-h-screen relative"
      style={{ backgroundSize: "100% 100%" }}
    >
      <div className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
        <Navbar />
      </div>
      <Lottie
        animationData={earthAnimation}
        loop
        className="pt-16 absolute inset-0 w-screen h-[40vh] md:pt-0 md:h-[100vh] z-0 object-cover opacity-50 pointer-events-none"
      />
      <section className="relative flex items-center justify-center h-screen text-center px-6 pt-24 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Climate Change Mitigation & Adaptation
          </h1>
          <p className="text-sm text-gray-700 mb-6"></p>
          <a
            href="#about"
            className="px-6 py-3 bg-[#96c584] text-white rounded-full shadow hover:bg-[#789e69]"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </a>
        </div>
      </section>

      {/* Page Sections */}
      <main className="space-y-24 pb-24">
        {[
          {
            id: "about",
            title: "ABOUT",
            color: "text-[#949596]",
            text: "Over the last century, industrialization has significantly increased the concentration of greenhouse gases in our atmosphere. As greenhouse gas levels climb, the impacts of climate change are becoming increasingly visible, in the form of more intense hurricanes, longer wildfire seasons, severe flooding, and a dramatic loss of biodiversity. We need to look for ways to minimize these effects, not only to protect the environment, but also because the impacts of climate change disproportionately affect those who are most vulnerable. Low-income communities, Indigenous populations, and people in developing countries often lack the resources needed to recover from extreme weather events, adapt to shifting agricultural conditions, or relocate from high-risk areas. Climate change is not just an environmental issue it’s a social justice issue because those who contribute the least to climate change are the most affected. By investing in mitigation and adaptation strategies, we can build more resilient systems that protect both people and the planet, ensuring that no one is left behind.",
          },
          {
            id: "mitigation",
            icon: <Leaf className="text-[#afc3a8] w-8 h-8 mb-2" />,
            title: "MITIGATION",
            color: "text-[#afc3a8]",
            text: (
              <>
                Mitigation means{" "}
                <b>
                  “preventing or reducing the emission of greenhouse gases (GHG)
                  into the atmosphere to make the impacts of climate change less
                  severe”
                </b>{" "}
                (
                <i>What Is the Difference Between Adaptation and Mitigation?</i>
                , 2024) . It focuses on tackling the root causes of climate
                change by transitioning away from fossil fuels, improving energy
                efficiency, and redesigning systems that produce high levels of
                emissions. Mitigation efforts span all levels of society, from
                global policy agreements to individual lifestyle changes.
                <br />
                <br />
                <b>Direct Actions:</b>
                <ul className="list-disc pl-6">
                  <li>
                    <b>Eating more plant-based meals:</b> Livestock farming
                    contributes significantly to methane emissions. By reducing
                    meat and dairy consumption, even a few days a week,
                    individuals can significantly cut their personal carbon
                    footprint. (Cho, 2024)
                  </li>
                  <li>
                    <b>Flying less:</b> Air travel is one of the most
                    carbon-intensive activities. Avoiding non-essential flights
                    and choosing alternatives like trains or video calls when
                    possible can dramatically reduce emissions (Cho, 2024).
                  </li>
                  <li>
                    <b>Switching to renewable energy:</b> Opting for electricity
                    from renewable sources like wind or solar, either through
                    utility programs or rooftop panels, helps reduce dependence
                    on fossil fuels. (Cho, 2024){" "}
                  </li>
                  <li>
                    <b>Consuming Less & Buying Smart:</b> Everything we buy,
                    from clothing to electronics, has a carbon footprint.
                    Choosing to buy fewer, more durable, and sustainably
                    produced products helps lower overall emissions. Reusing,
                    repairing, and recycling can also extend the life of goods
                    and reduce waste. (Cho, 2024)
                  </li>
                </ul>
                <br />
                <b>Indirect Ways to Make a Difference:</b>
                <ul className="list-disc pl-6">
                  <li>
                    <b>Volunteering with Community Groups:</b> Engage with local
                    organizations focused on environmental sustainability and
                    climate action.
                  </li>
                  <li>
                    <b>Political Action:</b> Taking part in protests, voting for
                    climate-conscious leaders, or even running for office to
                    advocate for systemic change are all powerful ways to
                    influence mitigation efforts.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "adaptation",
            icon: <HandHeart className="text-[#7cb6dd] w-8 h-8 mb-2" />,
            title: "ADAPTATION",
            color: "text-[#7cb6dd]",
            text: (
              <>
                <b>Adaptation</b> means “anticipating the adverse effects of
                climate change and taking appropriate action to prevent or
                minimise the damage they can cause, or taking advantage of
                opportunities that may arise” (
                <i>What Is the Difference Between Adaptation and Mitigation?</i>
                , 2024). Adaptation is not just about protecting our
                environment, it’s also about protecting the people who are
                affected and adjusting to new realities. It plays a key role in
                addressing climate justice by helping communities with fewer
                resources respond to climate threats.
                <br />
                As climate impacts grow more severe, adaptation becomes
                essential for survival and resilience. While mitigation tackles
                the root causes of climate change, adaptation helps us live with
                its consequences, both now and in the future.
                <br />
                <br />
                <b>Adaptation Gap</b>
                <br />
                The adaptation gap is the difference between the level of
                adaptation needed to protect communities from climate change
                impacts and the actions actually being taken. As the climate
                crisis worsens, this gap continues to grow and largely affects
                low-income countries disproportionately.
                <br /> The{" "}
                <a
                  href="https://www.unep.org/resources/adaptation-gap-report-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-400 text-"
                >
                  UNEP 2024 Adaptation Gap Report
                </a>{" "}
                highlights that: <br />
                <ul className="list-disc pl-6">
                  <li>
                    Adaptation finance to developing countries rose to a record
                    $28 billion in 2022
                  </li>
                  <li>Estimated need is $215–$387 billion annually.</li>
                  <li>
                    Current pledges would only close about 5% of this gap.
                  </li>
                  <li>
                    Without urgent action, global temperatures are still on
                    track to rise by 2.6–3.1°C by 2100.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "international",
            icon: <Globe className="text-[#79b9c6] w-8 h-8 mb-2" />,
            title: "CLIMATE EFFORTS",
            color: "text-[#79b9c6]",
            text: (
              <>
                <br />
                The <b>United States Environmental Protection Agency</b> has a
                list of strategies for adaptation posted on there website here
                separated into the categories of Air, Water, Waste, & Public
                Health (<i>Strategies for Climate Change Adaptation | US EPA</i>
                , 2025):
                <br />
                <ul className="list-disc pl-6">
                  <li>
                    New York State is matching grants for climate adaptation.
                    New York State’s Climate Smart Communities program provides
                    $12 million in matching grants to support local projects
                    that address flooding, extreme heat, and other
                    climate-related threats. The program also offers planning
                    tools and a certification framework to help municipalities
                    organize and fund adaptation efforts (
                    <i>
                      New York State Finances Matching Grants to Facilitate
                      Climate Adaptation Projects | US EPA
                    </i>
                    , 2025).
                  </li>
                  <li>
                    Maryland is proactively addressing the vulnerability of its
                    coastal wetlands to climate change. Utilizing the Sea Level
                    Affecting Marshes Model (SLAMM), the state has identified
                    areas at risk from sea level rise and prioritized them for
                    conservation and restoration efforts. This analysis informs
                    land use planning and helps ensure the preservation of
                    critical wetland ecosystems (
                    <i>
                      Maryland Analyzes Coastal Wetlands Susceptibility to
                      Climate Change | US EPA
                    </i>
                    , 2025).
                  </li>
                </ul>
                <br />
                <b className="text-lg">Adaptation Gap Report 2024</b> <br />
                According to the report, the report calls for a “ shift from
                reactive, incremental, project-based financing to more
                anticipatory, strategic and transformational adaptation (
                <i>Adaptation Gap Report 2024</i>, n.d.).”
                <br />
                <br />
                <b className="text-lg">COP 29 Outcome</b> <br />
                At COP 29, world leaders agreed to a major increase in funding
                for climate adaptation, committing to triple adaptation finance
                to developing countries by 2030. This decision recognizes that
                vulnerable nations urgently need more resources to protect
                communities from extreme weather, sea level rise, and other
                climate impacts. <br />
                Key outcomes included:
                <ul className="list-disc pl-6">
                  {" "}
                  <li>
                    A pledge to triple adaptation finance compared to 2019
                    levels.
                  </li>{" "}
                  <li>
                    New support for early warning systems and climate-resilient
                    infrastructure.
                  </li>{" "}
                  <li>
                    A reaffirmation that adaptation is equally important as
                    mitigation in global climate action.
                  </li>{" "}
                </ul>{" "}
                This move is seen as critical for narrowing the adaptation gap
                and delivering on climate justice promises made under the Paris
                Agreement. (COP29 UN Climate Conference Agrees to Triple Finance
                to Developing Countries, Protecting Lives and Livelihoods, n.d.)
              </>
            ),
          },
          {
            id: "sources",
            icon: <Search className="text-[#afc3a8] w-8 h-8 mb-2" />,
            title: "SOURCES",
            color: "text-[#afc3a8]",
            text: (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Adaptation Gap Report 2024.</i>{" "}
                (n.d.). UNEP - UN Environment Programme.{" "}
                <a
                  href="https://www.unep.org/resources/adaptation-gap-report-2024"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://www.unep.org/resources/adaptation-gap-report-2024
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cho, R. (2024, June 27).{" "}
                <i>The 35 easiest Ways to reduce your carbon footprint</i>.
                State of the Planet.{" "}
                <a
                  href="https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>
                  COP29 UN climate Conference agrees to triple finance to
                  developing countries, protecting lives and livelihoods.{" "}
                </i>{" "}
                (n.d.). UNFCCC.{" "}
                <a
                  href="https://unfccc.int/news/cop29-un-climate-conference-agrees-to-triple-finance-to-developing-countries-protecting-lives-and"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://unfccc.int/news/cop29-un-climate-conference-agrees-to-triple-finance-to-developing-countries-protecting-lives-and
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>
                  New York State finances matching grants to facilitate climate
                  adaptation projects | US EPA.{" "}
                </i>{" "}
                (2025, February 12). US EPA.{" "}
                <a
                  href="https://www.epa.gov/arc-x/new-york-state-finances-matching-grants-facilitate-climate-adaptation-projects"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://www.epa.gov/arc-x/new-york-state-finances-matching-grants-facilitate-climate-adaptation-projects
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>
                  Maryland analyzes coastal wetlands susceptibility to climate
                  change | US EPA.
                </i>{" "}
                (2025, March 24). US EPA.{" "}
                <a
                  href="https://www.epa.gov/arc-x/maryland-analyzes-coastal-wetlands-susceptibility-climate-change"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://www.epa.gov/arc-x/maryland-analyzes-coastal-wetlands-susceptibility-climate-change
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>Strategies for Climate Change Adaptation | US EPA.</i> (2025,
                April 21). US EPA.{" "}
                <a
                  href="https://www.epa.gov/arc-x/strategies-climate-change-adaptation"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://www.epa.gov/arc-x/strategies-climate-change-adaptation
                </a>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>
                  What is the difference between adaptation and mitigation?
                </i>{" "}
                (2024, August 20). European Environment Agency’s Home Page.{" "}
                <a
                  href="https://www.eea.europa.eu/en/about/contact-us/faqs/what-is-the-difference-between-adaptation-and-mitigation"
                  className="text-blue-800 hover:text-blue-400 underline"
                >
                  https://www.eea.europa.eu/en/about/contact-us/faqs/what-is-the-difference-between-adaptation-and-mitigation
                </a>
              </>
            ),
          },
        ].map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="flex items-center w-full h-[100vh] justify-center px-4 md:px-8 pt-40"
            variants={fadeInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3 }}
          >
            <motion.div
              className="border border-gray-200 rounded-3xl bg-white p-8 shadow-xl w-full max-w-6xl transition-transform hover:scale-[1.01]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                {section.icon}
                <h2 className={`text-3xl font-bold mb-4 ${section.color}`}>
                  {section.title}
                </h2>
                <div className="text-[1rem] text-gray-700 leading-relaxed text-left">
                  {section.text}
                </div>
              </div>
            </motion.div>
          </motion.section>
        ))}
      </main>
    </motion.div>
  );
}

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Logocloud from "@/components/LogoCloud";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";


export default function Home() {
  return (
    <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full text-center justify-center  flex flex-row">
        <Image src="./anand.png" alt="My Photo" width={400} isZoomed />
        <div className="flex ">
          <div className="flex flex-col p-8">
            <h1 className={title({ color: "grad1" })}>
              Hey, I&apos;m Anandkumar NS
            </h1>
            <p className="w-[500px] pt-20">
              Hello, I&apos;m Anandkumar NS, a passionate Computer Science
              engineer based in Chennai. &nbsp;I have a deep fascination for
              exploring new technologies and tools that shape our ever-evolving
              digital landscape. I firmly believe in the adage that the only
              constant in the world is change, and I embrace it wholeheartedly.
              <br /> Having recognized the prominent role of computers in
              today&apos;s modern world, I find great joy in delving into the
              intricacies of this fascinating field. By continuously expanding
              my knowledge and skills, I strive to stay ahead of the curve and
              prepare myself for the future. &nbsp; Throughout my journey, I
              have enjoyed immersing myself in various aspects of computer
              science, including software development, system architecture, and
              emerging technologies. This diverse exposure has not only
              broadened my understanding but also fueled my curiosity to explore
              further. <br /> With a solid foundation in computer science and an
              insatiable thirst for learning, I am committed to leveraging
              technology to drive innovation and make a meaningful impact. I am
              excited about the endless possibilities that lie ahead and look
              forward to collaborating with like-minded individuals and
              organizations on exciting projects. Thank you for visiting my
              portfolio, and I invite you to join me on this exhilarating
              journey of exploration and growth.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

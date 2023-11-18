import React from 'react'
import { title } from "@/components/primitives";
import ProjectCard from '@/components/ProjectCard';
import Logocloud from '@/components/LogoCloud';

export default function PricingPage() {
	const projectInfo = [
		{
		  category: "Full Stack",
		  title_line: "BLE Attendance Project",
		  imagePath: "/project1.jpeg",
		  indexNumber: "01",
		  description: "Me and my team constructed a Flutter App as well as a Node JS Rest-API to serve as a communication mechanism between the Database and the App. During our first year in college, we constructed this to learn about the software development process. This has given us a better understanding of the technologies and enabled us to apply them in future projects...",
		  repoLink: "https://github.com/akashShanmugraj/psgscapes-production-server"
		},
		{
			category: "Front-End",
			title_line: "Portfolio Website",
			imagePath: "./project1.jpeg",
			indexNumber: "02",
			description: "I constructed this website using Next JS and Tailwind CSS. I have used Next JS for the routing and Tailwind CSS for the styling. I have also used Next UI for the components. I have used the Next UI components for the Navbar and the Footer. I have also used the Next UI Snippet component for the code snippets...",
			repoLink: "https://github.com/aknsubbu/"
		  },
		//   {
		// 	category: "Full Stack",
		// 	title_line: "BLE Attendance Project",
		// 	imagePath: "./project1.jpeg",
		// 	indexNumber: "01",
		// 	description: "Me and my team constructed a Flutter App as well as a Node JS Rest-API to serve as a communication mechanism between the Database and the App. During our first year in college, we constructed this to learn about the software development process. This has given us a better understanding of the technologies and enabled us to apply them in future projects...",
		// 	repoLink: "https://github.com/akashShanmugraj/psgscapes-production-server"
		//   },

	  ];
	return (
		<section className="py-12  w-full overflow-hidden">
      <div className="container mx-auto px-4 mb-20 w-full">
        <h1 className="font-heading text-6xl xs:text-8xl sm:text-10xl tracking-tighter">Projects</h1>
      </div>
      <div className="px-5 w-full">
        <div className="w-full  mx-auto">
          <div className="flex flex-row ">
            {projectInfo.map((projectItem, index) => (
              <ProjectCard key={index} cardInfo={projectItem} />
            ))}
          </div>
        </div>
      </div>
	  <Logocloud/>
    </section>
	);
}




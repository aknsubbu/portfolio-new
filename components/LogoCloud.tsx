import React from 'react'
import { Image } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";

const Logocloud = () => {
  return (
    <section className="py-24 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="mb-20 md:max-w-4xl text-center mx-auto">
      <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter"></span>
      <h2 className={title({color:"yellow"})}>Skills</h2>
    </div>
    <div className="md:max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-center -m-6">
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/c-original.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=ffffff" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/git-plain-wordmark.svg?size=128&color=ffffff" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=ffffff" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor" alt=""/>
        </div>
        <div className="w-auto p-6">
          <Image src="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Logocloud
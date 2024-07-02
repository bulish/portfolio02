import { NextPage } from "next";
 
import Image from "next/image";
import icon from "../public/images/icons/download.svg"

const Home: NextPage = () => {
  return (
    <main className="pt-24 w-full max-width h-full">
      <div className="flex gap-32 h-full justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center">
          <p className="heading-3">
            <span className="text-primary">Hi!</span> My name is
          </p>
          <h1 className="heading-1">Libuše <span className="text-primary">Babičková</span></h1>

          <p className="text my-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Nullam at arcu a est sollicitudin euismod. Nulla pulvinar eleifend sem. Aliquam ornare wisi eu metus. Etiam bibendum elit eget erat. Et harum quidem rerum facilis est et expedita distinctio. Morbi scelerisque luctus velit.
          </p>
          
          <button className="button flex label gap-2 items-center w-max">
            <Image src={icon.src}
              alt="Download"
              width={25}
              height={25} />
            
            Download CV
          </button>
        </div>

        <div className="w-full"></div>
      </div>
    </main>
  )
}

export default Home

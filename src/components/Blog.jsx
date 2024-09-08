import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Blog = ({blogData}) => {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased py-8 relative  flex flex-col gap-5">
                <h1 className="text-3xl font-bold ">{blogData.title}</h1>
                <img src={dummyContent.image} alt={blogData.image_description} width={800} height={500} className="rounded-lg"/>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">{blogData.content.introduction}</p>
                    <p className="text-lg">{blogData.content.explanation}</p>
                    <p className="text-lg">{blogData.content.fun_facts}</p>
                    <p className="text-lg">{blogData.content.conclusion}</p>
                </div>
            </div>
        </TracingBeam>
  );
}
 
const dummyContent = {
    "title": "Exploring the Depths of Space 🚀",
    "content": {
      "introduction": "Have you ever looked up at the night sky and wondered what lies beyond the stars? Space is a vast, mysterious place that scientists are still exploring. With billions of galaxies, stars, and planets, the universe is so big that it’s hard to imagine! But every year, we discover new things about space that amaze and inspire us.",
      "explanation": "Space exploration began in the 20th century when humans launched the first spacecraft into the sky. Since then, we’ve sent astronauts to the Moon, explored Mars with robots, and studied distant planets and stars with powerful telescopes. Space is a vacuum, meaning there’s no air or sound, and temperatures can be freezing cold or incredibly hot depending on where you are.\n\nIn space, gravity works differently than it does on Earth. Astronauts experience weightlessness, allowing them to float inside their spacecraft. Space is full of dangers, like meteoroids and cosmic radiation, which is why astronauts need to wear special suits to protect themselves. However, space also offers wonders, like beautiful nebulae, glowing planets, and black holes that bend time and space itself.\n\nThe International Space Station (ISS) is one of the most important places for studying space. It orbits Earth, and astronauts live there for months, performing experiments to learn more about how space affects the human body and testing new technologies.",
      "fun_facts": "Did you know that one day on Venus is longer than a year on Venus? That's because Venus spins so slowly that it takes more time to rotate on its axis than to orbit the Sun!\n\nAnother fun fact: there are more stars in the universe than grains of sand on all the beaches on Earth. Just think about how vast and infinite space is!\n\nAnd did you know that astronauts can grow up to 2 inches taller while in space? Without the pull of gravity, the spine stretches out, making them taller temporarily!",
      "conclusion": "Space is one of the most fascinating and awe-inspiring parts of our universe. From the first steps on the Moon to discovering new planets, our journey through space is just beginning. Who knows what incredible discoveries await us in the future? So, the next time you gaze up at the stars, remember that the universe is full of endless possibilities, waiting to be explored!"
    },
    "image_description": "An astronaut floating in space with the Earth and distant stars visible in the background.",
    "image": "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

export default Blog;
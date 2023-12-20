import Introduction from "@/components/introduction"
import Divider from "@/components/divider"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skill from "@/components/skill"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <Divider />
      <About />
      <Projects />
      <Skill />
    </main>
  )
}

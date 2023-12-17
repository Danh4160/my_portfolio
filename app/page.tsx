import Introduction from "@/components/introduction"
import Divider from "@/components/divider"
import About from "@/components/about"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <Divider />
      <About />
      <Projects />
    </main>
  )
}

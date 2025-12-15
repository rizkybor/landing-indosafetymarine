import { Brush, ExternalLink, Code, Palette, Camera, Layers, Sparkles, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 h-16 backdrop-blur-md bg-white/80 border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brush className="w-6 h-6 text-teal-600" />
            <span className="font-bold text-xl text-black">Indo Safety Marine</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-600 hover:text-black transition-colors">
              Work
            </a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
          </div>

          <Button className="bg-teal-600 hover:bg-teal-500 text-white rounded-full px-6">Hire Me</Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,10 90,90 10,90" fill="#14B8A6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#triangles)" />
          </svg>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-600 text-teal-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Award-Winning Designer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-tight">
            Crafting Visual Stories
            <br />
            That Matter
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            From branding to UI/UX, I bring ideas to life with creativity and precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-6 text-lg rounded-full">
              View Portfolio
            </Button>
            <Button
              variant="outline"
              className="border border-gray-300 text-black px-8 py-6 text-lg rounded-full hover:bg-gray-50 bg-transparent"
            >
              Get Quote
            </Button>
          </div>

          <p className="text-sm text-gray-500">Free consultation • Fast turnaround</p>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">A selection of my recent projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-200/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 via-teal-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a href="#" className="flex items-center gap-2 text-white font-semibold">
                      View Case Study <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-50 text-teal-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive creative services to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                  <skill.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://placehold.co/600x700?text=Professional+portrait+of+creative+designer+in+modern+studio+workspace+with+natural+lighting+and+minimalist+aesthetic"
                alt="Professional portrait of creative designer in modern studio workspace with natural lighting and minimalist aesthetic"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Design Is My Passion</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 10 years of experience in the creative industry, I've helped brands tell their stories through
                compelling visual design. My work has been recognized by Awwwards, CSS Design Awards, and featured on
                Behance and Dribbble.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I believe in creating designs that not only look beautiful but also solve real problems and deliver
                measurable results for my clients.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-6 text-lg rounded-full">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">Have a project in mind? Let's create something amazing together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Mail className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Email</h3>
              <p className="text-gray-600">hello@Indo Safety Marine.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Phone className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <form className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input placeholder="Your name" className="h-12 rounded-xl border-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="h-12 rounded-xl border-gray-200" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
              <Input placeholder="e.g., Branding, Web Design, UI/UX" className="h-12 rounded-xl border-gray-200" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea placeholder="Tell me about your project..." className="min-h-32 rounded-xl border-gray-200" />
            </div>

            <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-6 text-lg rounded-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brush className="w-6 h-6 text-teal-600" />
                <span className="font-bold text-xl">Indo Safety Marine</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating meaningful experiences through design excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Illustration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#work" className="hover:text-teal-500 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-teal-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 Indo Safety Marine • Let's create something amazing.
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project data
const projects = [
  {
    title: "Lunar Branding",
    description: "Complete brand identity for a tech startup, including logo design and brand guidelines.",
    image:
      "https://placehold.co/600x450?text=Modern+minimalist+brand+identity+design+featuring+geometric+logo+with+gradient+blue+and+purple+color+scheme+on+clean+white+background",
    imageAlt:
      "Modern minimalist brand identity design featuring geometric logo with gradient blue and purple color scheme on clean white background",
    tags: ["Branding", "Identity"],
  },
  {
    title: "FitFlow App",
    description: "Intuitive mobile app design for a fitness tracking application with seamless UX.",
    image:
      "https://placehold.co/600x450?text=Sleek+mobile+app+UI+mockup+showing+fitness+tracking+interface+with+vibrant+green+and+teal+accents+dashboard+charts+modern+typography",
    imageAlt:
      "Sleek mobile app UI mockup showing fitness tracking interface with vibrant green and teal accents dashboard charts modern typography",
    tags: ["UI/UX", "Mobile"],
  },
  {
    title: "Aurora E-commerce",
    description: "High-converting e-commerce website with stunning product showcases and smooth checkout.",
    image:
      "https://placehold.co/600x450?text=Elegant+e-commerce+website+design+with+luxury+product+photography+minimalist+layout+soft+pastel+colors+and+sophisticated+typography",
    imageAlt:
      "Elegant e-commerce website design with luxury product photography minimalist layout soft pastel colors and sophisticated typography",
    tags: ["Web Design", "E-commerce"],
  },
  {
    title: "Café Culture",
    description: "Warm and inviting branding for an artisan coffee shop including packaging design.",
    image:
      "https://placehold.co/600x450?text=Rustic+coffee+shop+branding+with+hand-drawn+illustrations+warm+brown+and+cream+tones+vintage+packaging+design+artisanal+aesthetic",
    imageAlt:
      "Rustic coffee shop branding with hand-drawn illustrations warm brown and cream tones vintage packaging design artisanal aesthetic",
    tags: ["Branding", "Packaging"],
  },
  {
    title: "TechHub Dashboard",
    description: "Complex data visualization dashboard designed for clarity and usability.",
    image:
      "https://placehold.co/600x450?text=Professional+analytics+dashboard+UI+with+colorful+data+charts+dark+mode+interface+modern+cards+and+clean+metrics+display",
    imageAlt:
      "Professional analytics dashboard UI with colorful data charts dark mode interface modern cards and clean metrics display",
    tags: ["UI/UX", "Dashboard"],
  },
  {
    title: "Nature Magazine",
    description: "Editorial design and illustrations for a premium environmental magazine.",
    image:
      "https://placehold.co/600x450?text=Beautiful+magazine+spread+layout+featuring+stunning+nature+photography+with+elegant+serif+typography+and+balanced+grid+system",
    imageAlt:
      "Beautiful magazine spread layout featuring stunning nature photography with elegant serif typography and balanced grid system",
    tags: ["Editorial", "Illustration"],
  },
]

// Skills data
const skills = [
  {
    icon: Brush,
    title: "Brand Identity",
    description: "Creating memorable logos, color palettes, and brand guidelines that capture your essence.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that users love, with a focus on usability and aesthetics.",
  },
  {
    icon: Code,
    title: "Web Design",
    description: "Responsive, modern websites built with the latest technologies and best practices.",
  },
  {
    icon: Camera,
    title: "Art Direction",
    description: "Guiding the visual style and creative vision of projects from concept to completion.",
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Print and digital graphics including posters, packaging, and marketing materials.",
  },
  {
    icon: Sparkles,
    title: "Illustration",
    description: "Custom illustrations and iconography that bring personality to your brand.",
  },
]

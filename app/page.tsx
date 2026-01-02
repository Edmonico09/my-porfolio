"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Calendar,
  Award,
  Moon,
  Sun,
  Send,
  Star,
  Coffee,
  CheckCircle,
  Filter,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  // Animation counters
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    coffees: 0,
  })

  useEffect(() => {
    // Animate counters
    const targetStats = { projects: 15, experience: 3, technologies: 12, coffees: 247 }
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        projects: Math.floor(targetStats.projects * progress),
        experience: Math.floor(targetStats.experience * progress),
        technologies: Math.floor(targetStats.technologies * progress),
        coffees: Math.floor(targetStats.coffees * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(targetStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Système de gestion scolaire",
      description: "Application web pour la gestion des étudiants, notes et emplois du temps",
      category: "web",
      technologies: ["React", "Node.js", "MySQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "completed",
    },
    {
      id: 2,
      title: "App E-commerce Mobile",
      description: "Application mobile pour la vente en ligne de produits locaux malgaches",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "completed",
    },
    {
      id: 3,
      title: "API de météo Madagascar",
      description: "API REST fournissant des données météorologiques pour toutes les régions de Madagascar",
      category: "backend",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "completed",
    },
    {
      id: 4,
      title: "Chatbot IA pour l'éducation",
      description: "Assistant virtuel pour aider les étudiants dans leurs études",
      category: "ai",
      technologies: ["Python", "TensorFlow", "NLP"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "in-progress",
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "Tableau de bord pour visualiser les données de performance",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Express"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "completed",
    },
    {
      id: 6,
      title: "App de transport urbain",
      description: "Application mobile pour optimiser les transports en commun à Antananarivo",
      category: "mobile",
      technologies: ["Flutter", "Google Maps", "Firebase"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      status: "planning",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "React Native", level: 70 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 90 },
  ]

  const testimonials = [
    {
      name: "Dr. Rakoto",
      role: "Professeur MISA",
      content: "Jean est un étudiant exceptionnel avec une grande capacité d'apprentissage et d'innovation.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marie Rasoamalala",
      role: "Chef de projet",
      content: "Très impressionnée par la qualité du travail et la rigueur de Jean lors de son stage.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitStatus("Message envoyé avec succès ! Je vous répondrai bientôt.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    setTimeout(() => setSubmitStatus(""), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-gradient-to-br from-slate-50 to-slate-100"
      }`}
    >
      {/* Header/Navigation */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          darkMode ? "bg-slate-800/80 border-slate-700" : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  À propos
                </a>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Compétences
                </a>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projets
                </a>
                <a href="#education" className="hover:text-blue-600 transition-colors">
                  Formation
                </a>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-blue-500/20">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Photo de profil" />
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jean Dupont
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-slate-600 dark:text-slate-300">
            Étudiant en Informatique - Mention MISA
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
            Passionné par le développement web et mobile, l'intelligence artificielle et les nouvelles technologies.
            Actuellement en formation à l'Université d'Antananarivo.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Mail className="w-4 h-4 mr-2" />
              Me contacter
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.projects}+</div>
              <div className="flex items-center justify-center mb-1">
                <Code className="w-5 h-5 mr-2" />
                <span>Projets</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stats.experience}</div>
              <div className="flex items-center justify-center mb-1">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Années d'étude</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{stats.technologies}+</div>
              <div className="flex items-center justify-center mb-1">
                <Globe className="w-5 h-5 mr-2" />
                <span>Technologies</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{stats.coffees}</div>
              <div className="flex items-center justify-center mb-1">
                <Coffee className="w-5 h-5 mr-2" />
                <span>Cafés bus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 ${darkMode ? "bg-slate-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">À propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
                Je suis étudiant en 3ème année de la Mention MISA (Mathématiques, Informatique et Sciences Appliquées) à
                l'Université d'Antananarivo. Passionné par l'informatique depuis mon plus jeune âge, je me spécialise
                dans le développement web et mobile.
              </p>
              <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
                Mon objectif est de contribuer au développement technologique de Madagascar en créant des solutions
                innovantes qui répondent aux besoins locaux tout en respectant les standards internationaux.
              </p>
              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5" />
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>
            <div className="space-y-4">
              <Card className={darkMode ? "bg-slate-700 border-slate-600" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Formation actuelle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Licence en Informatique</p>
                  <p className="text-slate-600 dark:text-slate-300">Mention MISA - Université d'Antananarivo</p>
                  <p className="text-sm text-slate-500">2022 - 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences techniques</h2>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="detailed">Détaillé</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className={`text-center ${darkMode ? "bg-slate-800 border-slate-700" : ""}`}>
                  <CardHeader>
                    <Code className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                    <CardTitle>Développement Web</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">PHP</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`text-center ${darkMode ? "bg-slate-800 border-slate-700" : ""}`}>
                  <CardHeader>
                    <Smartphone className="w-12 h-12 mx-auto text-green-600 mb-2" />
                    <CardTitle>Mobile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Flutter</Badge>
                      <Badge variant="secondary">Android</Badge>
                      <Badge variant="secondary">iOS</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`text-center ${darkMode ? "bg-slate-800 border-slate-700" : ""}`}>
                  <CardHeader>
                    <Database className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                    <CardTitle>Base de données</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`text-center ${darkMode ? "bg-slate-800 border-slate-700" : ""}`}>
                  <CardHeader>
                    <Globe className="w-12 h-12 mx-auto text-orange-600 mb-2" />
                    <CardTitle>Autres</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Git</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Linux</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="detailed">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 px-4 ${darkMode ? "bg-slate-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Mes projets</h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
              size="sm"
            >
              <Filter className="w-4 h-4 mr-2" />
              Tous
            </Button>
            <Button
              variant={selectedFilter === "web" ? "default" : "outline"}
              onClick={() => setSelectedFilter("web")}
              size="sm"
            >
              Web
            </Button>
            <Button
              variant={selectedFilter === "mobile" ? "default" : "outline"}
              onClick={() => setSelectedFilter("mobile")}
              size="sm"
            >
              Mobile
            </Button>
            <Button
              variant={selectedFilter === "backend" ? "default" : "outline"}
              onClick={() => setSelectedFilter("backend")}
              size="sm"
            >
              Backend
            </Button>
            <Button
              variant={selectedFilter === "ai" ? "default" : "outline"}
              onClick={() => setSelectedFilter("ai")}
              size="sm"
            >
              IA
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  darkMode ? "bg-slate-700 border-slate-600" : ""
                }`}
              >
                <CardHeader>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "default"
                            : project.status === "in-progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {project.status === "completed"
                          ? "Terminé"
                          : project.status === "in-progress"
                            ? "En cours"
                            : "Planifié"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`${darkMode ? "bg-slate-800 border-slate-700" : ""}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 px-4 ${darkMode ? "bg-slate-800" : "bg-white"}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formation & Certifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className={darkMode ? "bg-slate-700 border-slate-600" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Licence en Informatique - Mention MISA
                      </CardTitle>
                      <CardDescription>Université d'Antananarivo</CardDescription>
                    </div>
                    <Badge variant="outline">
                      <Calendar className="w-4 h-4 mr-1" />
                      2022 - 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Formation complète en mathématiques appliquées, informatique et sciences. Spécialisation en
                    développement logiciel, bases de données et intelligence artificielle.
                  </p>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">En cours - Moyenne générale: 15.2/20</span>
                  </div>
                </CardContent>
              </Card>

              <Card className={darkMode ? "bg-slate-700 border-slate-600" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Certifications en ligne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-semibold">JavaScript Algorithms</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">freeCodeCamp - 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-semibold">React Developer</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Meta - 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-semibold">Python for Data Science</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Coursera - 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="font-semibold">AWS Cloud Practitioner</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Amazon - 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 ${darkMode ? "bg-slate-900" : "bg-slate-800"} text-white`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contactez-moi</h2>
          <p className="text-xl mb-12 text-slate-300 text-center">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">jean.dupont@student.univ-antananarivo.mg</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-slate-300">+261 34 12 345 67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-slate-300">Antananarivo, Madagascar</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-slate-800 bg-transparent"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
                {submitStatus && <div className="text-green-400 text-center">{submitStatus}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? "bg-slate-950" : "bg-slate-900"} text-slate-400 text-center`}>
        <p>&copy; 2024 Jean Dupont. Tous droits réservés.</p>
        <p className="mt-2">Étudiant en Informatique - Mention MISA, Université d'Antananarivo</p>
      </footer>
    </div>
  )
}

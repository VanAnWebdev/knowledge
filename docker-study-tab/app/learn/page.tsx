"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";

type Topic = {
  id: string;
  name: string;
};

type Track = {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
};

const ROADMAPS: Track[] = [
  {
    id: "java-core",
    title: "Java Core / Backend",
    description: "Foundational skills for backend development.",
    topics: [
      { id: "internet", name: "Internet (HTTP, DNS, Hosting)" },
      { id: "frontend", name: "Basic Frontend (HTML, CSS, JS)" },
      { id: "os", name: "OS and General Knowledge" },
      { id: "vcs", name: "Version Control Systems (Git, GitHub)" },
      { id: "rdbms", name: "Relational Databases (PostgreSQL, MySQL)" },
      { id: "nosql", name: "NoSQL Databases (MongoDB, Redis)" },
      { id: "db-advanced", name: "More about Databases (ACID, ORMs, N+1)" },
      { id: "apis", name: "APIs (REST, JSON, gRPC, SOAP)" },
      { id: "caching", name: "Caching (CDN, Redis, Memcached)" },
      { id: "security", name: "Web Security (HTTPS, CORS, OWASP)" },
      { id: "testing", name: "Testing (Integration, Unit, Functional)" },
      { id: "cicd", name: "CI/CD (GitHub Actions, Jenkins)" },
      { id: "principles", name: "Design Principles (SOLID, DRY, KISS)" },
      { id: "architecture", name: "Architectural Patterns (Microservices)" },
      { id: "search", name: "Search Engines (Elasticsearch)" },
      { id: "brokers", name: "Message Brokers (RabbitMQ, Kafka)" },
      { id: "containers", name: "Containerization (Docker, Kubernetes)" },
      { id: "graphql", name: "GraphQL" },
      { id: "graphdb", name: "Graph Databases" },
      { id: "websockets", name: "WebSockets" },
      { id: "sse", name: "Server Sent Events" }
    ],
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    description: "Master the Spring framework ecosystem.",
    topics: [
      { id: "java-basics", name: "Java Basics" },
      { id: "build", name: "Build Tools (Maven, Gradle)" },
      { id: "spring-core", name: "Spring Framework (IoC, DI, AOP, MVC)" },
      { id: "spring-boot", name: "Spring Boot (Auto-config, Actuators)" },
      { id: "spring-sec", name: "Spring Security (JWT, OAuth2)" },
      { id: "testing", name: "Testing (JUnit, Mockito, Testcontainers)" },
      { id: "spring-data", name: "Spring Data (JPA, JDBC, MongoDB)" },
      { id: "hibernate", name: "Hibernate & JPA (Relationships)" },
      { id: "microservices", name: "Microservices & Spring Cloud" },
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineering",
    description: "From data science to building intelligent AI systems.",
    topics: [
      { id: "python", name: "Programming (Python)" },
      { id: "math", name: "Mathematics (Linear Algebra, Calculus)" },
      { id: "data-prep", name: "Data Preprocessing (Pandas, NumPy)" },
      { id: "ml", name: "Machine Learning (Scikit-Learn, SVM, XGBoost)" },
      { id: "dl", name: "Deep Learning (PyTorch, TensorFlow)" },
      { id: "cv", name: "Computer Vision (OpenCV, CNNs)" },
      { id: "nlp", name: "NLP (Tokenization, Embeddings, Transformers)" },
      { id: "llms", name: "Large Language Models (RAG, LangChain)" },
      { id: "mlops", name: "MLOps (Docker, MLflow, Deployment)" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate, deploy, and monitor scalable infrastructure.",
    topics: [
      { id: "language", name: "Learn a Programming Language (Python, Go)" },
      { id: "os-concepts", name: "OS Concepts (Process, Threads, Filesystems)" },
      { id: "terminal", name: "Learn to live in terminal (Bash, Network)" },
      { id: "net-sec", name: "Networking & Security (DNS, OSI, SSL/TLS)" },
      { id: "server", name: "Server Setup (Proxy, LB, Firewall, Nginx)" },
      { id: "iac", name: "Infrastructure as Code (Terraform, Ansible)" },
      { id: "containers", name: "Containers & Orchestration (Docker, K8s)" },
      { id: "cicd", name: "CI/CD Tools (GitHub Actions, GitLab CI)" },
      { id: "monitoring", name: "Monitoring & Observability (Prometheus, Grafana, ELK)" },
      { id: "cloud", name: "Cloud Providers (AWS, Azure, GCP)" },
      { id: "patterns", name: "Cloud Design Patterns" },
    ],
  }
];

export default function LearnPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState(ROADMAPS[0].id);

  useEffect(() => {
    const saved = localStorage.getItem("roadmap-progress");
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse roadmap progress", e);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("roadmap-progress", JSON.stringify(completed));
    }
  }, [completed, mounted]);

  const toggleTopic = (trackId: string, topicId: string) => {
    const key = `${trackId}-${topicId}`;
    setCompleted((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const activeTrack = ROADMAPS.find(t => t.id === activeTrackId) || ROADMAPS[0];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Developer Roadmaps</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Step-by-step guides and paths to learn different technologies.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-16 pb-6 border-b-2 border-dashed border-zinc-200 dark:border-zinc-800">
        {ROADMAPS.map(track => {
          const isActive = activeTrackId === track.id;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all border-2 ${
                isActive 
                  ? 'bg-zinc-900 text-zinc-50 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5] -translate-y-1'
                  : 'bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-zinc-100 dark:hover:text-zinc-100 hover:shadow-[4px_4px_0px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_0px_#f4f4f5] hover:-translate-y-1'
              }`}
            >
              {track.title}
            </button>
          );
        })}
      </div>

      {/* Flowchart */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 border-l-4 border-dashed border-zinc-300 dark:border-zinc-700 -translate-x-1/2 z-0" />
        
        <div className="flex flex-col gap-8 w-full py-4 relative z-10">
          {activeTrack.topics.map((topic, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = completed[`${activeTrack.id}-${topic.id}`];

            return (
              <div key={topic.id} className="relative flex items-center w-full min-h-[64px]">
                {/* Desktop: Alternate left/right. Mobile: all right. */}
                <div className={`flex w-full ${isLeft ? 'md:justify-end' : 'md:ml-auto md:justify-start'} ml-16 md:ml-0 md:w-1/2 relative`}>
                  
                  {/* Node */}
                  <div className={`relative z-10 w-full sm:w-72 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                    <button 
                      onClick={() => toggleTopic(activeTrack.id, topic.id)}
                      className={`group w-full p-4 flex items-center justify-between text-left font-bold rounded-xl border-2 transition-all 
                        hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#18181b] dark:hover:shadow-[6px_6px_0px_0px_#f4f4f5]
                        active:translate-x-1 active:translate-y-1 active:shadow-none dark:active:shadow-none
                        ${isCompleted 
                          ? 'bg-green-400 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-green-500 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]' 
                          : 'bg-yellow-300 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-yellow-400 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]'
                        }
                      `}
                    >
                      <span className="truncate pr-3 text-[15px]">{topic.name}</span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-900" />
                      ) : (
                        <Circle className="w-6 h-6 shrink-0 text-zinc-900/30 group-hover:text-zinc-900/60 transition-colors" />
                      )}
                    </button>
                  </div>

                  {/* Connection Line Desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10 ${isLeft ? 'right-0' : 'left-0'}`} />
                </div>

                {/* Connection Line Mobile */}
                <div className="md:hidden absolute left-8 top-1/2 -translate-y-1/2 w-8 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

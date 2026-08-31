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
    description: "Foundational skills for backend development using Java.",
    topics: [
      { id: "internet", name: "Internet Basics" },
      { id: "os", name: "OS/Linux & Terminal" },
      { id: "vcs", name: "Version Control (Git/GitHub)" },
      { id: "rdbms", name: "Relational DBs (PostgreSQL/MySQL)" },
      { id: "nosql", name: "NoSQL (Redis/MongoDB)" },
      { id: "apis", name: "APIs (REST, JSON)" },
      { id: "security", name: "Web Security (CORS, HTTPS)" },
      { id: "caching", name: "Caching" },
      { id: "brokers", name: "Message Brokers (RabbitMQ/Kafka)" },
    ],
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    description: "Master the Spring framework ecosystem for enterprise apps.",
    topics: [
      { id: "build", name: "Build Tools (Maven/Gradle)" },
      { id: "spring-core", name: "Spring Core (IoC, DI, Bean Lifecycle)" },
      { id: "spring-boot", name: "Spring Boot Basics (Auto-config, Actuator)" },
      { id: "spring-data", name: "Spring Data (JPA, Hibernate, JDBC)" },
      { id: "spring-mvc", name: "Spring MVC (Annotations)" },
      { id: "spring-sec", name: "Spring Security (JWT, OAuth2)" },
      { id: "testing", name: "Testing (JUnit, Mockito)" },
      { id: "microservices", name: "Microservices (Cloud Gateway, OpenFeign)" },
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineering",
    description: "From data science to building intelligent AI systems.",
    topics: [
      { id: "python", name: "Python Programming" },
      { id: "math", name: "Mathematics (Linear Algebra, Calculus, Statistics)" },
      { id: "data-science", name: "Data Science (NumPy, Pandas)" },
      { id: "ml", name: "Machine Learning (Scikit-Learn, SVM)" },
      { id: "dl", name: "Deep Learning (PyTorch, TensorFlow)" },
      { id: "nlp-cv", name: "NLP & Computer Vision" },
      { id: "genai", name: "GenAI & LLMs (Prompt Engineering, LangChain, RAG)" },
      { id: "mlops", name: "MLOps (Docker, MLflow)" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate, deploy, and monitor scalable infrastructure.",
    topics: [
      { id: "os-concepts", name: "OS Concepts (Linux basics, Bash)" },
      { id: "net-sec", name: "Networking & Security (DNS, SSL/TLS)" },
      { id: "containers", name: "Containers (Docker)" },
      { id: "orchestration", name: "Container Orchestration (Kubernetes)" },
      { id: "cicd", name: "CI/CD Pipelines (GitHub Actions, Jenkins)" },
      { id: "iac", name: "Infrastructure as Code (Terraform, Ansible)" },
      { id: "cloud", name: "Cloud Providers (AWS/GCP)" },
      { id: "monitoring", name: "Monitoring & Observability (Prometheus, Grafana)" },
    ],
  }
];

export default function LearnPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

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

  const getProgress = (track: Track) => {
    const total = track.topics.length;
    const finished = track.topics.filter(t => completed[`${track.id}-${t.id}`]).length;
    return { total, finished, percentage: Math.round((finished / total) * 100) || 0 };
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Developer Roadmaps</h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Step-by-step guides and paths to learn different technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ROADMAPS.map((track) => {
          const progress = getProgress(track);
          return (
            <div key={track.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{track.title}</h2>
                  <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400">
                    {progress.percentage}%
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{track.description}</p>
                
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>

              <div className="p-4 flex-1">
                <ul className="space-y-1">
                  {track.topics.map((topic) => {
                    const isCompleted = completed[`${track.id}-${topic.id}`];
                    return (
                      <li key={topic.id}>
                        <button
                          onClick={() => toggleTopic(track.id, topic.id)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-left group"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-400 dark:group-hover:text-zinc-500 shrink-0" />
                          )}
                          <span className={`text-sm transition-all ${isCompleted ? 'text-zinc-400 dark:text-zinc-500 line-through' : 'text-zinc-700 dark:text-zinc-300 font-medium'}`}>
                            {topic.name}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

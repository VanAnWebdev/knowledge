const fs = require('fs');
const file = 'f:/self/knowledge/docker-study-tab/app/learn/data.ts';
let content = fs.readFileSync(file, 'utf8');

const newData = `
  {
    id: "spring-boot",
    title: "Spring Boot",
    description: "Master the Spring framework ecosystem.",
    topics: [
      {
        id: "spring-framework",
        name: "Spring Framework",
        subTopics: [
          { id: "sf-1", name: "Terminology" },
          { id: "sf-2", name: "Architecture" },
          { id: "sf-3", name: "Why use Spring?" },
          { id: "sf-4", name: "Configuration" },
          { id: "sf-5", name: "Dependency Injection" },
          { id: "sf-6", name: "Spring IOC" },
          { id: "sf-7", name: "Spring AOP" },
          { id: "sf-8", name: "Spring MVC" },
          { id: "sf-9", name: "Annotations" },
          { id: "sf-10", name: "Spring Bean Scope" }
        ]
      },
      {
        id: "sb-intro",
        name: "Introduction",
        subTopics: []
      },
      {
        id: "spring-sec",
        name: "Spring Security",
        subTopics: [
          { id: "ssec-1", name: "Authentication" },
          { id: "ssec-2", name: "Authorization" },
          { id: "ssec-3", name: "OAuth 2" },
          { id: "ssec-4", name: "JWT Authentication" }
        ]
      },
      {
        id: "sb-starters",
        name: "Spring Boot Starters",
        subTopics: []
      },
      {
        id: "sb-autoconfig",
        name: "Auto-configuration",
        subTopics: []
      },
      {
        id: "sb-actuators",
        name: "Actuators",
        subTopics: []
      },
      {
        id: "sb-embedded",
        name: "Embedded Server",
        subTopics: []
      },
      {
        id: "spring-data",
        name: "Spring Data",
        subTopics: [
          { id: "sd-1", name: "Spring Data JPA" },
          { id: "sd-2", name: "Spring Data MongoDB" },
          { id: "sd-3", name: "Spring Data JDBC" }
        ]
      },
      {
        id: "hibernate",
        name: "Hibernate",
        subTopics: [
          { id: "hib-1", name: "Transactions" },
          { id: "hib-2", name: "Relationships" },
          { id: "hib-3", name: "Entity Lifecycle" }
        ]
      },
      {
        id: "spring-mvc",
        name: "Spring MVC",
        subTopics: [
          { id: "smvc-1", name: "Servlets" },
          { id: "smvc-2", name: "JSP Files" },
          { id: "smvc-3", name: "Architecture" },
          { id: "smvc-4", name: "Components" }
        ]
      },
      {
        id: "testing",
        name: "Testing",
        subTopics: [
          { id: "test-1", name: "JPA Test" },
          { id: "test-2", name: "Mock MVC" },
          { id: "test-3", name: "SpringBootTest Annotation" },
          { id: "test-4", name: "Testcontainers Annotation" }
        ]
      },
      {
        id: "microservices",
        name: "Microservices",
        subTopics: [
          { id: "ms-1", name: "Spring Cloud Gateway" },
          { id: "ms-2", name: "Cloud Config" },
          { id: "ms-3", name: "Spring Cloud Circuit Breaker" }
        ]
      },
      {
        id: "spring-cloud",
        name: "Spring Cloud",
        subTopics: [
          { id: "sc-1", name: "Spring Cloud Open Feign" },
          { id: "sc-2", name: "Micrometer" },
          { id: "sc-3", name: "Eureka" }
        ]
      }
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineering",
    description: "From data science to building intelligent AI systems.",
    topics: [
      {
        id: "programming",
        name: "Programming",
        subTopics: [
          { id: "prg-1", name: "Python" },
          { id: "prg-2", name: "R" },
          { id: "prg-3", name: "Java" },
          { id: "prg-4", name: "C++" },
          { id: "prg-5", name: "JavaScript" }
        ]
      },
      {
        id: "math",
        name: "Mathematics",
        subTopics: [
          { id: "math-1", name: "Linear Algebra" },
          { id: "math-2", name: "Calculus" },
          { id: "math-3", name: "Probability & Statistics" }
        ]
      },
      {
        id: "data-prep",
        name: "Data Preprocessing",
        subTopics: [
          { id: "dp-1", name: "Pandas" },
          { id: "dp-2", name: "NumPy" },
          { id: "dp-3", name: "Scikit-Learn" },
          { id: "dp-4", name: "Feature Engineering" },
          { id: "dp-5", name: "Data Visualization" }
        ]
      },
      {
        id: "ml",
        name: "Machine Learning",
        subTopics: [
          { id: "ml-1", name: "Supervised Learning" },
          { id: "ml-2", name: "Unsupervised Learning" },
          { id: "ml-3", name: "Ensemble Methods" },
          { id: "ml-4", name: "Reinforcement Learning" }
        ]
      },
      {
        id: "dl",
        name: "Deep Learning",
        subTopics: [
          { id: "dl-1", name: "Neural Networks" },
          { id: "dl-2", name: "PyTorch" },
          { id: "dl-3", name: "TensorFlow" },
          { id: "dl-4", name: "Keras" }
        ]
      },
      {
        id: "cv",
        name: "Computer Vision",
        subTopics: [
          { id: "cv-1", name: "OpenCV" },
          { id: "cv-2", name: "CNNs" },
          { id: "cv-3", name: "Object Detection" },
          { id: "cv-4", name: "Image Segmentation" }
        ]
      },
      {
        id: "nlp",
        name: "Natural Language Processing (NLP)",
        subTopics: [
          { id: "nlp-1", name: "Tokenization" },
          { id: "nlp-2", name: "Word Embeddings" },
          { id: "nlp-3", name: "Transformers" },
          { id: "nlp-4", name: "Hugging Face" }
        ]
      },
      {
        id: "llms",
        name: "Large Language Models & GenAI",
        subTopics: [
          { id: "llm-1", name: "Prompt Engineering" },
          { id: "llm-2", name: "RAG" },
          { id: "llm-3", name: "Fine-tuning" },
          { id: "llm-4", name: "LangChain" },
          { id: "llm-5", name: "LlamaIndex" }
        ]
      },
      {
        id: "mlops",
        name: "MLOps",
        subTopics: [
          { id: "mlops-1", name: "Model Deployment" },
          { id: "mlops-2", name: "Docker" },
          { id: "mlops-3", name: "Kubernetes" },
          { id: "mlops-4", name: "MLflow" },
          { id: "mlops-5", name: "CI/CD for ML" }
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate, deploy, and monitor scalable infrastructure.",
    topics: [
      {
        id: "language",
        name: "Learn a Programming Language",
        subTopics: [
          { id: "lang-1", name: "Python" },
          { id: "lang-2", name: "Go" },
          { id: "lang-3", name: "Ruby" },
          { id: "lang-4", name: "Rust" },
          { id: "lang-5", name: "C" },
          { id: "lang-6", name: "C++" },
          { id: "lang-7", name: "JavaScript" }
        ]
      },
      {
        id: "os-concepts",
        name: "OS Concepts",
        subTopics: [
          { id: "osc-1", name: "Process Management" },
          { id: "osc-2", name: "Threads" },
          { id: "osc-3", name: "Sockets" },
          { id: "osc-4", name: "I/O Management" },
          { id: "osc-5", name: "Virtualization" },
          { id: "osc-6", name: "File Systems" }
        ]
      },
      {
        id: "terminal",
        name: "Learn to live in terminal",
        subTopics: [
          { id: "term-1", name: "Bash Scripting" },
          { id: "term-2", name: "Text Manipulation" },
          { id: "term-3", name: "Process Monitoring" },
          { id: "term-4", name: "Network" }
        ]
      },
      {
        id: "net-sec",
        name: "Networking and Security",
        subTopics: [
          { id: "ns-1", name: "DNS" },
          { id: "ns-2", name: "OSI Model" },
          { id: "ns-3", name: "HTTP" },
          { id: "ns-4", name: "HTTPS" },
          { id: "ns-5", name: "FTP" },
          { id: "ns-6", name: "SSL/TLS" },
          { id: "ns-7", name: "SSH" }
        ]
      },
      {
        id: "server",
        name: "What is and how to setup a",
        subTopics: [
          { id: "srv-1", name: "Reverse Proxy" },
          { id: "srv-2", name: "Caching Server" },
          { id: "srv-3", name: "Load Balancer" },
          { id: "srv-4", name: "Firewall" },
          { id: "srv-5", name: "Web Server" }
        ]
      },
      {
        id: "iac",
        name: "Infrastructure as Code",
        subTopics: [
          { id: "iac-1", name: "Containers" },
          { id: "iac-2", name: "Configuration Management" },
          { id: "iac-3", name: "Container Orchestration" },
          { id: "iac-4", name: "Infrastructure Provisioning" }
        ]
      },
      {
        id: "cicd",
        name: "CI/CD Tools",
        subTopics: [
          { id: "cd-1", name: "GitHub Actions" },
          { id: "cd-2", name: "GitLab CI" },
          { id: "cd-3", name: "Jenkins" }
        ]
      },
      {
        id: "monitoring",
        name: "Monitoring and Observability",
        subTopics: [
          { id: "mon-1", name: "Prometheus" },
          { id: "mon-2", name: "Grafana" },
          { id: "mon-3", name: "Datadog" },
          { id: "mon-4", name: "ELK Stack" }
        ]
      },
      {
        id: "cloud",
        name: "Cloud Providers",
        subTopics: [
          { id: "cp-1", name: "AWS" },
          { id: "cp-2", name: "Google Cloud" },
          { id: "cp-3", name: "Azure" }
        ]
      },
      {
        id: "patterns",
        name: "Cloud Design Patterns",
        subTopics: [
          { id: "pat-1", name: "Availability" },
          { id: "pat-2", name: "Data Management" },
          { id: "pat-3", name: "Design and Implementation" }
        ]
      }
    ]
  }
];`;

// Find the start of the spring-boot section
const match = content.match(/\{\s*id:\s*"spring-boot"/);
if (match) {
  content = content.substring(0, match.index) + newData.trim() + '\\n';
  fs.writeFileSync(file, content);
  console.log('Updated data.ts successfully');
} else {
  console.log('Could not find spring-boot section');
}

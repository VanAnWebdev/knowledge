export type Topic = {
  id: string;
  name: string;
  subTopics?: { id: string; name: string }[];
};

export type Track = {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
};

export const ROADMAPS: Track[] = [
  {
    id: "java-core",
    title: "Java Core / Backend",
    description: "Detailed backend developer roadmap from the image.",
    topics: [
      {
        id: "internet",
        name: "Internet",
        subTopics: [
          { id: "internet-1", name: "How does the internet work?" },
          { id: "internet-2", name: "What is HTTP?" },
          { id: "internet-3", name: "Browsers and how they work?" },
          { id: "internet-4", name: "DNS and how it works?" },
          { id: "internet-5", name: "What is Domain Name?" },
          { id: "internet-6", name: "What is hosting?" }
        ]
      },
      {
        id: "frontend",
        name: "Basic Frontend Knowledge",
        subTopics: [
          { id: "frontend-1", name: "HTML" },
          { id: "frontend-2", name: "CSS" },
          { id: "frontend-3", name: "JavaScript" }
        ]
      },
      {
        id: "os",
        name: "OS and General Knowledge",
        subTopics: [
          { id: "os-1", name: "Terminal Usage" },
          { id: "os-2", name: "How OSs work in General" },
          { id: "os-3", name: "Process Management" },
          { id: "os-4", name: "Threads and Concurrency" },
          { id: "os-5", name: "Basic Terminal Commands" },
          { id: "os-6", name: "Memory Management" },
          { id: "os-7", name: "Interprocess Communication" },
          { id: "os-8", name: "I/O Management" },
          { id: "os-9", name: "POSIX Basics" },
          { id: "os-10", name: "Basic Networking Concepts" }
        ]
      },
      {
        id: "vcs",
        name: "Version Control Systems",
        subTopics: [
          { id: "vcs-1", name: "Git" },
          { id: "vcs-2", name: "Repo hosting services (GitHub, GitLab, Bitbucket)" }
        ]
      },
      {
        id: "rdbms",
        name: "Relational Databases",
        subTopics: [
          { id: "rdbms-1", name: "PostgreSQL" },
          { id: "rdbms-2", name: "MySQL" },
          { id: "rdbms-3", name: "MariaDB" },
          { id: "rdbms-4", name: "MS SQL" },
          { id: "rdbms-5", name: "Oracle" }
        ]
      },
      {
        id: "nosql",
        name: "NoSQL Databases",
        subTopics: [
          { id: "nosql-1", name: "MongoDB" },
          { id: "nosql-2", name: "Redis" },
          { id: "nosql-3", name: "Cassandra" },
          { id: "nosql-4", name: "LiteDB" },
          { id: "nosql-5", name: "CouchDB" }
        ]
      },
      {
        id: "db-advanced",
        name: "More about Databases",
        subTopics: [
          { id: "db-adv-1", name: "ORMs" },
          { id: "db-adv-2", name: "ACID" },
          { id: "db-adv-3", name: "Transactions" },
          { id: "db-adv-4", name: "N+1 Problem" },
          { id: "db-adv-5", name: "Data Normalization" },
          { id: "db-adv-6", name: "Indexes and how they work" },
          { id: "db-adv-7", name: "Data Replication" },
          { id: "db-adv-8", name: "Sharding" },
          { id: "db-adv-9", name: "CAP Theorem" }
        ]
      },
      {
        id: "apis",
        name: "APIs",
        subTopics: [
          { id: "apis-1", "name": "REST" },
          { id: "apis-2", "name": "JSON APIs" },
          { id: "apis-3", "name": "SOAP" },
          { id: "apis-4", "name": "gRPC" },
          { id: "apis-5", "name": "GraphQL" }
        ]
      },
      {
        id: "caching",
        name: "Caching",
        subTopics: [
          { id: "caching-1", "name": "CDN" },
          { id: "caching-2", "name": "Server side" },
          { id: "caching-3", "name": "Client side" },
          { id: "caching-4", "name": "Redis" },
          { id: "caching-5", "name": "Memcached" }
        ]
      },
      {
        id: "authentication",
        name: "Authentication",
        subTopics: [
          { id: "auth-1", name: "JWT" },
          { id: "auth-2", name: "OAuth" },
          { id: "auth-3", name: "Basic Authentication" },
          { id: "auth-4", name: "Token Authentication" },
          { id: "auth-5", name: "Cookie Based Auth" },
          { id: "auth-6", name: "OpenID" },
          { id: "auth-7", name: "SAML" }
        ]
      },
      {
        id: "web-security",
        name: "Web Security",
        subTopics: [
          { id: "sec-1", name: "MD5" },
          { id: "sec-2", name: "SHA" },
          { id: "sec-3", name: "scrypt" },
          { id: "sec-4", name: "bcrypt" },
          { id: "sec-5", name: "HTTPS" },
          { id: "sec-6", name: "OWASP Risks" },
          { id: "sec-7", name: "CORS" },
          { id: "sec-8", name: "SSL/TLS" },
          { id: "sec-9", name: "CSP" },
          { id: "sec-10", name: "Server Security" },
          { id: "sec-11", name: "API Security Best Practices" }
        ]
      },
      {
        id: "testing",
        name: "Testing",
        subTopics: [
          { id: "test-1", "name": "Integration Testing" },
          { id: "test-2", "name": "Unit Testing" },
          { id: "test-3", "name": "Functional Testing" }
        ]
      },
      {
        id: "cicd",
        name: "CI/CD",
        subTopics: [
          { id: "cicd-1", "name": "GitLab CI" },
          { id: "cicd-2", "name": "GitHub Actions" },
          { id: "cicd-3", "name": "Jenkins" },
          { id: "cicd-4", "name": "Circle CI" }
        ]
      },
      {
        id: "principles",
        name: "Design and Development Principles",
        subTopics: [
          { id: "prin-1", "name": "SOLID" },
          { id: "prin-2", "name": "KISS" },
          { id: "prin-3", "name": "YAGNI" },
          { id: "prin-4", "name": "DRY" },
          { id: "prin-5", "name": "Design Patterns" }
        ]
      },
      {
        id: "architecture",
        name: "Architectural Patterns",
        subTopics: [
          { id: "arch-1", "name": "Monolithic Apps" },
          { id: "arch-2", "name": "Microservices" },
          { id: "arch-3", "name": "SOA" },
          { id: "arch-4", "name": "CQRS and Event Sourcing" },
          { id: "arch-5", "name": "Serverless" }
        ]
      },
      {
        id: "search",
        name: "Search Engines",
        subTopics: [
          { id: "search-1", "name": "Elasticsearch" },
          { id: "search-2", "name": "Solr" }
        ]
      },
      {
        id: "brokers",
        name: "Message Brokers",
        subTopics: [
          { id: "broker-1", "name": "RabbitMQ" },
          { id: "broker-2", "name": "Kafka" }
        ]
      },
      {
        id: "containers",
        name: "Containerization vs Virtualization",
        subTopics: [
          { id: "cont-1", "name": "Docker" },
          { id: "cont-2", "name": "Kubernetes" }
        ]
      },
      {
        id: "graphql",
        name: "GraphQL",
        subTopics: []
      },
      {
        id: "graphdb",
        name: "Graph Databases",
        subTopics: [
          { id: "gdb-1", "name": "Neo4j" }
        ]
      },
      {
        id: "websockets",
        name: "WebSockets",
        subTopics: []
      },
      {
        id: "sse",
        name: "Server Sent Events",
        subTopics: []
      },
      {
        id: "keep-learning",
        name: "Keep Learning",
        subTopics: []
      }
    ]
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    description: "Master the Spring framework ecosystem.",
    topics: [
      { id: "java-basics", name: "Introduction", subTopics: [] },
      { id: "spring-sec", name: "Spring Security", subTopics: [
        { id: "ss-1", name: "Authentication" },
        { id: "ss-2", name: "Authorization" },
        { id: "ss-3", name: "OAuth2" },
        { id: "ss-4", name: "JWT Authentication" }
      ]},
      { id: "spring-boot", name: "Spring Boot", subTopics: [
        { id: "sb-1", name: "Spring Boot Starters" },
        { id: "sb-2", name: "Auto-configuration" },
        { id: "sb-3", name: "Actuators" },
        { id: "sb-4", name: "Embedded Server" }
      ]},
      { id: "microservices", name: "Microservices", subTopics: [
        { id: "ms-1", name: "Spring Cloud Gateway" },
        { id: "ms-2", name: "Cloud Config" },
        { id: "ms-3", name: "Spring Cloud Circuit Breaker" }
      ]},
      { id: "spring-mvc", name: "Spring MVC", subTopics: [
        { id: "mvc-1", name: "Servlets" },
        { id: "mvc-2", name: "JSP Files" },
        { id: "mvc-3", name: "Architecture" },
        { id: "mvc-4", name: "Components" }
      ]},
      { id: "testing", name: "Testing", subTopics: [
        { id: "test-1", name: "JPA Test" },
        { id: "test-2", name: "Mock MVC" },
        { id: "test-3", name: "SpringBootTest Annotation" },
        { id: "test-4", name: "Testcontainers Annotation" }
      ]},
      { id: "spring-data", name: "Spring Data", subTopics: [
        { id: "sd-1", name: "Spring Data JPA" },
        { id: "sd-2", name: "Spring Data MongoDB" },
        { id: "sd-3", name: "Spring Data JDBC" }
      ]},
      { id: "hibernate", name: "Hibernate", subTopics: [
        { id: "hib-1", name: "Transactions" },
        { id: "hib-2", name: "Relationships" },
        { id: "hib-3", name: "Entity Lifecycle" }
      ]},
      { id: "spring-cloud", name: "Spring Cloud", subTopics: [
        { id: "sc-1", name: "Spring Cloud Open Feign" },
        { id: "sc-2", name: "Micrometer" },
        { id: "sc-3", name: "Zipkin" }
      ]}
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineering",
    description: "From data science to building intelligent AI systems.",
    topics: [
      { id: "python", name: "Programming", subTopics: [
        { id: "py-1", name: "Python" }
      ]},
      { id: "math", name: "Mathematics", subTopics: [
        { id: "m-1", name: "Linear Algebra" },
        { id: "m-2", name: "Calculus" },
        { id: "m-3", name: "Probability & Statistics" }
      ]},
      { id: "data-prep", name: "Data Preprocessing", subTopics: [
        { id: "dp-1", name: "Pandas" },
        { id: "dp-2", name: "NumPy" },
        { id: "dp-3", name: "Scikit-Learn" },
        { id: "dp-4", name: "Feature Engineering" },
        { id: "dp-5", name: "Data Visualization" }
      ]},
      { id: "ml", name: "Machine Learning", subTopics: [
        { id: "ml-1", name: "Supervised Learning" },
        { id: "ml-2", name: "Unsupervised Learning" },
        { id: "ml-3", name: "Ensemble Methods" }
      ]},
      { id: "dl", name: "Deep Learning", subTopics: [
        { id: "dl-1", name: "Neural Networks" },
        { id: "dl-2", name: "PyTorch" },
        { id: "dl-3", name: "TensorFlow" },
        { id: "dl-4", name: "Keras" }
      ]},
      { id: "cv", name: "Computer Vision", subTopics: [
        { id: "cv-1", name: "OpenCV" },
        { id: "cv-2", name: "CNNs" },
        { id: "cv-3", name: "Object Detection" },
        { id: "cv-4", name: "Image Segmentation" }
      ]},
      { id: "nlp", name: "NLP", subTopics: [
        { id: "nlp-1", name: "Tokenization" },
        { id: "nlp-2", name: "Word Embeddings" },
        { id: "nlp-3", name: "Transformers" },
        { id: "nlp-4", name: "Hugging Face" }
      ]},
      { id: "llms", name: "LLMs & GenAI", subTopics: [
        { id: "llm-1", name: "Prompt Engineering" },
        { id: "llm-2", name: "RAG" },
        { id: "llm-3", name: "Fine-tuning" },
        { id: "llm-4", name: "LangChain" },
        { id: "llm-5", name: "LlamaIndex" }
      ]},
      { id: "mlops", name: "MLOps", subTopics: [
        { id: "mo-1", name: "Model Deployment" },
        { id: "mo-2", name: "Docker" },
        { id: "mo-3", name: "Kubernetes" },
        { id: "mo-4", name: "MLflow" },
        { id: "mo-5", name: "CI/CD for ML" }
      ]}
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate, deploy, and monitor scalable infrastructure.",
    topics: [
      { id: "language", name: "Programming Language", subTopics: [
        { id: "pl-1", name: "Go" },
        { id: "pl-2", name: "Python" },
        { id: "pl-3", name: "Rust" },
        { id: "pl-4", name: "Ruby" },
        { id: "pl-5", name: "C/C++" }
      ]},
      { id: "os-concepts", name: "OS Concepts", subTopics: [
        { id: "oc-1", name: "Process Management" },
        { id: "oc-2", name: "Threads" },
        { id: "oc-3", name: "Sockets" },
        { id: "oc-4", name: "I/O Management" },
        { id: "oc-5", name: "Virtualization" },
        { id: "oc-6", name: "File Systems" }
      ]},
      { id: "terminal", name: "Learn to live in terminal", subTopics: [
        { id: "term-1", name: "Bash Scripting" },
        { id: "term-2", name: "Text Manipulation" },
        { id: "term-3", name: "Process Monitoring" },
        { id: "term-4", name: "Network Tools" }
      ]},
      { id: "net-sec", name: "Networking & Security", subTopics: [
        { id: "ns-1", name: "DNS" },
        { id: "ns-2", name: "OSI Model" },
        { id: "ns-3", name: "HTTP/HTTPS" },
        { id: "ns-4", name: "FTP" },
        { id: "ns-5", name: "SSL/TLS" },
        { id: "ns-6", name: "SSH" }
      ]},
      { id: "server", name: "Server Setup", subTopics: [
        { id: "srv-1", name: "Reverse Proxy" },
        { id: "srv-2", name: "Caching Server" },
        { id: "srv-3", name: "Load Balancer" },
        { id: "srv-4", name: "Firewall" },
        { id: "srv-5", name: "Web Server" }
      ]},
      { id: "iac", name: "Infrastructure as Code", subTopics: [
        { id: "iac-1", name: "Containers" },
        { id: "iac-2", name: "Configuration Management" },
        { id: "iac-3", name: "Container Orchestration" },
        { id: "iac-4", name: "Infrastructure Provisioning" }
      ]},
      { id: "cicd", name: "CI/CD Tools", subTopics: [
        { id: "ci-1", name: "GitHub Actions" },
        { id: "ci-2", name: "GitLab CI" },
        { id: "ci-3", name: "Jenkins" }
      ]},
      { id: "monitoring", name: "Monitoring & Observability", subTopics: [
        { id: "mon-1", name: "Prometheus" },
        { id: "mon-2", name: "Grafana" },
        { id: "mon-3", name: "Datadog" },
        { id: "mon-4", name: "ELK Stack" }
      ]},
      { id: "cloud", name: "Cloud Providers", subTopics: [
        { id: "cl-1", name: "AWS" },
        { id: "cl-2", name: "Google Cloud" },
        { id: "cl-3", name: "Azure" }
      ]},
      { id: "patterns", name: "Cloud Design Patterns", subTopics: [
        { id: "pat-1", name: "Availability" },
        { id: "pat-2", name: "Data Management" },
        { id: "pat-3", name: "Design and Implementation" }
      ]}
    ]
  }
];

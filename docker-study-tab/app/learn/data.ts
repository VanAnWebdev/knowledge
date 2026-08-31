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
        id: "security",
        name: "Web Security Knowledge",
        subTopics: [
          { id: "sec-1", "name": "Hashing" },
          { id: "sec-2", "name": "HTTPS" },
          { id: "sec-3", "name": "CORS" },
          { id: "sec-4", "name": "SSL/TLS" },
          { id: "sec-5", "name": "OWASP" }
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
      { id: "java-basics", name: "Java Basics" },
      { id: "build", name: "Build Tools", subTopics: [{id:"sb-1", name:"Maven"}, {id:"sb-2", name:"Gradle"}] },
      { id: "spring-core", name: "Spring Framework" },
      { id: "spring-boot", name: "Spring Boot" },
      { id: "spring-sec", name: "Spring Security" },
      { id: "testing", name: "Testing" },
      { id: "spring-data", name: "Spring Data" },
      { id: "hibernate", name: "Hibernate & JPA" },
      { id: "microservices", name: "Microservices & Cloud" },
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineering",
    description: "From data science to building intelligent AI systems.",
    topics: [
      { id: "python", name: "Programming (Python)" },
      { id: "math", name: "Mathematics" },
      { id: "data-prep", name: "Data Preprocessing" },
      { id: "ml", name: "Machine Learning" },
      { id: "dl", name: "Deep Learning" },
      { id: "cv", name: "Computer Vision" },
      { id: "nlp", name: "NLP" },
      { id: "llms", name: "Large Language Models" },
      { id: "mlops", name: "MLOps" }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate, deploy, and monitor scalable infrastructure.",
    topics: [
      { id: "language", name: "Programming Language" },
      { id: "os-concepts", name: "OS Concepts" },
      { id: "terminal", name: "Learn to live in terminal" },
      { id: "net-sec", name: "Networking & Security" },
      { id: "server", name: "Server Setup" },
      { id: "iac", name: "Infrastructure as Code" },
      { id: "containers", name: "Containers & Orchestration" },
      { id: "cicd", name: "CI/CD Tools" },
      { id: "monitoring", name: "Monitoring & Observability" },
      { id: "cloud", name: "Cloud Providers" },
      { id: "patterns", name: "Cloud Design Patterns" }
    ]
  }
];

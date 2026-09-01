const fs = require('fs');
const file = 'f:/self/knowledge/docker-study-tab/app/learn/data.ts';

const content = `export type Topic = {
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
          { id: "apis-1", name: "HATEOAS" },
          { id: "apis-2", name: "OpenAPI" },
          { id: "apis-3", name: "REST" },
          { id: "apis-4", name: "JSON APIs" },
          { id: "apis-5", name: "SOAP" },
          { id: "apis-6", name: "gRPC" },
          { id: "apis-7", name: "GraphQL" }
        ]
      },
      {
        id: "caching",
        name: "Caching",
        subTopics: [
          { id: "caching-1", name: "CDN" },
          { id: "caching-2", name: "Server side" },
          { id: "caching-3", name: "Client side" },
          { id: "caching-4", name: "Redis" },
          { id: "caching-5", name: "Memcached" }
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
          { id: "test-1", name: "Integration Testing" },
          { id: "test-2", name: "Unit Testing" },
          { id: "test-3", name: "Functional Testing" }
        ]
      },
      {
        id: "cicd",
        name: "CI/CD",
        subTopics: [
          { id: "cicd-1", name: "GitLab CI" },
          { id: "cicd-2", name: "GitHub Actions" },
          { id: "cicd-3", name: "Jenkins" },
          { id: "cicd-4", name: "Circle CI" }
        ]
      },
      {
        id: "principles",
        name: "Design and Development Principles",
        subTopics: [
          { id: "prin-1", name: "GOF Design Patterns" },
          { id: "prin-2", name: "Domain Driven Design" },
          { id: "prin-3", name: "Test Driven Development" },
          { id: "prin-4", name: "SOLID" },
          { id: "prin-5", name: "KISS" },
          { id: "prin-6", name: "YAGNI" },
          { id: "prin-7", name: "DRY" }
        ]
      },
      {
        id: "architecture",
        name: "Architectural Patterns",
        subTopics: [
          { id: "arch-1", name: "Monolithic Apps" },
          { id: "arch-2", name: "Microservices" },
          { id: "arch-3", name: "SOA" },
          { id: "arch-4", name: "CQRS and Event Sourcing" },
          { id: "arch-5", name: "Serverless" }
        ]
      },
      {
        id: "search",
        name: "Search Engines",
        subTopics: [
          { id: "search-1", name: "Elasticsearch" },
          { id: "search-2", name: "Solr" }
        ]
      },
      {
        id: "brokers",
        name: "Message Brokers",
        subTopics: [
          { id: "broker-1", name: "RabbitMQ" },
          { id: "broker-2", name: "Kafka" }
        ]
      },
      {
        id: "containers",
        name: "Containerization vs Virtualization",
        subTopics: [
          { id: "cont-1", name: "Docker" },
          { id: "cont-2", name: "rkt" },
          { id: "cont-3", name: "LXC" }
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
          { id: "gdb-1", name: "Neo4j" }
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
          { id: "sc-3", name: "Zipkin" },
          { id: "sc-4", name: "Eureka" }
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
        id: "cs-fundamentals",
        name: "Computer Science Fundamentals",
        subTopics: [
          { id: "cs-1", name: "Basic CLI" },
          { id: "cs-2", name: "Git" },
          { id: "cs-3", name: "Big O" },
          { id: "cs-4", name: "Data Structures" },
          { id: "cs-5", name: "Algorithms" }
        ]
      },
      {
        id: "programming",
        name: "Programming Language",
        subTopics: [
          { id: "prg-1", name: "Python" },
          { id: "prg-2", name: "Syntax" },
          { id: "prg-3", name: "List Comprehensions" },
          { id: "prg-4", name: "Decorators" },
          { id: "prg-5", name: "Generators" },
          { id: "prg-6", name: "Iterators" }
        ]
      },
      {
        id: "math",
        name: "Mathematics",
        subTopics: [
          { id: "math-1", name: "Linear Algebra" },
          { id: "math-2", name: "Calculus" },
          { id: "math-3", name: "Statistics & Probability" }
        ]
      },
      {
        id: "data-structures",
        name: "Data Types & Data Structures",
        subTopics: [
          { id: "ds-1", name: "Lists" },
          { id: "ds-2", name: "Tuples" },
          { id: "ds-3", name: "Sets" },
          { id: "ds-4", name: "Dictionaries" }
        ]
      },
      {
        id: "oop",
        name: "Object Oriented Programming",
        subTopics: [
          { id: "oop-1", name: "Classes" },
          { id: "oop-2", name: "Inheritance" },
          { id: "oop-3", name: "Polymorphism" },
          { id: "oop-4", name: "Encapsulation" }
        ]
      },
      {
        id: "package-mgr",
        name: "Package Managers",
        subTopics: [
          { id: "pkg-1", name: "pip" },
          { id: "pkg-2", name: "conda" }
        ]
      },
      {
        id: "adv-python",
        name: "Advanced Python",
        subTopics: [
          { id: "adv-1", name: "RegEx" },
          { id: "adv-2", name: "Testing" },
          { id: "adv-3", name: "Web Scraping" }
        ]
      },
      {
        id: "apis-ai",
        name: "APIs",
        subTopics: [
          { id: "api-ai-1", name: "REST" },
          { id: "api-ai-2", name: "FastAPI" }
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
          { id: "lang-4", name: "Node.js" },
          { id: "lang-5", name: "Rust" },
          { id: "lang-6", name: "C" },
          { id: "lang-7", name: "C++" }
        ]
      },
      {
        id: "os-concepts",
        name: "OS Concepts",
        subTopics: [
          { id: "osc-1", name: "Process Management" },
          { id: "osc-2", name: "Threads and Concurrency" },
          { id: "osc-3", name: "Sockets" },
          { id: "osc-4", name: "POSIX Basics" },
          { id: "osc-5", name: "Networking Concepts" },
          { id: "osc-6", name: "Virtualization" },
          { id: "osc-7", name: "Memory storage and File systems" },
          { id: "osc-8", name: "Interprocess Communication" },
          { id: "osc-9", name: "I/O Management" }
        ]
      },
      {
        id: "terminal",
        name: "Learn to live in terminal",
        subTopics: [
          { id: "term-1", name: "Bash Scripting" },
          { id: "term-2", name: "Text Manipulation tools" },
          { id: "term-3", name: "Vim/Nano/Powershell/Emacs" },
          { id: "term-4", name: "Process Monitoring" },
          { id: "term-5", name: "Network" },
          { id: "term-6", name: "System Performance" }
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
          { id: "ns-7", name: "SSH" },
          { id: "ns-8", name: "Port Forwarding" },
          { id: "ns-9", name: "SMTP" },
          { id: "ns-10", name: "IMAP/POP3" }
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
        name: "Learn Infrastructure as Code",
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
          { id: "cd-3", name: "Jenkins" },
          { id: "cd-4", name: "Bamboo" },
          { id: "cd-5", name: "Azure DevOps" }
        ]
      },
      {
        id: "monitoring",
        name: "Monitor and Provide Feedback",
        subTopics: [
          { id: "mon-1", name: "Infrastructure Monitoring" },
          { id: "mon-2", name: "Application Monitoring" },
          { id: "mon-3", name: "Logs Management" }
        ]
      },
      {
        id: "cloud",
        name: "Cloud Providers",
        subTopics: [
          { id: "cp-1", name: "AWS" },
          { id: "cp-2", name: "Google Cloud" },
          { id: "cp-3", name: "Azure" },
          { id: "cp-4", name: "Digital Ocean" },
          { id: "cp-5", name: "Heroku" }
        ]
      },
      {
        id: "patterns",
        name: "Cloud Design Patterns",
        subTopics: [
          { id: "pat-1", name: "Availability" },
          { id: "pat-2", name: "Data Management" },
          { id: "pat-3", name: "Design and Implementation" },
          { id: "pat-4", name: "Management and Monitoring" }
        ]
      }
    ]
  }
];
`;

fs.writeFileSync(file, content);
console.log('Successfully wrote data.ts with perfect image transcription');

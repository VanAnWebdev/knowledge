const fs = require('fs');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatTopic(topicObj) {
  return {
    id: slugify(topicObj.topic),
    name: topicObj.topic,
    subTopics: (topicObj.subTopics || []).map(sub => ({
      id: slugify(sub),
      name: sub
    }))
  };
}

const devops = [
  {
    "topic": "Learn a Programming Language",
    "subTopics": ["Python", "Go", "Ruby", "Rust", "Node.js", "C", "C++"]
  },
  {
    "topic": "Understand different OS Concepts",
    "subTopics": ["Process Management", "Threads and Concurrency", "Sockets", "POSIX Basics", "Networking Concepts", "Init Systems", "I/O Management", "Virtualization", "Memory/Storage", "File Systems"]
  },
  {
    "topic": "Version Control Systems",
    "subTopics": ["Git Basics", "GitHub", "GitLab", "Bitbucket"]
  },
  {
    "topic": "Learn to Live in Terminal",
    "subTopics": ["Bash Scripting", "Text Manipulation tools", "Vim / Nano", "Process Monitoring", "Network commands", "System Performance", "Compiling apps from source"]
  },
  {
    "topic": "Networking and Security",
    "subTopics": ["DNS", "OSI Model", "HTTP / HTTPS", "FTP", "SSL / TLS", "SSH", "Port Forwarding", "SMTP / IMAPS / POP3", "IP Routing", "Firewalls"]
  },
  {
    "topic": "What is and how to setup a _____",
    "subTopics": ["Reverse Proxy", "Forward Proxy", "Caching Server", "Load Balancer", "Firewall", "Web Server"]
  },
  {
    "topic": "Learn Infrastructure as Code",
    "subTopics": ["Containers", "Container Orchestration", "Infrastructure Provisioning", "Configuration Management", "Service Mesh"]
  },
  {
    "topic": "CI/CD Tools",
    "subTopics": ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "Azure DevOps", "Travis CI", "Bamboo", "ArgoCD"]
  },
  {
    "topic": "Infrastructure Monitoring",
    "subTopics": ["Prometheus", "Grafana", "Nagios", "Zabbix", "Datadog", "Dynatrace", "New Relic"]
  },
  {
    "topic": "Application Monitoring",
    "subTopics": ["Jaeger", "New Relic", "AppDynamics", "Instana", "OpenTelemetry"]
  },
  {
    "topic": "Logs Management",
    "subTopics": ["Elastic Stack", "Graylog", "Splunk", "Papertrail", "Fluentd", "Loki"]
  },
  {
    "topic": "Cloud Providers",
    "subTopics": ["AWS", "Azure", "Google Cloud Platform", "DigitalOcean", "Linode", "Heroku", "Alibaba Cloud"]
  },
  {
    "topic": "Cloud Design Patterns",
    "subTopics": ["Availability", "Data Management", "Design and Implementation", "Management and Monitoring"]
  }
].map(formatTopic);

const backend = [
  {
    "topic": "Internet",
    "subTopics": ["How does the internet work?", "What is HTTP?", "Browsers and how they work?", "DNS and how it works?", "What is Domain Name?", "What is hosting?"]
  },
  {
    "topic": "Basic Frontend Knowledge",
    "subTopics": ["HTML", "CSS", "JavaScript"]
  },
  {
    "topic": "OS and General Knowledge",
    "subTopics": ["Terminal Usage", "How OSs work in General", "Process Management", "Threads and Concurrency", "Basic Terminal Commands", "Memory Management", "Interprocess Communication", "I/O Management", "POSIX Basics", "Basic Networking Concepts"]
  },
  {
    "topic": "Learn a Language",
    "subTopics": ["Python", "Java", "C#", "PHP", "Rust", "Go", "JavaScript", "TypeScript", "Ruby", "C++"]
  },
  {
    "topic": "Version Control Systems",
    "subTopics": ["Git", "GitHub", "GitLab", "Bitbucket"]
  },
  {
    "topic": "Relational Databases",
    "subTopics": ["PostgreSQL", "MySQL", "MariaDB", "MS SQL", "Oracle"]
  },
  {
    "topic": "NoSQL Databases",
    "subTopics": ["MongoDB", "Redis", "Cassandra", "CouchDB", "DynamoDB", "Neo4j", "InfluxDB"]
  },
  {
    "topic": "More about Databases",
    "subTopics": ["ORMs", "ACID", "Transactions", "N+1 Problem", "Database Normalization", "Indexes", "Data Replication", "Sharding", "CAP Theorem"]
  },
  {
    "topic": "APIs",
    "subTopics": ["REST", "JSON APIs", "SOAP", "gRPC", "GraphQL", "HATEOAS", "OpenAPI", "tRPC", "WebSockets"]
  },
  {
    "topic": "Caching",
    "subTopics": ["CDN", "Server Side", "Client Side", "Redis", "Memcached"]
  },
  {
    "topic": "Web Security Knowledge",
    "subTopics": ["HTTPS", "CORS", "Content Security Policy", "OWASP Top 10", "Hashing Algorithms", "Authentication", "JWT", "OAuth", "SSO"]
  },
  {
    "topic": "Testing",
    "subTopics": ["Integration Testing", "Unit Testing", "Functional Testing", "Mocking"]
  },
  {
    "topic": "CI/CD",
    "subTopics": ["GitHub Actions", "GitLab CI", "Jenkins", "Circle CI"]
  },
  {
    "topic": "Design and Development Principles",
    "subTopics": ["GOF Design Patterns", "Domain Driven Design", "Test Driven Development", "SOLID", "KISS", "YAGNI", "DRY"]
  },
  {
    "topic": "Architectural Patterns",
    "subTopics": ["Monolithic Apps", "Microservices", "SOA", "CQRS", "Event Sourcing", "Serverless"]
  },
  {
    "topic": "Search Engines",
    "subTopics": ["Elasticsearch", "Solr", "Typesense", "Meilisearch"]
  },
  {
    "topic": "Message Brokers",
    "subTopics": ["RabbitMQ", "Kafka", "Amazon SQS", "Amazon SNS", "ActiveMQ"]
  },
  {
    "topic": "Containerization and Virtualization",
    "subTopics": ["Docker", "Kubernetes", "Podman"]
  },
  {
    "topic": "Web Servers",
    "subTopics": ["Nginx", "Apache", "Caddy", "Tomcat", "IIS"]
  }
].map(formatTopic);

const ai = [
  {
    "topic": "Programming Skills",
    "subTopics": ["Python", "Bash", "Jupyter Notebooks", "Data Structures", "Algorithms", "Object Oriented Programming"]
  },
  {
    "topic": "Mathematics",
    "subTopics": ["Linear Algebra", "Calculus", "Statistics", "Probability", "Optimization"]
  },
  {
    "topic": "Data Manipulation & Analysis",
    "subTopics": ["Pandas", "NumPy", "SQL", "Data Visualization", "Data Cleaning", "Feature Engineering"]
  },
  {
    "topic": "Machine Learning Algorithms",
    "subTopics": ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "K-Means", "PCA"]
  },
  {
    "topic": "ML Frameworks",
    "subTopics": ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost"]
  },
  {
    "topic": "Deep Learning",
    "subTopics": ["Neural Networks", "PyTorch", "TensorFlow", "Keras", "CNNs", "RNNs", "LSTMs", "Autoencoders"]
  },
  {
    "topic": "Natural Language Processing (NLP)",
    "subTopics": ["Text Preprocessing", "Word Embeddings", "Transformers", "Attention Mechanism", "HuggingFace"]
  },
  {
    "topic": "Computer Vision",
    "subTopics": ["Image Processing", "Object Detection", "Image Segmentation", "Face Recognition"]
  },
  {
    "topic": "Large Language Models (LLMs)",
    "subTopics": ["Prompt Engineering", "Fine-tuning", "RAG", "Vector Databases", "Evaluation"]
  },
  {
    "topic": "AI Frameworks",
    "subTopics": ["LangChain", "LlamaIndex", "Semantic Kernel"]
  },
  {
    "topic": "MLOps & Deployment",
    "subTopics": ["Docker", "FastAPI / Flask", "MLflow", "Weights & Biases", "Model Serving", "ONNX", "Cloud AI"]
  }
].map(formatTopic);

const spring = [
  {
    "topic": "Pre-requisites",
    "subTopics": ["Java", "SQL", "Git", "Maven / Gradle", "Basic HTTP", "IDE"]
  },
  {
    "topic": "Spring Framework",
    "subTopics": ["Spring Core", "Dependency Injection", "Inversion of Control", "Spring AOP", "Spring MVC", "Spring Bean Scope", "Annotations"]
  },
  {
    "topic": "Spring Boot Basics",
    "subTopics": ["Introduction", "Auto-configuration", "Spring Boot Starters", "Actuator", "Embedded Servers"]
  },
  {
    "topic": "Building RESTful APIs",
    "subTopics": ["REST Principles", "Spring Web", "@RestController", "@RequestMapping", "@RequestBody", "ResponseEntity", "Content Negotiation"]
  },
  {
    "topic": "Data Access",
    "subTopics": ["Spring Data JPA", "Hibernate", "JDBC Template", "Spring Data MongoDB", "Database Migrations"]
  },
  {
    "topic": "Validation & Exception Handling",
    "subTopics": ["JSR 380", "@Valid / @Validated", "@ControllerAdvice", "@ExceptionHandler", "Custom Exceptions"]
  },
  {
    "topic": "Spring Security",
    "subTopics": ["Authentication", "Authorization", "Security Filter Chain", "JWT", "OAuth2 & OIDC", "BCrypt", "Role-based Access Control"]
  },
  {
    "topic": "Caching",
    "subTopics": ["Spring Cache Abstraction", "Redis", "EhCache", "Caffeine"]
  },
  {
    "topic": "Messaging",
    "subTopics": ["Spring AMQP", "RabbitMQ", "Apache Kafka", "JMS"]
  },
  {
    "topic": "Testing",
    "subTopics": ["JUnit 5", "Mockito", "Testcontainers", "MockMvc", "@SpringBootTest", "@DataJpaTest"]
  },
  {
    "topic": "Microservices",
    "subTopics": ["Spring Cloud", "API Gateway", "Service Discovery", "Circuit Breaker", "OpenFeign", "Config Server"]
  },
  {
    "topic": "Observability",
    "subTopics": ["Micrometer", "Distributed Tracing", "Prometheus", "Grafana"]
  },
  {
    "topic": "Deployment",
    "subTopics": ["Docker", "Docker Compose", "Kubernetes", "CI/CD Pipelines"]
  }
].map(formatTopic);

const roadmaps = [
  {
    id: 'backend',
    title: 'Java Core / Backend',
    topics: backend
  },
  {
    id: 'spring',
    title: 'Spring Boot',
    topics: spring
  },
  {
    id: 'ai',
    title: 'AI Engineer',
    topics: ai
  },
  {
    id: 'devops',
    title: 'DevOps',
    topics: devops
  }
];

const output = "export const ROADMAPS = " + JSON.stringify(roadmaps, null, 2) + ";\n";
fs.writeFileSync('f:/self/knowledge/docker-study-tab/app/learn/data.ts', output);
console.log('Successfully wrote format-corrected data.ts');

window.PREGUNTAS = [
  {
    "type": "text",
    "answer": "UserService",
    "id": "N1-P1-Q1",
    "nucleus": 1,
    "partial": 1,
    "number": 1,
    "question": "Completa el código para inyectar UserService en UserController: @Autowired UserServ service;",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "localhost",
    "id": "N1-P1-Q2",
    "nucleus": 1,
    "partial": 1,
    "number": 2,
    "question": "Completa el código para configurar el acceso a la base de datos en application.properties: spring.datasource.url=jdbc:mysql:// localhost :3306/investigacion",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@Entity",
    "id": "N1-P1-Q3",
    "nucleus": 1,
    "partial": 1,
    "number": 3,
    "question": "Completa la anotación para definir la clase User como una entidad en JPA: @Entity (name=\"users\") public class User {",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "User",
    "id": "N1-P1-Q4",
    "nucleus": 1,
    "partial": 1,
    "number": 4,
    "question": "Completa el código para definir la interfaz UserRepository con JpaRepository: @Repository public interface UserRepository extends JpaRepository< User , Long> { }",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "th:value",
      "th:model",
      "th:object",
      "th:bind"
    ],
    "correct": 2,
    "answer": "th:object",
    "id": "N1-P1-Q5",
    "nucleus": 1,
    "partial": 1,
    "number": 5,
    "question": "En Thymeleaf, ¿qué atributo se usa para enlazar un objeto con un formulario?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@{/register}",
    "id": "N1-P1-Q6",
    "nucleus": 1,
    "partial": 1,
    "number": 6,
    "question": "Completa el código Thymeleaf para especificar la acción del formulario: <form th:action=\"____\" th:object=\"${user}\" method=\"post\"> Respuesta: @{/users}",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "UserController",
      "UserRepository",
      "UserService",
      "UserEntity"
    ],
    "correct": 1,
    "answer": "UserRepository",
    "id": "N1-P1-Q7",
    "nucleus": 1,
    "partial": 1,
    "number": 7,
    "question": "¿Cuál de las siguientes interfaces en Spring maneja operaciones CRUD en la base de datos?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "{username}",
    "id": "N1-P1-Q8",
    "nucleus": 1,
    "partial": 1,
    "number": 8,
    "question": "Completa el código Thymeleaf para enlazar el atributo username al formulario: <input th:field=\"____\" class=\"form-control\" type=\"text\"> Respuesta: *{username}",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Crea una nueva instancia de UserRepository manualmente",
      "Inyecta una dependencia de UserRepository automáticamente",
      "Declara un nuevo objeto sin inicializarlo",
      "Define una variable local"
    ],
    "correct": 1,
    "answer": "Inyecta una dependencia de UserRepository automáticamente",
    "id": "N1-P1-Q9",
    "nucleus": 1,
    "partial": 1,
    "number": 9,
    "question": "¿Qué hace el siguiente fragmento en UserService? @Autowired UserRepository repository;",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Define la clave primaria y su generación automática",
      "Define una relación con otra tabla",
      "Especifica el tipo de dato de un campo",
      "Convierte la clase en una tabla de base de datos"
    ],
    "correct": 0,
    "answer": "Define la clave primaria y su generación automática",
    "id": "N1-P1-Q10",
    "nucleus": 1,
    "partial": 1,
    "number": 10,
    "question": "En la entidad User, ¿cuál es la función de @Id y @GeneratedValue(strategy = GenerationType.IDENTITY)?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    "correct": 1,
    "answer": "GET",
    "id": "N1-P1-Q11",
    "nucleus": 1,
    "partial": 1,
    "number": 11,
    "question": "¿Qué método HTTP maneja la anotación @GetMapping(\"/register\") en UserController?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "UserRepository",
    "id": "N1-P1-Q12",
    "nucleus": 1,
    "partial": 1,
    "number": 12,
    "question": "Completa el código para inyectar UserRepository en UserService: @Service public class UserService { @Autowired UserRepo repository; }",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Mostrar el formulario de registro",
      "Guardar un usuario en la base de datos",
      "Editar usuarios existentes",
      "Usar el modelo Model para pasar datos a la vista"
    ],
    "correct": 2,
    "answer": "Editar usuarios existentes",
    "id": "N1-P1-Q13",
    "nucleus": 1,
    "partial": 1,
    "number": 13,
    "question": "¿Cuál de las siguientes opciones NO es una funcionalidad de UserController?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "(User user), (user)",
    "id": "N1-P1-Q14",
    "nucleus": 1,
    "partial": 1,
    "number": 14,
    "question": "Completa el método en UserService para guardar un usuario: public User save(____ user){ return repository.save(____); } Respuesta: User",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "spring.jpa.hibernate.ddl-auto=validate",
      "spring.jpa.hibernate.ddl-auto=update",
      "spring.jpa.hibernate.ddl-auto=create-drop",
      "spring.jpa.hibernate.ddl-auto=none"
    ],
    "correct": 2,
    "answer": "spring.jpa.hibernate.ddl-auto=create-drop",
    "id": "N1-P1-Q15",
    "nucleus": 1,
    "partial": 1,
    "number": 15,
    "question": "En application.properties, ¿qué configuración permite que Hibernate cree y elimine las tablas automáticamente?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "SELECT * FROM users;",
      "CREATE TABLE users (...);",
      "INSERT INTO users (...) VALUES (...);",
      "Todas las anteriores"
    ],
    "correct": 3,
    "answer": "Todas las anteriores",
    "id": "N1-P1-Q16",
    "nucleus": 1,
    "partial": 1,
    "number": 16,
    "question": "¿Qué comando SQL es equivalente al uso de @Repository con JpaRepository en Spring Boot?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "\"/register\"",
    "id": "N1-P1-Q17",
    "nucleus": 1,
    "partial": 1,
    "number": 17,
    "question": "Completa el código para indicar que un método maneja solicitudes POST en UserController: @PostMapping( \"/register\" ) public String registerUser(@ModelAttribute User user){",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect",
      "spring.datasource.url=jdbc:mysql://localhost:3306/miBD",
      "spring.datasource.username=root",
      "spring.jpa.hibernate.ddl-auto=create"
    ],
    "correct": 0,
    "answer": "spring.jpa.database- platform=org.hibernate.dialect.MySQLDialect",
    "id": "N1-P1-Q18",
    "nucleus": 1,
    "partial": 1,
    "number": 18,
    "question": "En application.properties, ¿qué propiedad define el dialecto de MySQL en Hibernate?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "GenerationType.IDENTITY",
    "id": "N1-P1-Q19",
    "nucleus": 1,
    "partial": 1,
    "number": 19,
    "question": "Completa el código para definir la clave primaria id con generación automática: @Id @GeneratedValue(strategy = GenerationType. ) private Long id;",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Service",
      "@Controller",
      "@Repository",
      "@Entity"
    ],
    "correct": 1,
    "answer": "@Controller",
    "id": "N1-P1-Q20",
    "nucleus": 1,
    "partial": 1,
    "number": 20,
    "question": "¿Qué anotación en Spring Boot se usa para definir una clase como un controlador?",
    "source": "EVALUACIÓN PARCIAL 1_ NUCELO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Service",
      "@Repository",
      "@Entity",
      "@PersistenceContext"
    ],
    "correct": 1,
    "answer": "@Repository",
    "id": "N1-P2-Q1",
    "nucleus": 1,
    "partial": 2,
    "number": 1,
    "question": "¿Qué anotación permite definir un repositorio en Spring Data JPA?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "findUserByUsername",
      "loadUserByUsername",
      "getUserDetails",
      "authenticateUser"
    ],
    "correct": 1,
    "answer": "loadUserByUsername",
    "id": "N1-P2-Q2",
    "nucleus": 1,
    "partial": 2,
    "number": 2,
    "question": "En el código proporcionado, ¿qué método del UserDetailsServiceImpl carga un usuario por su nombre de usuario?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "HTTP",
    "id": "N1-P2-Q3",
    "nucleus": 1,
    "partial": 2,
    "number": 3,
    "question": "La arquitectura RESTful se basa en el protocolo HTTP para la comunicación entre clientes y servidores.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Un proceso para eliminar datos de una base de datos.",
      "El almacenamiento temporal de datos en memoria.",
      "El proceso de almacenar datos de manera permanente en una base de datos.",
      "Un método para comprimir datos antes de almacenarlos."
    ],
    "correct": 2,
    "answer": "El proceso de almacenar datos de manera permanente en una base de datos.",
    "id": "N1-P2-Q4",
    "nucleus": 1,
    "partial": 2,
    "number": 4,
    "question": "¿Qué es la persistencia de datos en aplicaciones Java?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "BCryptPasswordEncoder",
    "id": "N1-P2-Q5",
    "nucleus": 1,
    "partial": 2,
    "number": 5,
    "question": "En el código proporcionado, el método passwordEncoder() retorna una instancia de BCryptPasswordE para codificar contraseñas.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "DaoAuthenticationProvider",
    "id": "N1-P2-Q6",
    "nucleus": 1,
    "partial": 2,
    "number": 6,
    "question": "En SecurityConfig, el método authenticationProvider() utiliza un objeto de tipo DaoAuthenticatio para gestionar la autenticación.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Requiere que se escriba SQL manualmente para cada consulta.",
      "Facilita la interacción con bases de datos mediante JPA sin necesidad de escribir SQL.",
      "Solo se puede usar con bases de datos NoSQL.",
      "No permite realizar operaciones CRUD en bases de datos."
    ],
    "correct": 1,
    "answer": "Facilita la interacción con bases de datos mediante JPA sin necesidad de escribir SQL.",
    "id": "N1-P2-Q7",
    "nucleus": 1,
    "partial": 2,
    "number": 7,
    "question": "¿Cuál de los siguientes es un beneficio principal de Spring Data JPA?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "Entity",
    "id": "N1-P2-Q8",
    "nucleus": 1,
    "partial": 2,
    "number": 8,
    "question": "En JPA, la anotación @ Entity se usa para marcar una clase como una entidad mapeada a una tabla de base de datos.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "Service",
    "id": "N1-P2-Q9",
    "nucleus": 1,
    "partial": 2,
    "number": 9,
    "question": "En Spring Boot, la anotación @ Service se usa para definir una clase como un componente de servicio.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "JpaRepository",
    "id": "N1-P2-Q10",
    "nucleus": 1,
    "partial": 2,
    "number": 10,
    "question": "La interfaz JpaRepository de Spring Data JPA permite realizar operaciones CRUD sin necesidad de escribir consultas SQL.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "Optional",
    "id": "N1-P2-Q11",
    "nucleus": 1,
    "partial": 2,
    "number": 11,
    "question": "El método findByUsername(String username) en UserRepository retorna un objeto de tipo Optional para manejar la posible ausencia de un usuario.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Una clase Java que se mapea a una tabla en la base de datos.",
      "Un procedimiento almacenado dentro de la base de datos.",
      "Un archivo de configuración XML en la aplicación.",
      "Una tabla que almacena solo valores numéricos."
    ],
    "correct": 0,
    "answer": "Una clase Java que se mapea a una tabla en la base de datos.",
    "id": "N1-P2-Q12",
    "nucleus": 1,
    "partial": 2,
    "number": 12,
    "question": "En JPA, ¿qué representa una entidad?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "UserDetails",
    "id": "N1-P2-Q13",
    "nucleus": 1,
    "partial": 2,
    "number": 13,
    "question": "En Spring Security, UserDetails es una interfaz que proporciona la información del usuario autenticado.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Entity",
      "@Repository",
      "@Table",
      "@Persistence"
    ],
    "correct": 0,
    "answer": "@Entity",
    "id": "N1-P2-Q14",
    "nucleus": 1,
    "partial": 2,
    "number": 14,
    "question": "En Spring Data JPA, ¿qué anotación se usa para marcar una clase como entidad?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "RestController",
    "id": "N1-P2-Q15",
    "nucleus": 1,
    "partial": 2,
    "number": 15,
    "question": "En Spring Boot, la anotación @ RestController permite definir un controlador que maneja solicitudes HTTP y devuelve respuestas en formato JSON.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Administrar los archivos de configuración de la base de datos.",
      "Permitir la ejecución automática de consultas y operaciones CRUD sin escribir SQL.",
      "Configurar la conexión a bases de datos sin necesidad de controladores JDBC.",
      "Eliminar automáticamente los datos después de cierto tiempo."
    ],
    "correct": 1,
    "answer": "Permitir la ejecución automática de consultas y operaciones CRUD sin escribir SQL.",
    "id": "N1-P2-Q16",
    "nucleus": 1,
    "partial": 2,
    "number": 16,
    "question": "¿Cuál es el propósito de los repositorios JPA en Spring Data?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "HttpSecurity",
    "id": "N1-P2-Q17",
    "nucleus": 1,
    "partial": 2,
    "number": 17,
    "question": "En la configuración de Spring Security, el método securityFilterChain() utiliza el objeto HttpSecurity para definir las reglas de acceso a los endpoints.",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@EnableSecurity",
      "@EnableWebSecurity",
      "@SecurityConfiguration",
      "@Secure"
    ],
    "correct": 1,
    "answer": "@EnableWebSecurity",
    "id": "N1-P2-Q18",
    "nucleus": 1,
    "partial": 2,
    "number": 18,
    "question": "¿Qué anotación se utiliza para habilitar la seguridad en Spring Boot?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Cada entidad A está asociada con una única entidad B, y viceversa.",
      "Una entidad A puede estar asociada con varias entidades B, pero cada entidad B está asociada solo a una entidad A.",
      "Varias entidades A pueden estar asociadas a varias entidades B.",
      "Ninguna de las anteriores."
    ],
    "correct": 1,
    "answer": "Una entidad A puede estar asociada con varias entidades B, pero cada entidad B está asociada solo a una entidad A.",
    "id": "N1-P2-Q19",
    "nucleus": 1,
    "partial": 2,
    "number": 19,
    "question": "¿Qué tipo de relación entre entidades en JPA se describe como \"uno a muchos (1:N)\"?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "passwordEncoder()",
      "securityFilterChain()",
      "authenticationProvider()",
      "authorizeRequests()"
    ],
    "correct": 1,
    "answer": "securityFilterChain()",
    "id": "N1-P2-Q20",
    "nucleus": 1,
    "partial": 2,
    "number": 20,
    "question": "¿Qué método en SecurityConfig se encarga de definir las reglas de autorización para los endpoints?",
    "source": "EVALUACIÓN PARCIAL 2_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "JPA",
    "id": "N1-P3-Q1",
    "nucleus": 1,
    "partial": 3,
    "number": 1,
    "question": "La especificación que permite la persistencia de datos en Java sin escribir SQL manualmente es JPA .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Service",
      "@RestController",
      "@Repository",
      "@Configuration"
    ],
    "correct": 0,
    "answer": "@Service",
    "id": "N1-P3-Q2",
    "nucleus": 1,
    "partial": 3,
    "number": 2,
    "question": "¿Qué anotación se usa para indicar que una clase es un componente de servicio en Spring Boot?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "control",
    "id": "N1-P3-Q3",
    "nucleus": 1,
    "partial": 3,
    "number": 3,
    "question": "Spring Boot utiliza la inversión de control para gestionar los componentes de la aplicación.",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Permite acoplar fuertemente los componentes del sistema.",
      "Elimina la necesidad de declarar variables en Java.",
      "Facilita el desacoplamiento y modularidad de las aplicaciones.",
      "Reemplaza completamente el uso de interfaces en Java."
    ],
    "correct": 2,
    "answer": "Facilita el desacoplamiento y modularidad de las aplicaciones.",
    "id": "N1-P3-Q4",
    "nucleus": 1,
    "partial": 3,
    "number": 4,
    "question": "¿Cuál es la principal ventaja de la Inyección de Dependencias (DI) en Spring?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@Entity",
    "id": "N1-P3-Q5",
    "nucleus": 1,
    "partial": 3,
    "number": 5,
    "question": "Para definir una entidad en JPA, se usa la anotación @Entity .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "NetBeans",
      "Eclipse",
      "Maven/Gradle",
      "JUnit"
    ],
    "correct": 2,
    "answer": "Maven/Gradle",
    "id": "N1-P3-Q6",
    "nucleus": 1,
    "partial": 3,
    "number": 6,
    "question": "¿Qué herramienta se usa en Spring Boot para gestionar dependencias y compilación?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Es un framework para el desarrollo de aplicaciones en Python.",
      "Es una extensión de Spring que facilita la configuración y el desarrollo de aplicaciones Java.",
      "Es un framework exclusivo para desarrollo web en JavaScript.",
      "Es una librería para manejo de bases de datos relacionales en Java."
    ],
    "correct": 1,
    "answer": "Es una extensión de Spring que facilita la configuración y el desarrollo de aplicaciones Java.",
    "id": "N1-P3-Q7",
    "nucleus": 1,
    "partial": 3,
    "number": 7,
    "question": "¿Cuál de las siguientes afirmaciones describe mejor a Spring Boot?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@JoinTable",
    "id": "N1-P3-Q8",
    "nucleus": 1,
    "partial": 3,
    "number": 8,
    "question": "En una relación @ManyToMany de JPA, la anotación utilizada para definir la tabla intermedia es @JoinTable .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Service",
      "@Repository",
      "@Component",
      "@RestController"
    ],
    "correct": 3,
    "answer": "@RestController",
    "id": "N1-P3-Q9",
    "nucleus": 1,
    "partial": 3,
    "number": 9,
    "question": "¿Qué anotación se utiliza en Spring Boot para definir un controlador REST?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "Maven",
    "id": "N1-P3-Q10",
    "nucleus": 1,
    "partial": 3,
    "number": 10,
    "question": "La herramienta utilizada en Spring Boot para gestionar dependencias de manera automática es Maven .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Proporcionar una interfaz gráfica para gestionar bases de datos.",
      "Gestionar la persistencia de datos en Java mediante un modelo orientado a objetos.",
      "Permitir la ejecución de scripts en la base de datos de forma automática.",
      "Optimizar la velocidad de procesamiento de datos en Java."
    ],
    "correct": 1,
    "answer": "Gestionar la persistencia de datos en Java mediante un modelo orientado a objetos.",
    "id": "N1-P3-Q11",
    "nucleus": 1,
    "partial": 3,
    "number": 11,
    "question": "¿Cuál es la función principal de JPA (Java Persistence API)?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@Service",
    "id": "N1-P3-Q12",
    "nucleus": 1,
    "partial": 3,
    "number": 12,
    "question": "Un Service en Spring Boot se anota con @Service .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "RESTful",
    "id": "N1-P3-Q13",
    "nucleus": 1,
    "partial": 3,
    "number": 13,
    "question": "Los microservicios se comunican entre sí mediante APIs de tipo REST .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Actuar como intermediario entre el Controller y la base de datos para realizar operaciones de persistencia.",
      "Gestionar la lógica de negocio de la aplicación.",
      "Servir como una interfaz gráfica para gestionar bases de datos.",
      "Controlar las solicitudes HTTP en una aplicación."
    ],
    "correct": 0,
    "answer": "Actuar como intermediario entre el Controller y la base de datos para realizar operaciones de persistencia.",
    "id": "N1-P3-Q14",
    "nucleus": 1,
    "partial": 3,
    "number": 14,
    "question": "¿Cuál es el propósito de un Repository en Spring Data JPA?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "controlador",
    "id": "N1-P3-Q15",
    "nucleus": 1,
    "partial": 3,
    "number": 15,
    "question": "En Spring Boot, el componente responsable de manejar las solicitudes HTTP es el Controller .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Permite definir consultas SQL manualmente en los controladores.",
      "Facilita la interacción con bases de datos mediante repositorios sin necesidad de escribir SQL manual.",
      "Solo funciona con bases de datos NoSQL.",
      "Requiere el uso obligatorio de Hibernate."
    ],
    "correct": 1,
    "answer": "Facilita la interacción con bases de datos mediante repositorios sin necesidad de escribir SQL manual.",
    "id": "N1-P3-Q16",
    "nucleus": 1,
    "partial": 3,
    "number": 16,
    "question": "¿Cuál de las siguientes opciones es una característica de Spring Data JPA?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Controller",
      "Service",
      "Repository",
      "Entity"
    ],
    "correct": 1,
    "answer": "Service",
    "id": "N1-P3-Q17",
    "nucleus": 1,
    "partial": 3,
    "number": 17,
    "question": "En una aplicación Spring Boot, ¿qué componente es responsable de gestionar la lógica de negocio?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "Repository",
    "id": "N1-P3-Q18",
    "nucleus": 1,
    "partial": 3,
    "number": 18,
    "question": "Para realizar consultas a la base de datos sin escribir SQL manualmente en Spring Boot, se utiliza la interfaz JpaRepository .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "@Autowired",
    "id": "N1-P3-Q19",
    "nucleus": 1,
    "partial": 3,
    "number": 19,
    "question": "En Spring Boot, la anotación utilizada para inyectar dependencias es @Autowired .",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Usando la anotación @Table",
      "Usando la anotación @Entity",
      "Usando la anotación @Column",
      "Usando la anotación @Autowired"
    ],
    "correct": 1,
    "answer": "Usando la anotación @Entity",
    "id": "N1-P3-Q20",
    "nucleus": 1,
    "partial": 3,
    "number": 20,
    "question": "¿Cómo se define una entidad en JPA?",
    "source": "EVALUACIÓN PARCIAL 3_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Proteger la interfaz de usuario",
      "Implementar medidas de seguridad como autenticación y autorización",
      "Gestionar la base de datos",
      "Optimizar el rendimiento del código"
    ],
    "correct": 1,
    "answer": "Implementar medidas de seguridad como autenticación y autorización",
    "id": "N1-P4-Q1",
    "nucleus": 1,
    "partial": 4,
    "number": 1,
    "question": "¿Cuál es el propósito principal de Spring Security en una aplicación Java?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "GET",
    "id": "N1-P4-Q2",
    "nucleus": 1,
    "partial": 4,
    "number": 2,
    "question": "La anotación @GetMapping(\"/add\") se usa para manejar solicitudes GET en un controlador de Spring.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "No requiere configuración",
      "Se integra fácilmente con otras tecnologías",
      "Funciona solo con bases de datos SQL",
      "No protege contra ataques de seguridad"
    ],
    "correct": 1,
    "answer": "Se integra fácilmente con otras tecnologías",
    "id": "N1-P4-Q3",
    "nucleus": 1,
    "partial": 4,
    "number": 3,
    "question": "¿Cuál es la ventaja principal de Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "guardar",
    "id": "N1-P4-Q4",
    "nucleus": 1,
    "partial": 4,
    "number": 4,
    "question": "El método saveProduct(Product product) en ProductService permite guardar un producto en la base de datos.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@Autowired",
      "@RestController",
      "@Secured",
      "@Entity"
    ],
    "correct": 2,
    "answer": "@Secured",
    "id": "N1-P4-Q5",
    "nucleus": 1,
    "partial": 4,
    "number": 5,
    "question": "¿Qué anotación se usa para aplicar restricciones de seguridad en métodos de Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Contraseñas",
      "Autenticación basada en tokens",
      "Identificación por huella dactilar",
      "OAuth2"
    ],
    "correct": 2,
    "answer": "Identificación por huella dactilar",
    "id": "N1-P4-Q6",
    "nucleus": 1,
    "partial": 4,
    "number": 6,
    "question": "¿Qué método de autenticación NO es soportado por Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "servicio",
    "id": "N1-P4-Q7",
    "nucleus": 1,
    "partial": 4,
    "number": 7,
    "question": "La anotación @Service indica que ProductService es un componente de Spring.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "acción",
    "id": "N1-P4-Q8",
    "nucleus": 1,
    "partial": 4,
    "number": 8,
    "question": "En la plantilla HTML, th:action=\"@{${product.id == null} ? '/add' : '/product/edit/'+${product.id}}\" se usa para definir la acción del formulario.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Inyección SQL",
      "CSRF (Cross-Site Request Forgery)",
      "XSS (Cross-Site Scripting)",
      "Ataques de denegación de servicio (DDoS)"
    ],
    "correct": 1,
    "answer": "CSRF (Cross-Site Request Forgery)",
    "id": "N1-P4-Q9",
    "nucleus": 1,
    "partial": 4,
    "number": 9,
    "question": "¿Qué ataque se previene mediante la inclusión de tokens CSRF en formularios?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "POST",
    "id": "N1-P4-Q10",
    "nucleus": 1,
    "partial": 4,
    "number": 10,
    "question": "En Spring, la anotación @PostMapping indica que el método manejará solicitudes HTTP de tipo POST .",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "roles",
    "id": "N1-P4-Q11",
    "nucleus": 1,
    "partial": 4,
    "number": 11,
    "question": "En Spring Security, authentication.getAuthorities() devuelve los roles del usuario autenticado.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "A través de claves de encriptación",
      "Mediante roles y permisos",
      "Solo mediante autenticación de usuarios",
      "Configurando archivos XML"
    ],
    "correct": 1,
    "answer": "Mediante roles y permisos",
    "id": "N1-P4-Q12",
    "nucleus": 1,
    "partial": 4,
    "number": 12,
    "question": "¿Cómo se definen los permisos en Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "nombre",
    "id": "N1-P4-Q13",
    "nucleus": 1,
    "partial": 4,
    "number": 13,
    "question": "En la vista HTML, la expresión th:text=\"${category.name}\" sirve para mostrar el nombre de la categoría.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "@PreAuthorize",
      "@Component",
      "@RequestMapping",
      "@Service"
    ],
    "correct": 0,
    "answer": "@PreAuthorize",
    "id": "N1-P4-Q14",
    "nucleus": 1,
    "partial": 4,
    "number": 14,
    "question": "¿Qué anotación se usa para definir seguridad a nivel de método en Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Permite múltiples sesiones simultáneas por usuario",
      "Impide que los usuarios inicien sesión",
      "Permite definir políticas como la expiración de sesión",
      "No afecta el inicio de sesión de usuarios"
    ],
    "correct": 2,
    "answer": "Permite definir políticas como la expiración de sesión",
    "id": "N1-P4-Q15",
    "nucleus": 1,
    "partial": 4,
    "number": 15,
    "question": "¿Cuál es una característica clave de la gestión de sesiones en Spring Security?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "CSRF",
      "XSS",
      "Phishing",
      "Spoofing"
    ],
    "correct": 1,
    "answer": "XSS",
    "id": "N1-P4-Q16",
    "nucleus": 1,
    "partial": 4,
    "number": 16,
    "question": "¿Qué ataque ocurre cuando un atacante inyecta código malicioso en una página web?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Sistema de encriptación de contraseñas",
      "Restricción de acceso a recursos entre dominios",
      "Un método de autenticación",
      "Un tipo de sesión en Spring Security"
    ],
    "correct": 1,
    "answer": "Restricción de acceso a recursos entre dominios",
    "id": "N1-P4-Q17",
    "nucleus": 1,
    "partial": 4,
    "number": 17,
    "question": "¿Qué significa CORS en el contexto de seguridad?",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "nombre",
    "id": "N1-P4-Q18",
    "nucleus": 1,
    "partial": 4,
    "number": 18,
    "question": "El atributo th:field=\"*{name}\" en el formulario HTML se usa para enlazar el campo name del objeto product.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "eliminar",
    "id": "N1-P4-Q19",
    "nucleus": 1,
    "partial": 4,
    "number": 19,
    "question": "En ProductController, el método deleteProduct(Long id) se asocia con la anotación @PostMapping(\"/product/delete/{id}\") y se usa para eliminar un producto.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "text",
    "answer": "inyección",
    "id": "N1-P4-Q20",
    "nucleus": 1,
    "partial": 4,
    "number": 20,
    "question": "En Spring, la anotación @Autowired se usa para la inyección automática de dependencias.",
    "source": "EVALUACIÓN PARCIAL 4_ NUCLEO 1 _ ITSQMET.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Establecer reglas de seguridad",
      "Consultar y manipular los datos almacenados",
      "Gestionar el almacenamiento físico",
      "Establecer relaciones entre tablas"
    ],
    "correct": 1,
    "answer": "Consultar y manipular los datos almacenados",
    "id": "N2-P1-Q1",
    "nucleus": 2,
    "partial": 1,
    "number": 1,
    "question": "¿Cuál es la función principal de SQL?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "DCL",
      "TCL",
      "DML",
      "DDL"
    ],
    "correct": 3,
    "answer": "DDL",
    "id": "N2-P1-Q2",
    "nucleus": 2,
    "partial": 1,
    "number": 2,
    "question": "En SQL, ¿Qué tipo de comando es \"CREATE TABLE\"?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "La estructura de almacenamiento de los datos",
      "El diseño visual de las tablas",
      "El diseño de las consultas SQL para acceder a los datos",
      "La organización de los datos sin detalles de implementación"
    ],
    "correct": 3,
    "answer": "La organización de los datos sin detalles de implementación",
    "id": "N2-P1-Q3",
    "nucleus": 2,
    "partial": 1,
    "number": 3,
    "question": "¿Qué se entiende por diseño conceptual en bases de datos?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "En el diseño físico de los datos",
      "En la programación de las consultas SQL",
      "En el diseño conceptual",
      "En la administración de la base de datos"
    ],
    "correct": 2,
    "answer": "En el diseño conceptual",
    "id": "N2-P1-Q4",
    "nucleus": 2,
    "partial": 1,
    "number": 4,
    "question": "¿En qué etapa del diseño de bases de datos se usa un modelo Entidad-Relación (ER)?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "En el diseño conceptual",
      "En la administración de la base de datos",
      "En la programación de las consultas SQL",
      "En el diseño físico de los datos"
    ],
    "correct": 0,
    "answer": "En el diseño conceptual",
    "id": "N2-P1-Q5",
    "nucleus": 2,
    "partial": 1,
    "number": 5,
    "question": "¿En qué etapa del diseño de bases de datos se usa un modelo Entidad-Relación (ER)?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "El proceso de organizar los datos para mejorar su consistencia y evitar duplicados",
      "El proceso de eliminar la redundancia de los datos mediante la organización de tablas",
      "El proceso de dividir los datos en tablas relacionadas para optimizar el almacenamiento",
      "El proceso de optimizar las consultas mediante la reorganización de las tablas"
    ],
    "correct": 0,
    "answer": "El proceso de organizar los datos para mejorar su consistencia y evitar duplicados",
    "id": "N2-P1-Q6",
    "nucleus": 2,
    "partial": 1,
    "number": 6,
    "question": "¿Qué es la normalización en bases de datos?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "CHECK",
      "DEFAULT",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "correct": 2,
    "answer": "PRIMARY KEY",
    "id": "N2-P1-Q7",
    "nucleus": 2,
    "partial": 1,
    "number": 7,
    "question": "En SQL, ¿Cuál de las siguientes claves impide valores duplicados en una columna?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "FILTER"
    ],
    "correct": 0,
    "answer": "WHERE",
    "id": "N2-P1-Q8",
    "nucleus": 2,
    "partial": 1,
    "number": 8,
    "question": "En SQL, ¿Qué operador se usa para filtrar datos en una consulta?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Una tabla está en 3FN si cada atributo tiene valores únicos y no hay claves candidatas adicionales",
      "Una tabla está en 3FN si está en 2FN y todos sus atributos dependen funcionalmente de la clave primaria, sin depender de atributos no clave",
      "Una tabla está en 3FN si no tiene dependencias transitivas ni claves foráneas",
      "Para que una tabla esté en 3FN, debe evitarse completamente la redundancia de datos, incluso si afecta la eficiencia"
    ],
    "correct": 1,
    "answer": "Una tabla está en 3FN si está en 2FN y todos sus atributos dependen funcionalmente de la clave primaria, sin depender de atributos no clave",
    "id": "N2-P1-Q9",
    "nucleus": 2,
    "partial": 1,
    "number": 9,
    "question": "¿Cuál de las siguientes afirmaciones es correcta respecto a la Tercera Forma Normal (3FN)?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "TRUNCATE es DML porque borra filas sin condiciones.",
      "ALTER TABLE es DDL porque cambia la estructura de la tabla.",
      "INSERT y DELETE son DDL porque modifican los registros.",
      "DROP TABLE es DML porque elimina datos de la base."
    ],
    "correct": 1,
    "answer": "ALTER TABLE es DDL porque cambia la estructura de la tabla",
    "id": "N2-P1-Q10",
    "nucleus": 2,
    "partial": 1,
    "number": 10,
    "question": "Considerando las diferencias entre las sentencias DDL y DML en SQL, ¿Cuál de las siguientes afirmaciones es correcta?",
    "source": "NUCLEO 2 PRUEBA 1.pdf"
  },
  {
    "type": "choice",
    "options": [
      "CREATE TRIGGER control_salario BEFORE INSERT ON empleados FOR EACH ROW IF NEW.salario < 1000 THEN SET NEW.salario = 0; END;",
      "CREATE TRIGGER control_salario BEFORE INSERT ON empleados FOR EACH ROW IF NEW.salario < 1000 THEN SET NEW.salario = 1000; END;",
      "CREATE TRIGGER control_salario BEFORE INSERT ON empleados FOR EACH ROW IF NEW.salario < 1000 THEN INSERT INTO LogSalarios VALUES (NEW.id, 'Salario no permitido'); END;",
      "CREATE TRIGGER control_salario BEFORE INSERT ON empleados FOR EACH ROW IF NEW.salario < 1000 THEN DELETE FROM empleados WHERE id = NEW.id; END;"
    ],
    "correct": 1,
    "answer": "CREATE TRIGGER control_salario BEFORE INSERT ON empleados FOR EACH ROW IF NEW.salario < 1000 THEN SET NEW.salario = 1000; END;",
    "id": "N2-P2-Q1",
    "nucleus": 2,
    "partial": 2,
    "number": 1,
    "question": "¿Cómo podría evitar que un empleado sea insertado con un salario inferior a 1000 utilizando un trigger?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "CREATE PROCEDURE nombre_procedimiento (parametros) BEGIN ... END;",
      "CREATE PROCEDURE nombre_procedimiento (parametros) SET ...;",
      "CREATE PROCEDURE nombre_procedimiento () AS BEGIN ... END;",
      "CREATE PROCEDURE nombre_procedimiento BEGIN ... END;"
    ],
    "correct": 2,
    "answer": "CREATE PROCEDURE nombre_procedimiento () AS BEGIN ... END;",
    "id": "N2-P2-Q2",
    "nucleus": 2,
    "partial": 2,
    "number": 2,
    "question": "¿Cuál es la sintaxis correcta para crear un procedimiento almacenado en SQL?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Son muy fáciles de crear y no requieren ningún tipo de monitoreo.",
      "Pueden hacer que la base de datos sea más lenta si no se usan correctamente.",
      "Aumentan el tamaño de las tablas.",
      "Solo pueden ser utilizados por los administradores de la base de datos."
    ],
    "correct": 1,
    "answer": "Pueden hacer que la base de datos sea más lenta si no se usan correctamente",
    "id": "N2-P2-Q3",
    "nucleus": 2,
    "partial": 2,
    "number": 3,
    "question": "¿Cuál es la principal desventaja de usar triggers?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "CREATE TRIGGER actualizar_salario BEFORE INSERT ON empleados FOR EACH ROW SET NEW.fecha_actualizacion = CURRENT_DATE;",
      "CREATE TRIGGER actualizar_salario BEFORE UPDATE ON empleados FOR EACH ROW SET NEW.fecha_actualizacion = CURRENT_DATE;",
      "CREATE TRIGGER actualizar_salario AFTER UPDATE ON empleados FOR EACH ROW SET NEW.fecha_actualizacion = CURRENT_DATE;",
      "CREATE TRIGGER actualizar_salario AFTER UPDATE ON empleados FOR EACH ROW SET OLD.fecha_actualizacion = CURRENT_DATE;"
    ],
    "correct": 1,
    "answer": "CREATE TRIGGER actualizar_salario BEFORE UPDATE ON empleados FOR EACH ROW SET NEW.fecha_actualizacion = CURRENT_DATE;",
    "id": "N2-P2-Q4",
    "nucleus": 2,
    "partial": 2,
    "number": 4,
    "question": "Trigger para asegurar que cada vez que se actualice el salario de un empleado, se registre la fecha de la actualización",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "La transacción se ejecuta de nuevo desde el principio.",
      "El COMMIT se omite y no ocurre ningún cambio en la base de datos.",
      "El COMMIT eliminará todas las tablas involucradas en la transacción.",
      "La transacción no puede ser finalizada nuevamente, y el COMMIT no tendrá efecto."
    ],
    "correct": 3,
    "answer": "La transacción no puede ser finalizada nuevamente, y el COMMIT no tendrá efecto",
    "id": "N2-P2-Q5",
    "nucleus": 2,
    "partial": 2,
    "number": 5,
    "question": "¿Qué sucede si se intenta ejecutar un COMMIT dentro de una transacción que ya ha sido finalizada?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Un tipo de índice optimizado para mejorar el rendimiento de consultas complejas.",
      "Una función que permite ejecutar múltiples instrucciones SQL dentro de una transacción.",
      "Un conjunto de instrucciones SQL que se almacenan en la base de datos y pueden ser ejecutadas en cualquier momento, sin necesidad de reescribirlas.",
      "Un conjunto de comandos SQL almacenados en el servidor para ser ejecutados bajo demanda por un administrador de bases de datos."
    ],
    "correct": 2,
    "answer": "Un conjunto de instrucciones SQL que se almacenan en la base de datos y pueden ser ejecutadas en cualquier momento, sin necesidad de reescribirlas",
    "id": "N2-P2-Q6",
    "nucleus": 2,
    "partial": 2,
    "number": 6,
    "question": "¿Qué es un procedimiento almacenado en SQL?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Permitir la modificación directa de los datos subyacentes sin restricciones.",
      "Proporcionar una manera de simplificar consultas complejas al encapsular una consulta SQL dentro de un objeto reutilizable.",
      "Mejorar el rendimiento de las consultas mediante el almacenamiento en caché de los resultados.",
      "Optimizar las operaciones de inserción y eliminación de datos mediante el uso de índices."
    ],
    "correct": 1,
    "answer": "Proporcionar una manera de simplificar consultas complejas al encapsular una consulta SQL dentro de un objeto reutilizable",
    "id": "N2-P2-Q7",
    "nucleus": 2,
    "partial": 2,
    "number": 7,
    "question": "¿Cuál es la principal función de una vista en SQL?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Mejoran el rendimiento de las consultas al ejecutar varias instrucciones a la vez.",
      "Permiten agrupar múltiples instrucciones SQL y asegurar que todas se ejecuten correctamente antes de confirmar los cambios.",
      "Permiten ejecutar procedimientos almacenados sin la necesidad de esperar por la confirmación de cambios.",
      "Evitan que los usuarios modifiquen datos de forma simultánea en la base de datos."
    ],
    "correct": 1,
    "answer": "Permiten agrupar múltiples instrucciones SQL y asegurar que todas se ejecuten correctamente antes de confirmar los cambios",
    "id": "N2-P2-Q8",
    "nucleus": 2,
    "partial": 2,
    "number": 8,
    "question": "¿Cuál es la ventaja principal de utilizar transacciones en SQL?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Una operación que devuelve todas las filas de ambas tablas, incluyendo las que no tienen coincidencias.",
      "Una operación que se utiliza para realizar una consulta recursiva entre tablas.",
      "Una operación que crea una nueva tabla basada en la unión de las dos tablas involucradas.",
      "Una operación que devuelve solo las filas que tienen coincidencias en ambas tablas."
    ],
    "correct": 3,
    "answer": "Una operación que devuelve solo las filas que tienen coincidencias en ambas tablas",
    "id": "N2-P2-Q9",
    "nucleus": 2,
    "partial": 2,
    "number": 9,
    "question": "¿Qué es un \"INNER JOIN\" en SQL?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Unirlas utilizando INNER JOIN sobre la columna cita_id.",
      "Unirlas utilizando LEFT JOIN sobre la columna paciente_id.",
      "Usando FULL OUTER JOIN sobre la columna paciente_id para obtener todos los pacientes y todas las citas, independientemente de que estén asociadas o no.",
      "Unirlas utilizando RIGHT JOIN sobre la columna paciente_id."
    ],
    "correct": 1,
    "answer": "Unirlas utilizando LEFT JOIN sobre la columna paciente_id",
    "id": "N2-P2-Q10",
    "nucleus": 2,
    "partial": 2,
    "number": 10,
    "question": "¿Cómo se debe unir la tabla Paciente con la tabla Cita en un JOIN para obtener todos los pacientes junto con las citas que tengan (si existen)?",
    "source": "NUCLEO 2 PRUEBA 2.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Durabilidad",
      "Aislamiento",
      "Consistencia",
      "Atomicidad"
    ],
    "correct": 3,
    "answer": "Atomicidad",
    "id": "N2-P3-Q1",
    "nucleus": 2,
    "partial": 3,
    "number": 1,
    "question": "¿Qué característica garantiza una transacción en una base de datos para asegurar que todos los cambios se realicen correctamente o ninguno se realice?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "ALLOW READ TO usuario",
      "SET PRIVILEGES TO usuario",
      "GRANT READ ON tabla TO usuario",
      "GRANT SELECT ON tabla TO usuario"
    ],
    "correct": 3,
    "answer": "GRANT SELECT ON tabla TO usuario",
    "id": "N2-P3-Q2",
    "nucleus": 2,
    "partial": 3,
    "number": 2,
    "question": "¿Qué instrucción SQL se usa para otorgar privilegios de lectura a un usuario sobre una tabla específica?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Un privilegio de \"DELETE\" permite al usuario eliminar filas de cualquier tabla.",
      "Los privilegios no afectan el rendimiento de la base de datos.",
      "Los privilegios deben ser gestionados cuidadosamente para evitar accesos no autorizados.",
      "Los privilegios deben ser otorgados solo a los administradores."
    ],
    "correct": 2,
    "answer": "Los privilegios deben ser gestionados cuidadosamente para evitar accesos no autorizados",
    "id": "N2-P3-Q3",
    "nucleus": 2,
    "partial": 3,
    "number": 3,
    "question": "¿Cuál de las siguientes afirmaciones es cierta sobre los privilegios en una base de datos?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Reducir el tamaño de la base de datos.",
      "Asegurar que las transacciones sean atómicas.",
      "Mejorar el rendimiento de las consultas, especialmente en búsquedas y filtros.",
      "Permitir la duplicación de registros."
    ],
    "correct": 2,
    "answer": "Mejorar el rendimiento de las consultas, especialmente en búsquedas y filtros",
    "id": "N2-P3-Q4",
    "nucleus": 2,
    "partial": 3,
    "number": 4,
    "question": "¿Cuál es el principal beneficio de utilizar índices en una base de datos?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "DROP PRIVILEGES ON empleados FOR usuario1;",
      "REMOVE SELECT, INSERT FROM usuario1 ON empleados;",
      "DENY SELECT, INSERT ON empleados TO usuario1;",
      "REVOKE ALL PRIVILEGES ON empleados FROM usuario1;"
    ],
    "correct": 3,
    "answer": "REVOKE ALL PRIVILEGES ON empleados FROM usuario1;",
    "id": "N2-P3-Q5",
    "nucleus": 2,
    "partial": 3,
    "number": 5,
    "question": "¿Qué comando SQL utilizarías para eliminar los privilegios de un usuario llamado usuario1 sobre la tabla empleados?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Bases de datos orientadas a columnas.",
      "Bases de datos orientadas a documentos.",
      "Bases de datos para grafos",
      "Bases de datos orientadas a grafos."
    ],
    "correct": 1,
    "answer": "Bases de datos orientadas a documentos",
    "id": "N2-P3-Q6",
    "nucleus": 2,
    "partial": 3,
    "number": 6,
    "question": "¿Qué tipo de base de datos NoSQL se utiliza principalmente para almacenar documentos como JSON?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "db.clientes.find()",
      "db.clientes.select()",
      "db.clientes.getAll()",
      "db.clientes.findAll()"
    ],
    "correct": 0,
    "answer": "db.clientes.find()",
    "id": "N2-P3-Q7",
    "nucleus": 2,
    "partial": 3,
    "number": 7,
    "question": "¿Qué método en MongoDB se utiliza para mostrar todos los documentos en una colección llamada \"clientes\"? db.clientes.______",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "db.collection.select({ campo: valor })",
      "db.collection.query({ campo: valor })",
      "db.collection.find({ campo: valor })",
      "db.collection.filter({ campo: valor })"
    ],
    "correct": 2,
    "answer": "db.collection.find({ campo: valor })",
    "id": "N2-P3-Q8",
    "nucleus": 2,
    "partial": 3,
    "number": 8,
    "question": "¿Cómo se realiza un filtro con condiciones en MongoDB?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Las bases de datos NoSQL permiten relaciones complejas entre entidades, lo que las hace más útiles para grandes aplicaciones empresariales.",
      "Las bases de datos NoSQL son más eficientes en operaciones de agregación y complejas uniones de datos.",
      "Las bases de datos NoSQL permiten una mayor flexibilidad en la estructura de los datos y escalan horizontalmente con facilidad.",
      "Las bases de datos NoSQL son mejores para realizar transacciones complejas de múltiples tablas."
    ],
    "correct": 2,
    "answer": "Las bases de datos NoSQL permiten una mayor flexibilidad en la estructura de los datos y escalan horizontalmente con facilidad",
    "id": "N2-P3-Q9",
    "nucleus": 2,
    "partial": 3,
    "number": 9,
    "question": "¿Qué ventaja tiene usar un modelo de base de datos NoSQL sobre un modelo relacional en una aplicación que requiere alta escalabilidad y manejo de datos no estructurados?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Es el nombre de la colección en la que se almacena el documento.",
      "Es un identificador único generado automáticamente para cada documento.",
      "Es un tipo de dato utilizado para almacenar fechas.",
      "Es una clave foránea que relaciona dos colecciones."
    ],
    "correct": 1,
    "answer": "Es un identificador único generado automáticamente para cada documento",
    "id": "N2-P3-Q10",
    "nucleus": 2,
    "partial": 3,
    "number": 10,
    "question": "¿Qué representa el ObjectId en MongoDB?",
    "source": "NUCLEO 2 PRUEBA 3.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Agrupa los elementos de un array.",
      "Ordena los documentos de una colección.",
      "Filtra los documentos que contienen un array",
      "Desestructura un array para convertir sus elementos en documentos individuales."
    ],
    "correct": 3,
    "answer": "Desestructura un array para convertir sus elementos en documentos individuales",
    "id": "N2-P4-Q1",
    "nucleus": 2,
    "partial": 4,
    "number": 1,
    "question": "¿Qué hace el operador $unwind en MongoDB?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "$set",
      "$gt",
      "$unwind",
      "$addFields"
    ],
    "correct": 1,
    "answer": "$gt",
    "id": "N2-P4-Q2",
    "nucleus": 2,
    "partial": 4,
    "number": 2,
    "question": "¿Cuál de los siguientes es un operador de comparación en MongoDB?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "\"medico_info[0].nombre\"",
      "\"medico_info[0]['nombre']\"",
      "\"medico_info.nombre[0]\"",
      "\"medico_info.nombre\""
    ],
    "correct": 3,
    "answer": "\"medico_info.nombre\"",
    "id": "N2-P4-Q3",
    "nucleus": 2,
    "partial": 4,
    "number": 3,
    "question": "¿Cómo podemos acceder al campo nombre de un array info_medico dentro de un documento?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "$lookup",
      "$group",
      "$unwind",
      "$match"
    ],
    "correct": 0,
    "answer": "$lookup",
    "id": "N2-P4-Q4",
    "nucleus": 2,
    "partial": 4,
    "number": 4,
    "question": "¿Qué operador se utiliza para unir dos colecciones en MongoDB?$match",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Especifica el campo de la colección de destino.",
      "Filtra los resultados de la unión",
      "Define el nombre del campo resultante",
      "Especifica el campo que se va a comparar con el campo de la colección fuente."
    ],
    "correct": 3,
    "answer": "Especifica el campo que se va a comparar con el campo de la colección fuente",
    "id": "N2-P4-Q5",
    "nucleus": 2,
    "partial": 4,
    "number": 5,
    "question": "En una operación de $lookup, ¿Qué hace el campo localField?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Usando $group",
      "Usando $match",
      "Usando $set",
      "Usando $addToSet"
    ],
    "correct": 2,
    "answer": "Usando $set",
    "id": "N2-P4-Q6",
    "nucleus": 2,
    "partial": 4,
    "number": 6,
    "question": "¿Cómo se puede actualizar un campo específico de un documento sin modificar los demás?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Usando $unset",
      "Usando $delete",
      "Usando $drop",
      "Usando $remove"
    ],
    "correct": 0,
    "answer": "Usando $unset",
    "id": "N2-P4-Q7",
    "nucleus": 2,
    "partial": 4,
    "number": 7,
    "question": "¿Cómo podría eliminar una clave de todos los documentos en una colección?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Devuelve las citas médicas que no tienen motivo",
      "Devuelve todas las citas médicas con motivo diferente de \"Consulta\" y \"Chequeo\"",
      "Devuelve todas las citas médicas con el motivo \"Consulta\" o \"Chequeo\"",
      "Devuelve las citas médicas con el motivo \"Consulta\" y el médico asociado a \"Chequeo\""
    ],
    "correct": 2,
    "answer": "Devuelve todas las citas médicas con el motivo \"Consulta\" o \"Chequeo\"",
    "id": "N2-P4-Q8",
    "nucleus": 2,
    "partial": 4,
    "number": 8,
    "question": "¿Qué hace la siguiente consulta de MongoDB? db.citas_medicas.find({ \"motivo\": { \"$in\": [\"Consulta\", \"Chequeo\"] } })",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "Todas las colecciones deben tener un esquema fijo.",
      "Cada colección solo puede contener documentos con claves predefinidas.",
      "En MongoDB, las colecciones no pueden ser indexadas.",
      "Una colección puede contener documentos con estructuras diferentes."
    ],
    "correct": 3,
    "answer": "Una colección puede contener documentos con estructuras diferentes",
    "id": "N2-P4-Q9",
    "nucleus": 2,
    "partial": 4,
    "number": 9,
    "question": "¿Cuál de las siguientes afirmaciones es correcta sobre las colecciones en MongoDB?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  },
  {
    "type": "choice",
    "options": [
      "$orderby",
      "$project",
      "$order",
      "$sort"
    ],
    "correct": 3,
    "answer": "$sort",
    "id": "N2-P4-Q10",
    "nucleus": 2,
    "partial": 4,
    "number": 10,
    "question": "¿Qué operador permite ordenar documentos dentro de una agregación?",
    "source": "NUCLEO 2 PRUEBA 4.pdf"
  }
,
  {"type":"choice","options":["Google Sheets o Excel","Adobe Photoshop o Illustrator","Microsoft Word o Google Docs","VS Code o Android Studio"],"correct":3,"answer":"VS Code o Android Studio","id":"N3-P1-Q1","nucleus":3,"partial":1,"number":1,"question":"¿Qué herramientas se recomiendan como editores de código para el desarrollo?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Botones, formularios y listas","Solo imágenes estáticas","Exclusivamente colores de fondo","Únicamente textos planos"],"correct":0,"answer":"Botones, formularios y listas","id":"N3-P1-Q2","nucleus":3,"partial":1,"number":2,"question":"¿Qué elementos de la interfaz representan los componentes en una aplicación?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["La eliminación de las props heredadas","La cierre automático de la aplicación","La conversión del componente a lenguaje nativo","La re-renderización del componente para reflejar los cambios"],"correct":3,"answer":"La re-renderización del componente para reflejar los cambios","id":"N3-P1-Q3","nucleus":3,"partial":1,"number":3,"question":"¿Qué efecto provocan los cambios en el estado de un componente?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Porque son exclusivos para iOS","Por su simplicidad y eficiencia","Porque requieren siempre el uso de clases","Por su complejidad y robustez"],"correct":1,"answer":"Por su simplicidad y eficiencia","id":"N3-P1-Q4","nucleus":3,"partial":1,"number":4,"question":"¿Por qué se utilizan comúnmente los componentes funcionales?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Comprender y cambiar los estados en el dispositivo móvil","Compilar la aplicación para diferentes plataformas automáticamente","Diseñar la interfaz gráfica sin escribir código","Conectar automáticamente con cualquier API externa"],"correct":0,"answer":"Comprender y cambiar los estados en el dispositivo móvil","id":"N3-P1-Q5","nucleus":3,"partial":1,"number":5,"question":"¿Qué funcionalidad principal permiten los Hooks en React Native?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Animaciones SVG","Modales","Realidad Aumentada","Gráficos 3D"],"correct":1,"answer":"Modales","id":"N3-P1-Q6","nucleus":3,"partial":1,"number":6,"question":"¿Qué elemento de interfaz se menciona junto a las imágenes en la implementación práctica?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Carousel y Slider","Drawer y SideBar","Stack y BottomTab","Modal y Popup"],"correct":2,"answer":"Stack y BottomTab","id":"N3-P1-Q7","nucleus":3,"partial":1,"number":7,"question":"¿Qué sistemas de navegación se mencionan para organizar la estructura de la aplicación?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["Del componente hijo","De la base de datos local","Del sistema operativo","Del componente padre"],"correct":3,"answer":"Del componente padre","id":"N3-P1-Q9","nucleus":3,"partial":1,"number":9,"question":"¿De qué componente reciben información las props principalmente?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["C","Python y XML","Java y Kotlin","JavaScript y JSX"],"correct":3,"answer":"JavaScript y JSX","id":"N3-P1-Q10","nucleus":3,"partial":1,"number":10,"question":"¿Qué lenguajes se utilizan principalmente para crear componentes en React Native?","source":"NUCLEO 3 PRUEBA 1.pdf"},
  {"type":"choice","options":["FlatList","DataGrid","ScrollView","ListView"],"correct":0,"answer":"FlatList","id":"N3-P2-Q2","nucleus":3,"partial":2,"number":2,"question":"¿Qué componente se menciona para mostrar listas de datos obtenidos de una API de manera eficiente?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["Un protocolo HTTP","Una API","Un formato JSON","Un SDK"],"correct":1,"answer":"Una API","id":"N3-P2-Q3","nucleus":3,"partial":2,"number":3,"question":"¿Qué es un conjunto de reglas que permiten que una aplicación se comunique con otro servicio?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["Google Maps API y YouTube Data API","OpenWeather y NewsAPI","Twitter API y Facebook Graph API","Stripe API y PayPal API"],"correct":1,"answer":"OpenWeather y NewsAPI","id":"N3-P2-Q4","nucleus":3,"partial":2,"number":4,"question":"¿Qué APIs públicas se mencionan como ejemplo práctico para consumir datos en el taller?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["XML exclusivamente","CSV","TXT plano","JSON"],"correct":3,"answer":"JSON","id":"N3-P2-Q5","nucleus":3,"partial":2,"number":5,"question":"¿Qué formato de datos es comúnmente utilizado por las APIs para intercambiar información?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["Docker Hub","Postman","Firebase Console","GitHub Desktop"],"correct":1,"answer":"Postman","id":"N3-P2-Q6","nucleus":3,"partial":2,"number":6,"question":"¿Qué herramienta se recomienda para probar APIs y visualizar respuestas en formato JSON?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["DELETE","POST","GET","PUT"],"correct":2,"answer":"GET","id":"N3-P2-Q7","nucleus":3,"partial":2,"number":7,"question":"¿Qué método HTTP se utiliza específicamente para solicitar datos desde un servidor?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["POST","FETCH","REMOVE","GET"],"correct":0,"answer":"POST","id":"N3-P2-Q8","nucleus":3,"partial":2,"number":8,"question":"¿Qué método HTTP se emplea para enviar nuevos datos al servidor para su procesamiento?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["TCP","HTTP","FTP","SMTP"],"correct":1,"answer":"HTTP","id":"N3-P2-Q9","nucleus":3,"partial":2,"number":9,"question":"¿Qué protocolo se utiliza para la transferencia de datos entre cliente y servidor en la web?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["fetch","http-client exclusivo de terceros","request-native especializado","axios como única opción disponible"],"correct":0,"answer":"fetch","id":"N3-P2-Q10","nucleus":3,"partial":2,"number":10,"question":"¿Qué método o biblioteca se utiliza en React Native para realizar solicitudes HTTP?","source":"NUCLEO 3 PRUEBA 2.pdf"},
  {"type":"choice","options":["this.router.navigate(['/home'])","router.go('/home')","navigate('/home')","this.route.to('/home')"],"correct":0,"answer":"this.router.navigate(['/home'])","id":"N4-P1-Q1","nucleus":4,"partial":1,"number":1,"question":"¿Cómo puedes redirigir de manera programática a otra ruta?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["Solo puede ser usado en rutas hijas","Solo funciona con Angular Material","Se utiliza únicamente para servicios HTTP","No necesita ser declarado en un módulo"],"correct":3,"answer":"No necesita ser declarado en un módulo","id":"N4-P1-Q2","nucleus":4,"partial":1,"number":2,"question":"¿Cuál es la principal característica de un componente standalone?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["Enlaza directamente un evento del DOM","Permite crear rutas dinámicas","Sirve para importar módulos","Inserta el valor de una variable en la vista HTML"],"correct":3,"answer":"Inserta el valor de una variable en la vista HTML","id":"N4-P1-Q3","nucleus":4,"partial":1,"number":3,"question":"¿Qué es la interpolación en Angular?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["app-routing.module.ts","main.ts","router.config.ts","app.component.ts"],"correct":0,"answer":"app-routing.module.ts","id":"N4-P1-Q4","nucleus":4,"partial":1,"number":4,"question":"¿En qué archivo comúnmente defines las rutas de una aplicación Angular?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["{ path: 'home', standalone: HomeComponent }","{ route: 'home', component: HomeComponent }","{ path: 'home', view: HomeComponent }","{ path: 'home', component: HomeComponent }"],"correct":3,"answer":"{ path: 'home', component: HomeComponent }","id":"N4-P1-Q5","nucleus":4,"partial":1,"number":5,"question":"¿Cuál es la forma correcta de definir una ruta básica?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["CommonModule","FormsModule","RouterModule","HttpClientModule"],"correct":2,"answer":"RouterModule","id":"N4-P1-Q6","nucleus":4,"partial":1,"number":6,"question":"¿Qué módulo de Angular es necesario para configurar rutas?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["{{ click: doSomething() }}","click=\"doSomething()\"","click: \"doSomething()\"","(click)=\"doSomething()\""],"correct":3,"answer":"(click)=\"doSomething()\"","id":"N4-P1-Q8","nucleus":4,"partial":1,"number":8,"question":"¿Cómo se implementa correctamente un event binding en Angular?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["singleton: true","modular: false","independent: true","standalone: true"],"correct":3,"answer":"standalone: true","id":"N4-P1-Q9","nucleus":4,"partial":1,"number":9,"question":"¿Qué atributo es necesario en el decorador @Component para definir un componente standalone?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["[[ myVar ]]","{{ myVar }}","({{ myVar }})","${{ myVar }}"],"correct":1,"answer":"{{ myVar }}","id":"N4-P1-Q10","nucleus":4,"partial":1,"number":10,"question":"¿Cuál es la sintaxis correcta de interpolación en Angular?","source":"NUCLEO 4 PRUEBA 1.pdf"},
  {"type":"choice","options":["addDoc()","getDocs()","collectionData()","docData()"],"correct":3,"answer":"docData()","id":"N4-P2-Q3","nucleus":4,"partial":2,"number":3,"question":"¿Qué método se utiliza para obtener un documento específico de Firestore?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["app.routes.ts.","app.providers.ts.","app.config.ts.","app.component.ts."],"correct":2,"answer":"app.config.ts.","id":"N4-P2-Q4","nucleus":4,"partial":2,"number":4,"question":"¿Dónde se configuran los proveedores en Angular?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["ngForm","formControl","ngModel","formGroup"],"correct":3,"answer":"formGroup","id":"N4-P2-Q5","nucleus":4,"partial":2,"number":5,"question":"¿Qué directiva se utiliza para manejar formularios reactivos en Angular?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["CanDeactivate","CanLoad","CanActivate","CanMatch"],"correct":0,"answer":"CanDeactivate","id":"N4-P2-Q7","nucleus":4,"partial":2,"number":7,"question":"¿Qué tipo de guardián se utiliza para evitar que un usuario abandone una página sin guardar cambios?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["app.routes.ts","app.route-service.ts","app.module.ts","app.config.ts"],"correct":0,"answer":"app.routes.ts","id":"N4-P2-Q8","nucleus":4,"partial":2,"number":8,"question":"¿Dónde se definen las rutas en angular?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["signOut()","signInWithGoogle()","signInWithPopup()","signInWithEmailAndPassword()"],"correct":2,"answer":"signInWithPopup()","id":"N4-P2-Q9","nucleus":4,"partial":2,"number":9,"question":"¿Qué método de Firebase se utiliza para autenticar un usuario con Google con Angular?","source":"NUCLEO 4 PRUEBA 2.pdf"},
  {"type":"choice","options":["redirect()","navigateTo()","navigate()","goToRoute()"],"correct":2,"answer":"navigate()","id":"N4-P2-Q10","nucleus":4,"partial":2,"number":10,"question":"¿Qué método se utiliza para navegar a una ruta programáticamente en Angular?","source":"NUCLEO 4 PRUEBA 2.pdf"}
,
  {"type":"choice","options":["React Native","MongoDB","PostgreSQL","Docker Compose"],"correct":0,"answer":"React Native","id":"N3-G5-Q1","nucleus":3,"partial":0,"number":1,"question":"¿Qué tecnología permite desarrollar interfaces móviles mediante componentes reutilizables?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Cloud Storage","Firebase Authentication","Hosting","Analytics"],"correct":1,"answer":"Firebase Authentication","id":"N3-G5-Q2","nucleus":3,"partial":0,"number":2,"question":"¿Qué servicio de Firebase permite autenticar usuarios con correo y contraseña?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Realtime Database","SQLite local","MySQL Server","Oracle"],"correct":0,"answer":"Realtime Database","id":"N3-G5-Q3","nucleus":3,"partial":0,"number":3,"question":"¿Qué base de datos de Firebase permite sincronización de datos en tiempo real?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["FTP","SMTP","HTTP/HTTPS","SSH"],"correct":2,"answer":"HTTP/HTTPS","id":"N3-G5-Q4","nucleus":3,"partial":0,"number":4,"question":"¿Qué protocolo suele utilizarse al consultar un servicio de clima mediante API REST?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["JSON","DOCX","MP3","EXE"],"correct":0,"answer":"JSON","id":"N3-G5-Q5","nucleus":3,"partial":0,"number":5,"question":"¿Qué formato de intercambio de datos suele devolver una API meteorológica?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Cambiar estilos CSS","Realizar solicitudes de red","Crear tablas SQL","Instalar paquetes"],"correct":1,"answer":"Realizar solicitudes de red","id":"N3-G5-Q6","nucleus":3,"partial":0,"number":6,"question":"¿Cuál es la función principal de una llamada fetch en JavaScript?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["El color de la interfaz","El UID del usuario","La versión de Node","El puerto USB"],"correct":1,"answer":"El UID del usuario","id":"N3-G5-Q7","nucleus":3,"partial":0,"number":7,"question":"¿Qué dato permite separar destinos guardados por usuario autenticado?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Ciudad","Contraseña","Número de tarjeta","Ruta del proyecto"],"correct":0,"answer":"Ciudad","id":"N3-G5-Q8","nucleus":3,"partial":0,"number":8,"question":"¿Qué campo es indispensable para consultar el clima de un destino por nombre?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["DELETE","GET","PATCH","CONNECT"],"correct":1,"answer":"GET","id":"N3-G5-Q9","nucleus":3,"partial":0,"number":9,"question":"¿Qué método HTTP se usa normalmente para consultar información de una API REST?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Actualizar el estado tras leer datos","Desactivar la autenticación","Eliminar el componente","Cerrar la aplicación"],"correct":0,"answer":"Actualizar el estado tras leer datos","id":"N3-G5-Q10","nucleus":3,"partial":0,"number":10,"question":"¿Qué acción permite que una lista refleje cambios en los destinos?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Duplicar lógica","Facilitar mantenimiento","Evitar toda validación","Impedir navegación"],"correct":1,"answer":"Facilitar mantenimiento","id":"N3-G5-Q11","nucleus":3,"partial":0,"number":11,"question":"¿Cuál es una ventaja de los componentes reutilizables?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Un mensaje de error comprensible","La contraseña del usuario","Una pantalla en blanco siempre","Un dato inventado"],"correct":0,"answer":"Un mensaje de error comprensible","id":"N3-G5-Q12","nucleus":3,"partial":0,"number":12,"question":"¿Qué información conviene mostrar al fallar una solicitud de clima?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Mantener acceso privado","Invalidar la sesión de usuario","Publicar datos personales","Borrar el proyecto"],"correct":1,"answer":"Invalidar la sesión de usuario","id":"N3-G5-Q13","nucleus":3,"partial":0,"number":13,"question":"¿Qué debe hacer una aplicación al cerrar sesión?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Identificar cada destino","Cambiar el idioma","Definir el tamaño de fuente","Ejecutar Android Studio"],"correct":0,"answer":"Identificar cada destino","id":"N3-G5-Q14","nucleus":3,"partial":0,"number":14,"question":"¿Para qué sirve una clave única en registros de destinos?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Formulario","Índice MongoDB","Imagen fija","Archivo APK"],"correct":0,"answer":"Formulario","id":"N3-G5-Q15","nucleus":3,"partial":0,"number":15,"question":"¿Qué elemento de interfaz permite ingresar ciudad y país?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Evitar entradas incompletas o inválidas","Desactivar Firebase","Ocultar errores de red","Duplicar usuarios"],"correct":0,"answer":"Evitar entradas incompletas o inválidas","id":"N3-G5-Q16","nucleus":3,"partial":0,"number":16,"question":"¿Cuál es el propósito de validar un formulario?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Datos privados de cada usuario","Colores del encabezado","Texto de botones públicos","Iconos del menú"],"correct":0,"answer":"Datos privados de cada usuario","id":"N3-G5-Q17","nucleus":3,"partial":0,"number":17,"question":"¿Qué información debe proteger Firebase mediante reglas de seguridad?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Elimina el registro seleccionado","Cierra Android Studio","Desinstala Expo","Reinicia el dispositivo"],"correct":0,"answer":"Elimina el registro seleccionado","id":"N3-G5-Q18","nucleus":3,"partial":0,"number":18,"question":"¿Qué hace la operación de eliminación de un destino?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Se adapta a diferentes tamaños de pantalla","Solo funciona sin internet","No utiliza componentes","Requiere teclado físico"],"correct":0,"answer":"Se adapta a diferentes tamaños de pantalla","id":"N3-G5-Q19","nucleus":3,"partial":0,"number":19,"question":"¿Qué significa que una aplicación sea responsive?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Proporciona información meteorológica dinámica","Sustituye la autenticación","Almacena contraseñas","Crea automáticamente las vistas"],"correct":0,"answer":"Proporciona información meteorológica dinámica","id":"N3-G5-Q20","nucleus":3,"partial":0,"number":20,"question":"¿Qué ventaja tiene una API externa de clima?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Integrar autenticación, destinos y clima","Crear solo una calculadora","Diseñar un logo sin funcionalidad","Instalar un sistema operativo"],"correct":0,"answer":"Integrar autenticación, destinos y clima","id":"N3-G5-Q21","nucleus":3,"partial":0,"number":21,"question":"¿Cuál es el objetivo del Taller 5 de aplicaciones móviles?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Realtime Database","Google Docs","Firebase Hosting únicamente","GitHub Issues"],"correct":0,"answer":"Realtime Database","id":"N3-G5-Q22","nucleus":3,"partial":0,"number":22,"question":"¿Qué servicio de Firebase almacena destinos y permite sincronización?","source":"Guía de estudio - nucleo3.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Angular","Flutter","Django","Laravel"],"correct":0,"answer":"Angular","id":"N4-G5-Q1","nucleus":4,"partial":0,"number":1,"question":"¿Qué framework utiliza el Taller 5 para construir el CMS web?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Firestore","SMTP","Git Bash","NPM Registry"],"correct":0,"answer":"Firestore","id":"N4-G5-Q2","nucleus":4,"partial":0,"number":2,"question":"¿Qué servicio almacena publicaciones del CMS planteado en el Taller 5?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Firebase Authentication","Google Fonts","GitHub Pages","Cloud CDN únicamente"],"correct":0,"answer":"Firebase Authentication","id":"N4-G5-Q3","nucleus":4,"partial":0,"number":3,"question":"¿Qué servicio gestiona el inicio de sesión en el CMS?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Create","Delete","Read","Logout"],"correct":0,"answer":"Create","id":"N4-G5-Q4","nucleus":4,"partial":0,"number":4,"question":"¿Qué operación permite crear una publicación nueva?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Update","Read","Login","Build"],"correct":0,"answer":"Update","id":"N4-G5-Q5","nucleus":4,"partial":0,"number":5,"question":"¿Qué operación permite modificar el contenido de una publicación existente?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Delete","Read","Compile","Navigate"],"correct":0,"answer":"Delete","id":"N4-G5-Q6","nucleus":4,"partial":0,"number":6,"question":"¿Qué operación elimina una publicación almacenada?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Ruta dinámica","Ruta sin componente","Ruta CSS","Ruta del sistema operativo"],"correct":0,"answer":"Ruta dinámica","id":"N4-G5-Q7","nucleus":4,"partial":0,"number":7,"question":"¿Qué tipo de ruta permite mostrar el detalle de una publicación por identificador?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["CanActivate","CanDeactivate","OnInit","NgFor"],"correct":0,"answer":"CanActivate","id":"N4-G5-Q8","nucleus":4,"partial":0,"number":8,"question":"¿Qué guard de Angular puede impedir acceder a administración sin autenticación?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["CanDeactivate","CanActivate","OnDestroy","RouterLink"],"correct":0,"answer":"CanDeactivate","id":"N4-G5-Q9","nucleus":4,"partial":0,"number":9,"question":"¿Qué guard se utiliza para controlar la salida de una vista con cambios pendientes?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Centralizar lógica y acceso a datos","Definir exclusivamente colores","Reemplazar el navegador","Compilar Java"],"correct":0,"answer":"Centralizar lógica y acceso a datos","id":"N4-G5-Q10","nucleus":4,"partial":0,"number":10,"question":"¿Qué responsabilidad suele tener un servicio Angular?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Compartir interfaz y comportamiento","Eliminar rutas","Desactivar Firestore","Duplicar HTML en cada vista"],"correct":0,"answer":"Compartir interfaz y comportamiento","id":"N4-G5-Q11","nucleus":4,"partial":0,"number":11,"question":"¿Para qué se utilizan componentes reutilizables en un CMS?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Lista de publicaciones","Panel de edición de administradores","Gestión de usuarios privilegiados","Configuración de roles privados"],"correct":0,"answer":"Lista de publicaciones","id":"N4-G5-Q12","nucleus":4,"partial":0,"number":12,"question":"¿Qué sección debe ser pública en el CMS del Taller 5?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Administración de publicaciones","Página pública de inicio","Listado público","Detalle público"],"correct":0,"answer":"Administración de publicaciones","id":"N4-G5-Q13","nucleus":4,"partial":0,"number":13,"question":"¿Qué sección debe protegerse mediante autenticación?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Router","HttpClient exclusivamente","Validators","FormArray"],"correct":0,"answer":"Router","id":"N4-G5-Q14","nucleus":4,"partial":0,"number":14,"question":"¿Qué herramienta de Angular permite navegar programáticamente?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Reactive Forms","RouterLink","CSS Grid","NgOptimizedImage"],"correct":0,"answer":"Reactive Forms","id":"N4-G5-Q15","nucleus":4,"partial":0,"number":15,"question":"¿Qué recurso de Angular facilita formularios con validación explícita?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["valid","pristine","untouched","disabled"],"correct":0,"answer":"valid","id":"N4-G5-Q16","nucleus":4,"partial":0,"number":16,"question":"¿Qué propiedad indica que un FormControl cumple sus validadores?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Validators.required","Validators.email","Validators.minLength(0)","Validators.nullValidator"],"correct":0,"answer":"Validators.required","id":"N4-G5-Q17","nucleus":4,"partial":0,"number":17,"question":"¿Qué validador exige que un campo tenga contenido?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["{{ variable }}","<? variable ?>","$[variable]","#{variable}"],"correct":0,"answer":"{{ variable }}","id":"N4-G5-Q18","nucleus":4,"partial":0,"number":18,"question":"¿Qué operador de plantilla Angular permite interpolar una variable?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Actualizar el listado de publicaciones","Eliminar el usuario","Cerrar sesión obligatoriamente","Desactivar rutas"],"correct":0,"answer":"Actualizar el listado de publicaciones","id":"N4-G5-Q19","nucleus":4,"partial":0,"number":19,"question":"¿Qué debe hacer el CMS tras crear una publicación en Firestore?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Su propiedad standalone","Un archivo PHP","Una base de datos SQL","Una etiqueta iframe"],"correct":0,"answer":"Su propiedad standalone","id":"N4-G5-Q20","nucleus":4,"partial":0,"number":20,"question":"¿Qué característica de un componente standalone evita declararlo en un NgModule?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Read","Delete","Update","Create"],"correct":0,"answer":"Read","id":"N4-G5-Q21","nucleus":4,"partial":0,"number":21,"question":"¿Qué operación consulta publicaciones existentes?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Acceso a funciones restringidas","Cambiar la conexión eléctrica","Eliminar validaciones","Hacer públicas las credenciales"],"correct":0,"answer":"Acceso a funciones restringidas","id":"N4-G5-Q22","nucleus":4,"partial":0,"number":22,"question":"¿Qué permite controlar un rol de administrador?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Reglas de seguridad de Firestore","Solo CSS","Un botón oculto","El título de la página"],"correct":0,"answer":"Reglas de seguridad de Firestore","id":"N4-G5-Q23","nucleus":4,"partial":0,"number":23,"question":"¿Qué mecanismo debe complementar los guards para proteger los datos de Firestore?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."},
  {"type":"choice","options":["Integrar Angular, Firebase, rutas y CRUD en un CMS","Diseñar únicamente un banner","Crear una app de escritorio Java","Instalar MongoDB sin interfaz"],"correct":0,"answer":"Integrar Angular, Firebase, rutas y CRUD en un CMS","id":"N4-G5-Q24","nucleus":4,"partial":0,"number":24,"question":"¿Cuál es la finalidad principal del Taller 5 de aplicaciones web?","source":"Guía Núcleo Aplicaciones Web.pdf · Taller 5 / conceptos de la guía · pregunta de estudio elaborada","explanation":"Pregunta de práctica basada en los contenidos de la guía; no corresponde a una pregunta oficial de evaluación."}
];

```
sstudent_management_system
├─ sms
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ pom.xml
│  ├─ src
│  │  ├─ main
│  │  │  ├─ java
│  │  │  │  └─ com
│  │  │  │     └─ example
│  │  │  │        └─ sms
│  │  │  │           ├─ config
│  │  │  │           │  └─ SecurityConfig.java
│  │  │  │           ├─ controller
│  │  │  │           │  ├─ AuthController.java
│  │  │  │           │  └─ StudentController.java
│  │  │  │           ├─ dto
│  │  │  │           │  ├─ JwtResponse.java
│  │  │  │           │  └─ LoginRequest.java
│  │  │  │           ├─ entity
│  │  │  │           │  ├─ Student.java
│  │  │  │           │  └─ User.java
│  │  │  │           ├─ repository
│  │  │  │           │  ├─ StudentRepository.java
│  │  │  │           │  └─ UserRepository.java
│  │  │  │           ├─ security
│  │  │  │           │  ├─ JwtAuthenticationFilter.java
│  │  │  │           │  ├─ JwtUtils.java
│  │  │  │           │  └─ UserDetailsServiceImpl.java
│  │  │  │           ├─ service
│  │  │  │           │  ├─ AuthService.java
│  │  │  │           │  └─ StudentService.java
│  │  │  │           ├─ SmsApplication.java
│  │  │  │           └─ util
│  │  │  │              └─ PasswordGenerator.java
│  │  │  └─ resources
│  │  │     └─ application.properties
│  │  └─ test
│  │     └─ java
│  │        └─ com
│  │           └─ example
│  │              └─ sms
│  │                 └─ SmsApplicationTests.java
│  └─ target
│     ├─ classes
│     │  ├─ application.properties
│     │  └─ com
│     │     └─ example
│     │        └─ sms
│     │           ├─ config
│     │           │  └─ SecurityConfig.class
│     │           ├─ controller
│     │           │  ├─ AuthController.class
│     │           │  └─ StudentController.class
│     │           ├─ dto
│     │           │  ├─ JwtResponse.class
│     │           │  └─ LoginRequest.class
│     │           ├─ entity
│     │           │  ├─ Student.class
│     │           │  └─ User.class
│     │           ├─ repository
│     │           │  ├─ StudentRepository.class
│     │           │  └─ UserRepository.class
│     │           ├─ security
│     │           │  ├─ JwtAuthenticationFilter.class
│     │           │  ├─ JwtUtils.class
│     │           │  └─ UserDetailsServiceImpl.class
│     │           ├─ service
│     │           │  ├─ AuthService.class
│     │           │  └─ StudentService.class
│     │           └─ SmsApplication.class
│     ├─ generated-sources
│     │  └─ annotations
│     ├─ generated-test-sources
│     │  └─ test-annotations
│     ├─ maven-status
│     │  └─ maven-compiler-plugin
│     │     ├─ compile
│     │     │  └─ default-compile
│     │     │     ├─ createdFiles.lst
│     │     │     └─ inputFiles.lst
│     │     └─ testCompile
│     │        └─ default-testCompile
│     │           ├─ createdFiles.lst
│     │           └─ inputFiles.lst
│     └─ test-classes
│        └─ com
│           └─ example
│              └─ sms
│                 └─ SmsApplicationTests.class
└─ sms-frontend
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ App.test.js
      ├─ components
      │  ├─ AddStudent.js
      │  ├─ EditStudent.js
      │  ├─ Login.js
      │  ├─ ProtectedRoute.js
      │  └─ StudentList.js
      ├─ index.css
      ├─ index.js
      ├─ logo.svg
      ├─ reportWebVitals.js
      ├─ services
      │  ├─ AuthService.js
      │  └─ StudentService.js
      └─ setupTests.js

```
```
sstudent_management_system
├─ README.md
├─ sms
│  ├─ .mvn
│  │  └─ wrapper
│  │     └─ maven-wrapper.properties
│  ├─ mvnw
│  ├─ mvnw.cmd
│  ├─ pom.xml
│  ├─ src
│  │  ├─ main
│  │  │  ├─ java
│  │  │  │  └─ com
│  │  │  │     └─ example
│  │  │  │        └─ sms
│  │  │  │           ├─ config
│  │  │  │           │  └─ SecurityConfig.java
│  │  │  │           ├─ controller
│  │  │  │           │  ├─ AuthController.java
│  │  │  │           │  └─ StudentController.java
│  │  │  │           ├─ dto
│  │  │  │           │  ├─ JwtResponse.java
│  │  │  │           │  └─ LoginRequest.java
│  │  │  │           ├─ entity
│  │  │  │           │  ├─ Student.java
│  │  │  │           │  └─ User.java
│  │  │  │           ├─ repository
│  │  │  │           │  ├─ StudentRepository.java
│  │  │  │           │  └─ UserRepository.java
│  │  │  │           ├─ security
│  │  │  │           │  ├─ JwtAuthenticationFilter.java
│  │  │  │           │  ├─ JwtUtils.java
│  │  │  │           │  └─ UserDetailsServiceImpl.java
│  │  │  │           ├─ service
│  │  │  │           │  ├─ AuthService.java
│  │  │  │           │  └─ StudentService.java
│  │  │  │           ├─ SmsApplication.java
│  │  │  │           └─ util
│  │  │  │              └─ PasswordGenerator.java
│  │  │  └─ resources
│  │  │     └─ application.properties
│  │  └─ test
│  │     └─ java
│  │        └─ com
│  │           └─ example
│  │              └─ sms
│  │                 └─ SmsApplicationTests.java
│  └─ target
│     ├─ classes
│     │  ├─ application.properties
│     │  └─ com
│     │     └─ example
│     │        └─ sms
│     │           ├─ config
│     │           │  └─ SecurityConfig.class
│     │           ├─ controller
│     │           │  ├─ AuthController.class
│     │           │  └─ StudentController.class
│     │           ├─ dto
│     │           │  ├─ JwtResponse.class
│     │           │  └─ LoginRequest.class
│     │           ├─ entity
│     │           │  ├─ Student.class
│     │           │  └─ User.class
│     │           ├─ repository
│     │           │  ├─ StudentRepository.class
│     │           │  └─ UserRepository.class
│     │           ├─ security
│     │           │  ├─ JwtAuthenticationFilter.class
│     │           │  ├─ JwtUtils.class
│     │           │  └─ UserDetailsServiceImpl.class
│     │           ├─ service
│     │           │  ├─ AuthService.class
│     │           │  └─ StudentService.class
│     │           ├─ SmsApplication.class
│     │           └─ util
│     │              └─ PasswordGenerator.class
│     ├─ generated-sources
│     │  └─ annotations
│     ├─ generated-test-sources
│     │  └─ test-annotations
│     ├─ maven-archiver
│     │  └─ pom.properties
│     ├─ maven-status
│     │  └─ maven-compiler-plugin
│     │     ├─ compile
│     │     │  └─ default-compile
│     │     │     ├─ createdFiles.lst
│     │     │     └─ inputFiles.lst
│     │     └─ testCompile
│     │        └─ default-testCompile
│     │           ├─ createdFiles.lst
│     │           └─ inputFiles.lst
│     ├─ sms-0.0.1-SNAPSHOT.jar
│     ├─ sms-0.0.1-SNAPSHOT.jar.original
│     ├─ surefire-reports
│     │  ├─ com.example.sms.SmsApplicationTests.txt
│     │  └─ TEST-com.example.sms.SmsApplicationTests.xml
│     └─ test-classes
│        └─ com
│           └─ example
│              └─ sms
│                 └─ SmsApplicationTests.class
└─ sms-frontend
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ App.test.js
      ├─ components
      │  ├─ AddStudent.js
      │  ├─ EditStudent.js
      │  ├─ Login.js
      │  ├─ ProtectedRoute.js
      │  └─ StudentList.js
      ├─ index.css
      ├─ index.js
      ├─ logo.svg
      ├─ reportWebVitals.js
      ├─ services
      │  ├─ AuthService.js
      │  └─ StudentService.js
      └─ setupTests.js

```
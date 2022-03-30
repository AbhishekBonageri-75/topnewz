FROM openjdk:11-jre
WORKDIR /usr/share/topnewz/eureka_server
COPY ./target/eureka_server-0.0.1-SNAPSHOT.jar eureka_server.jar
ENTRYPOINT ["java", "-jar", "eureka_server.jar"]

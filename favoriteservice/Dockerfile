FROM openjdk:11-jre
WORKDIR /usr/share/topnewz/favoriteservice
COPY ./target/favoriteservice-1.0.0.jar favoriteservice.jar
ENTRYPOINT ["java", "-jar", "favoriteservice.jar"]

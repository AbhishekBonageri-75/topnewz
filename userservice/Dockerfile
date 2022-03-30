FROM openjdk:11-jre
WORKDIR /usr/share/topnewz/userservice
#ENV MYSQL_PORT=3306
#ENV MYSQL_USERNAME=prahlad
COPY ./target/userservice-1.0.0.jar userservice.jar
ENTRYPOINT ["java", "-jar", "userservice.jar"]
FROM openjdk:11-jre
WORKDIR /usr/share/topnewz/gatewayservice
COPY ./target/gatewayservice-0.0.1-SNAPSHOT.jar gatewayservice.jar
ENTRYPOINT ["java", "-jar", "gatewayservice.jar"]
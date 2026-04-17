# Estágio de Build
FROM maven:3.8.7-eclipse-temurin-17 AS build
WORKDIR /app

# Copia tudo para dentro do container
COPY . .

# Executa o build pulando os testes para evitar erro de banco de dados
RUN mvn clean package -DskipTests

# Estágio de Execução
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# Copia apenas o JAR gerado no estágio anterior
COPY --from=build /app/target/Comanda-Digital-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

# Comando para rodar a aplicação usando o novo nome 'app.jar'
ENTRYPOINT ["java", "-jar", "app.jar"]
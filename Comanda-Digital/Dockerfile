# Imagem base com JDK 17 e Maven pré-instalados
FROM maven:3.8.7-eclipse-temurin-17

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para o contêiner
COPY . .

# Executa o build do projeto usando o Maven
RUN mvn clean package

# Expõe a porta 8080 (ou a porta que seu Spring Boot usa)
EXPOSE 8080

# Define o comando para rodar a aplicação
CMD ["java", "-jar", "target/Comanda-Digital-0.0.1-SNAPSHOT.jar"]

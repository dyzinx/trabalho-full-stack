# Dish App - Frontend Angular do Comanda-Digital

Esta pasta contém o código-fonte do frontend do sistema **Comanda-Digital**. O frontend foi desenvolvido usando **Angular** e já está integrado ao backend Spring Boot.

---

## Informações Importantes

- **Por que esta pasta está aqui?**
  - Apesar de o frontend já estar integrado ao backend (na pasta `static`), esta pasta contém o código-fonte do Angular para referência ou futuras modificações.

- **Preciso fazer algo com esta pasta?**
  - Não. A aplicação já está configurada para rodar a partir do backend (`target/Comanda-Digital-0.0.1-SNAPSHOT.jar`).
  - Caso precise modificar ou atualizar o frontend, veja as instruções abaixo.

---

## Como Recompilar o Frontend (Opcional)

Se você decidir modificar ou atualizar o frontend, siga estas etapas:

### Pré-requisitos
1. **Node.js** (versão 18 ou superior):
   - Verifique com:
     
     node -v
     
   - Caso não esteja instalado, baixe e instale: [Node.js Official Website](https://nodejs.org/).

2. **Angular CLI**:
   - Verifique com:

     ng version
    
   - Para instalar, execute:

     npm install -g @angular/cli
     

### Instalar Dependências
1. Navegue até o diretório `dish-app`:
   ```bash
   cd dish-app
digite npm install
e logo apos ng serve

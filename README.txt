Projekt: Node Calculator med CI/CD

Gruppmedlemmar:
Aleksandra
Pallavi
Michelle
Emma

Beskrivning
Detta projekt är en vidareutveckling av ett befintligt Node.js-projekt (node_calculator)med fokus på att implementera tester och CI/CD pipelines.
Syftet är att skapa en robust utvecklingsmiljö där kod automatiskt byggs och testas både lokalt med Jenkins och remote med GitHub Actions.

Mål
Implementera unit- och integrationstester för projektets moduler.
Skapa skript i package.json för att köra tester separat.
Konfigurera en CI/CD pipeline i Jenkins (lokalt).
Konfigurera en CI/CD pipeline med GitHub Actions (remote).

Projektstruktur:
.github/workflows/
   └── main.yml
__tests__/
   ├── unit/
   │   └── unit.test.js
   └── integration/
       └── integration.test.js
public/...
src/...
.babelrc
.gitignore
Jenkinsfile
app.js
package.json
package-lock.json


Tester
Vi har implementerat följande tester:

Testar funktionerna gcd, exp och percentage.
integration.test.js: Testar numberCruncher-modulen.
För att köra testerna finns följande skript i package.json:

npm run unit-test
npm run integration-test
npm test

CI/CD Pipelines
GitHub Actions

Workflowfilen .github/workflows/main.yml innehåller följande steg:
1. Build – installerar dependencies
2. Unit Test – kör unit-test
3. Integration Test – kör integration-test

Jenkins
För att starta Jenkins lokalt via Git Bash:
1. Navigera till den mapp där Jenkins JAR-filen ligger (t.ex. jenkins.war).
Exempel:
cd /c/jenkins
2. Starta Jenkins med kommandot:
java -jar jenkins.war
3. När Jenkins har startat, öppna webbläsaren och gå till:
http://localhost:8080
4. Följ instruktionerna i Jenkins för att logga in och konfigurera systemet första gången
5.Kör testerna enligt instruktionerna ovan.


GitHubGitHub
GitHub - patriques82/node_calculator: student resource
student resource. Contribute to patriques82/node_calculator development by creating an account on GitHub.
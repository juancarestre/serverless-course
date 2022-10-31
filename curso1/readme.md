# SERVERLESS FRAMEWORK COURSE 1

## Bienvenida

### 1. Bienvenida al curso de Serverless Framework

Explicar el alcance y proyeccion del curso y de los profesores (Mencionar que el curso es doble, para mejor provecho hacer los dos y antes haber hecho el curso conceptual de serverless del otro man)

### 2. Presentacion de proyecto

Presentar el proyecto a construir y las integraciones a implementar (mencionar que este proyecto se continuara en el segundo curso)

![proyecto del curso v1 sls app](./proyectocurso1.png)

## Conceptos Claves

### 3. Definiciones conceptos del ecosistema serverless

Explicar terminologia: Terminologia: servidor, cliente, serverless, cloud, cloud provider, serverless framework


### 4. Pros y Cons de las tecnologias serverless

Detallar ventajas y desventajas de usar tecnologias serverless (hablar de como serverless framework reduce algunas de las desventajas de las tecnologias serverless)

### 5. Herramientas necesarias para un ambiente de trabajo con serverless framework

Instalar (Node, NPM, python, serverless framework, aws cli, java JRE. Explicacion breve de que hace cada una y porque se instalan

## Ecosistema Serverless en AWS

### 6. Configuracion necesaria para inciar nuestro proyecto

Acceder a la consola web, crear api key access key, hacer aclaraciones de seguridad, configurar AWSCLI

### 7. Iniciamos nuestro proyecto con serverless framework

Uso basico de serverless framework para crear primer aplicacion hola mundo, se muestra el api,se muestra el serverless CLI

### 8. Revision de los recursos creados

Recorrer la consola de AWS para detallar los recursos creados por sls framework, mostrar como sls framework abstrae y nos ahorra trabajo

### 9. Desarrollo local con serverless framework

Ejecutar nuestra aplicacion serverless en local, instalar y probar sls offline

## Desarrollando con Serverless Framework

### 10. Recapitulacion de la aplicacion del proyecto y creamos nuestro GET

Iniiciar con el proyecto,crear get, agregar codigo para jalar de dynamodb y sdk de amazon (no va a funcionar porque aun no existe la db), invitar al estudiante a ver la explicacion de dynamodb en la proxima clase o a ver el curso de dynamodb

### 11. DynamoDB para nuestro proyecto

Explicar como se usara dynamodb en nuestro proyecto, creamos la tabla y lo asociamos con el get (dentro de AWS, asociamos con el get y ahora deberia funcionar nuestra app en local ya que la db si existe)

### 12. DynamoDB Local para ambiente local

Mostrar e usar dynamodb local para mejorar la devexperience

### 13. Desplegamos nuestro GET y lo probamos

Organizamos el cliente para funcione en local y en AWS cuando despleguemos, cambiamos el query para que tome el id como un pathparameter, vemos el error en la aplicacion
vemos el error en cloudwatch, ajustamos rol y desplegamos para solucionar nuestro error, probamos insertando un item en la base de datos

### 14. Creamos POST para crear usuarios con un id random

probamos en local y desplegamos

### 15. Hacemos un DELETE users con python

Se hace enfasis en los diferentes lenguajes en los que podemos programar, serverless es agnostico al lenguaje por eso lo haremos en python

### 16. UPDATE para actualizar datos 


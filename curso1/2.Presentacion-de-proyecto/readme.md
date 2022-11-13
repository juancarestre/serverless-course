clase individual
iniciamos con slide 3
contruimos aplicacion escalable, resiliento y de alta concurrencia (se habla de que estas son bondades por defecto de ecosistemas serverless)

se presenta scalidraw del proyecto

un usuario consumira un api a traves de APIGATeWAY (es un servicio de aws para crear apis, blah blah...)
dicho apigateway llamara diferentes funciones lambdas que tendran una logica a ejecutar (donde lambda es un servicio para ejecutar codigo, en diferentes lenguajes blah blah)
y desde lambda llamaremos una base de datos, dynamodb (base de datos que vive en aws y hecha por aws, serverless y blah blah)
(en las descripciones de los servicios ser breve, de momento solo que ellos sepan para que sirve cada uno)

bueno, tu podras pensar y porque este diseño para esta app y porque serverless?? esto no puede hacer con un contenedor y listo??? (aca introducimos el slide 5)

amazon promociona e invita a usar el aws well architected framework, las aplicaciones serverless  suelen acogerse facilmente a al AWSWAFramework
se habla de por ejemplo como nuestra app satisface el AWSWArchFramework

como haremos todo esto? suena que son muchas cosas diferentes :hide-the-pain:,(aca hablamos de serverless framework un poco, una herramienta que facilita mucho el trabajo a la hora de crear este tipo de aplicaciones)

perooooo antes de arrancar con serverless framework debes saber alguna terminolgia clave de serverless (con esto los conectamos a la siguiente clase)
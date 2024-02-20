# practica-dockercompose-fiinal

He utilizado un proyecto que tiene el frontend y backend junto.

Para esto en el docker compose up he hecho

Para el mongo especifico la version , luego el nombre del container que se pidio ,  declaro los volumenes necesarios para la copia de seguridad selecciono el puerto que se pedia en el enunciado , indicico en las variables entorno el usuario y contraseña y indico la network

luego  viene app container y mongo express ya que ambos dependen de mongodb

en el caso de mongo expres indico el nombre dle container , que se reinicie siempre y el puerto. Para las variabes del entorno indico la configuracion necesaria para que se conecte tanto la url como el usuario y contraseña que se utrilizaran y finalmente indico la network

en el caso de app container monto el dockerfile que esta dentro de la carpeta del proyecto, indico el puerto (como ya dije depende de mongodb) y en las variables de entorno indicamos  la direccion de la base de datos

finalmente en nginx selecciono la imagen declaro volumen y puerto y como en los anteriores su dependencia y la network


Para poner en marcha el proyecto lo que debemos hacer es clonar el repositorio y utilizar el comando: "docker compose up"

Adjunto imagen mostrando que funciona correctamente

![image](https://github.com/red153/practica-dockercompose-fiinal/assets/71873098/e41f4a2c-9e65-46e7-8abe-61dd0201703c)

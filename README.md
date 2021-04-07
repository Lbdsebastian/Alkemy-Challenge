# CHALLENGE C# - ALKEMY LABS 


Requerimientos:
Deberás crear una aplicación en C# utilizando el framework MVC. El objetivo es simular 
una aplicación web donde los alumnos de una universidad puedan inscribirse a las 
materias que desean cursar. 

 
Base de datos  
Leyendo los requerimientos deberás armar la base de datos que consideres apropiada 
para que todo funcione correctamente. El tipo de base de datos debe ser relacional, no 
importa que sea MySQL o SQL Server. Todos los nombres de tablas, columnas, índices 
deben estar en inglés y usar underscore para separar palabras. 
Es necesario que utilices Entity Frameworks para acceder a la base de datos. 


Registro 
En la aplicación hay dos tipos de usuarios: administrador de sitio y alumno. 
Ambos utilizan el mismo login, especificando si son alumnos o administradores.  
El administrador podrá gestionar las materias, profesores, cupos de inscripción.  
El alumno ingresa con su DNI y legajo y podrá seleccionar las materias en las que desea 
inscribirse. Tomar como premisa que no hay materias correlativas y todos los alumnos 
regulares se encuentran registrados en la base de datos.  


El usuario administrador podrá realizar las siguientes acciones: 

● Gestionar los Profesores de la Universidad 
○ Nombre 
○ Apellido 
○ DNI 
○ Activo 

 

● Gestionar las Materias a ofrecer 
○ Nombre 
○ Horario 
○ Profesor 
○ Cupo máximo de alumnos 

 

El alumno podrá realizar las siguientes acciones: 
● Listar todas las materias que estén disponibles 
● Entrar a la materia, ver la descripción y ver la información de la misma 
● Inscribirse en dicha materia. 

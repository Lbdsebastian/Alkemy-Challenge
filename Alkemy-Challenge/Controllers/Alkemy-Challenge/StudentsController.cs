using Alkemy_Challenge.Models;
using Alkemy_Challenge.Models.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Alkemy_Challenge.Controllers.Alkemy_Challenge
{
    public class StudentsController : ApiController
    {

        //obtener lista de alumnos
        public IHttpActionResult Get()
        {
            using (Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities())
            {
                var stds = db.Students.ToList();
                return Ok(stds);
            }
              
        }

        // obtener alumno 
        public IHttpActionResult Get(int id)
        {
            using (Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities())
            {
                var stds = db.Students.Where(s => s.Id == id).FirstOrDefault();
                return Ok(stds);
            }
        }

        // Registrar alumno
        [HttpPost]
        [Route("api/students/register")]
        public IHttpActionResult StudentR([FromBody] Students oStudent)
        {
            if (oStudent != null && oStudent.DNI != "")
            {
                using (Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities())
                {
                    // revisa si no existe un usuario con esos mismos datos
                    var studR = db.Students.Where(a => a.DNI == oStudent.DNI).Count();
                    if (studR > 0)
                    {
                        return BadRequest("El usuario ya existe");
                    }
                    else
                    {
                        db.Students.Add(oStudent);
                        db.SaveChanges();
                        return Ok("Usuario creado correctamente");
                    }
                }
            }
            else
            {
                return BadRequest("Ocurrió un error, por favor complete todos los campos");
            }

        }

        // autenticar alumno
        [HttpPost]
        [Route("api/students/login")]
        public Resp StudentLogin([FromBody] Students val)
        {
            Resp oResp = new Resp();
            using (Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities())
            {
                //revisa si los datos ingresados coinciden con los admins registrados en la BDD
                var StudentR = db.Students.Where(a => a.DNI == val.DNI && a.File_number == val.File_number);
                // si hay al menos 1, continua por generar una respuesta afirmativa y un token
                if (StudentR.Count() > 0)
                {
                    oResp.Resultado = true;
                    oResp.Mensaje = "Login correcto";
                    oResp.Token = Guid.NewGuid().ToString();

                    Students oStudent = StudentR.FirstOrDefault();
                    oStudent.Token = oResp.Token.ToString();
                    // almacena el token en la BDD
                    db.Entry(oStudent).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return oResp;
                }
                else
                {
                    oResp.Resultado = false;
                    oResp.Mensaje = "Ocurrió un error";
                    oResp.Token = null;
                    return oResp;
                }
            }
        }

        // Eliminar alumno
        [HttpDelete]
        [Route("api/admin/students")]
        public IHttpActionResult DelSubject(int id)
        {
            using (Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities())
            {
                var consulta = db.Students.Where(s => s.Id == id).Count();
                if (consulta > 0)
                {
                    var regStudent = db.Subjects.Where(s => s.Id == id).FirstOrDefault();
                    db.Subjects.Remove(regStudent);
                    db.SaveChanges();
                    return Ok(regStudent);
                }
                else
                {
                    return BadRequest();
                }
            }
                

        }

    }

    
}

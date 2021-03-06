using Alkemy_Challenge.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Alkemy_Challenge.Controllers.Alkemy_Challenge
{
    public class SubjectsController : ApiController
    {
        Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities();

        // Obtener listado de todas las materias

        public IHttpActionResult GetSubjects()
        {
            try
            {
                var sbj = db.Subjects.ToList();
                return Ok(sbj);
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }

        //Obtener una materia especifica
        public IHttpActionResult GetSubjects(int id)
        {
            try
            {
                var sbj = db.Subjects.Where(s => s.Id == id).FirstOrDefault();
                return Ok(sbj);
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }

        // Modificar Materias
        [HttpPut]
        [Route("api/admin/subjects")]
        public IHttpActionResult PutSubject(Subjects oSubject)
        {
            try
            {
                var regSubj = db.Subjects.Where(s => s.Id == oSubject.Id).FirstOrDefault();
                regSubj.Maximum_quota = oSubject.Maximum_quota;
                regSubj.Name = oSubject.Name;
                regSubj.Teacher = oSubject.Teacher;
                regSubj.Time_end = oSubject.Time_end;
                regSubj.Time_start = oSubject.Time_start;

                db.Entry(regSubj).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return Ok(regSubj);
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }


        // Agregar una nueva materia
        [HttpPost]
        [Route("api/admin/subjects")]
        public IHttpActionResult PostSubject([FromBody]Subjects oSubject)
        {
            try
            {
                if (oSubject != null && oSubject.Name != "")
                {
                    var subj = db.Subjects.Where(s => s.Name == oSubject.Name).Count();
                    if (subj == 0)
                    {
                        db.Subjects.Add(oSubject);
                        db.SaveChanges();
                        return Ok("Materia agregada correctamente");
                    }
                    else
                    {
                        return BadRequest("Materia ya existe");
                    }
                }
                else
                {
                    return BadRequest("Por favor complete los campos solicitados");
                }
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }

        [HttpDelete]
        [Route("api/admin/subjects")]
        public IHttpActionResult DelSubject(int id)
        {
            try
            {
                var consulta = db.Subjects.Where(s => s.Id == id).Count();
                if (consulta > 0)
                {
                    var regSubj = db.Subjects.Where(s => s.Id == id).FirstOrDefault();
                    db.Subjects.Remove(regSubj);

                    db.SaveChanges();
                    return Ok(regSubj);
                    // logica para eliminar de la relacion student_subject
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
           
            
        }

    }
}

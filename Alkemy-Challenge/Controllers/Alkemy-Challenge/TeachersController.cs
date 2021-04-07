using Alkemy_Challenge.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Alkemy_Challenge.Controllers.Alkemy_Challenge
{
    public class TeachersController : ApiController
    {
        Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities();

        // GET

        public IHttpActionResult GetTeachers()
        {
            try
            {
                var consulta = db.Teachers.ToList();
                return Ok(consulta);
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }
        // GET 1
        public IHttpActionResult GetTeachers(int id)
        {
            try
            {
                var consulta = db.Teachers.Where(t => t.Id == id).Count();
                if (consulta > 0)
                {
                    var regTeach = db.Teachers.Where(t => t.Id == id).FirstOrDefault();
                    return Ok(regTeach);
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

        // POST
        [HttpPost]
        [Route("api/admin/teachers/add")]
        public IHttpActionResult PostTeacher(Teachers obj)
        {
            try
            {
                var consulta = db.Teachers.Where(t => t.First_name == obj.First_name && t.Last_name == obj.Last_name).Count();
                if (consulta == 0)
                {
                    obj.Active = true;
                    db.Teachers.Add(obj);
                    db.SaveChanges();
                    return Ok(obj);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                throw new Exception("Algo salió mal, intente más tarde. Error: " + ex.Message);
            }
            
        }

        // PUT
        [HttpPut]
        [Route("api/admin/teachers/")]
        public IHttpActionResult PutTeacher(Teachers obj)
        {
            try
            {
                var consulta = db.Teachers.Where(t => t.Id == obj.Id).FirstOrDefault();
                consulta.First_name = obj.First_name;
                consulta.Last_name = obj.Last_name;
                consulta.DNI = obj.DNI;
                consulta.Active = obj.Active;

                // acomoda esto bobito
                db.Entry(consulta).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return Ok(consulta);
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }

        [HttpDelete]
        [Route("api/admin/teachers/")]
        public IHttpActionResult DelTeacher(int id)
        {
            try
            {
                var consulta = db.Teachers.Where(t => t.Id == id).Count();
                if (consulta > 0)
                {
                    var regTeach = db.Teachers.Where(t => t.Id == id).FirstOrDefault();
                    db.Teachers.Remove(regTeach);
                    db.SaveChanges();
                    return Ok(regTeach);
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

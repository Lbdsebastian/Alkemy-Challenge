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
            var consulta =  db.Teachers.ToList();
            return Ok(consulta);
        }
        // GET 1
        public IHttpActionResult GetTeachers(int id)
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

        // POST
        [HttpPost]
        [Route("api/admin/teachers/add")]
        public IHttpActionResult PostTeacher(Teachers obj)
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

        // PUT
        [HttpPut]
        [Route("api/admin/teachers/")]
        public IHttpActionResult PutTeacher(Teachers obj)
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

        [HttpDelete]
        [Route("api/admin/teachers/")]
        public IHttpActionResult DelTeacher(int id)
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
    }
}

using Alkemy_Challenge.Models;
using Alkemy_Challenge.Models.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Alkemy_Challenge.Controllers.Alkemy_Challenge
{
    
    public class AdminsController : ApiController
    {
        Alkemy_ChallengeEntities db = new Alkemy_ChallengeEntities();
        //Admin registro (testing)
        
        [HttpPost]
        
        public IHttpActionResult AdminR([FromBody] Admins oAdmin)
        {
            try
            {
                if (oAdmin != null && oAdmin.DNI != "" && oAdmin.File_number != "")
                {
                    // revisa si no existe un usuario con esos mismos datos
                    var adminR = db.Admins.Where(a => a.DNI == oAdmin.DNI).Count();
                    if (adminR > 0)
                    {
                        return BadRequest("El usuario ya existe");
                    }
                    else
                    {
                        db.Admins.Add(oAdmin);
                        db.SaveChanges();
                        return Ok("Usuario creado correctamente");
                    }
                }
                else
                {
                    return BadRequest("Ocurrió un error, por favor complete todos los campos");
                }
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
            
        }


        // Admin login
        
        [HttpPost]
        [Route("api/admin/login")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Resp AdminLogin([FromBody] Admins val)
        {
            try
            {
                Resp oResp = new Resp();
                //revisa si los datos ingresados coinciden con los admins registrados en la BDD
                var aRegistrados = db.Admins.Where(a => a.DNI == val.DNI && a.File_number == val.File_number);
                // si hay al menos 1, continua por generar una respuesta afirmativa y un token
                if (aRegistrados.Count() > 0)
                {
                    oResp.Resultado = true;
                    oResp.Mensaje = "Login correcto";
                    oResp.Token = Guid.NewGuid().ToString();

                    Admins oAdmin = aRegistrados.FirstOrDefault();
                    oAdmin.Token = oResp.Token.ToString();
                    // almacena el token en la BDD
                    db.Entry(oAdmin).State = System.Data.Entity.EntityState.Modified;
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
            catch (Exception ex)
            {

                throw new Exception("Ocurrió un error, intente nuevamente. Detalles del error: " + ex.Message);
            }
            
        }

    }
}

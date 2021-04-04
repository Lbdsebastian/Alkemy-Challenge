using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Alkemy_Challenge.Models.Login
{
    public class Resp
    {
        public bool Resultado { get; set; }
        public object Token { get; set; }
        public string Mensaje { get; set; }
    }
}
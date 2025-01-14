using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectRecibos.Models;
using ProyectRecibos.Services;

namespace ProyectRecibos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecibosController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        public RecibosController(ApplicationDBContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public List<Recibos> GetRecibos()
        {
            return context.Recibos.OrderByDescending(e => e.CODIGO_EMPLEADO).ToList();

        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Entities;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ReactJSDemoContext _reactJSDemoContext;
        public HomeController(ReactJSDemoContext reactJSDemoContext)
        {
            _reactJSDemoContext = reactJSDemoContext;
        }

        [Route("{path}")]
        [HttpGet]
        public async Task<IActionResult> Get(string path)
        {
           
             var  query = (from p in _reactJSDemoContext.BANNER
                           where p.PATH == path
                           orderby p.ID
                           select p);
            var result = await query.ToListAsync();
            if (path.Equals("block-top-home__right-banner"))
            {
                return Ok(result.Take(3));
            }
            else
            {
                return Ok(result.Take(10));
            }
            
        }
        [Route("products/{path}")]
        [HttpGet]
        public async Task<IActionResult> GetProduct(string path)
        {

            var query = (from p in _reactJSDemoContext.PRODUCTS
                         join q in _reactJSDemoContext.CATEGORY_PRODUCT
                         on p.ID_CATEGORIES equals q.ID
                         where q.PATH == path
                         orderby p.ID
                         select p);
            var result = await query.ToListAsync();
            return Ok(result.Take(10));
        }
    }
}

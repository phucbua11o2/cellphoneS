using Microsoft.EntityFrameworkCore;
using webapi.Entities;
namespace webapi
{
    public class ReactJSDemoContext :DbContext
    {
        public ReactJSDemoContext(DbContextOptions<ReactJSDemoContext> context) : base(context)
        {
        }
        public DbSet<BANNER> BANNER { get; set; }
        public DbSet<PRODUCTS> PRODUCTS { get; set; }
        public DbSet<CATEGORY_PRODUCT> CATEGORY_PRODUCT { get; set; }
    }
}

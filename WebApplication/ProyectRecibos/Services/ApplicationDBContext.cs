using Microsoft.EntityFrameworkCore;
using ProyectRecibos.Models;
using System.Xml;



namespace ProyectRecibos.Services
{
    public class ApplicationDBContext : DbContext
    {
         public ApplicationDBContext(DbContextOptions options) : base(options) { }
        public DbSet<Recibos> Recibos {  get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {
            modelBuilder.Entity<Recibos>(entity =>
            {
                entity.HasNoKey();
            });

        }
    }
}

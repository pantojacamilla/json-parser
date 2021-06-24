    using Microsoft.EntityFrameworkCore;&#xD;&#xA;    using System;&#xD;&#xA;    using System.Collections.Generic;&#xD;&#xA;    using System.Linq;&#xD;&#xA;    using System.Threading.Tasks;&#xD;&#xA;    namespace PatientRecord.Models&#xD;&#xA;    {&#xD;&#xA;        public class AppDbContext : DbContext&#xD;&#xA;        {&#xD;&#xA;            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)&#xD;&#xA;            {&#xD;&#xA;            }&#xD;&#xA;            public DbSet<Doctor> Doctors { get; set; }&#xD;&#xA;            public DbSet<Patient> Patients { get; set; }&#xD;&#xA;        }&#xD;&#xA;    }
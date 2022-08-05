using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Model
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string Address { get; set; }
        public string TelephoneNumber { get; set; }
        public string Designation { get; set; }
        public string Department { get; set; }
        public string JoinDate { get; set; }
    }
}

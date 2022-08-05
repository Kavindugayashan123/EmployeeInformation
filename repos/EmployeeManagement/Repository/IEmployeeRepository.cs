using EmployeeManagement.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Repository
{
    public interface IEmployeeRepository : IRepositoryBase<Employee>
    {
        // Task<PagedList<Employee>> GetEmployees(Pagingparameters pagingparameters);
        Task<Employee> GetEmployees();
        Employee GetEmployee(int id);
        void CreateEmployee(Employee employee);
        void UpdateEmployee(Employee employee);
        void DeleteEmployee(Employee employee);
    }
}

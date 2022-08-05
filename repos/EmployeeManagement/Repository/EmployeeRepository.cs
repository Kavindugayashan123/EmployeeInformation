using EmployeeManagement.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.Repository
{
    public class EmployeeRepository : RepositoryBase<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(ApplicationDBContext applicationDBContext) : base(applicationDBContext)
        { 
        }

        public void CreateEmployee(Employee employee)
        {
            Create(employee);
        }

        public void UpdateEmployee(Employee employee)
        {
            Update(employee);
        }

        public void DeleteEmployee(Employee employee)
        {
            Delete(employee);
        }

        public Employee GetEmployee(int id)
        {
            return FindbyCondition(e => e.EmpId == id).FirstOrDefault();
        }

        //public Task<PagedList<Employee>> GetEmployees(Pagingparameters pagingparameters)
        //{
        //    throw new NotImplementedException();
        //}

        public Task<Employee> GetEmployees()
        {
            throw new NotImplementedException();
            // return Task.FromResult<Employee>(FindAll());
            //  return (Task<Employee>)FindAll();

        }
    }
}

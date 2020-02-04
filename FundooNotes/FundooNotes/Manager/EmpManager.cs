using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FundooNotes.Repository;
using FundooNotes.Model;

namespace FundooNotes.Manager
{
    public class EmpManager : InterEmpManager
    {
        interEmpRepository employeeRepository =(interEmpRepository) new empRepository();
        public bool createEmployee(Employee employee)
        {
           return this.employeeRepository.createEmployee(employee);
        }

        public bool deleteEmployee(string email)
        {
           return this.employeeRepository.deleteEmployee(email);
        }

        public bool readEmployee()
        {
             return this.employeeRepository.readEmployee();
        }

        public bool updateEmployee(Employee employee)
        {
             return this.employeeRepository.updateEmployee(employee);
        }
    }
}

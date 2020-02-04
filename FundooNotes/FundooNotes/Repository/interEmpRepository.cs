using System;
using FundooNotes.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FundooNotes.Repository
{
    interface interEmpRepository
    {
        bool createEmployee(Employee employee);
        bool readEmployee();
        bool deleteEmployee(string email);
        bool updateEmployee(Employee employee);
    }
}

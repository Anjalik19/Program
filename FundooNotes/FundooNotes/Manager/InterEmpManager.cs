using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FundooNotes.Model;

namespace FundooNotes.Manager
{
    interface InterEmpManager
    {
        bool createEmployee(Employee employee);
        bool readEmployee();
        bool deleteEmployee(string email);
        bool updateEmployee(Employee employee);
    }
}

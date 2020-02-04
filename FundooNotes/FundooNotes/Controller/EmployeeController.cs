using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FundooNotes.Manager;
using FundooNotes.Model;
namespace FundooNotes.Controller

{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        InterEmpManager mgr = new EmpManager();
        [HttpPost]
        [Route("add")]
        public ActionResult createEmployee([FromBody]Employee emp)
        {
            var result = this.mgr.createEmployee(emp);
                if(result)
            {
                return this.Ok(emp);
            }
            else
            {
                return this.BadRequest("Error while adding employee");
            }
        }

        [HttpPut]
        [Route("update")]
        public IActionResult updateEmployee([FromBody] Employee employee)
        {
            var result = this.mgr.updateEmployee(employee);
            if(result)
            {
                return this.Ok(employee);
            }
            else
            {
                return this.BadRequest("Error while updating employee data");
            }
        }

      [HttpDelete]
      [Route("delete")]
        public IActionResult deleteEmployee(string email)
        {
            var result = this.mgr.deleteEmployee(email);
                if(result)
            {
                return this.Ok(result);
            }
            else
            {
                return this.BadRequest("Error while deleting employee data");
            }
        }

    }
}
using FundooNotes.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;




namespace FundooNotes.Repository
{
    [System.Runtime.InteropServices.Guid("7093D524-7A48-4A0B-9117-6F1B1BA79F25")]
    public class empRepository : interEmpRepository
    {
        public string dbConn = "Data Source=DESKTOP-MT9BIDS\\SQLEXPRESS; Initial Catalog=Employee;Integrated Security=SSPI";
        public bool createEmployee(Employee employee)
        {
           
            SqlConnection conn = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spCreateEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@firstName", employee.firstname);
            cmd.Parameters.AddWithValue("@lastName", employee.lastname);
            cmd.Parameters.AddWithValue("@email", employee.mail);
            cmd.Parameters.AddWithValue("@gender", employee.gen);
            cmd.Parameters.AddWithValue("@number", employee.mobile);
            cmd.Parameters.AddWithValue("@address", employee.add);
            cmd.Parameters.AddWithValue("@password", employee.pass);
            conn.Open();
            int result = cmd.ExecuteNonQuery();
            conn.Close();
            if (result == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
            throw new NotImplementedException();

        }
        public bool updateEmployee(Employee employee)
        {
            SqlConnection conn = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spUpdateEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@firstName", employee.firstname);
            cmd.Parameters.AddWithValue("@lastName", employee.lastname);
            cmd.Parameters.AddWithValue("@email", employee.mail);
            cmd.Parameters.AddWithValue("@gender", employee.gen);
            cmd.Parameters.AddWithValue("@number", employee.mobile);
            cmd.Parameters.AddWithValue("@addres", employee.add);
            cmd.Parameters.AddWithValue("@passwrd", employee.pass);
            conn.Open();
            int result = cmd.ExecuteNonQuery();
            conn.Close();
            if (result == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
            throw new NotImplementedException();

        }
        public bool deleteEmployee(string email)
        {
            Employee emp = new Employee();
            emp.mail = email;
            SqlConnection conn = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spDeleteEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@email", emp.mail);
            conn.Open();
            int result = cmd.ExecuteNonQuery();
            conn.Close();
            if (result == 1)
            {
                return true;
            }
            else
            {
                return false;
            }
            throw new NotImplementedException();

        }

        public void readEmployee()
        {
           
        }
    }
}




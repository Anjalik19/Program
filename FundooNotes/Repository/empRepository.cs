using FundooNotes.Modal;
using System.Data;
using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FundooNotes.Repository
{
    public class empRepository
    {
        public string dbConn = "Data Source=DESKTOP-MT9BIDS\\SQLEXPRESS; Initial Catalog=Employee;Integrated Security=SSPI";
        public void createEmployee(Employee employee)
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
            cmd.ExecuteNonQuery();
            conn.Close();
           
        }
        public void readEmployee(Employee employee)
        {
            SqlConnection conn = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spReadEmployee", conn);
            cmd.Parameters.AddWithValue("@firstName", employee.firstname);
            cmd.Parameters.AddWithValue("@lastName", employee.lastname);
            cmd.Parameters.AddWithValue("@email", employee.mail);
            cmd.Parameters.AddWithValue("@gender", employee.gen);
            cmd.Parameters.AddWithValue("@number", employee.mobile);
            cmd.Parameters.AddWithValue("@address", employee.add);
            cmd.Parameters.AddWithValue("@password", employee.pass);
            conn.Open();
            cmd.ExecuteNonQuery();
            conn.Close();

        }
        public void deleteEmployee(string email)
        {
            Employee emp = new Employee();
            emp.mail = email;
            SqlConnection conn = new SqlConnection(dbConn);
            SqlCommand cmd = new SqlCommand("spDeleteEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@email", emp.mail);
            conn.Open();
            cmd.ExecuteNonQuery();
            conn.Close();
        }

       

    }

    
    
}

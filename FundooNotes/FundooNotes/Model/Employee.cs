using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FundooNotes.Model
{
    public class Employee
    {
        private string firstName;
        private string lastName;
        private string email;
        private string gender;
        private int number;
        private string address;
        private string password;

        public string firstname
        {
            get
            {
                return this.firstName;
            }
            set
            {
                this.firstName = value;
            }
        }
        public string lastname
        {
            get
            {
                return this.lastName;
            }
            set
            {
                this.lastName = value;
            }
        }
        public string mail
        {
            get
            {
                return this.email;
            }
            set
            {
                this.email = value;
            }
        }

        public string gen
        {
            get
            {
                return this.gender;
            }
            set
            {
                this.gender = value;
            }
        }

        public int mobile
        {
            get
            {
                return this.number;
            }
            set
            {
                this.number = value;
            }
        }
        public string add
        {
            get
            {
                return this.address;
            }
            set
            {
                this.address = value;
            }
        }

        public string pass
        {
            get
            {
                return this.password;
            }
            set
            {
                this.password = value;
            }
        }
    }
}


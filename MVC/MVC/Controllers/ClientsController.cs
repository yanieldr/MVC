using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVC.Models
{
    public class ClientsController : ApiController
    {
        public List<Client> Clients { get; set; }

        public ClientsController()
        {
            Clients = new List<Client> { 
                new Client { Id = 0, Name = "client0" }, 
                new Client { Id = 1, Name = "client1" }
            };
        }

        // GET api/values
        public IQueryable<Client> GetClients()
        {
            return Clients.AsQueryable();
        }

        //// GET api/values/5
        //public Client Get(int id)
        //{
        //    return Clients.Find(client => client.Id == id);
        //}

        //// POST api/values
        //public void Post([FromBody]string value)
        //{

        //}

        //// PUT api/values/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{

        //}
    }
}
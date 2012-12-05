using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MVC.Models;

namespace MVC.Controllers
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

        // GET api/Clients
        public IQueryable<Client> Get()
        {
            return Clients.AsQueryable();
        }

        // GET api/Clients/1
        public Client Get(int id)
        {
            return Clients.Find(client => client.Id == id);
        }

        // POST api/Clients
        public IEnumerable<Client> Post([FromBody]Client client)
        {
            Clients.Add(client);
            return Clients;
        }

        // PUT api/values/5
        public IEnumerable<Client> Put([FromBody]Client client)
        {
            Clients.Find(x => x.Id == client.Id).Name = client.Name;
            return Clients;
        }

        // DELETE api/Clients/5
        public IEnumerable<Client> Delete(int id)
        {
            Clients.RemoveAll(x => x.Id == id);
            return Clients;
        }
    }
}
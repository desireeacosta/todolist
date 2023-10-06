using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class MongoDBSettings
    {
        public string ConnectionString { get; set;} = null!;

        public string DatabaseName { get; set;} = null!;

        public string CardsCollectionName { get; set;} = null!;
    }
}
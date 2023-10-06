using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Server.Models;

namespace Server
{
    public class Card
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Name { get; set; } = null!;

        public bool Status { get; set; } = false;

        public string? Description { get; set; }
    }
}
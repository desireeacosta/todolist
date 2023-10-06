using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Models;
using MongoDB.Driver;
using MongoDB.Bson;
using Microsoft.Extensions.Options;

namespace Server.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<Card> _cardCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var mongoClient = new MongoClient(
                mongoDBSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                mongoDBSettings.Value.DatabaseName);
            
            _cardCollection = mongoDatabase.GetCollection<Card>(
                mongoDBSettings.Value.CardsCollectionName);
        }

        public async Task CreateAsync(Card newCard) =>
            await _cardCollection.InsertOneAsync(newCard);

        public async Task<List<Card>> GetAsync() =>
            await _cardCollection.Find(_ => true).ToListAsync();

        public async Task<Card?> GetAsync(string id) =>
            await _cardCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task UpdateAsync(string id, Card card) =>
            await _cardCollection.ReplaceOneAsync(x => x.Id == id, card);

        public async Task RemoveAsync(string id) =>
            await _cardCollection.DeleteOneAsync(x => x.Id == id);
    }
}
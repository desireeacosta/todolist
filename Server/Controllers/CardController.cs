using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;

namespace Server.Controllers
{
    [ApiController]
    [Route("/")]
    public class CardController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;

        public CardController(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        [HttpGet]
        public async Task<List<Card>> Get()
        {
            return await _mongoDBService.GetAsync();
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Card>> Get(string id)
        {
            var card = await _mongoDBService.GetAsync(id);

            if (card is null)
            {
                return NotFound();
            }

            return card;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Card card)
        {
            await _mongoDBService.CreateAsync(card);
            return CreatedAtAction(nameof(Get), new { id = card.Id }, card);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Card updatedCard)
        {
            var card = await _mongoDBService.GetAsync(id);

            if (card is null)
            {
                return NotFound();
            }

            updatedCard.Id = card.Id;

            await _mongoDBService.UpdateAsync(id, updatedCard);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var card = await _mongoDBService.GetAsync(id);

            if (card is null)
            {
                return NotFound();
            }

            await _mongoDBService.RemoveAsync(id);

            return NoContent();
        }
    }
}
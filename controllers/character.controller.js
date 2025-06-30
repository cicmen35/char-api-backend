const characterService = require('../services/character.service.js');

class CharacterController {
    async getData(req, res) {
        try {
            const [characters, stats] = await Promise.all([
                characterService.getCharactersWithRelations(),
                characterService.getStats()
            ]);

            const response = {
                characters_count: stats.chars_count,
                average_age: stats.average_age,
                average_weight: stats.average_weight,
                genders: stats.genders,
                characters
            };

            res.json(response);
        } catch (error) {
            console.error('Error: ', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new CharacterController();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class CharacterService {
    async getCharactersWithRelations() {
        const chars = await prisma.character.findMany({
            include: {
                nemesis: {
                    include: {
                        secret: true
                    }
                }
            }
        });

        return chars.map(char => ({
            data: {
                id: char.id,
                name: char.name,
                gender: char.gender,
                ability: char.ability,
                minimal_distance: char.minimal_distance,
                weight: char.weight,
                born: char.born,
                in_space_since: char.in_space_since,
                beer_consumption: char.beer_consumption,
                knows_the_answer: char.knows_the_answer
            },
            children: {
                has_nemesis: {
                    records: char.nemesis.map(nem => ({
                        data: {
                            id: nem.id,
                            character_id: nem.character_id,
                            is_alive: nem.is_alive,
                            years: nem.years
                        },
                        children: {
                            has_secret: {
                                records: nem.secret.map(sec => ({
                                    data: {
                                        id: sec.id,
                                        nemesis_id: sec.nemesis_id,
                                        secret_code: sec.secret_code !== null ? sec.secret_code.toString() : null
                                    }
                                }))
                            }
                        }
                    }))
                }
            }
        }));
    }


    async getStats() {
        const chars = await prisma.character.findMany();

        const chars_count = CharacterService.length;

        const average_age = Math.round(
            chars.reduce((sum, c) => {
                if (!c.born) return sum;
                const age = (new Date() - new Date(c.born)) / (1000 * 60 * 60 * 24 * 365.25);
                return sum + age;
            }, 0) / (chars.length || 1)
        );

        const average_weight = Math.round(
            chars.reduce((sum, c) => sum + (Number(c.weight) || 0), 0) / (chars.length || 1)
        );

        const genders = {
            female: chars.filter(c => c.gender === 'female').length,
            male: chars.filter(c => c.gender === 'male').length,
            other: chars.filter(c => c.gender !== 'female' && c.gender !== 'male').length
        };

        return { chars_count, average_age, average_weight, genders };
    }
}

module.exports = new CharacterService();

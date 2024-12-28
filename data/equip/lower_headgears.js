import {equipStats, learned_skills, multipliers, stats} from "../../scripts/core/state.js";
import {property, race, size} from "../../scripts/core/constants.js";

export const low = [
    {
        id: '420110', dbname: 'ScarfOfHero_J', name: 'Cachecol Camuflado', script: function () {
            multipliers.size[size.ALL] += Math.floor(stats.baseLv / 10);
        }
    },
    {
        id: '19499',
        dbname: 'FortunetellinSealed',
        name: 'Echarpe Misteriosa',
        slot4: '4730,4710,4720,4750,4883,4807',
        script: function () {
            equipStats.percentASPD += Math.floor(stats.int / 50) * 2;
            multipliers.size[size.ALL] += Math.floor(stats.int / 50) * 4;
            equipStats.percentASPD += Math.floor(stats.dex / 50) * 2;
            multipliers.size[size.ALL] += Math.floor(stats.dex / 50) * 4;
        }
    },
    {
        id: '420187',
        dbname: 'Sacred_Lapel',
        name: 'Lapela Sagrada',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.castdelay += 15;

            if(learned_skills.genese >= 5){
                multipliers.size[size.ALL] += 15;
            }
        }
    },
    {
        id: '420182', dbname: 'Book_of_Sorcery', name: 'Livros de Feitiçaria',
        tags: 'SORCERER',
        script: function () {
            // Pós-conjuração -15%.
            equipStats.castdelay += 15;
            // A cada nível de [Encanto de Órion]: Dano mágico contra todos os tamanhos +3%.
            if (learned_skills["Encanto de Órion"] > 0)
                multipliers.size[size.ALL] += learned_skills["Encanto de Órion"] * 3;
            // Ao aprender [Tornado] nv.5:
            // Ao realizar ataques mágicos, 3% de chance de ativar um [efeito] por 10 segundos.
            // --------------------------
            // Efeito:
            // Custo de SP de [Onda Psíquica] -79.
        }
    },
    {
        id: '28502', dbname: 'Mob_Scarf', name: 'Lenço Infame', script: function () {
            if (document.getElementById('wea').value === '2202') {
                equipStats.flatMATK += Math.floor((stats.int + stats.dex) / 80) * 120;
                equipStats.VCT += Math.floor((stats.int + stats.dex) / 80) * 3;
                equipStats.percentASPD += Math.floor((stats.agi + stats.vit) / 80) * 5;
            }
        }
    },
    {
        id: '18536', dbname: 'Foxtail', name: 'Rabo de Gato', script: function () {
            equipStats.flatMATK += 10;
            equipStats.flatFCT = ( (equipStats.flatFCT*10) + 1 ) / 10;
        }
    },
    {
        id: '420028',
        dbname: 'Imperial_Glory',
        name: 'Ombreiras da Glória',
        slot4: '4730,4710,4720,4750,4883,4807',
        script: function () {
            equipStats.castdelay += Math.floor((stats.agi + stats.vit) / 50) * 3;
        }
    },
    {
        id: '420236',
        dbname: 'Moroc_Slave_TW',
        name: 'Servos de Morroc',
        script: function () {
            // Increases damage against demihuman race enemies and angel race monster by 5%.
            // Inclui a raça humano jogador conforme descrição do twRO embora essa não tenha como ser selecionada como alvo KEKW
            // 對人類型、玩家人類型、天使型的傷害+5%。 -> +5% de dano a tipos humanos, jogadores-humanos e anjos.
            multipliers.race[race.HUMAN]+=5;
            multipliers.race[race.DEMI_HUMAN]+=5;
            multipliers.race[race.ANGEL]+=5;
            // When equipped with Darklord Essence Intelligence 3,
            // Increases all property magical damage by 20%.
            // Increases damage taken from all race enemies by 15%.

            // Set Bonus Demon God's Apostle Shnaim Card
            // Increases physical and magical damage against all race enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27323' || document.getElementById('ac2_slot1').value === '27323') {
                multipliers.race[race.ALL] += 15;
            }
            // Set Bonus Demon God's Apostle Ahat Card
            // Increases physical and magical damage against all size enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27322' || document.getElementById('ac2_slot1').value === '27322') {
                multipliers.size[size.ALL] += 15;
            }
        }
    },
    {
        id: '420236 ',
        dbname: 'Moroc_Slave_TW',
        name: 'Servos de Morroc (Conjunto INT3 Ativado)',
        script: function () {
            // Increases damage against demihuman race enemies and angel race monster by 5%.
            // Inclui a raça humano jogador conforme descrição do twRO embora essa não tenha como ser selecionada como alvo KEKW
            // 對人類型、玩家人類型、天使型的傷害+5%。 -> +5% de dano a tipos humanos, jogadores-humanos e anjos.
            multipliers.race[race.HUMAN]+=5;
            multipliers.race[race.DEMI_HUMAN]+=5;
            multipliers.race[race.ANGEL]+=5;
            // When equipped with Darklord Essence Intelligence 3,
            // Increases all property magical damage by 20%.
            // Increases damage taken from all race enemies by 15%.
            multipliers.skill_property[property.ALL] += 20;
            // Set Bonus Demon God's Apostle Shnaim Card
            // Increases physical and magical damage against all race enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27323' || document.getElementById('ac2_slot1').value === '27323') {
                multipliers.race[race.ALL] += 15;
            }
            // Set Bonus Demon God's Apostle Ahat Card
            // Increases physical and magical damage against all size enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27322' || document.getElementById('ac2_slot1').value === '27322') {
                multipliers.size[size.ALL] += 15;
            }
        }
    },
    {
        id: '19439', dbname: 'Subject_Aura', name: 'Aura Fantasma', script: function () {},
    },
];

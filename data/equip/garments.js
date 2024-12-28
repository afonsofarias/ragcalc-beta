import {equipStats, learned_skills, multipliers, refinement, skill, stats, target} from "../../scripts/core/state.js";
import {property, race, size, type} from "../../scripts/core/constants.js";

const explo_capa = '4856,4854,4858,4950,4949,4827,4826,4812,4872,4869'
export const garments = [
    {
        id: '480088', dbname: 'Ultio_Cape_TW', name: 'Capa Ultio-OS', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 10;
            multipliers.skill_property[property.NEUTRAL] += Math.floor(refinement.garment / 4) * 3;
            multipliers.skill_property[property.HOLY] += Math.floor(refinement.garment / 4) * 3;
            if (refinement.garment >= 9)
                multipliers.matk += 10;
            if (refinement.garment >= 11)
                equipStats.castdelay += 12;
            if (refinement.garment >= 13)
                if (target.type === type.BOSS)
                    equipStats.bypass += 10;
            if (document.getElementById('wea').value === '16089') {
                equipStats.flatMATK += 30;
                if (refinement.weapon >= 12) {
                    if (skill.id === "AB_ADORAMUS")
                        skill.cooldown += -0.5;
                    if (target.race === race.DEMON || target.race === race.UNDEAD)
                        equipStats.bypass += 15;
                }
            }
        }
    },
    {
        id: '480088 ', dbname: 'Ultio_Cape_TW', name: 'Capa Ultio-OS (10% Chefe)', slot1: 'card',
        script: function () {
            // BA
            multipliers.protocol[type.BOSS]+=10;
            //
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 10;
            multipliers.skill_property[property.NEUTRAL] += Math.floor(refinement.garment / 4) * 3;
            multipliers.skill_property[property.HOLY] += Math.floor(refinement.garment / 4) * 3;
            if (refinement.garment >= 9)
                multipliers.matk += 10;
            if (refinement.garment >= 11)
                equipStats.castdelay += 12;
            if (refinement.garment >= 13)
                if (target.type === type.BOSS)
                    equipStats.bypass += 10;
            if (document.getElementById('wea').value === '16089') {
                equipStats.flatMATK += 30;
                if (refinement.weapon >= 12) {
                    if (skill.id === "AB_ADORAMUS")
                        skill.cooldown += -0.5;
                    if (target.race === race.DEMON || target.race === race.UNDEAD)
                        equipStats.bypass += 15;
                }
            }
        }
    },
    {
        id: '20966', dbname: 'Temporal_M_Int', name: 'Manto Temporal INT', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 10;
            multipliers.matk += Math.floor(refinement.garment / 2);
            multipliers.skill_property[property.ALL] += Math.floor(refinement.garment / 4) * 3;
            if (refinement.garment >= 7)
                multipliers.matk += 7;
            if (refinement.garment >= 9)
                if (target.race === race.BRUTE || target.race === race.DEMON)
                    equipStats.bypass += 20;
            if (refinement.garment >= 11)
                if (target.race === race.BRUTE || target.race === race.DEMON)
                    equipStats.bypass += 10;
        }
    },
    {
        id: '480125', dbname: 'Cvt_Magical_Wing', name: 'Jetpack Mágico', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 5;
            multipliers.matk += Math.floor(refinement.garment / 2);
            multipliers.size[size.ALL] += Math.floor(refinement.garment / 3) * 3;
            if (refinement.garment >= 7)
                equipStats.VCT += 7;
            if (refinement.garment >= 11)
                multipliers.skill_property[property.ALL] += 10;
        }
    },
    {
        id: '20991', dbname: 'Fairy_Of_Eden', name: 'Fada do Éden', slot1: 'card',
        script: function () {
            // A cada refino:
            // Dano mágico +2%.
            // Velocidade de ataque +1%.
            multipliers.matk += refinement.garment * 2;
            equipStats.percentASPD += refinement.garment;
            // Refino +9 ou mais:
            // Todos os atributos +10.
            // O usuário não pode ser empurrado.
            if (refinement.garment >= 9) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            // Conjunto [Carta Veritas]: INT +40.
            if (document.getElementById('wea_slot1').value === '27087' ||
                document.getElementById('wea_slot2').value === '27087' ||
                document.getElementById('wea_slot3').value === '27087' ||
                document.getElementById('wea_slot4').value === '27087')
                equipStats.int += 40;
        }
    },
    {
        id: '480317', dbname: '', name: 'Constritor Mágico', slot1: 'card',
        // tags: 'SORCERER',
        script: function () {
            // Resistência as raças Humano e Doram +5%.
            // Resistência a monstros normais e chefes +5%.
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Velocidade de ataque +5%.]
            equipStats.percentASPD += 5;
            // Refino +7 ou mais:
            if (refinement.garment >= 7){
                // Dano mágico +5% adicional.
                multipliers.matk += 5;
                // Velocidade de ataque +5% adicional.
                equipStats.percentASPD += 5;
            }
            // Refino +9 ou mais:
            if (refinement.garment >= 9) {
                // Dano mágico +10% adicional.
                multipliers.matk += 10;
                // Velocidade de ataque +10% adicional.
                equipStats.percentASPD += 10;
            }
            // A cada nível de [Empatia Elemental]:
            // INT +5.
            // Pós-conjuração -5%.
            if (learned_skills["Empatia Elemental"] > 0) {
                equipStats.int += learned_skills["Empatia Elemental"] * 5;
                equipStats.castdelay += learned_skills["Empatia Elemental"] * 5;
            }
            // Ao aprender [Onda Psíquica] nv.5:
            // Ao realizar ataques físicos, 15% de chance de autoconjurar [Lanças de Fogo] [Lanças de Gelo] [Relâmpago] [Coluna de Pedra] e [Onda Psíquica] no nível aprendido.
            // --------------------------
            // A cada nível de [Encanto de Órion]:
            // Dano de [Lanças de Fogo] [Lanças de Gelo] [Relâmpago] e [Coluna de Pedra] +20%.
            // --------------------------
            // Ao aprender [Punho Arcano] nv.10:
            // Ao realizar ataques físicos, 25% de chance de autoconjurar [Escudo Mágico] nv.3 ou no maior nível aprendido.
        }
    },
    {
        id: '480025', dbname: 'Owl_Baron_Mantle', name: 'Manto do Barão', slot1: 'card',
        script: function () {
            equipStats.int += 2;
            equipStats.percentASPD += 10;
            equipStats.flatMATK += refinement.garment * 6;
            // Conjunto [Carta Executor]
            if (document.getElementById('shi_slot1').value === '4250')
                multipliers.size[size.LARGE] += 25;
            // Conjunto [Carta Tirfing]
            if (document.getElementById('shi_slot1').value === '4254')
                multipliers.size[size.MEDIUM] += 25;
            // Conjunto [Carta Mysteltainn]
            if (document.getElementById('shi_slot1').value === '4207')
                multipliers.size[size.SMALL] += 25;
        }
    },
    // {
    //     id: '480025 ', dbname: 'Owl_Baron_Mantle', name: 'Manto do Barão (Ativado)', slot1: 'card',
    //     script: function () {
    //         equipStats.int += 2;
    //         equipStats.percentASPD += 10;
    //         equipStats.flatMATK += refinement.garment * 6;
    //         // Efeito Ativado
    //         if (refinement.garment >= 7)
    //             equipStats.percentASPD += 10;
    //         if (refinement.garment >= 9)
    //             equipStats.percentASPD += 10;
    //         if (refinement.garment >= 10)
    //             equipStats.percentASPD += 10;
    //         // Conjunto [Carta Executor]
    //         if (document.getElementById('shi_slot1').value === '4250')
    //             multipliers.size[size.LARGE] += 25;
    //         // Conjunto [Carta Tirfing]
    //         if (document.getElementById('shi_slot1').value === '4254')
    //             multipliers.size[size.MEDIUM] += 25;
    //         // Conjunto [Carta Mysteltainn]
    //         if (document.getElementById('shi_slot1').value === '4207')
    //             multipliers.size[size.SMALL] += 25;
    //     }
    // },
    {
        id: '20925',
        dbname: 'Commander_manteau_J',
        name: 'Capa do Comandante',
        slot1: 'card',
        slot2: explo_capa,
        slot3: explo_capa,
        slot4: explo_capa,
        script: function () {
            equipStats.flatMATK += 10;
            if (refinement.garment >= 5)
                equipStats.flatMATK += 20;
            if (refinement.garment >= 7)
                equipStats.flatMATK += 30;
        }
    },
    {
        id: '480319', dbname: 'Divine_Phoenix', name: 'Relíquia Divina', slot1: 'card',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
                multipliers.property[property.ALL] += 10;
            }
            if (refinement.garment >= 12)
                multipliers.property[property.ALL] += 15;
        }
    },
    {
        id: '480251', dbname: 'Mystical_Wing', name: 'Asas Majestosas', slot1: 'card',
        script: function () {
            // A cada vez que a soma dos atributos base for 100 ou mais:
            // Dano físico, crítico e mágico +5%.
            let sum = stats.str + stats.agi + stats.vit + stats.int + stats.dex + stats.luk;
            multipliers.matk += Math.floor(sum/100) * 5;
            // Soma dos atributos base 400 ou mais:
            // Pós-conjuração -15%.
            // Velocidade de ataque +15%.
            if (sum >= 400){
                equipStats.percentASPD += 15;
                equipStats.castdelay += 15;
            }
            // Soma dos atributos base 500 ou mais:
            // Conjuração fixa -70%.
            // Precisão perfeita +25.
            if (sum >= 500 && equipStats.percentFCT < 70)
                equipStats.percentFCT = 70;
        }
    },
    {
        id: '20908', dbname: 'Jirant_Cloak_BR', name: 'Manto da Bruxa', slot1: 'card',
        script: function () {
            // A cada 2 refinos:
            // Resistência as propriedades Fogo e Vento +5%.
            // Refino +5 ou mais:
            if (refinement.garment >= 5) {
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Conjuração variável -5%.
                equipStats.VCT += 5;
            }
            // Refino +7 ou mais:
            if (refinement >= 7){
                // Dano mágico +5% adicional.
                multipliers.matk += 5;
                // Conjuração variável -5% adicional.
                equipStats.VCT += 5;
            }
            // Refino +15 ou mais:
            // Mantém [Vigor] ativo.
            // Conjunto [Cajado da Bruxa]
            // Dano mágico +5%.
            // Resistência as propriedades Fogo e Vento +10%.
        }
    },
];

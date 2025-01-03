import {equipStats, learned_skills, multipliers, refinement, skill, stats, target} from "../../scripts/core/state.js";
import {property, race, size, type} from "../../scripts/core/constants.js";

export const tops = [
    {
        id: '19308',
        dbname: 'Amistr_Beret',
        name: 'Quepe de Amistr',
        slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.top / 2) * 10;
            if (refinement.top >= 7) {
                equipStats.VCT += 10;
            }
            if (refinement.top >= 9) {
                multipliers.skill_property[property.NEUTRAL] += 10;
                multipliers.skill_property[property.HOLY] += 10;
            }
            if (refinement.top >= 11) {
                multipliers.matk += 3;
            }
            if (refinement.top > 10 && refinement.top <= 15) {
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + (refinement.top - 10) ) / 10;
            }
            // Conjunto
            if (document.getElementById('wea').value === '1631') {
                equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += Math.floor(refinement.weapon / 2) * 30;
            }
        }
    },
    {
        id: '18972',
        dbname: 'Old_Mitra',
        name: 'Memorável Desejo dos Deuses',
        slot1: 'card',
        slot2: '29071,29072,29073,29074,29075,29076,29077,29078,29079,29080',
        slot3: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        slot4: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.str += 1;
            equipStats.agi += 1;
            equipStats.vit += 1;
            equipStats.int += 1;
            equipStats.dex += 1;
            equipStats.luk += 1;
            equipStats.flatMATK += 2 * refinement.top;
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.top / 2) * 20;
            if (skill.id === "PR_MAGNUS")
                multipliers.skill += Math.floor(refinement.top / 2) * 10;
        }
    },
    {
        id: '18978',
        dbname: 'Old_Magic_Stone_Hat',
        name: 'Memorável Mistério da Magia',
        slot1: 'card',
        slot2: '29071,29072,29073,29074,29075,29076,29077,29078,29079,29080',
        slot3: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        slot4: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        tags: 'WARLOCK',
        script: function () {
            equipStats.str += 1;
            equipStats.agi += 1;
            equipStats.vit += 1;
            equipStats.int += 1;
            equipStats.dex += 1;
            equipStats.luk += 1;
            multipliers.matk += refinement.top;
            //recarga de meteoro escarlate e HP SP alem da regeneracao de SP
            
            
            if (skill.id === "WL_SOULEXPANSION")
                multipliers.skill += Math.floor(refinement.top / 2) * 5;
            //if (skill.id === "PR_MAGNUS")
            //    multipliers.skill += Math.floor(refinement.top / 2) * 10;
        }
    },
    {
        id: '18849',
        dbname: 'Celines_Ribbon',
        name: 'Laço da Celine',
        slot1: 'card',
        slot3: '4730,4731,4732,4710,4711,4712,4720,4721,4722,4750,4751,4752',
        slot4: '4869,4872,4873,4881,4813,4812,4826,4827,4760,4761',
        script: function () {
            equipStats.dex += 3;
            equipStats.flatMATK += 40;
            equipStats.flatMATK += refinement.top * 7;
        }
    },
    {
        id: '19469',
        dbname: 'Crown_Of_Saint_Jp',
        name: 'Coroa Sagrada',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.percentASPD += 10;
            if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                multipliers.skill += 20;
            if (refinement.top >= 9) {
                equipStats.percentASPD += 5;
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
            }
            if (refinement.top >= 11) {
                equipStats.percentASPD += 5;
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            // Ao aprender [Gênese] nv.5:
            if(learned_skills.genese >= 5){
                multipliers.protocol[type.BOSS] += 25;
            }


            // A cada nível de [Lauda Ramus]:
            if(learned_skills.lauda_ramus > 0){
                // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
                multipliers.property[property.NEUTRAL] += 5 * learned_skills.lauda_ramus;
                multipliers.property[property.EARTH] += 5 * learned_skills.lauda_ramus;
                multipliers.property[property.UNDEAD] += 5 * learned_skills.lauda_ramus;
                multipliers.property[property.GHOST] += 5 * learned_skills.lauda_ramus;
            }

            // A cada nível de [Lauda Agnus]:
            if(learned_skills.lauda_agnus > 0){
                // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
                multipliers.property[property.NEUTRAL] += 5 * learned_skills.lauda_agnus;
                multipliers.property[property.EARTH] += 5 * learned_skills.lauda_agnus;
                multipliers.property[property.UNDEAD] += 5 * learned_skills.lauda_agnus;
                multipliers.property[property.GHOST] += 5 * learned_skills.lauda_agnus;
            }

            // A cada refino:
            // Dano mágico contra as raças Humano e Humanoide +2%.
            multipliers.race[race.HUMAN] += refinement.top * 2;
            multipliers.race[race.DEMI_HUMAN] += refinement.top * 2;
        }
    },
    {
        id: '400213',
        dbname: 'Faith_Of_Yggdrasil',
        name: 'Asas de Yggdrasil',
        slot1: 'card',
        script: function () {
            multipliers.size[size.ALL] += 10;
            if (refinement.top >= 10) {
                equipStats.castdelay += 20;
                multipliers.size[size.ALL] += 15;
            }
            if (refinement.top >= 12) {
                multipliers.size[size.ALL] += 15;
            }
        }
    },
    {
        id: '400287',
        dbname: 'Legacy_of_Wise_One_J',
        name: 'Capacete de Intensificação',
        slot1: 'card',
        script: function () {
            equipStats.castdelay += 20;
            if (refinement.top >= 10) {
                multipliers.race[race.ALL] += 30;
            }
        }
    },
    {
        id: '19436',
        dbname: 'VesperHeadGear',
        name: 'Capacete Vesper [Carta Vesper]',
        script: function () {
            // Capacete
            equipStats.dex += 2;
            equipStats.VCT += 10;
            if (refinement.top >= 7)
                equipStats.VCT += 10;
            if (refinement.top >= 9)
                equipStats.VCT += 10;
            // Conjunto [Carta Vesper]
            // Ignora 70% da DEFM de monstros Chefes.
            // Dano mágico de propriedade Neutro e Sagrado +30%.
            if (target.type === type.BOSS)
                equipStats.bypass += 100;
            multipliers.skill_property[property.NEUTRAL] += 30;
            multipliers.skill_property[property.HOLY] += 30;
            // Carta Vesper
            // DES +2.
            equipStats.dex += 2;
            // --------------------------
            // Conjunto
            // [Carta Belzebu]
            // Conjuração variável +30%.
        }
    },
    // {
    //     id: '400059',
    //     dbname: 'Scorpio_Diadem_K',
    //     name: 'Tiara de Escorpião',
    //     slot1: 'card',
    //     script: function () {
    //         flatMATQ += Math.floor(refine / 2) * 20;
    //         if (refine >= 7)
    //             varcast += 15;
    //         if (refine >= 9)
    //             allpropety += 15;
    //         if (refine >= 11) {
    //             flatFCT += 0.2;
    //             small += 15;
    //             medium += 15;
    //         }
    //         // Conjunto
    //         // [Ultio-OS]
    //         // Dano mágico de propriedade Sagrado +5%.
    //         // A cada 2 refinos da arma:
    //         // Dano de [Judex] +3%.
    //     }
    // },
    // {
    //     id: '400044',
    //     dbname: 'Phantom_Cap',
    //     name: 'Cartola Sombria',
    //     slot1: 'card',
    //     script: function () {
    //         flatMATQ += Math.floor(refine / 2) * 20;
    //         if (refine >= 7)
    //             varcast += 15;
    //         if (refine >= 9)
    //             allpropety += 15;
    //         if (refine >= 11) {
    //             flatFCT += 0.2;
    //             small += 15;
    //             medium += 15;
    //         }
    //         // Conjunto
    //         // [Ultio-OS]
    //         // Dano mágico de propriedade Sagrado +5%.
    //         // A cada 2 refinos da arma:
    //         // Conjuração variável -3%.
    //     }
    // },
    {
        id: '400687',
        dbname: '',
        name: 'Garra Diabólica',
        slot1: 'card',
        script: function () {
            multipliers.matk += refinement.top * 5;
            equipStats.flatMATK += Math.floor(refinement.top / 2) * 15;
            if (refinement.top >= 7) {
                equipStats.castdelay += 8;
                equipStats.VCT += 8;
            }
            if (refinement.top >= 9) {
                // Bugado! Qnd corrigirem eu descomento
                //multipliers.skill_property+=10;
            }
            if (refinement.top >= 11)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 2 ) / 10;
            //Conjuntos: A cada 3 refinos da armadura: Dano mágico contra todas as raças +8%
            if (document.getElementById('arm').value === '15146' || document.getElementById('arm').value === '15163') {
                multipliers.race[race.ALL] += Math.floor(refinement.armor / 3) * 8;
            }
        }
    },
    {
        id: '400118', dbname: 'BioWeapon_Helm_AB', name: 'Espólio de Margaretha', slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function (){
            // A cada 2 refinos: ATQ e ATQM +20.
            equipStats.flatMATK += Math.floor(refinement.top/2) * 20;
            // Refino +7 ou mais:
            if (refinement.top >= 7){
                // Conjuração variável -10%.
                equipStats.VCT += 10;
                // Velocidade de ataque +10%.
                equipStats.percentASPD += 10;
            }
            // Refino +9 ou mais:
            if (refinement.top >= 9) {
                // ATQ da arma +15%.
                // Dano mágico +15%.
                multipliers.matk += 15;
            }
            // Refino +11 ou mais:
            if (refinement.top >= 11){
                // Dano físico contra todos os tamanhos +10%.
                // Dano mágico de todas as propriedades +10%.
                multipliers.skill_property[property.ALL] += 10;
            }
            // Conjunto [Adorare]
            if (document.getElementById('wea').value === '2057') {
                // Dano mágico de propriedade Sagrado +10%.
                multipliers.skill_property[property.HOLY] += 10;
                // A cada refino da arma: Dano de [Adoramus] +5%.
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += refinement.weapon * 5;
            }
            // Conjunto [Penitência]
            if (document.getElementById('wea').value === '26161') {
                // Dano mágico de propriedade Sagrado +10%.
                multipliers.skill_property[property.HOLY] += 10;
                // A cada refino da arma: Dano de [Judex] +10%.
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += refinement.weapon * 10;
            }
            // Conjunto [Mangual Lucis]
            // Dano físico contra todos os tamanhos +10% adicional.
            // A cada refino da arma:
            // Dano de [Gemini Lumen] +10%.
            // --------------------------
            // Tipo: Equip. para Cabeça
            // Equipa em: Topo
            // DEF: 10 DEFM.: 0
            // Peso: 10
            // Nível necessário: 170
            // Classes: Arcebispos e evoluções
        }
    },
    {
        id: '19426', dbname: 'King_Of_Spirit_Circlet', name: 'Coroa do Espírito do Rei',
        tags: 'SORCERER',
        script: function () {
            // Pós-conjuração -10%.
            equipStats.castdelay += 10;
            // Dano de [Castigo de Nerthus] e [Pó de Diamante] +10%.
            if (skill.id === "SO_EARTHGRAVE" || skill.id === "SO_DIAMONDDUST")
                multipliers.skill += 10;
            // Refino +9 ou mais:
            if (refinement.top >= 9){
                // Pós-conjuração -5% adicional.
                equipStats.castdelay += 5;
                // Dano de [Castigo de Nerthus] e [Pó de Diamante] +15% adicional.
                if (skill.id === "SO_EARTHGRAVE" || skill.id === "SO_DIAMONDDUST")
                    multipliers.skill += 15;
            }
            // Refino +11 ou mais:
            if (refinement.top >= 11){
                // Pós-conjuração -5% adicional.
                equipStats.castdelay += 5;
                // Dano de [Castigo de Nerthus] e [Pó de Diamante] +25% adicional.
                if (skill.id === "SO_EARTHGRAVE" || skill.id === "SO_DIAMONDDUST")
                    multipliers.skill += 25;
            }
            // Refino +13 ou mais:
            if (refinement.top >= 13){
                // Ignora 100% da DEFM de todas as raças.
                equipStats.bypass += 100;
            }
            // Ao aprender [Aquecer Terreno] nv.5:
            // Recarga de [Lanças dos Aesir] [Castigo de Nerthus] e [Pó de Diamante] -1 segundo.
            if(learned_skills["Aquecer Terreno"] === 5)
                if (skill.id === "SO_VARETYR_SPEAR" || skill.id === "SO_EARTHGRAVE" || skill.id === "SO_DIAMONDDUST")
                    skill.cooldown += -1;
            // Ao aprender [Escudo Elemental] nv.5:
            // Dano mágico contra monstros Chefes +25%.
            if(learned_skills["Escudo Elemental"] === 5)
                multipliers.protocol[type.BOSS] += 25;
            // A cada nível de [Empatia Elemental]:
            // Conjuração variável -4%.
            if (learned_skills["Empatia Elemental"]>0)
                equipStats.VCT += learned_skills["Empatia Elemental"] * 4;
            // A cada refino até o +10:
            // Conjuração fixa -5%.
            let percentFCTRed = Math.min(10, refinement.top) * 5;
            if (equipStats.percentFCT < percentFCTRed)
                equipStats.percentFCT = percentFCTRed;
        }
    },
    {
        id: '400095', dbname: 'BioWeapon_Helm_SO', name: 'Espólio de Celia', slot1: 'card',
        tags: 'SORCERER',
        script: function () {
            // A cada 2 refinos: Dano mágico +2%. Regen. natural de SP +6%.
            multipliers.matk += Math.floor(refinement.top/2) * 2;
            // Refino +7 ou mais: Todos os atributos +3.
            if (refinement.top >= 7){
                equipStats.str += 3;
                equipStats.agi += 3;
                equipStats.vit += 3;
                equipStats.int += 3;
                equipStats.dex += 3;
                equipStats.luk += 3;
            }
            // Refino +9 ou mais: Conjuração variável -10%.
            if (refinement.top >= 9)
                equipStats.VCT += 10;
            // Refino +11 ou mais: Dano mágico de propriedade Neutro, Terra e Água +20%.
            if (refinement.top >= 11){
                multipliers.skill_property[property.NEUTRAL] += 20;
                multipliers.skill_property[property.EARTH] += 20;
                multipliers.skill_property[property.WATER] += 20;
            }
            // Conjunto [Lançarin]
            if (document.getElementById('wea').value === '28633') {
                // Dano mágico +2%.
                multipliers.matk += 2;
                // A cada refino da arma: Dano de [Lanças de Fogo] [Lanças de Gelo] e [Relâmpago] +3%.
                if (skill.id === 'MG_FIREBOLT' || skill.id === 'MG_COLDBOLT' ||skill.id === 'MG_LIGHTNINGBOLT')
                    multipliers.skill += refinement.weapon * 3;
            }
            // Conjunto [Castigo Diamante]
            if (document.getElementById('wea').value === '26160'){
                // Dano mágico de propriedade Terra e Água +3% adicional.
                multipliers.skill_property[property.EARTH] += 3;
                multipliers.skill_property[property.WATER] += 3;
                // A cada refino da arma: Dano de [Pó de Diamante] +3%.
                if (skill.id === 'SO_DIAMONDDUST')
                    multipliers.skill += refinement.weapon * 3;
            }
            // Conjunto [Lança Psíquica]
            if (document.getElementById('wea').value === '26159'){
                // Dano mágico de propriedade Neutro e Vento +3% adicional.
                multipliers.skill_property[property.NEUTRAL] += 3;
                multipliers.skill_property[property.WIND] += 3;
                // A cada refino da arma: Dano de [Lanças dos Aesir] +3%.
                if (skill.id === 'SO_VARETYR_SPEAR')
                    multipliers.skill += refinement.weapon * 3;
            }
        }
    },
    {
        id: '19262', dbname: 'Jirant_Circlet', name: 'Tiara da Bruxa', slot1: 'card',
        tags: 'SORCERER',
        script: function () {
            // A cada refino:
            // Dano mágico +1%.
            multipliers.matk += refinement.top;
            // Conjuração variável -1%.
            equipStats.VCT += refinement.top;
            // Tolerância a Medo +10%.
            // --------------------------
            // Refino +7 ou mais: Em [Onda Psíquica]:
            if (refinement.top >= 7 && skill.id === 'SO_PSYCHIC_WAVE'){
                // Dano +15%.
                multipliers.skill += 15;
                // Recarga -1 segundo.
                skill.cooldown += -1;
            }
            // Refino +9 ou mais: Em [Onda Psíquica]:
            if (refinement.top >= 9 && skill.id === 'SO_PSYCHIC_WAVE'){
                // Dano +15% adicional.
                multipliers.skill += 15;
                // Recarga -1 segundo adicional.
                skill.cooldown += -1;
            }
            // Refino +10 ou mais:
            if(refinement.top >= 10){
                // A cada vez que DES e INT somarem 10, DES e INT +1.
                let bonus = Math.floor((stats.dex + stats.int)/10)
                equipStats.dex += bonus;
                equipStats.int += bonus;
            }
        }
    },
];

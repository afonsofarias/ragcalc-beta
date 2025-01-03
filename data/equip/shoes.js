import {
    currentJob,
    equipStats,
    learned_skills,
    multipliers,
    refinement,
    skill,
    stats
} from "../../scripts/core/state.js";
import {property, race, size, type} from "../../scripts/core/constants.js";

const lab_sho4 = '4730,4731,4720,4721,4733,4734,4723,4724';
const lab_sho3 = '4950,4949,' + lab_sho4;
const lab_sho2 = '4856,4858,4854,' + lab_sho3;

export const shoes = [
    {
        id: '22225', dbname: 'Shoes_Of_Punishment_', name: 'Sapatos da Penitência [1]', slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            if (skill.id === "AB_JUDEX")
                multipliers.skill += 30;
            multipliers.matk += 2;
            multipliers.skill_property[property.HOLY] += 2;
            if (refinement.shoes >= 5) {
                multipliers.matk += 3;
                multipliers.skill_property[property.HOLY] += 3;
            }
            if (refinement.shoes >= 7) {
                multipliers.matk += 5;
                multipliers.skill_property[property.HOLY] += 5;
            }
            // Conjunto [Vara Sagrada]
            if (document.getElementById('wea').value === '1631') {
                // A cada nível aprendido de [Lauda Ramus], [Lauda Agnus] ou [Gênese]:
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 13 * 10;
                // A cada nível aprendido de [Oratio]:
                // Conjuração variável de [Adoramus] e [Judex] -5%.
                if (refinement.weapon >= 7) {
                    multipliers.race[race.UNDEAD] += 30;
                    multipliers.race[race.DEMON] += 30;
                    multipliers.property[property.UNDEAD] += 30;
                    multipliers.property[property.DARK] += 30;
                }
                if (refinement.weapon >= 7) {
                    if (skill.id === "AB_ADORAMUS")
                        multipliers.skill += 20;
                    multipliers.race[race.UNDEAD] += 20;
                    multipliers.race[race.DEMON] += 20;
                    multipliers.property[property.UNDEAD] += 20;
                    multipliers.property[property.DARK] += 20;
                }
            }
        }
    },
    {
        id: '470047', dbname: 'Awakening_Nergal_Shoes', name: '[MEGA] Patas de Raposas [Carta Flor do Luar]',
        slot2: lab_sho2,
        slot3: lab_sho3,
        slot4: lab_sho4,
        script: function () {
            multipliers.protocol[type.BOSS] += 15;
            equipStats.flatMATK += refinement.shoes * 5;
            equipStats.VCT += refinement.shoes * 2;
            multipliers.property[property.EARTH] += refinement.shoes * 2;
            multipliers.property[property.GHOST] += refinement.shoes * 2;
            multipliers.property[property.NEUTRAL] += refinement.shoes * 2;
            multipliers.property[property.UNDEAD] += refinement.shoes * 2;
            equipStats.int += refinement.shoes * 10;
        }
    },
    {
        id: '22245', dbname: 'Space_shoes_JP_', name: '[MEGA] Botas Espaciais [Carta Senhor das Trevas]',
        slot2: lab_sho2,
        slot3: lab_sho3,
        slot4: lab_sho4,
        script: function () {
            // ATQM +50.
            equipStats.flatMATK += 50;
            // HP e SP máx. +20%.
            // Pós-conjuração -10%.
            equipStats.castdelay += 10;
            // Dano mágico contra monstros Chefes +15%.
            multipliers.protocol[type.BOSS] += 15;

            // Conjunto [Carta Senhor das Trevas]
            // Habilita [Chuva de Meteoros] nv.10.
            // Desativa a autoconjuração de [Chuva de Meteoros].
            // Nv. base 99:
            // A cada refino:
            // Pós-conjuração -2%.
            // Dano mágico de propriedade Fogo +3%.
            // Nv. base 100 ou mais:
            // A cada refino:
            // Pós-conjuração -5%.
            equipStats.castdelay += refinement.shoes * 5;
            // Dano mágico de propriedade Fogo +8%.
            multipliers.skill_property[property.FIRE] += refinement.shoes * 8;
        }
    },
    {
        id: '470049', dbname: 'Pororoca_Shoes_', name: 'Botas da Pororoca', slot1: 'card',
        tags:"WARLOCK",
        script: function () {
            // HP e SP máx. +3%.
            // Dano mágico +2%.
            multipliers.matk += 2;
            // Dano mágico de propriedade Água +2%.
            multipliers.skill_property[property.WATER] += 2;
            // Refino +5 ou mais:
            if (refinement.shoes >= 7) {
                // HP e SP máx. +7% adicional.
                // Dano mágico +3% adicional.
                multipliers.matk += 3;
                // Dano mágico de propriedade Água +3% adicional.
                multipliers.skill_property[property.WATER] += 3;
            }

            // Refino +7 ou mais:
            if (refinement.shoes >= 7) {
                // HP e SP máx. +10% adicional.
                // Dano mágico +5% adicional.
                multipliers.matk += 5;
                // Dano mágico de propriedade Água +5% adicional.
                multipliers.skill_property[property.WATER] += 5;
            }

            // Conjunto [Bastão de Lágrimas]
            if (document.getElementById('wea').value === '1646') {
                // A cada ponto investido em [Esfera d'Água]: Dano de [Esfera d'Água] +30%.
                // A cada refino da arma: Dano de [Esfera d'Água] +20%.
                if (skill.id === "WZ_WATERBALL"){
                    multipliers.skill += (learned_skills["Esfera d'Água"] * 30) + (refinement.weapon * 20);
                }
                // A cada refino da arma: Dano mágico de propriedade Água +4%.
                multipliers.skill_property[property.WATER] += refinement.weapon * 4;
                // A cada ponto investido em [Congelar]:
                // Ignora 5% da DEFM de monstros normais, chefes, guardiões e personagens.
                equipStats.bypass += 50;
            }
        }
    },
    {
        id: '470112', dbname: 'Moaning_of_EvilSpirits', name: 'Botas Decadentes', slot1: 'card',
        script: function () {
            multipliers.matk += 15;
            if (refinement.shoes >= 7) {
                multipliers.skill_property[property.NEUTRAL] += 20;
                multipliers.skill_property[property.DARK] += 20;
            }
            if (refinement.shoes >= 9)
                multipliers.matk += 25;
            // Conjunto [Carta Bispo Decadente]
            if (document.getElementById('sho_slot1').value === '4441') {
                // Dano mágico +10% adicional.
                multipliers.matk += 10;
                // Dano mágico contra as raças Humano, Humanoide e Anjo +50%.
                multipliers.race[race.HUMAN] += 50;
                multipliers.race[race.DEMI_HUMAN] += 50;
                multipliers.race[race.ANGEL] += 50;
            }
            // Conjunto [Carta Bispo Decadente Selada]
            if (document.getElementById('sho_slot1').value === '4539') {
                // Dano mágico contra as raças Humano, Humanoide e Anjo +20%.
                multipliers.race[race.HUMAN] += 20;
                multipliers.race[race.DEMI_HUMAN] += 20;
                multipliers.race[race.ANGEL] += 20;
            }
            // Conjunto [Epifania]
            if (document.getElementById('arm_slot3').value ==='4876' || document.getElementById('arm_slot3').value ==='4876 ') {
                // INT +40.
                // Pós-conjuração -40%.
                equipStats.int+=40;
                equipStats.castdelay+=40;
            }

        }
    },
    {
        id: '470021', dbname: 'Grace_Magic_Boots', name: 'Grácil Bota Magica', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 20;
            if (refinement.shoes >= 7)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            if (refinement.shoes >= 9)
                multipliers.skill_property[property.ALL]+=10;
        }
    },
    {
        id: '470106 ', dbname: 'Shoes_Of_Judex_', name: 'Sapatos da Persistência', slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            // Ao aprender [Oratio] nv.10:
            if(learned_skills["Oratio"] >= 10) {
                // Conjuração variável -20%.
                equipStats.VCT += 20;
                // Pós-conjuração -10% adicional.
                equipStats.castdelay += 10;
            }
            // Ao aprender [Gênese] nv.5:
            if(learned_skills.genese >= 5){
                // Dano mágico contra oponentes de todas as propriedades +25%.
                multipliers.property[property.ALL] += 25;
            }
            // Refino +5 ou mais: Pós-conjuração -10%.
            if (refinement.shoes >= 5)
                equipStats.castdelay += 10;
            // Refino +7 ou mais: Pós-conjuração -10% adicional.
            if (refinement.shoes >= 7)
                equipStats.castdelay += 10;
        }
    },
    // {
    //     id: '22182', dbname: 'Shoes_Of_Punishment_BR', name: 'Sapatos da Penitência [0]', slot1: 'card',
    //     script: function () {
    //     }
    // },
    {
        id: '22214', dbname: 'Authority_Sandals', name: 'Sapato de Salto Dourado', slot1: 'card',
        script: function () {
            equipStats.bypass += 50;
            equipStats.str += 10;
            equipStats.agi += 10;
            equipStats.vit += 10;
            equipStats.int += 10;
            equipStats.dex += 10;
            equipStats.luk += 10;
            if (refinement.shoes >= 7) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (refinement.shoes >= 9) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
        }
    },
    {
        id: '22244', dbname: 'Chic_Silent_Shoes', name: 'Sapato Grã-fino', slot1: 'card',
        script: function () {
            multipliers.property[property.ALL] += 10;
            if (refinement.shoes >= 7)
                multipliers.property[property.ALL] += 10;
            if (refinement.shoes >= 9)
                multipliers.property[property.ALL] += 10;
        }
    },
    {
        id: '470075', dbname: 'Peep_Toe_Sandals', name: 'Sandálias Antigas', slot1: 'card',
        script: function () {
            equipStats.flatMATK += stats.baseLv;
        }
    },
    // {
    //     id: '470106', dbname: 'Shoes_Of_Judex_', name: '(jRO) Purge Shoes (Ativado)', slot1: 'card',
    //     script: function () {
    //         equipStats.VCT += 50;
    //         equipStats.castdelay += 50;
    //         multipliers.property[property.ALL] += 25;
    //         // Efeito
    //         if (skill.id === 'AB_JUDEX')
    //             multipliers.skill += stats.baseLv;
    //         //
    //         if (refinement.shoes >= 5)
    //             equipStats.castdelay += 10;
    //         if (refinement.shoes >= 7)
    //             equipStats.castdelay += 10;
    //     }
    // },
    {
        id: '470180', dbname: 'Starry_Sky_Twin_Prime', name: 'Botas Três Marias', slot1: 'card',
        script: function () {
            equipStats.castdelay += refinement.shoes * 2;
            if (refinement.shoes >= 10) {
                equipStats.str += 15;
                equipStats.agi += 15;
                equipStats.vit += 15;
                equipStats.int += 15;
                equipStats.dex += 15;
                equipStats.luk += 15;
                multipliers.matk += 15;
            }
            if (refinement.shoes >= 12) {
                equipStats.str += 15;
                equipStats.agi += 15;
                equipStats.vit += 15;
                equipStats.int += 15;
                equipStats.dex += 15;
                equipStats.luk += 15;
                multipliers.matk += 25;
            }
        }
    },
    {
        id: '470014', dbname: 'Virgo_Shoes_J', name: 'Sapatos de Virgem',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.flatMATK += 50;
            equipStats.percentASPD += 10;
            // Arcebispos e evoluções:
            equipStats.flatMATK += 80;
            if (skill.id === "AB_JUDEX")
                multipliers.skill += 100;
            multipliers.skill_property[property.HOLY] += 20;
        }
    },
    {
        id: '470298', dbname: '', name: 'Sapatilha Fantasma', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // HP e SP máx. +7%.
            // Refino +8 ou mais:
            // Conjuração variável -10%.
            if (refinement.shoes >= 8)
                equipStats.VCT+= 10;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +12 ou mais:
            // Dano mágico de todas as propriedades +15%.
            if (refinement.shoes >= 12)
                multipliers.skill_property[property.ALL]+= 15;
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
                }
            }
            // Conjunto [Castigo Diamante]
            if (document.getElementById('wea').value === '26160'){
                // Dano mágico contra todos os Tamanhos +10%.
                multipliers.size[size.ALL] += 10;
                // A cada refino do Calçado: Dano de [Castigo de Nerthus] +3%.
                if (skill.id === 'SO_EARTHGRAVE')
                    multipliers.skill += refinement.shoes * 3;
                // Soma dos refinos 18 ou mais: Conjuração variável de [Castigo de Nerthus] -100%.
                if ( (refinement.shoes+refinement.weapon) >= 18)
                    if (skill.id === 'SO_EARTHGRAVE')
                        skill.vct = 0;
                // Soma dos refinos 22 ou mais: Dano mágico contra oponentes de todas as propriedades +20%.
                if ( (refinement.shoes+refinement.weapon) >= 22)
                    multipliers.property[property.ALL] += 20;
            }
            // Conjunto [Lança Psíquica]
            if (document.getElementById('wea').value === '26159'){
                // Dano mágico contra todos os Tamanhos +10%.
                multipliers.size[size.ALL] += 10;
                // A cada refino do Calçado: INT +2.
                equipStats.int += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais: Recarga de [Onda Psíquica] -1 segundo.
                if ( (refinement.shoes+refinement.weapon) >= 18 && skill.id === 'SO_PSYCHIC_WAVE')
                    skill.cooldown += -1;
                // Soma dos refinos 22 ou mais: Dano mágico contra oponentes de todas as propriedades +20%.
                if ( (refinement.shoes+refinement.weapon) >= 22)
                    multipliers.property[property.ALL] += 20;
            }
        }
    },
    {
        id: '470298 ', dbname: '', name: 'Sapatilha Fantasma (Efeito Ativado)', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // HP e SP máx. +7%.
            // Refino +8 ou mais:
            // Conjuração variável -10%.
            if (refinement.shoes >= 8)
                equipStats.VCT+= 10;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +12 ou mais:
            // Dano mágico de todas as propriedades +15%.
            if (refinement.shoes >= 12)
                multipliers.skill_property[property.ALL]+= 15;
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
                    // Ao realizar ataques mágicos, 1,5% de chance de ativar um Efeito por 5 segundos.
                    // Efeito: INT +70.
                    equipStats.int += 70;
                }
            }
            // Conjunto [Castigo Diamante]
            if (document.getElementById('wea').value === '26160'){
                // Dano mágico contra todos os Tamanhos +10%.
                multipliers.size[size.ALL] += 10;
                // A cada refino do Calçado: Dano de [Castigo de Nerthus] +3%.
                if (skill.id === 'SO_EARTHGRAVE')
                    multipliers.skill += refinement.shoes * 3;
                // Soma dos refinos 18 ou mais: Conjuração variável de [Castigo de Nerthus] -100%.
                if ( (refinement.shoes+refinement.weapon) >= 18)
                    if (skill.id === 'SO_EARTHGRAVE')
                        skill.vct = 0;
                // Soma dos refinos 22 ou mais: Dano mágico contra oponentes de todas as propriedades +20%.
                if ( (refinement.shoes+refinement.weapon) >= 22)
                    multipliers.property[property.ALL] += 20;
            }
            // Conjunto [Lança Psíquica]
            if (document.getElementById('wea').value === '26159'){
                // Dano mágico contra todos os Tamanhos +10%.
                multipliers.size[size.ALL] += 10;
                // A cada refino do Calçado: INT +2.
                equipStats.int += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais: Recarga de [Onda Psíquica] -1 segundo.
                if ( (refinement.shoes+refinement.weapon) >= 18 && skill.id === 'SO_PSYCHIC_WAVE')
                    skill.cooldown += -1;
                // Soma dos refinos 22 ou mais: Dano mágico contra oponentes de todas as propriedades +20%.
                if ( (refinement.shoes+refinement.weapon) >= 22)
                    multipliers.property[property.ALL] += 20;
            }
        }
    },
    // Especulação Sapato Edda (Efeito base bRO, efeito de conjunto jRO)
    // {
    //     id: '470091',
    //     dbname: 'Disappointment_P_Shoes',
    //     name: 'Sapato da Especulação',
    //     script: function (){
    //         // Dano mágico +5%.
    //         multipliers.matk += 5;
    //         // HP e SP máx. +7%.
    //         // Refino +8 ou mais:
    //         // Conjuração variável -10%.
    //         if (refinement.shoes >= 8)
    //             equipStats.VCT+= 10;
    //         // Refino +10 ou mais:
    //         // Conjuração fixa -0,5 segundos.
    //         if (refinement.shoes >= 10)
    //             equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
    //         // Refino +12 ou mais:
    //         // Dano mágico de todas as propriedades +15%.
    //         if (refinement.shoes >= 12)
    //             multipliers.skill_property[property.ALL]+= 15;
    //         //Conjunto
    //         // [Penitência]
    //         // A cada nível de base:
    //         // Dano de [Magnus Exorcismus] +1%.
    //         // Dano de [Luz Divina] +20%.
    //         if (document.getElementById('wea').value === '26161'){
    //             if (skill.id === "AL_HOLYLIGHT"){
    //                 multipliers.skill += stats.baseLv * 20;
    //             }
    //         }
    //     }
    // },
    {
        id: '470318', dbname: '', name: 'Galocha Fantasma', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Refino +8 ou mais:
            // Dano mágico contra todas as raças +15%.
            if (refinement.shoes >= 8)
                multipliers.race[race.ALL] += 15;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +12 ou mais:
            // INT e DES +10.
            // Dano mágico contra oponentes de todas as propriedades +15%.
            if (refinement.shoes >= 12){
                equipStats.int += 10;
                equipStats.dex += 10;
                multipliers.property[property.ALL] += 15;
            }
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
                    // Ao realizar ataques mágicos, 1,5% de chance de ativar um Efeito por 5 segundos.
                    // Efeito: INT +70.
                    //equipStats.int += 70;
                }
            }
            // Conjunto
            // [Adorare]
            if (document.getElementById('wea').value === '2057') {
                // Dano mágico contra monstros Chefes +20%.
                multipliers.protocol[type.BOSS] += 20;
                // A cada refino do Calçado:
                // Dano mágico contra todas as raças +2%.
                multipliers.race[race.ALL] += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais:
                // Recarga de [Adoramus] -0,3 segundos.
                if ((refinement.shoes + refinement.weapon) >= 18 && skill.id === "AB_ADORAMUS")
                    skill.cooldown += 0.3;
                //skill.cooldown += -0.3;
                // Soma dos refinos 22 ou mais:
                // Anula o consumo de Gemas ao usar habilidades.
            }
            // Conjunto
            // [Penitência]
            if (document.getElementById('wea').value === '26161'){
                // Velocidade de ataque +10%.
                equipStats.percentASPD += 10;
                // A cada refino do Calçado:
                // Dano mágico contra todas as raças +2%.
                multipliers.race[race.ALL] += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais:
                // Recarga de [Magnus Exorcismus] -4 segundos.
                if ((refinement.shoes + refinement.weapon) >= 18 && skill.id === "PR_MAGNUS")
                    skill.cooldown -= 4;
                // Soma dos refinos 22 ou mais:
                // Ao usar [Judex] 8% de chance de autoconjurar [Vituperatum] nv.4.
            }

        }
    },
    {
        id: '470038', dbname: 'Pisces_Shoes_J', name: 'Sapato de Peixes',
        tags: 'SORCERER',
        script: function () {
            // ATQM +50.
            equipStats.flatMATK += 50;
            // HP e SP máx. +10%.
            // Pós-conjuração -10%.
            equipStats.castdelay += 10;
            // Feiticeiros e evoluções:
            if (currentJob === 'SORCERER') {
                // ATQM +80 adicional.
                equipStats.flatMATK += 80;
                // HP e SP máx. +10% adicional.
                // Dano de [Onda Psíquica] +70%.
                if (skill.id === 'SO_PSYCHIC_WAVE')
                    multipliers.skill += 70;
                // Refino +8 ou mais:
                // Resistência as propriedades Fogo, Água, Vento e Terra +20%.
            }
        }
    },
    {
        id: '22238', dbname: 'Great_Hero_Boots', name: 'Botas Primordiais', slot1: 'card',
        script: function () {
            // HP máx. +1.500.
            // SP máx. +150.
            // --------------------------
            // A cada 3 refinos:
            // HP e SP máx. +1%.
            // --------------------------
            // Refino +7 ou mais:
            // ATQ da arma +5%.
            // Dano mágico +5%.
            if (refinement.shoes >= 7)
                multipliers.matk += 5;
            // Refino +9 ou mais: Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 9)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +11 ou mais: Conjuração fixa -0,2 segundos adicional.
            if (refinement.shoes >= 11)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 2 ) / 10;
            // Refino +13 ou mais:
            // Pós-conjuração -5%.
            // Conjuração variável -5%.
            if (refinement.shoes >= 13) {
                equipStats.castdelay += 5;
                equipStats.VCT += 5;
            }
        }
    },
];

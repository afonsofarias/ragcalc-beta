import {equipStats, multipliers, refinement, stats, target} from "../../scripts/core/state.js";
import {type} from "../../scripts/core/constants.js";

export const shields = [
    {
        id: '460091', dbname: '', name: 'Escudo Clerical', slot1: 'card',
        script: function () {
            // Ao realizar ataques físicos:
            // 5% de chance de autoconjurar [Luz da Criação] nv.3.
            // A cada refino:
            // Chance de autoconjuração +1%.
            // --------------------------
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Refino +7 ou mais: Dano mágico +5% adicional.
            if (refinement.shield >= 7)
                multipliers.matk += 5;
            // Refino +9 ou mais: Dano mágico +5% adicional.
            if (refinement.shield >= 9)
                multipliers.matk += 5;
            // Conjunto [Manto Clerical]
            // Ao realizar ataques físicos:
            // 2,5% de chance de autoconjurar [Escudo Mágico] nv.7.
            // A cada refino do escudo:
            // DEF +20. DEFM +2.
            // Escudo com refino +8 ou mais:
            // O usuário não pode ser empurrado.
            // Resistência as propriedades Sombrio e Sagrado +50%.
        }
    },
    {
        id: '460050', dbname: 'Symbol_Of_Eden', name: 'Símbolo do Éden', slot1: 'card',
        tags: 'SORCERER,WARLOCK',
        script: function () {
            // A cada refino: HP e SP máx. +1%.
            // Refino +9 ou mais:
            if (refinement.shield >= 9) {
                // INT e DES +5.
                equipStats.int += 5;
                equipStats.dex += 5;
            }
            // Refino +12 ou mais:
            if (refinement.shield >= 9) {
                // INT e DES +10 adicional.
                equipStats.int += 10;
                equipStats.dex += 10;
            }
            // Conjunto [Fada do Éden]
            // Resistência a propriedade Neutro +10%.
        }
    },
    {
        id: '28946', dbname: 'Bloody_Knight_Shield__', name: 'Sanguinário Purificado (50% Bypass Chefe)', slot1: 'card',
        script: function () {
            if (target.type === type.BOSS)
                equipStats.bypass += 50;
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Velocidade de ataque +10%.
            equipStats.percentASPD += 10;
            // Refino +7 ou mais: ATQ e ATQM +20.
            if (refinement.shield >= 7)
                equipStats.flatMATK += 20;
            // Refino +9 ou mais: Velocidade de ataque +2.
            if (refinement.shield >= 9)
                equipStats.flatASPD += 2;
            // Refino +12 ou mais: Pós-conjuração -5%.
            if (refinement.shield >= 12)
                equipStats.castdelay += 5;
        }
    },
    {
        id: '460015', dbname: 'Auto_Shield_A', name: 'Escudo Ilusión C', slot1: 'card',
        script: function () {
            equipStats.bypass += refinement.shield * 5;
        }
    },
    {
        id: '460003', dbname: 'Feather_Shield', name: 'Escudo de Penas', slot1: 'card',
        script: function () {
            equipStats.castdelay += 4;
            equipStats.percentASPD += 4;
            if (refinement.shield >= 7) {
                equipStats.castdelay += 4;
                equipStats.percentASPD += 4;
            }
            if (refinement.shield >= 8) {
                equipStats.flatMATK += 50;
            }
            if (refinement.shield >= 9) {
                equipStats.castdelay += 4;
                equipStats.percentASPD += 4;
            }
        }
    },
    {
        id: '28941', dbname: 'Excelion_Shield', name: 'Escudo E.X.C (A-INT/A-ATQM bi)', slot1: 'card',
        script: function () {
            // A-ATQM bi (4987)
            equipStats.flatMATK += 40;
            // A-INT (4983)
            equipStats.flatMATK += Math.floor(stats.int / 10) * 5;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 10;
        }
    },
    {
        id: '460000', dbname: 'Magic_Shield', name: 'Égide das Divindades', slot1: 'card',
        script: function () {
            if (refinement.shield >= 8)
                equipStats.castdelay += 10;
            if (refinement.shield >= 10)
                equipStats.castdelay += 10;
        }
    },
    {
        id: '28902', dbname: 'Mad_Bunny_K_', name: 'Coelho Macabro [1]', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 5;
            if (refinement.shield >= 9)
                equipStats.flatMATK += 15;
        }
    },
    {
        id: '28901', dbname: 'Mad_Bunny_K', name: 'Coelho Macabro [0]', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.flatASPD += 3;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 5;
            if (refinement.shield >= 9)
                equipStats.flatMATK += 15;
        }
    },
    {
        id: '28962', dbname: 'Haurvatat', name: 'Escudo Divino',
        script: function () {
            // Resistência a propriedade Neutro +10%
            // Resistência a oponentes de todos os Tamanhos +30%
            // Conjunto [Super AGI]
            if (document.getElementById('sho_slot2').value === '4854' ||
                document.getElementById('arm_slot2').value === '4854' ||
                document.getElementById('gar_slot2').value === '4854' ||
                document.getElementById('gar_slot3').value === '4854' ||
                document.getElementById('gar_slot4').value === '4854') {
                // Velocidade de ataque +15%
                equipStats.percentASPD += 15;
            }
            // Conjunto [Super INT]
            if (document.getElementById('sho_slot2').value === '4856' ||
                document.getElementById('arm_slot2').value === '4856' ||
                document.getElementById('gar_slot2').value === '4856' ||
                document.getElementById('gar_slot3').value === '4856' ||
                document.getElementById('gar_slot4').value === '4856') {
                // Dano mágico +15%
                multipliers.matk += 15;
            }
            // Conjunto [Super SOR]
            if (document.getElementById('sho_slot2').value === '4858' ||
                document.getElementById('arm_slot2').value === '4858' ||
                document.getElementById('gar_slot2').value === '4858' ||
                document.getElementById('gar_slot3').value === '4858' ||
                document.getElementById('gar_slot4').value === '4858') {
                // Pós-conjuração -15%
                equipStats.castdelay += 15;
            }
        }
    },
    {
        id: '28956', dbname: 'Jirant_Mirror', name: 'Espelho da Bruxa', slot1: 'card',
        script: function () {
            // Resistência as propriedades Fogo, Vento, Fantasma e Sagrado +20%.
            // --------------------------
            // A cada nível de [Fé]:
            // Resistência a propriedade Sagrado -2%
            // Conjunto [Vestido da Bruxa]
            if (document.getElementById('arm').value === '15387'){
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Ignora 25% da DEFM dos monstros Chefes.
                if (target.type === type.BOSS)
                    equipStats.bypass += 25;
                // Armadura com refino +8 ou mais:
                if (refinement.armor >= 8){
                    // Dano mágico +5% adicional.
                    multipliers.matk += 5;
                    // Ignora +25% adicional da DEFM dos monstros Chefes.
                    if (target.type === type.BOSS)
                        equipStats.bypass += 25;
                }
            }
            // Conjunto [Manto da Bruxa]
            if (document.getElementById('gar').value === '20908'){
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Conjuração variável -5%.
                equipStats.VCT += 5;
                // Escudo com refino +8 ou mais:
                if (refinement.shield >= 8){
                    // Esquiva perfeita +20.
                    // Dano mágico +5% adicional.
                    multipliers.matk += 5;
                    // Conjuração variável -5% adicional.
                    equipStats.VCT += 5;
                }
            }
        }
    },
    {
        id: '460074', dbname: 'Glacies_Aranea', name: 'Broquel Aracnídeo',
        script: function () {
            // Resistência as raças Humano e Doram +35%.
            // Resistência a monstros normais e chefes +40%.
            // --------------------------
            // A cada refino:
            // HP e SP máx. +3%.
            // Refino +5 ou mais:
            // Aumenta a velocidade de movimento.
            // Refino +7 ou mais:
            // Conjuração fixa -70%.
            if (refinement.shield >= 7 && equipStats.percentFCT < 70)
                equipStats.percentFCT = 70;
        }
    },
];

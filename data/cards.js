import {
    currentEquip,
    equipStats,
    multipliers,
    refinement,
    skill,
    stats,
    target,
    weapon
} from "../scripts/core/state.js";
import {property, race, size, type, weaponClass} from "../scripts/core/constants.js";

export const cards = [
    // headgear cards
    {
        id: '4374',
        dbname: 'Apocalips_H_Card',
        name: 'Carta Vesper',
        position: 'top',
        script: function () {
            equipStats.dex += 2;
            if (target.type === type.BOSS)
                equipStats.bypass += 30;
        }
    },
    {
        id: '4597', dbname: 'LichternB_Card', name: 'Carta Lichtern Laguz', position: 'top',
        tags: 'SORCERER',
        script: function () {
            equipStats.flatMATK += 10;
            multipliers.skill_property[property.WATER] += 5;
            if (currentEquip === 'top' && refinement.top >= 9)
                multipliers.skill_property[property.WATER] += 5;
        }
    },
    {
        id: '27309',
        dbname: 'High_Sanare_Card',
        name: 'Carta Sanare Mutante',
        position: 'top',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.flatMATK += 10;
            multipliers.skill_property[property.HOLY] += 5;
            if (currentEquip === 'top' && refinement.top >= 9)
                multipliers.skill_property[property.HOLY] += 5;
        }
    },
    {
        id: '4403',
        dbname: 'Kiel_Card',
        name: 'Carta Kiel-D-01',
        position: 'top',
        script: function () {
            equipStats.castdelay += 30;
        }
    },
    {
        id: '4556',
        dbname: 'Fenrir_Card',
        name: 'Carta Fenrir',
        position: 'top',
        script: function () {
            equipStats.flatMATK += 50;
            if (equipStats.percentFCT < 70)
                equipStats.percentFCT = 70;
            if (currentEquip === 'top')
                equipStats.flatMATK += refinement.top * 5;
        }
    },
    {
        id: '4557',
        dbname: 'Fenrir_Card_',
        name: 'Carta Fenris',
        position: 'top',
        script: function () {
            equipStats.flatMATK += 25;
        }
    },
    {
        id: '4528',
        dbname: 'Mutant_Coelacanth_Card',
        name: 'Carta Celacanto Mutante',
        position: 'top',
        script: function () {
            multipliers.matk += 2;
            if (currentEquip === 'top')
                multipliers.matk += Math.floor(refinement.top / 2);
        }
    },
    {
        id: '4365', dbname: 'B_Katrinn_Card', name: 'Carta Arquimaga Kathryne', position: 'top',
        tags: 'SORCERER',
        script: function () {
            // Conjuração variável +100%.
            equipStats.VCT += -100;
            // Ignora 100% da DEFM de monstros normais e personagens.
            if (target.type === type.NORMAL)
                equipStats.bypass += 100;
            // Regeneração natural de SP -100%.
            // Ao desequipar:
            // Drena 2.000 de SP.
        }
    },
    {
        id: '27310',
        dbname: 'Plaga_Card',
        name: 'Carta Plaga',
        position: 'top',
        tags: 'SORCERER',
        script: function () {
            equipStats.flatMATK += 10;
            multipliers.skill_property[property.NEUTRAL] += 5;
            if (currentEquip === 'top' && refinement.top >= 9)
                multipliers.skill_property[property.NEUTRAL] += 5;
        }
    },

    // armor cards
    {
        id: '27113', dbname: 'AwakenKtullanux_Card', name: 'Carta Ktullanux de Cristal', position: 'arm',
        tags: 'SORCERER',
        script: function () {
            // Dano mágico de propriedade Água +20%.
            multipliers.skill_property[property.WATER] += 20;
            // A cada refino da armadura: Dano mágico de propriedade Água +3%.
            multipliers.skill_property[property.WATER] += refinement.armor * 3;
        }
    },
    {
        id: '4652',
        dbname: 'Grave_Amon_Ra_Card',
        name: 'Carta Amon Ra do Pesadelo',
        position: 'arm',
        script: function () {
            multipliers.race[race.DEMON] += 50;
            multipliers.race[race.UNDEAD] += 50;
            multipliers.property[property.DARK] += 50;
            multipliers.property[property.UNDEAD] += 50;
        }
    },
    {
        id: '300209', dbname: 'SLD_Grave_Amon_Ra_Card', name: 'Carta Amon Ra do Pesadelo Selada', position: 'arm',
        script: function () {
            // Dano mágico contra as raças Demônio e Morto-Vivo +25%.
            // Dano mágico contra as propriedades Sombrio e Maldito +25%.
            multipliers.race[race.DEMON] += 25;
            multipliers.race[race.UNDEAD] += 25;
            multipliers.property[property.DARK] += 25;
            multipliers.property[property.UNDEAD] += 25;
            // Refino +15 ou mais:
            // Dano mágico contra as raças Demônio e Morto-Vivo +12% adicional.
            // Dano mágico contra as propriedades Sombrio e Maldito +12% adicional.
            if (refinement.armor >= 15){
                multipliers.race[race.DEMON] += 12;
                multipliers.race[race.UNDEAD] += 12;
                multipliers.property[property.DARK] += 12;
                multipliers.property[property.UNDEAD] += 12;
            }
        }
    },
    {
        id: '4602', dbname: 'AmdaraisH_Card', name: 'Carta Amdarais Sombrio', position: 'arm',
        script: function () {
            multipliers.matk += 20;
        }
    },
    {
        id: '300308', dbname: 'S_Meyer_Card', name: 'Carta Meyer', position: 'arm',
        script: function () {
            multipliers.skill_property[property.ALL] += Math.floor(refinement.armor / 3) * 4;
        }
    },
    {
        id: '4601', dbname: 'Amdarais_Card', name: 'Carta Amdarais', position: 'arm',
        script: function () {
            multipliers.matk += 15;
        }
    },
    {
        id: '4451', dbname: 'Ant_Buyanne_Card', name: 'Carta Entweihen Crothen', position: 'arm',
        script: function () {
            equipStats.flatMATK += 100;
        }
    },
    {
        id: '4561', dbname: 'Professor_Card', name: 'Carta Professora Celia', position: 'arm',
        tags: 'SORCERER',
        script: function () {
            // Dano mágico +7%.
            multipliers.matk += 7;
            // Ao receber danos mágicos:
            // 10% de chance de autoconjurar [Proteger Terreno] nv. 5.
            // DES base 110 ou mais: Dano mágico +7% adicional.
            if (stats.dex >= 110)
                multipliers.matk += 7;
        }
    },

    // weapon cards
    {
        id: '4685', dbname: 'Real_Magaleta_Card', name: 'Carta Alma de Margaretha', position: 'wea',
        tags: 'ARCHBISHOP',
        script: function () {
            if (skill.id === "AB_ADORAMUS") {
                multipliers.skill += 20;
                if (refinement.weapon >= 10)
                    multipliers.skill += 20;
                if (weapon.lv === 4)
                    multipliers.skill += 20;
            }
        }
    },
    {
        id: '4625', dbname: 'Timeholder_Card', name: 'Carta Vigia do Tempo', position: 'wea',
        script: function () {
            multipliers.matk += 20;
        }
    },
    {
        id: '27286', dbname: 'Colorful_T_Bear_Card', name: 'Carta Ursinhos Coloridos', position: 'wea',
        script: function () {
            equipStats.flatMATK += 5;
            multipliers.size[size.LARGE] += 15;
        }
    },
    {
        id: '27289', dbname: 'Fragment_Of_Soul_Card', name: 'Carta Fragmento de Alma', position: 'wea',
        script: function () {
            equipStats.flatMATK += 5;
            multipliers.size[size.MEDIUM] += 15;
        }
    },
    {
        id: '27324', dbname: 'Brinaranea_Card', name: 'Carta Brinaranha', position: 'wea',
        tags: 'SORCERER',
        script: function () {
            // Dano mágico de propriedade Água +15%.
            multipliers.skill_property[property.WATER] += 15;
            // Conjunto [Carta Skoll]
            // Dano mágico de propriedade Água +10% adicional.
            // ADICIONADO NA CARTA SKOLL
        }
    },
    {
        id: '31023', dbname: 'XM_Celine_Kimi_Card', name: 'Carta Celine Kimi', position: 'wea',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '31025', dbname: 'As_Wind_Ghost_Card', name: 'Carta Xamã Imortal', position: 'wea',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '27225', dbname: 'SLD_Timeholder_Card', name: 'Carta Vigia do Tempo Selada', position: 'wea',
        script: function () {
            multipliers.matk += 10;
            if (refinement.weapon >= 15)
                multipliers.matk += 5;
        }
    },
    {
        id: '27087', dbname: 'WizardOfVeritas_Card', name: 'Carta Veritas', position: 'wea',
        script: function () {
            equipStats.flatMATK += 25;
        }
    },
    {
        id: '300011', dbname: 'Holy_Frus_Card', name: 'Carta Frus Angelical', position: 'wea',
        tags: 'ARCHBISHOP',
        script: function () {
            if (weapon.class === weaponClass.ONE_HANDED_STAFF || weapon.class === weaponClass.TWO_HANDED_STAFF){
                multipliers.skill_property[property.HOLY] += 10;
                if (refinement.weapon >= 10)
                    multipliers.skill_property[property.HOLY] += 10;
                if (refinement.weapon >= 14)
                    multipliers.skill_property[property.HOLY] += 10;
            }
        }
    },
    {
        id: '300550', dbname: 'CLB_SS_EA_Card', name: 'Carta Fei-Chai', position: 'wea',
        script: function () {
            // Dano mágico contra todos os tamanhos +10%.
            multipliers.size[size.ALL] += 10;
        }
    },


    // shield cards
    {
        id: '4636', dbname: 'Bijou_Card', name: 'Carta Bijou', position: 'shi',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '300239', dbname: 'ILL_Maya_Card', name: 'Carta Maya Silente', position: 'shi',
        script: function () {
            // Custo de SP das habilidades +50%.
            // Dano mágico contra as raças Bruto, Doram e Planta +50%.
            multipliers.race[race.BRUTE] += 50;
            multipliers.race[race.DORAM] += 50;
            multipliers.race[race.PLANT] += 50;
        }
    },
    {
        id: '27325', dbname: 'Muspellskoll_Card', name: 'Carta Skoll', position: 'shi',
        tags: 'SORCERER',
        script: function () {
            // Conjunto [Carta Brinaranha]
            if (document.getElementById('wea_slot1').value === '27324' ||
                document.getElementById('wea_slot2').value === '27324' ||
                document.getElementById('wea_slot3').value === '27324' ||
                document.getElementById('wea_slot4').value === '27324') {
                // Dano físico e mágico contra oponentes de propriedade Fogo +10%.
                multipliers.property[property.FIRE] += 10;
                // Da Carta Brinaranha: Conjunto [Carta Skoll]
                // Dano mágico de propriedade Água +10% adicional.
                multipliers.skill_property[property.WATER] += 10;
            }
        }
    },
    {
        id: '4250', dbname: 'Executioner_Card', name: 'Carta Executor', position: 'shi',
        script: function () {
        }
    },
    {
        id: '4254', dbname: 'Tirfing_Card', name: 'Carta Tirfing', position: 'shi',
        script: function () {
        }
    },
    {
        id: '4207', dbname: 'Mysteltainn_Card', name: 'Carta Mysteltainn', position: 'shi',
        script: function () {
        }
    },

    // garment cards
    {
        id: '4596', dbname: 'AntiqueBook_Card', name: 'Carta Antigo Livro Danificado', position: 'gar',
        script: function () {
            equipStats.flatMATK += Math.floor(stats.int / 10) * 5;
        }
    },
    {
        id: '4675', dbname: 'Archbishop_Card', name: 'Carta Arcebispa Margaretha', position: 'gar',
        tags: 'ARCHBISHOP',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (stats.baseLv >= 175) {
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
        id: '4671', dbname: 'Sorcerer_Card', name: 'Carta Feiticeira Celia', position: 'gar',
        tags: 'SORCERER',
        script: function () {
            // Feiticeiros e evoluções:
            // HP máx. +10%.
            // Dano mágico +10%.
            multipliers.matk += 10;
            // Refino +10 ou mais: Todos os atributos +10.
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            // Nv. base 175 ou mais: Todos os atributos +10 adicional.
            if (stats.baseLv >= 175) {
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
        id: '4675 ', dbname: 'Archbishop_Card', name: 'Carta Arcebispa Margaretha (Transformação)', position: 'gar',
        tags: 'ARCHBISHOP',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (stats.baseLv >= 175) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (document.getElementById('wea_slot1').value === '4685' ||
                document.getElementById('wea_slot2').value === '4685' ||
                document.getElementById('wea_slot3').value === '4685' ||
                document.getElementById('wea_slot4').value === '4685') {
                equipStats.flatMATK += 100;

            }
        }
    },
    // {
    //     id: '4671 ', dbname: 'Sorcerer_Card', name: 'Carta Feiticeira Celia (Transformação)', position: 'gar',
    //     tags: 'SORCERER',
    //     script: function () {
    //         // Feiticeiros e evoluções:
    //         // HP máx. +10%.
    //         // Dano mágico +10%.
    //         multipliers.matk += 10;
    //         // Refino +10 ou mais: Todos os atributos +10.
    //         if (refinement.garment >= 10) {
    //             equipStats.str += 10;
    //             equipStats.agi += 10;
    //             equipStats.vit += 10;
    //             equipStats.int += 10;
    //             equipStats.dex += 10;
    //             equipStats.luk += 10;
    //         }
    //         // Nv. base 175 ou mais: Todos os atributos +10 adicional.
    //         if (stats.baseLv >= 175) {
    //             equipStats.str += 10;
    //             equipStats.agi += 10;
    //             equipStats.vit += 10;
    //             equipStats.int += 10;
    //             equipStats.dex += 10;
    //             equipStats.luk += 10;
    //         }
    //         // Conjunto [Carta Alma de Celia]
    //         if (document.getElementById('wea_slot1').value === '4692' ||
    //             document.getElementById('wea_slot2').value === '4692' ||
    //             document.getElementById('wea_slot3').value === '4692' ||
    //             document.getElementById('wea_slot4').value === '4692') {
    //             // Ao realizar ataques mágicos: 3% de chance de se transformar em Celia Alde por 6 segundos.
    //             // Durante a transformação: ATQM +100.
    //             equipStats.flatMATK += 100;
    //         }
    //     }
    // },
    {
        id: '27381', dbname: 'C_Himel_Card', name: '(kRO) Phantom of Himmelmez Card', position: 'gar',
        script: function () {
            // Increases holy and neutral property magical damage by 100%.
            multipliers.skill_property[property.HOLY] += 100;
            multipliers.skill_property[property.NEUTRAL] += 100;
        }
    },
    {
        id: '300122', dbname: 'Pitaya_Y_Card', name: '(kRO) Yellow Pitaya Card', position: 'gar',
        tags: 'ARCHBISHOP',
        script: function () {
            // Increases holy property magical damage by 3% per refine rate.
            multipliers.skill_property[property.HOLY] += refinement.garment * 3;
        }
    },
    {
        id: '300424', dbname: 'S_Friedrich_Card', name: 'Carta Friedrich', position: 'gar',
        script: function () {
            // Increases all property magical damage by 5%.
            multipliers.skill_property[property.ALL] += 5;
            // Increases all property magical damage by additional 4% per 2 refine rate.
            multipliers.skill_property[property.ALL] += Math.floor(refinement.garment / 2) * 4;
            // When equipped with Meyer Lugenburg Card, increases all property magical damage by 5%.
            if (document.getElementById('arm_slot1').value === '300308')
                multipliers.skill_property[property.ALL] += 5;
        }
    },
    {
        id: '27177', dbname: 'Rr_Arclouse_Card', name: '(kRO) Carta Tapuru', position: 'gar',
        script: function () {
            // A cada 10 de INT, ATQM +3, ASPD +1%.
            equipStats.flatMATK += Math.floor(stats.int / 10) * 3;
            equipStats.percentASPD += Math.floor(stats.int / 10);
            // INT 120 ou mais ATQM+ 40.
            if (stats.int >= 120)
                equipStats.flatMATK += 40;
        }
    },
    {
        id: '300552', dbname: 'CLB_SS_LT_Card', name: 'Carta Tai-Zi', position: 'gar',
        script: function () {
            // A cada 20 de INT base:
            // Pós-conjuração -1%.
            equipStats.castdelay += Math.floor(stats.int/20);
            // INT base 125 ou mais:
            // Efetividade cura +30%.
            // Dano mágico de todas as propriedades +30%.
            if (stats.int >= 125)
                multipliers.skill_property[property.ALL] += 30;
        }
    },
    {
        id: '27362', dbname: 'Polluted_Spi_Q_Card', name: 'Carta Aranha Rainha', position: 'gar',
        tags: 'SORCERER',
        script: function () {
            // Resistência a todas as propriedades -30%.
            // Dano mágico de propriedade Água e Terra +100%.
            multipliers.skill_property[property.WATER] += 100;
            multipliers.skill_property[property.EARTH] += 100;
        }
    },
    {
        id: '300201', dbname: 'SLD_P_Spi_Q_Card', name: 'Carta Aranha Rainha Selada', position: 'gar',
        tags: 'SORCERER',
        script: function () {
            // Resistência a todas as propriedades -60%.
            // Dano mágico de propriedade Água e Terra +50%.
            multipliers.skill_property[property.WATER] += 50;
            multipliers.skill_property[property.EARTH] += 50;
            // No refino +15 ou mais, os efeitos passam a ser:
            // Resistência a todas as propriedades -40%.
            // Dano mágico de propriedade Água e Terra +75%.
            if (refinement.garment >= 15) {
                multipliers.skill_property[property.WATER] += 25;
                multipliers.skill_property[property.EARTH] += 25;
            }
        }
    },
    {
        id: '27167', dbname: 'Faceworm_L_Card', name: 'Carta Larva de Verme', position: 'gar',
        tags: 'SORCERER',
        script: function () {
            // Resistência a propriedade Neutro +15%.
            // A cada refino:
            // Dano mágico de propriedade Água +3%.
            multipliers.skill_property[property.WATER] += refinement.garment * 3;
        }
    },

    // shoes cards
    {
        id: '27287', dbname: 'Shining_T_Bear_Card', name: 'Carta Ursinho Brilhante', position: 'sho',
        tags: 'ARCHBISHOP',
        script: function () {
            multipliers.skill_property[property.HOLY] += refinement.shoes * 3;
        }
    },
    {
        id: '4658', dbname: 'Grave_Verit_Card', name: 'Carta Verit do Pesadelo', position: 'sho',
        script: function () {
            multipliers.matk += 5;
            if (refinement.shoes >= 7)
                multipliers.matk += 3;
            if (refinement.shoes >= 9)
                multipliers.matk += 2;
        }
    },
    {
        id: '27259', dbname: 'Rechenier_Card', name: 'Carta Shaula', position: 'sho',
        tags: 'ARCHBISHOP',
        script: function () {
            multipliers.matk += 3;
            multipliers.skill_property[property.HOLY] += 5;
        }
    },
    {
        id: '4441', dbname: 'Fallen_Bishop_Card', name: 'Carta Bispo Decadente', position: 'sho',
        script: function () {
            multipliers.matk += 10;
            multipliers.race[race.HUMAN] += 50;
            multipliers.race[race.DEMI_HUMAN] += 50;
            multipliers.race[race.ANGEL] += 50;
        }
    },
    {
        id: '4539', dbname: 'Sealed_F_Bishop_Card', name: 'Carta Bispo Decadente Selada', position: 'sho',
        script: function () {
            multipliers.matk += 5;
            multipliers.race[race.HUMAN] += 25;
            multipliers.race[race.DEMI_HUMAN] += 25;
            multipliers.race[race.ANGEL] += 25;
            if (refinement.shoes >= 15) {
                multipliers.matk += 3;
                multipliers.race[race.HUMAN] += 8;
                multipliers.race[race.DEMI_HUMAN] += 8;
                multipliers.race[race.ANGEL] += 8;
            }
        }
    },

    // acc cards
    {
        id: '27125', dbname: 'Headless_Mule_Card', name: 'Carta Mula Sem Cabeça', position: 'acc',
        tags: 'ARCHBISHOP,SORCERER',
        script: function () {
            multipliers.skill_property[property.WATER] += 20;
            multipliers.skill_property[property.HOLY] += 20;
        }
    },
    {
        id: '27262', dbname: 'Dy_Card', name: 'Carta Atria', position: 'acc',
        tags: 'ARCHBISHOP,SORCERER',
        script: function () {
            multipliers.skill_property[property.NEUTRAL] += 20;
            multipliers.skill_property[property.DARK] += 20;
        }
    },
    {
        id: '27323', dbname: 'Shnaim_Card', name: 'Carta Shenime', position: 'acc',
        script: function () {
        }
    },
    {
        id: '27322', dbname: 'Ahat_Card', name: 'Carta Ahat', position: 'acc',
        script: function () {
        }
    },
];

import {equipStats, multipliers, refinement, skill, weapon} from "../../scripts/core/state.js";
import {property, race, size, type, weaponClass} from "../../scripts/core/constants.js";

const malangdo = '29446,29445,4827,4826,4812,4813,4761';
const brasilis = '29446,4831';

export const weapons = [
    {
        id: '540011', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = weaponClass.BOOK;
            // A cada 2 refinos:
            // ATQ e ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
            // A cada 3 refinos:
            // Dano de [Gemini Lumen] e [Judex] +25%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 25;
            if (refinement.weapon >= 7) {
                equipStats.percentASPD += 10;
                multipliers.skill_property[property.HOLY] += 15;
            }
            if (refinement.weapon >= 9)
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
        }
    },
    {
        id: '540011 ', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial (12% Sagrado)', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = weaponClass.BOOK;
            // Random Options
            multipliers.skill_property[property.HOLY] +=12;
            // A cada 2 refinos:
            // ATQ e ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
            // A cada 3 refinos:
            // Dano de [Gemini Lumen] e [Judex] +25%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 25;
            if (refinement.weapon >= 7) {
                equipStats.percentASPD += 10;
                multipliers.skill_property[property.HOLY] += 15;
            }
            if (refinement.weapon >= 9)
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
        }
    },
    {
        id: '540011  ', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial (12% Sagrado/12% Chefe)', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = weaponClass.BOOK;
            // Random Options
            multipliers.protocol[type.BOSS] += 12;
            multipliers.skill_property[property.HOLY] +=12;
            // A cada 2 refinos:
            // ATQ e ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
            // A cada 3 refinos:
            // Dano de [Gemini Lumen] e [Judex] +25%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 25;
            if (refinement.weapon >= 7) {
                equipStats.percentASPD += 10;
                multipliers.skill_property[property.HOLY] += 15;
            }
            if (refinement.weapon >= 9)
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
        }
    },
    {
        id: '1631', dbname: 'Holy_Stick', name: 'Vara Sagrada', slot1: 'card', slot3: malangdo, slot4: malangdo,
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 140;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
        }
    },
    {
        id: '16089', dbname: 'Ultio_Spes_OS', name: 'Ultio-OS', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 170;
            weapon.lv = 4;
            weapon.class = weaponClass.MACE;
            multipliers.matk += 3;
            if (refinement.weapon >= 7)
                equipStats.percentASPD += 7
            if (refinement.weapon >= 9)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 20;
            if (refinement.weapon >= 11)
                multipliers.skill_property[property.HOLY] += 15;
        }
    },
    {
        id: '590014', dbname: 'Meer_Sceptre', name: 'Mastro da Princesa', slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 360;
            weapon.lv = 4;
            weapon.class = weaponClass.MACE;
            equipStats.int += 3;
            equipStats.dex += 5;
            multipliers.skill_property[property.HOLY] += refinement.weapon * 10;
        }
    },
    {
        id: '550021', dbname: 'Deus_Ex_Machina_JP', name: 'O Criador', slot1: 'card', slot2: 'card', slot3: 'card',
        script: function () {
            weapon.baseMATK = 180;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            multipliers.matk += refinement.weapon * 6;
            equipStats.castdelay += refinement.weapon;
            if (refinement.weapon >= 10)
                if (equipStats.percentFCT < 70)
                    equipStats.percentFCT = 70;
        }
    },
    {
        id: '550013', dbname: 'Up_Freezing_Rod', name: 'Feitiço Primordial', slot1: 'card', slot2: 'card',
        tags: 'SORCERER',
        script: function () {
            weapon.baseMATK = 195;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            // A cada 2 refinos: ATQM +15.
            equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 15;
            // A cada 3 refinos: Dano de [Pó de Diamante] +12%.
            if (skill.id === 'SO_DIAMONDDUST')
                multipliers.skill += Math.floor(refinement.weapon / 3) * 12;
            // Refino +7 ou mais:
            if (refinement.weapon >= 7){
                // Dano de [Lanças dos Aesir] +15%.
                if (skill.id === 'SO_VARETYR_SPEAR')
                    multipliers.skill += 15;
                // Dano mágico contra oponentes de todas as propriedades +15%.
                multipliers.property[property.ALL] += 15;
            }
            // Refino +9 ou mais:
            if (refinement.weapon >= 9){
                // Conjuração variável -7%.
                equipStats.VCT += 7;
                // Dano de [Lanças dos Aesir] +20% adicional.
                if (skill.id === 'SO_VARETYR_SPEAR')
                    multipliers.skill += 20;
            }
            // Refino +11 ou mais:
            if (refinement.weapon >= 11){
                // Conjuração variável -8% adicional.
                equipStats.VCT += 8;
                // Recarga de [Lanças dos Aesir] -2 segundos.
                if (skill.id === 'SO_VARETYR_SPEAR')
                    skill.cooldown += -2;
            }
            // Conjunto [Botas Primordiais]
            if (document.getElementById('sho').value === '22238'){
                // INT +10.
                equipStats.int += 10;
                // Dano mágico +7%.
                multipliers.matk += 7;
            }
        }
    },
    {
        id: '1584', dbname: 'Chilly_Spell_Book', name: 'Livro de Feitiços do Frio', slot1: 'card', slot2: 'card',
        tags: 'SORCERER',
        script: function () {
            weapon.baseMATK = 160;
            weapon.lv = 4;
            weapon.class = weaponClass.BOOK;
            // DES +1.
            equipStats.dex += 1;
            // A cada refino:
            // Dano de [Pó de Diamante] e [Lanças de Gelo] +3%.
            // Custo de SP de [Pó de Diamante] e [Lanças de Gelo] +5.
            if (skill.id === 'SO_DIAMONDDUST' || skill.id === 'MG_COLDBOLT')
                multipliers.skill += refinement.weapon * 3;
        }
    },
    {
        id: '550031', dbname: 'Dea_Staff_IL Dea_Staff_IL', name: 'Dea Ilusional', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            //
            equipStats.int += 6;
            equipStats.vit += 2;
            // A cada 3 refinos:
            // Dano de [Judex] +20%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 20;
            if (refinement.weapon >= 7) {
                multipliers.skill_property[property.HOLY] += 15;
            }
            if (refinement.weapon >= 9) {
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
                equipStats.castdelay += 10;
            }
        }
    },
    {
        id: '550031 ', dbname: 'Dea_Staff_IL Dea_Staff_IL', name: 'Dea Ilusional (Ativado)', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            //
            equipStats.int += 6;
            equipStats.vit += 2;
            // A cada 3 refinos:
            // Dano de [Judex] +20%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 20;
            if (refinement.weapon >= 7) {
                multipliers.skill_property[property.HOLY] += 15;
            }
            if (refinement.weapon >= 9) {
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
                equipStats.castdelay += 10;
            }
            if (refinement.weapon >= 11) {
                multipliers.size[size.ALL] += 20;
            }
        }
    },
    {
        id: '590012', dbname: 'Up_Saint_Hall', name: 'Clava Primordial', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 200;
            weapon.lv = 4;
            weapon.class = weaponClass.MACE;
            multipliers.matk += 3;
            multipliers.skill_property[property.HOLY] += Math.floor(refinement.weapon / 2);
            if (skill.id === "AB_ADORAMUS")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 5;
            if (refinement.weapon >= 7) {
                equipStats.VCT += 10;
                multipliers.skill_property[property.HOLY] += 10;
            }
            if (refinement.weapon >= 9)
                multipliers.race[race.ALL] += 15;
            if (refinement.weapon >= 11)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 15;
            // Conjunto [Botas Primordiais]
            // INT +10.
            // Dano mágico +7% adicional.
        }
    }, // Adicionar BAs
    {
        id: '590003', dbname: 'Saint_Hall', name: 'Clava Ancestral', slot1: 'card', slot2: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 165;
            weapon.lv = 4;
            weapon.class = weaponClass.MACE;
            multipliers.matk += 3;
            multipliers.skill_property[property.HOLY] += Math.floor(refinement.weapon / 2);
            if (skill.id === "AB_ADORAMUS")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 5;
            if (refinement.weapon >= 9)
                equipStats.VCT += 10;
            if (refinement.weapon >= 11)
                multipliers.skill_property[property.HOLY] += 10
        }
    }, // Adicionar BAs
    {
        id: '1675',
        dbname: 'Walking_Stick_',
        name: 'Cajado do Cavalheiro',
        slot1: 'card',
        slot2: 'card',
        slot3: 'card',
        slot4: malangdo,
        script: function () {
            weapon.baseMATK = 125;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            equipStats.dex += 1;
        }
    },
    {
        id: '2057', dbname: 'Adorare_Staff', name: 'Adorare', slot1: 'card', slot2: 'card', slot3: '29599', slot4: '4813,4814,4815',
        twoHanded: true,
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 240;
            weapon.lv = 4;
            weapon.class = weaponClass.TWO_HANDED_STAFF;

            multipliers.skill_property[property.HOLY] += 5;
            equipStats.flatMATK += refinement.weapon * 4;
            if (refinement.weapon >= 9)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 30;
        }
    },
    {
        id: '26161', dbname: 'Ponitendtia',name: 'Penitência', slot1: 'card', slot2: 'card', slot3: '29599', slot4: '4813,4814,4815',
        tags: 'ARCHBISHOP',
        script: function () {
            weapon.baseMATK = 175;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;

            multipliers.skill_property[property.HOLY] += 5;
            equipStats.flatMATK += refinement.weapon * 4;
            if (refinement.weapon >= 9)
                if (skill.id === "PR_MAGNUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
            if (refinement.weapon >= 11 && skill.id === 'PR_MAGNUS')
                multipliers.skill += 20;
        }
    },
    {
        id: '26159', dbname: 'Psychic_Spear_Rod', name: 'Lança Psíquica', slot1: 'card', slot2: 'card', slot3: '29604', slot4: '4813,4814,4815',
        tags: 'SORCERER',
        script: function () {
            weapon.baseMATK = 180;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;

            // Dano mágico de propriedade Neutro e Vento +5%.
            multipliers.skill_property[property.NEUTRAL] += 5;
            multipliers.skill_property[property.WIND] += 5;
            // A cada refino: ATQM +4.
            equipStats.flatMATK += refinement.weapon * 4;
            // Refino +9 ou mais: Dano de [Onda Psíquica] +30%.
            if (refinement.weapon >= 9 && skill.id === 'SO_PSYCHIC_WAVE')
                multipliers.skill += 30;
            // Refino +11 ou mais:
            // Recarga de [Lança dos Aesir] -2 segundos.
            if (refinement.weapon >= 11 && skill.id === 'SO_VARETYR_SPEAR')
                skill.cooldown += -2;
        }
    },
    {
        id: '26160', dbname: 'Dust_Grave', name: 'Castigo Diamante', slot1: 'card', slot2: 'card', slot3: '29604', slot4: '4813,4814,4815',
        tags: 'SORCERER',
        script: function () {
            weapon.baseMATK = 180;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;

            // Dano mágico de propriedade Água e Terra +5%.
            multipliers.skill_property[property.WATER] += 5;
            multipliers.skill_property[property.EARTH] += 5;
            // A cada refino: ATQM +4.
            equipStats.flatMATK += refinement.weapon * 4;
            // Refino +9 ou mais: Dano de [Pó de Diamante] e [Castigo de Nerthus] +30%.
            if (refinement.weapon >= 9)
                if (skill.id === 'SO_DIAMONDDUST' || skill.id === 'SO_EARTHGRAVE')
                    multipliers.skill += 30;
            // Refino +11 ou mais: Dano de [Pó de Diamante] e [Castigo de Nerthus] +20% adicional.
            if (refinement.weapon >= 11)
                if (skill.id === 'SO_DIAMONDDUST' || skill.id === 'SO_EARTHGRAVE')
                    multipliers.skill += 20;
        }
    },
    {
        id: '550012', dbname: 'Up_Shadow_Staff_K', name: 'Cajado Primordial', slot1: 'card', slot2: 'card',
        tags: 'SORCERER',
        script: function () {
            weapon.baseMATK = 195;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;

            // A cada 2 refinos: ATQM +15.
            equipStats.flatMATK += 15 * Math.floor(refinement.weapon/2);
            // A cada 3 refinos: Dano de [Castigo de Nerthus] +12%.
            if (skill.id === 'SO_EARTHGRAVE')
                multipliers.skill += 12 * Math.floor(refinement.weapon/3);
            // Refino +7 ou mais:
            if (refinement.weapon >= 7) {
                //Dano mágico de propriedade Neutro e Terra +15%.
                multipliers.skill_property[property.NEUTRAL] += 15;
                multipliers.skill_property[property.EARTH] += 15;
            }
            // Refino +9 ou mais:
            if (refinement.weapon >= 9){
                // Conjuração variável -7%.
                equipStats.VCT += 7
                // Dano de [Onda Psíquica] +25%.
                if (skill.id === 'SO_PSYCHIC_WAVE')
                    multipliers.skill += 25;
            }
            // Refino +11 ou mais:
            if (refinement.weapon >= 11){
                // Recarga de [Onda Psíquica] -1 segundo.
                if (skill.id === 'SO_PSYCHIC_WAVE')
                    skill.cooldown += -1;
                // Conjuração variável -8% adicional.
                equipStats.VCT += 8;
            }
            // Conjunto [Botas Primordiais]
            if (document.getElementById('sho').value === '22238') {
                // INT +10.
                equipStats.int += 10;
                // Dano mágico +7%.
                multipliers.matk += 7;
            }
        }
    },
    {
        id: '1682', dbname: 'Up_Shadow_Staff_K', name: 'Cajado da Magia Oculta', slot1: 'card', slot2: 'card', slot3: malangdo, slot4: malangdo,
        tags: 'WARLOCK',
        script: function () {
            weapon.baseMATK = 130;
            weapon.lv = 4;
            weapon.class = weaponClass.ONE_HANDED_STAFF;

            if (skill.id === 'WL_HELLINFERNOFIRE')
                multipliers.skill += 100;
            if (skill.id === 'WL_HELLINFERNODARK')
                multipliers.skill += 100;
            if (skill.id === 'WL_HELLINFERNOFIRE')
                multipliers.skill += 10 * refinement.weapon;
            if (skill.id === 'WL_HELLINFERNODARK')
                multipliers.skill += 10 * refinement.weapon;
            if (refinement.weapon <= 10) {
                equipStats.bypass += 5* refinement.weapon;
            }
            else
                equipStats.bypass += 50;
        }
    },
    {
        id: '1646', dbname: 'La\'cryma_Stick', name: 'Bastão de Lágrimas', slot1: 'card', slot2: 'card', slot3: malangdo, slot4: malangdo,
        tags: 'WARLOCK',
        script: function () {
            weapon.baseMATK = 180;
            weapon.lv = 3;
            weapon.class = weaponClass.ONE_HANDED_STAFF;
            if (refinement.weapon <= 10) {
                equipStats.bypass += 5* refinement.weapon;
            }
            else
                equipStats.bypass += 50;
        }
    },
];
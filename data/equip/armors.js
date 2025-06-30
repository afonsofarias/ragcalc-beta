import {equipStats, learned_skills, multipliers, refinement, skill, stats, target} from "../../scripts/core/state.js";
import {property, race, size, type} from "../../scripts/core/constants.js";

export const armors = [

    {
        id: '450242', dbname: 'Elemental_Possession', name: 'Possessão Elemental', slot1: 'card',
        script: function () {
            // HP e SP máx. +10%.
            equipStats.hp += 10;
            equipStats.sp += 10;

            // Refino +5 ou mais: INT +15.
            if (refinement.armor >= 5) {
                equipStats.int += 15;
            }

            // Refino +7 ou mais: INT +15 adicional.
            if (refinement.armor >= 7) {
                equipStats.int += 15;
            }

            // Refino +10 ou mais:
            if (refinement.armor >= 10) {
                // Armadura indestrutível
                equipStats.unbreakableArmor = true;
                // Dano Mágico de propriedades
                multipliers.skill_property[property.NEUTRAL] += 15;
                multipliers.skill_property[property.FIRE] += 15;
                multipliers.skill_property[property.WATER] += 15;
                multipliers.skill_property[property.WIND] += 15;
                multipliers.skill_property[property.EARTH] += 15;
                multipliers.skill_property[property.POISON] += 15;
            }

            // Se nível de [Lanças do Aesir] for 10:
            if (learned_skills["Lanças do Aesir"] === 10) {
                if (skill.id === "EL_SEARING" /* Lanças do Aesir */) {
                    skill.cooldown -= 1;
                }
                if (learned_skills["Invocar Vayu"] > 0) {
                    // Redução de recarga de Invocar Vayu
                    // A verificação de skill.id pode ser feita conforme necessário
                    // Por padrão, reduz 25 segundos da recarga
                    if (skill.id === "EL_WIND_STEP") {
                        skill.cooldown -= 25;
                    }
                }
            }

            // A cada nível aprendido de [Invocar Agni], [Invocar Varuna], [Invocar Vayu], [Invocar Chandra]
            const summons = ["Invocar Agni", "Invocar Varuna", "Invocar Vayu", "Invocar Chandra"];
            let totalSummonLevels = 0;
            for (const skillName of summons) {
                if (learned_skills[skillName] > 0) {
                    totalSummonLevels += learned_skills[skillName];
                }
            }
            equipStats.percentASPD += totalSummonLevels;
            equipStats.flatMATK += totalSummonLevels * 15;

            // A cada nível aprendido de [Empatia Elemental]
            if (learned_skills["Empatia Elemental"] > 0) {
                multipliers.race[race.ALL] += learned_skills["Empatia Elemental"] * 14;
            }
        }
    },

    {
        id: '450179', dbname: 'Celine_Dress', name: 'Vestido Mágico da Celine', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 50;
            if (refinement.armor >= 7)
                equipStats.VCT += 10;
            if (refinement.armor >= 9)
                multipliers.skill_property[property.ALL] += 10;
            if (refinement.armor >= 11)
                equipStats.castdelay += 10;
            if (refinement.armor >= 12)
                equipStats.castdelay += 5;
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                // A cada refino do Laço:
                // Dano mágico de propriedade Sagrado, Sombrio, Veneno e Fantasma +1%.
                // A cada refino da Armadura:
                // Dano mágico de propriedade Sagrado, Sombrio, Veneno e Fantasma +1%.
                multipliers.skill_property[property.HOLY] += refinement.top + refinement.armor;
                multipliers.skill_property[property.DARK] += refinement.top + refinement.armor;
                multipliers.skill_property[property.POISON] += refinement.top + refinement.armor;
                multipliers.skill_property[property.GHOST] += refinement.top + refinement.armor;
                // Soma dos refinos +19 ou mais:
                // Dano mágico +15%.
                if ((refinement.top + refinement.armor) >= 19)
                    multipliers.matk += 15;
                // Soma dos refinos +23 ou mais:
                // Dano mágico de todas as propriedades +20% adicional.
                if ((refinement.top + refinement.armor) >= 23)
                    multipliers.property[property.ALL] += 20;
            }
            // Conjunto [Adereço da Celine]
            if (document.getElementById('ac1').value === '32237' || document.getElementById('ac2').value === '32237') {
                equipStats.flatMATK += refinement.armor * 10
                if (refinement.armor >= 9)
                    equipStats.VCT += 5;
                if (refinement.armor >= 11) {
                    multipliers.skill_property[property.WATER] += 10;
                    multipliers.skill_property[property.WIND] += 10;
                    multipliers.skill_property[property.EARTH] += 10;
                    multipliers.skill_property[property.FIRE] += 10;
                    multipliers.skill_property[property.NEUTRAL] += 10;
                }
            }
        }
    },
    {
        id: '15254', dbname: 'Abyss_Dress_BR', name: 'Vestido Abissal', slot1: 'card',
        script: function () {
            if (refinement.armor >= 7) {
                multipliers.race[race.DEMON] += 10;
                multipliers.race[race.UNDEAD] += 10;
                multipliers.property[property.DARK] += 10;
                multipliers.property[property.UNDEAD] += 10;
            }
            if (refinement.armor >= 9) {
                multipliers.race[race.DEMON] += 15;
                multipliers.race[race.UNDEAD] += 15;
                multipliers.property[property.DARK] += 15;
                multipliers.property[property.UNDEAD] += 15;
            }
            if (refinement.armor >= 11) {
                multipliers.race[race.DEMON] += 15;
                multipliers.race[race.UNDEAD] += 15;
                multipliers.property[property.DARK] += 15;
                multipliers.property[property.UNDEAD] += 15;
            }
        }
    },
    {
        id: '15420', dbname: 'Icefall_Dress', name: 'Vestido Glacial',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[race.FORMLESS] += 10;
                multipliers.race[race.HUMAN] += 10;
                multipliers.race[race.DEMI_HUMAN] += 10;
                multipliers.race[race.DORAM] += 10;
                multipliers.property[property.FIRE] += 10;
                multipliers.property[property.WATER] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[race.FORMLESS] += 15;
                multipliers.race[race.HUMAN] += 15;
                multipliers.race[race.DEMI_HUMAN] += 15;
                multipliers.race[race.DORAM] += 15;
                multipliers.property[property.FIRE] += 15;
                multipliers.property[property.WATER] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[race.FORMLESS] += 15;
                multipliers.race[race.HUMAN] += 15;
                multipliers.race[race.DEMI_HUMAN] += 15;
                multipliers.race[race.DORAM] += 15;
                multipliers.property[property.FIRE] += 15;
                multipliers.property[property.WATER] += 15;
            }
        }
    },
    {
        id: '15352', dbname: 'Nature_Dress', name: 'Vestido Natural',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[race.HUMAN] += 10;
                multipliers.race[race.DEMI_HUMAN] += 10;
                multipliers.race[race.BRUTE] += 10;
                multipliers.property[property.WIND] += 10;
                multipliers.property[property.EARTH] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[race.HUMAN] += 15;
                multipliers.race[race.DEMI_HUMAN] += 15;
                multipliers.race[race.BRUTE] += 15;
                multipliers.property[property.WIND] += 15;
                multipliers.property[property.EARTH] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[race.HUMAN] += 15;
                multipliers.race[race.DEMI_HUMAN] += 15;
                multipliers.race[race.BRUTE] += 15;
                multipliers.property[property.WIND] += 15;
                multipliers.property[property.EARTH] += 15;
            }
        }
    },
    {
        id: '450143', dbname: 'Samael_Dress', name: 'Vestido Infernal',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[race.PLANT] += 10;
                multipliers.race[race.BRUTE] += 10;
                multipliers.property[property.HOLY] += 10;
                multipliers.property[property.POISON] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[race.PLANT] += 15;
                multipliers.race[race.BRUTE] += 15;
                multipliers.property[property.HOLY] += 15;
                multipliers.property[property.POISON] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[race.PLANT] += 15;
                multipliers.race[race.BRUTE] += 15;
                multipliers.property[property.HOLY] += 15;
                multipliers.property[property.POISON] += 15;
            }
        }
    },
    {
        id: '450181', dbname: 'White_Lily_Robe__', name: '[MEGA] Vestimenta de Seda', slot1: 'card',
        script: function () {
            equipStats.castdelay += 10;
            if (refinement.armor >= 7)
                multipliers.size[size.ALL] += 20;
            if (refinement.armor >= 9)
                multipliers.size[size.ALL] += 20;
        }
    },
    {
        id: '450286', dbname: '', name: '[MEGA] Vestes de Cardeal', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            multipliers.size[size.ALL] += 40;
        }
    },
    {
        id: '450224', dbname: '', name: 'Robe do Governante', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 5;
            multipliers.matk += Math.floor(refinement.garment / 3) * 10;
        }
    },
    {
        id: '15121', dbname: 'Robe_Of_Sarah', name: 'Manto da Sara',
        slot1: 'card',
        slot3: '29447,4876,4876 ,4831',
        slot4: '4889,4950,4881',
        script: function () {
        }
    },
    {
        id: '15121 ', dbname: 'Robe_Of_Sarah', name: 'Manto da Sara (Ativado)',
        slot1: 'card',
        slot3: '29447,4876,4876 ,4831',
        slot4: '4889,4950,4881',
        script: function () {
            equipStats.flatMATK += refinement.armor * 8;
        }
    },
    // {
    //     id: '450291', dbname: 'Amazing_Grace', name: '(jRO) Amazing Grace', slot1: 'card',
    //     script: function () {
    //         equipStats.percentASPD += 10;
    //         if (refinement.armor >= 5) {
    //             if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
    //                 multipliers.skill += 50;
    //         }
    //         if (refinement.armor >= 7) {
    //             if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
    //                 multipliers.skill += 50;
    //         }
    //         if (refinement.armor >= 10) {
    //             multipliers.skill_property[property.HOLY] += 15;
    //         }
    //         // A cada nível de [Oratio]:
    //         // INT +3. ATQM +15.
    //         equipStats.int += 30;
    //         equipStats.flatMATK += 150;
    //         // A cada nível de [Gênese]:
    //         // Dano mágico contra todas as raças +14%.
    //         multipliers.race[race.ALL] += 70;
    //     }
    // },
    {
        id: '450291 ', dbname: 'Amazing_Grace', name: 'Graça Alcançada', slot1: 'card',
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.percentASPD += 10;
            if (refinement.armor >= 9) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 11) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 13) {
                multipliers.skill_property[property.HOLY] += 15;
            }

            // A cada nível de [Oratio]:
            // INT +3. ATQM +15.
            if(learned_skills["Oratio"] > 0){
                equipStats.int += learned_skills["Oratio"]  * 3;
                equipStats.flatMATK += learned_skills["Oratio"]  * 15;
            }

            // A cada nível de [Gênese]:
            // Dano mágico contra todas as raças +4%.
            if(learned_skills.genese > 0) {
                multipliers.race[race.ALL] += learned_skills.genese * 4;
            }


        }
    },
    {
        id: '15146', dbname: 'Robe_Of_Flattery', name: 'Vestimenta Arrogante', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 50;
            if (stats.baseLv >= 120)
                equipStats.flatMATK += 50;
            if (stats.baseLv >= 140)
                equipStats.flatMATK += 50;

        }
    },
    {
        id: '15163', dbname: 'Agenda_Robe', name: 'Vestimenta Atraente', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            if (stats.baseLv >= 120)
                multipliers.matk += 4;
            if (stats.baseLv >= 140)
                multipliers.matk += 5;

        }
    },
    {
        id: '450338', dbname: 'Screaming_Ghoost_Party', name: 'Algazarra', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 30 * refinement.armor;
            if (refinement.armor >= 7) {
                equipStats.percentASPD += 10;
                multipliers.race[race.ALL] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[race.ALL] += 25;
            }
        }
    },
    {
        id: '15377', dbname: 'Illusion_Armor_B', name: 'Colete Ilusión B', slot1: 'card', slot2: '29540', slot3: '29535', slot4: '29535',
        script: function () {
            // ATQM +100
            equipStats.flatMATK += 100;
            // A cada 2 refinos: ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.armor/2) * 10;
            // Refino +7 ou mais: Conjuração variável -10%.
            if (refinement.armor >= 7)
                equipStats.VCT += 10;
            // Conjunto [Motor Ilusión A]
            // Velocidade de ataque +10%.
            if (document.getElementById('gar').value === '20933')
                equipStats.percentASPD += 10;
            // Conjunto [Motor Ilusión B]
            // ATQM +50 adicional.
            if (document.getElementById('gar').value === '20934')
                equipStats.flatMATK += 50;
        }
    },
    {
        id: '15387', dbname: 'Jirant_Dress', name: 'Vestido da Bruxa', slot1: 'card',
        script: function () {
            // Ignora 50% da DEFM dos monstros Chefes.
            if (target.type === type.BOSS)
                equipStats.bypass += 50;
            // A cada refino:
            // ATQM +15.
            // Dano mágico de propriedade Vento +2%.
            equipStats.flatMATK += 15 * refinement.armor;
            multipliers.skill_property[property.WIND] += 2 * refinement.armor;
            // Conjunto [Manto da Bruxa]
            if (document.getElementById('gar').value === '20908'){
                // A cada refino da capa:
                // Dano mágico +2%.
                // Conjuração variável -2%.
                multipliers.matk += 2 * refinement.garment;
                equipStats.VCT += 2 * refinement.garment;
            }
            // Conjunto
            // [Cajado da Bruxa]
            // Habilita [Aumentar Agilidade] nv.1.
            // A cada refino da arma a partir do +1:
            // Dano de [Passos de Salamandra] e [Passos de Sílfide] +30%.
            // Regenera +50 de HP ao derrotar monstros com ataques mágicos.
            // Refino da arma +7 ou mais:
            // Nível de [Aumentar Agilidade] igual ao nível de refino da arma até o +10.
            // --------------------------
            // Conjunto
            // [Carta Professora Celia]
            // Tolerância a Congelamento +100%.
            // Conjuração variável de [Onda Psíquica] -100%.
            // Desativa a autoconjuração de [Proteger Terreno].
            if (document.getElementById('arm_slot1').value === '4561' && skill.id === 'SO_PSYCHIC_WAVE')
                skill.vct = 0;
        }
    },
    {
        id: '15374', dbname: 'lunar_eclipse_Armor_', name: 'Armadura Eclipse', slot1: 'card',
        script: function () {
            // Indestrutível em batalha.
            // --------------------------
            // HP e SP +15%.
            // --------------------------
            // A cada refino:
            // Pós-conjuração -1%.
            equipStats.castdelay += refinement.armor;
            // --------------------------
            // Refino +10 ou mais: Conjuração fixa -50%.
            if (refinement.armor >= 10)
                if (equipStats.percentFCT < 50)
                    equipStats.percentFCT = 50;
            // Refino +13 ou mais: Conjuração fixa -20% adicional.
            if (refinement.armor >= 13)
                if (equipStats.percentFCT < 70)
                    equipStats.percentFCT = 70;
            // --------------------------
            // Conjunto
            // [Carta Hatii]
            // Tolerância a Congelamento +100%.
            // Ao receber danos físicos de curta distância:
            // 50% de chance de infligir Congelamento no oponente.
            // A cada refino:
            // Dano físico contra oponentes de propriedade Água +5%.
        }
    },
    {
        id: '450226', dbname: 'four_of_a_kind', name: 'Quatrenhum', slot1: 'card',
        tags: 'WARLOCK',
        script: function () {
            //HP e SP máx. +10%;
            if (refinement.armor >= 9) {
                    //DEFM +25 ;
            }
            if (refinement.armor >= 11) {
                    //DEFM +25;
            }
            if (refinement.armor >= 10) {
                // Dano mágico de propriedade Neutro, Fogo, Vento, Terra e Água +15%.
                multipliers.skill_property[property.NEUTRAL] += 15;
                multipliers.skill_property[property.FIRE] += 15;
                multipliers.skill_property[property.WIND] += 15;
                multipliers.skill_property[property.EARTH] += 15;
                multipliers.skill_property[property.WATER] += 15;
            }

            // A cada nível aprendido de [Radius]:
            // INT +10. ATQM +50.
            if(learned_skills["Radius"] > 0){
                equipStats.int += learned_skills["Radius"]  * 10;
                equipStats.flatMATK += learned_skills["Radius"]  * 50;
            }

            // A cada nível aprendido de [Tetra Vortex]:
            // Dano mágico de todas as raças +2%.
            if(learned_skills["Tetra Vortex"] > 0) {
                multipliers.race[race.ALL] += learned_skills["Tetra Vortex"] * 2;
            }
            // Ao aprender [Cometa] nv.5:
            if(learned_skills["Cometa"] === 5) {
                // Conjuração fixa de [Tetra Vortex] e [Esquife de Gelo] -100%.
                if (skill.id === "WL_TETRAVORTEX" || skill.id === "WL_JACKFROST")
                    skill.fct = 0;
            }
        }
    },
];

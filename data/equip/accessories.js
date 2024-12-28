import {
    currentEquip,
    equipStats,
    learned_skills,
    multipliers,
    refinement,
    skill,
    stats
} from "../../scripts/core/state.js";
import {property, race, size, type} from "../../scripts/core/constants.js";

const explo_acc = '4814,4815,4869,4872,4897';
const tumulo = '4721,4722,4723,4711,4713,4715,4813,4812,4826,4760,4883';
export const accessory = [
    {
        id: '490118', dbname: 'RingOfAdoramus', name: 'Anel de Adoramus', slot1: 'card', slot4: tumulo,
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.int += 7;
            multipliers.size[size.ALL] += 10;
            if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(stats.baseLv / 3);
            // Ao aprender [Adoramus] nv.10:
            equipStats.percentASPD += 15;
            // Ao aprender [Offertorium] nv.5:
            equipStats.VCT += 30;
            // Ao aprender [Gênese] nv.5:
            if(learned_skills.genese >= 5){
                multipliers.skill_property[property.WIND] += 10;
                multipliers.skill_property[property.HOLY] += 10;
                multipliers.skill_property[property.NEUTRAL] += 10;
            }
        }
    },
    {
        id: '490036', dbname: 'Pendant_of_Solomon_', name: 'Colar do Mago Salomão', slot1: 'card', slot4: tumulo,
        script: function () {
            equipStats.int += 5;
            equipStats.dex += 5;
            multipliers.matk += 10;
            // Ao usar [Amplificação Mística]:
            // Ativa um [efeito] por 10 segundos.
            multipliers.property[property.NEUTRAL] += 30;
            multipliers.property[property.WATER] += 30;
            multipliers.property[property.FIRE] += 30;
            multipliers.property[property.EARTH] += 30;
            multipliers.property[property.WIND] += 30;
            multipliers.property[property.HOLY] += 30;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Pedra de Amplificação 1]
            // Ignora 70% da DEFM de todas as raças.
            // Dano mágico contra todas as raças +10%.
            if (document.getElementById('wea_slot4').value === '29445' || document.getElementById('wea_slot3').value === '29445'){
                equipStats.bypass+=70;
                multipliers.race[race.ALL]+=10;
            }
            // Conjunto [Pedra de Amplificação 2]
            if (document.getElementById('wea_slot4').value === '29446' || document.getElementById('wea_slot3').value === '29446'){
                equipStats.bypass+=70;
                multipliers.race[race.ALL]+=10;
            }
            // Conjunto [Pedra de Amplificação 3]
            // Conjunto [Pedra de Amplificação 2]
            if (document.getElementById('arm_slot3').value === '29447'){
                equipStats.bypass+=70;
                multipliers.race[race.ALL]+=10;
            }
        }
    },
    {
        id: '28572', dbname: 'Celine_Brooch_BR', name: 'Broche da Celine', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.VCT += 10;
            equipStats.flatASPD += 1;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                if (equipStats.percentFCT < 50)
                    equipStats.percentFCT = 50;
                multipliers.protocol[type.BOSS] += 20;
                let limit = Math.min(4, Math.floor(refinement.top / 3));
                equipStats.str += limit;
                equipStats.agi += limit;
                equipStats.vit += limit;
                equipStats.int += limit;
                equipStats.dex += limit;
                equipStats.luk += limit;
                if (refinement.top >= 9)
                    multipliers.protocol[type.BOSS] += 20;
                if (refinement.top >= 11)
                    multipliers.protocol[type.BOSS] += 20;
            }
        }
    },
    {
        id: '32237', dbname: 'Celine_Brooch_K', name: 'Adereço da Celine', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.VCT += 10;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 3 ) / 10;
                equipStats.flatMATK += refinement.top * 10;
                if (refinement.top >= 7) {
                    multipliers.race[race.HUMAN] += 10;
                    multipliers.race[race.DEMI_HUMAN] += 10;
                    multipliers.race[race.DEMON] += 10;
                }
                if (refinement.top >= 9) {
                    multipliers.skill_property[property.WATER] += 10;
                    multipliers.skill_property[property.WIND] += 10;
                    multipliers.skill_property[property.EARTH] += 10;
                    multipliers.skill_property[property.FIRE] += 10;
                    multipliers.skill_property[property.NEUTRAL] += 10;
                }
                if (refinement.top >= 11)
                    multipliers.protocol[type.BOSS] += 20;
            }
        }
    },
    {
        id: '490174', dbname: 'Old_DetachmentsRing_BR', name: 'Memorável Anel Rústico',
        slot1: 'card',
        slot3: explo_acc,
        slot4: explo_acc,
        script: function () {
            equipStats.str += 3;
            equipStats.agi += 3;
            equipStats.vit += 3;
            equipStats.int += 3;
            equipStats.dex += 3;
            equipStats.luk += 3;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Memorável Desejo dos Deuses]
            if (document.getElementById('top').value === '18972') {
                equipStats.castdelay += 20;
                equipStats.bypass += 70;
            }
        }
    },
    {
        id: '28564', dbname: 'Valkyrie_Drop', name: 'Lágrima de Valquíria', slot1: 'card', slot4: tumulo,
        tags: 'ARCHBISHOP',
        script: function () {
            equipStats.castdelay += 5;
            equipStats.VCT += 10;
            // A cada nível de [Impositio Manus]:
            if(learned_skills.impositio_manus >= 0){
                // Dano mágico contra todos os tamanhos +3%.
                multipliers.size[size.ALL] += 3 * learned_skills.impositio_manus;
            }
            // A cada 2 níveis de base: Dano de [Magnus Exorcismus] +3%.
            if (skill.id === "PR_MAGNUS")
                multipliers.skill += Math.floor(stats.baseLv/2) * 3;
        }
    },
    {
        id: '28565', dbname: 'Perverse_Demon_Mask', name: 'Máscara de Oni', position: '2', slot1: 'card',
        script: function () {
            equipStats.int += Math.floor(stats.str / 18) * 3;
            equipStats.bypass += Math.floor(stats.str / 18) * 15;
            equipStats.luk += Math.floor(stats.agi / 18) * 3;
            equipStats.dex += Math.floor(stats.vit / 18) * 3;
            equipStats.VCT += Math.floor(stats.vit / 18);
            equipStats.str += Math.floor(stats.int / 18) * 3;
            equipStats.castdelay += Math.floor(stats.int / 18);
            equipStats.agi += Math.floor(stats.luk / 18) * 3;
        }
    },
    {
        id: '28538', dbname: 'Glove_Of_Wizard_BR', name: 'Luvas de H. Motto', slot1: 'card', slot4: tumulo,
        script: function () {
            equipStats.VCT += 5;
            equipStats.bypass += 20;
            multipliers.skill_property[property.FIRE] += 5;
            multipliers.skill_property[property.WATER] += 5;
            multipliers.skill_property[property.EARTH] += 5;
            multipliers.skill_property[property.WIND] += 5;
            multipliers.skill_property[property.NEUTRAL] += 5;
        }
    },
    {
        id: '490068', dbname: 'RingofVenus', name: 'Anel de Vênus', slot1: 'card', slot4: tumulo,
        script: function () {
            // Lado Direito
            if (currentEquip === 'ac1') {
                if (stats.dex >= 125)
                    if (equipStats.percentFCT < 70)
                        equipStats.percentFCT = 70;
            }
            // Lado Esquerdo
            if (currentEquip === 'ac2') {
                multipliers.matk += Math.floor(stats.agi / 10);
                if (stats.agi >= 125)
                    equipStats.castdelay += 25;
            }
        }
    },
    {
        id: '490290', dbname: 'Ameretat', name: 'Anel de Ameretat', position: '2', slot1: 'card',
        script: function () {
            multipliers.matk += 10;
            // Super Agilidade
            if (document.getElementById('sho_slot2').value === '4854' ||
                document.getElementById('arm_slot2').value === '4854' ||
                document.getElementById('gar_slot2').value === '4854' ||
                document.getElementById('gar_slot3').value === '4854' ||
                document.getElementById('gar_slot4').value === '4854') {
                equipStats.percentASPD+=15;
            }
            // Super Inteligência
            if (document.getElementById('sho_slot2').value === '4856' ||
                document.getElementById('arm_slot2').value === '4856' ||
                document.getElementById('gar_slot2').value === '4856' ||
                document.getElementById('gar_slot3').value === '4856' ||
                document.getElementById('gar_slot4').value === '4856') {
                multipliers.matk+=30;
            }
            // Super Sorte
            if (document.getElementById('sho_slot2').value === '4858' ||
                document.getElementById('arm_slot2').value === '4858' ||
                document.getElementById('gar_slot2').value === '4858' ||
                document.getElementById('gar_slot3').value === '4858' ||
                document.getElementById('gar_slot4').value === '4858') {
                equipStats.castdelay+=30;
            }
        }
    },
    {
        id: '28394', dbname: 'King_of_Spirit_Ring', name: 'Bracelete da Valquíria Mágica',
        tags: 'SORCERER',
        script: function () {
            // VIT +5.
            equipStats.vit += 5;
            // Pós-conjuração -5%.
            equipStats.castdelay += 5;
            // [Aquecer Terreno]
            // Tempo de recarga -15 segundos.
            // Tempo de conjuração variável -50%.
            // [Lanças dos Aesir]
            // Tempo de recarga -0,5 segundos.
            // Tempo de conjuração variável -1,5 segundos.
            // [Castigo de Nerthus]
            // Tempo de recarga -2 segundos.
            // [Pó de Diamante]
            if (skill.id === "SO_DIAMONDDUST"){
                // Tempo de recarga -2 segundos.
                skill.cooldown += -2;
                // A cada 8 níveis de base: Dano de [Castigo de Nerthus] e [Pó de Diamante] +1%.
                multipliers.skill += Math.floor(stats.baseLv/8);
            }
        }
    },
    {
        id: '490038', dbname: 'Sixth_Sense_Ring', name: 'Anel do Sexto Sentido', slot1: 'card', slot4: tumulo,
        tags: 'SORCERER',
        script: function () {
            // INT +7.
            equipStats.int += 7;
            // Dano mágico contra todos os Tamanhos +10%.
            multipliers.size[size.ALL] += 10;
            // A cada 5 níveis de base até o 170: Dano de [Onda Psíquica] +1%.
            if (skill.id === 'SO_PSYCHIC_WAVE')
                multipliers.skill += Math.floor(Math.min(170, stats.baseLv)/5);
            // Ao aprender [Onda Psíquica] nv.5: Pós-conjuração -30%.
            if (learned_skills["Onda Psíquica"] === 5)
                equipStats.castdelay += 30;
            // Ao aprender [Encanto de Órion] nv.5:
            if (learned_skills["Encanto de Órion"] === 5) {
                // Dano mágico contra oponentes de propriedade Neutro, Fogo, Vento, Água e Terra +10%.
                multipliers.property[property.NEUTRAL] += 10;
                multipliers.property[property.FIRE] += 10;
                multipliers.property[property.WIND] += 10;
                multipliers.property[property.WATER] += 10;
                multipliers.property[property.EARTH] += 10;
            }
            // Ao aprender [Maldição de Jormungand] nv.5: Conjuração variável -15%.
            if (learned_skills["Maldição de Jormungand"] === 5)
                equipStats.VCT += 15;
            // Ao derrotar monstros com ataques mágicos, regenera 100 de HP e 10 de SP.
            // Ao aprender [Tornado] nv.5:
            // Custo de SP da [Onda Psíquica] -20.
            // Recarga de [Onda Psíquica] -1 segundo.
            if (learned_skills["Tornado"] === 5)
                if (skill.id === 'SO_PSYCHIC_WAVE')
                    skill.cooldown += -1;
        }
    },
    {
        id: '490170', dbname: 'Record_Mage2_TW', name: 'Manuscrito dos Magos', slot1: 'card',
        tags: 'SORCERER',
        script: function () {
            // Pós-conjuração -6%.
            equipStats.castdelay += 6;
            // Dano mágico contra todos os Tamanhos +6%.
            multipliers.size[size.ALL] += 6;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Memorável Mistério da Magia]
            // Dano de [Cometa] +30%.
            // --------------------------
            // Conjunto [Memorável Sussurro dos Elementos]
            // INT +20.
            // Habilita [Potencializar Veneno] nv.5.
            // Recarga de [Implosão Tóxica] -0,5 segundos.
            // --------------------------
            // Conjunto [Carta Arquimaga Kathryne]:  Dano mágico contra monstros Chefes +30%.
            if (document.getElementById('top_slot1').value === '4365' || document.getElementById('mid_slot1').value === '4365')
                multipliers.protocol[type.BOSS] += 30;
            // Conjunto [Carta Professora Celia] Dano mágico contra todas as propriedades +30%.
            if (document.getElementById('arm_slot1').value === '4561')
                multipliers.property[property.ALL] += 30;
            // Conjunto [Broche da Celine] Dano mágico contra Chefes -50%.
            if (document.getElementById('ac1').value === '28572' || document.getElementById('ac2').value === '28572')
                multipliers.protocol[type.BOSS] += -50;
        }
    },
    {
        id: '490381', dbname: 'Majesty_of_Yggdrasil_', name: 'Amuleto de Yggdrasil', slot1: 'card',
        script: function () {
            // Pós-conjuração -15%.
            equipStats.castdelay += 15;
            // Todos os atributos +3.
            equipStats.str += 3;
            equipStats.agi += 3;
            equipStats.vit += 3;
            equipStats.int += 3;
            equipStats.dex += 3;
            equipStats.luk += 3;
            // Velocidade de ataque +10%.
            equipStats.percentASPD += 10;
            // Dano físico e mágico contra todos os Tamanhos +15%.
            multipliers.size[size.ALL] += 15;
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Asas de Yggdrasil]
            if (document.getElementById('top').value === '400213'){
                // Todos os atributos +10 adicional.
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
                // Aumenta a velocidade de movimento.
            }
        }
    },
    {
        id: '490337', dbname: 'Amulet_of_GenesisStone', name: 'Amuleto Mitológico', position: '1', slot1: 'card', slot4: tumulo,
        script: function () {
            // Pós-conjuração -15%.
            equipStats.castdelay += 15;
            // Velocidade de ataque +15%.
            equipStats.percentASPD += 15;
            // Resistência as raças Doram e Humano +3%.
            // A cada 2 níveis de base:
            // HP máx. +50.
            // SP máx. +5.
            // ATQ e ATQM +1.
            equipStats.flatMATK += Math.floor(stats.baseLv/2);
        }
    },
];

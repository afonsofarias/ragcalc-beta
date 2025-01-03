import {equipStats, learned_skills, multipliers, skill, stats} from "../../scripts/core/state.js";
import {size, type} from "../../scripts/core/constants.js";

const desentupidor = '4730,4710,4720,4750';

export const mid = [
    {
        id: '410067', dbname: 'Professor_MiniGlass_', name: 'Mini Óculos', slot1: 'card', slot4: desentupidor,
        tags: 'SORCERER',
        script: function () {
            // Dano mágico contra todos os Tamanhos +10%
            multipliers.size[size.ALL] += 10;
            // Ao aprender [Tornado] nv.5: Pós-conjuração -15%
            if (learned_skills["Tornado"] === 5)
                equipStats.castdelay += 15;
            // Ao aprender [Onda Psíquica] nv.5: Recarga de [Pó de Diamante] e [Castigo de Nerthus] -4 segundos
            if (learned_skills["Onda Psíquica"] === 5)
                if (skill.id === 'SO_DIAMONDDUST' || skill.id === 'SO_EARTHGRAVE')
                    skill.cooldown += -4;
        }
    },
    {
        id: '410130', dbname: 'Phantom_Ears_', name: 'Orelhas Fantasmagóricas', slot1: 'card', slot4: desentupidor,
        tags: 'WARLOCK',
        script: function () {
            // Dano mágico contra todos os Tamanhos +10%
            multipliers.size[size.ALL] += 10;
            if (learned_skills["Maestria Arcana"] === 5)
                equipStats.castdelay += 15;
            if (learned_skills["Telecinesia"] === 5)
                if (skill.id === 'Telecinesia')
                    skill.cooldown += -80;
            if (skill.id === 'WL_JACKFROST')
                skill.vct = 0;
        }
    },
    {
        id: '410028',
        dbname: 'Wonder_Egg_Basket_',
        name: 'Cesta das Maravilhas (+10% Tamanho)',
        slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            equipStats.flatMATK += 200;
            multipliers.size[size.ALL] += 10;
        }
    },
    {
        id: '19380', dbname: 'Floating_Ball', name: 'Fogo Fátuo',
        script: function () {
            equipStats.flatMATK += 35;
            multipliers.protocol[type.BOSS] += 2;
            if (stats.dex >= 90) {
                equipStats.flatMATK += 70;
                multipliers.protocol[type.BOSS] += 3;
            }
            if (stats.dex >= 125) {
                equipStats.flatMATK += 140;
                multipliers.protocol[type.BOSS] += 5;
            }
        }
    },
    {
        id: '19444', dbname: 'Star_Eyepatch_JP_', name: 'Tapa-Olho Cósmico [Carta Orc Herói]', slot4: desentupidor,
        script: function () {
            equipStats.vit += 3;
            equipStats.flatMATK += Math.floor(stats.vit / 10) * 30;
            equipStats.vit += Math.floor(stats.luk / 10) * 3;
            equipStats.luk += Math.floor(stats.luk / 10) * 3;
            // Carta Orc Herói
            equipStats.vit += 3;
        }
    },
    {
        id: '410015', dbname: 'Cor_Core_Headset_', name: 'Fones COR', slot1: 'card', script: function () {
            equipStats.castdelay += 10;
            if (document.getElementById('wea').value === '16089')
                equipStats.flatMATK += 200;
        }
    },
    {
        id: '400114',
        dbname: 'Victory_Ear_JP_',
        name: 'Adorno da Vitória',
        slot1: 'card',
        slot4: desentupidor,
        tags: 'ARCHBISHOP',
        script: function () {
            multipliers.size[size.ALL] += 10;
            if(learned_skills.praefatio >= 10){
                equipStats.castdelay += 15;
            }
        }
    },
    {
        id: '410026',
        dbname: 'Magic_Heir_J_',
        name: 'Herança Real',
        slot1: 'card',
        slot4: desentupidor,
        script: function () {
            equipStats.flatMATK += stats.baseLv;
        }
    },
    {
        id: '2202',
        dbname: 'Sunglasses_',
        name: 'Óculos Escuros',
        slot1: 'card',
        slot4: desentupidor,
        script: function () {
        }
    },
];

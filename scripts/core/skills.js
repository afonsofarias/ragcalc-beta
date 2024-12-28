import {equipStats, learned_skills, multipliers, skill, stats, target} from "./state.js";
import {property, race} from "./constants.js";
import { buffs as currentBuffs } from "./state.js";

export const skills = [
    {
        name: "Adoramus",
        id: "AB_ADORAMUS",
        script(){
            return (Math.floor((330 + (70 * learned_skills.adoramus) ) * (stats.baseLv / 100)) / 100);
        },
        property: property.HOLY,
        divisibility: 10,
        cooldown: 2.5,
        fct: 0.5,
        vct: 2,
        castdelay: 0.5
    },
    {
        name: "Judex",
        id: "AB_JUDEX",
        script(){
            return (Math.floor((300 + (40 * learned_skills.judex) ) * (stats.baseLv / 100)) / 100);
        },
        property: property.HOLY,
        divisibility: 3,
        cooldown: 0,
        fct: 0.5,
        vct: 2,
        castdelay: 0.5
    },
    {
        name: "Magnus Exorcismus",
        id: "PR_MAGNUS",
        script(){
            if (target.race == race.DEMON || target.race == race.UNDEAD || target.property[0] == property.DARK || target.property[0] == property.UNDEAD) {
                return 130 / 100
            }
            else
                return 100/100;
        },
        property: property.HOLY,
        divisibility: 1,
        hits: 10,
        cooldown: 6,
        fct: 1,
        vct: 4,
        castdelay: 1,
    },
    {
        name: "Luz Divina",
        id: "AL_HOLYLIGHT",
        script(){
            return 1.25;
        },
        property: property.HOLY,
        divisibility: 1,
        cooldown: 0,
        fct: 0.2,
        vct: 0.8,
        castdelay: 0
    },
    {
        name: "Pó de Diamante",
        id: "SO_DIAMONDDUST",
        script() {
            let diamondDustLv = 5;
            let frostWeaponLv = 5;
            let varuna = 0;
            if (currentBuffs.varuna)
                varuna = stats.jobLv * 5;
            return (Math.floor(((diamondDustLv * (stats.int + equipStats.int)) + (frostWeaponLv * 200)) * (stats.baseLv/100))+varuna)/100;
        },
        property: property.WATER,
        divisibility: 5,
        cooldown: 5,
        fct: 0,
        vct: 7,
        castdelay: 1
    },
    {
        name: "Onda Psíquica",
        id: "SO_PSYCHIC_WAVE",
        script() {
            let psychicWaveLv = 5;
            return Math.floor(( (psychicWaveLv * 70) + (3 * (stats.int + equipStats.int)) ) * (stats.baseLv/100) )/100;
        },
        property: property.NEUTRAL,
        divisibility: 1,
        cooldown: 5,
        fct: 0.6,
        vct: 12,
        castdelay: 1,
        hits: 1,
    }
]

export const buffs = [
    {
        name: "Clementia",
        id: "AB_CLEMENTIA",
        max_level: 3,
        script(){
            let bonus = Math.floor(stats.jobLv/10)
            equipStats.str += 10 + bonus;
            equipStats.int += 10 + bonus;
            equipStats.dex += 10 + bonus;
        },
    },
    {
        name: "Canto Candidus",
        id: "AB_CANTO",
        max_level: 3,
        script(){
            let bonus = Math.floor(stats.jobLv/10)
            equipStats.agi += 12 + bonus;
            equipStats.percentASPD += 10 + bonus;
        },
    },
    {
        name: "Oratio",
        id: "AB_ORATIO",
        max_level: 10,
        script(){
            currentBuffs.oratio = learned_skills.oratio;
        },
    },
    {
        name: "Expiatio",
        id: "AB_EXPIATIO",
        max_level: 5,
        script(level){
            equipStats.bypass+= level*5;
        },
    },
    {
        name: "Impositio Manus",
        id: "PR_IMPOSITIO",
        max_level: 5,
        script(){
            equipStats.flatMATK += learned_skills.impositio_manus * 5;
        },
    },
    {
        name: "Lex Aeterna",
        id: "PR_LEXAETERNA",
        max_level: 1,
        script(){
            currentBuffs.lex_aeterna = true;
        },
    },
    {
        name: "Glória",
        id: "PR_GLORIA",
        max_level: 1,
        script(){
            equipStats.luk += 30;
        },
    },
    {
        name: "Basílica",
        id: "HP_BASILICA",
        max_level: 5,
        script(level){
            multipliers.skill_property[property.HOLY] += level * 3;
        },
    },
    {
        name: "Poder de Odin",
        id: "ALL_ODINS_POWER",
        max_level: 2,
        script(level){
            if (level === 2){
                equipStats.flatMATK += 100;
            } else {
                equipStats.flatMATK +=70;
            }
        },
    },
    {
        name: "Amplificação Mística",
        id: "HW_MAGICPOWER",
        max_level: 5,
        script(level){
            currentBuffs.mystical_amplification = level;
        },
    },
    {
        name: "Espírito do Sacerdote",
        id: "SL_PRIEST",
        max_level: 5,
        script(){
            if (skill.id === "AL_HOLYLIGHT")
                skill.dmg = 6.25;
        },
    },
    {
        name: "Dilúvio",
        id: "SA_DELUGE",
        max_level: 5,
        script() {
            currentBuffs.deluge = true;
        }
    },
    {
        name: "Insígnia do Fogo",
        id: "SO_FIRE_INSIGNIA",
        max_level: 3,
        script() {
            currentBuffs.fire_insignia = true;
        }
    },
    {
        name: "Invocar Agni",
        id: "SO_SUMMON_AGNI",
        max_level: 3,
        script() {
            if (skill.id === "SO_PSYCHIC_WAVE")
                skill.property = property.FIRE;
        }
    },
    {
        name: "Invocar Varuna",
        id: "SO_SUMMON_AQUA",
        max_level: 3,
        script() {
            // Varuna nível 2 - Geleira Modo Passivo
            // ATQM de equipamentos +80.
            equipStats.flatMATK += 80;
            // Dano de Pó de Diamante +(Nv. de classe × 5)%
            currentBuffs.varuna = true;
            // Chance de infligir Cristalização ao usar Pó de Diamante +(Nv. de classe ÷ 5)%
            // Efeitos na Onda Psíquica:
            if (skill.id === "SO_PSYCHIC_WAVE"){
                // Altera a propriedade de neutro para água.
                skill.property = property.WATER;
                // Custo de SP +50%.
                // Dura 300 segundos e drena 20 de SP do espírito a cada 10 segundos.
            }
        }
    },
    {
        name: "Invocar Vayu",
        id: "SO_SUMMON_VENTUS",
        max_level: 3,
        script() {
            // Velocidade de ataque +5.
            equipStats.flatASPD += 5;
            // Conjuração fixa -1 segundo.
            equipStats.flatFCT += 1;
            // Dano de Passos de Sílfide +(Nv. de classe ÷ 2)%
            // Dano de Lanças dos Aesir +(Nv. de classe × 5)%

            // Efeitos na Onda Psíquica:
            // Altera a propriedade de neutro para vento.
            // Custo de SP +50%.
            // Dura 300 segundos e drena 20 de SP do espírito a cada 10 segundos.
            if (skill.id === "SO_PSYCHIC_WAVE")
                skill.property = property.WIND;
        }
    },
    {
        name: "Invocar Chandra",
        id: "SO_SUMMON_TERA",
        max_level: 3,
        script() {
            if (skill.id === "SO_PSYCHIC_WAVE")
                skill.property = property.EARTH;
        }
    }
]
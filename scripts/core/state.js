import {retrieveBaseStats, updateLearnedSkills, retrieveBuffs, retrieveJobname} from "../ui/uiHandler.js";
import {jobStatBonus} from "./jobstatbonus.js";
import {skills} from "./skills.js";

export let currentJob = "";
export function updateJobname(){
    currentJob = retrieveJobname();
}
export let currentEquip = "";
export function setCurrentEquip(equip) {
    currentEquip = equip;
}

export const target = {id: null, level: 0, size: 0, race: 0, property: 0, mdef: 0, int: 0, type: 0};
export const stats = {baseLv: null, jobLv: null, str: null, agi: null, vit: null, int: null, dex: null, luk: null};
export const equipStats = {
    str: null,
    agi: null,
    vit: null,
    int: null,
    dex: null,
    luk: null,
    flatMATK: null,
    flatFCT: null,
    percentFCT: null,
    VCT: null,
    castdelay: null,
    flatASPD: null,
    percentASPD: null,
    bypass: null
};
export const refinement = {top: null, armor: null, weapon: null, shield: null, garment: null, shoes: null};
export const s_refinement = {armor: null, weapon: null, shield: null, shoes: null, earring: null, necklace: null};
export const weapon = {baseMATK: null, lv: null, upgradeBonus: null, class: null};

export const skill = {
    name: null,
    id: null,
    dmg: null,
    property: null,
    divisibility: null,
    hits: null,
    cooldown: null,
    fct: null,
    vct: null,
    castdelay: null
};

export const multipliers = {
    matk: null,
    race: null,
    size: null,
    property: null,
    monster: null,
    skill_property: null,
    protocol: null,
    skill: null
};

export const buffs = {
    oratio: 0,
    lex_aeterna: false,
    mystical_amplification: 0,
    recognized_spell: false,
    deluge: false,
    fire_insignia: false,
}

// Optional function to reset the object if needed
export function resetBuffs() {
    for (let key in buffs) {
        if (buffs.hasOwnProperty(key)) {
            delete buffs[key];  // Clear the object if you want to reset it
        }
    }
}

export const learned_skills = {};

export function clearState(){
    initialize();
}

function initialize() {
    // Zera os multiplicadores
    multipliers.matk = 100;
    multipliers.race = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    multipliers.size = [100, 0, 0, 0];
    multipliers.property = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    multipliers.monster = 100;
    multipliers.skill_property = [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    multipliers.protocol = [100, 0, 0, 0];
    multipliers.skill = 100;
    // Recupera os atributos do personagem
    const baseStats = retrieveBaseStats();
    stats.baseLv = baseStats.baseLv;
    stats.jobLv = baseStats.jobLv;
    stats.str = baseStats.str;
    stats.agi = baseStats.agi;
    stats.vit = baseStats.vit;
    stats.int = baseStats.int;
    stats.dex = baseStats.dex;
    stats.luk = baseStats.luk;
    // Zera os bonus de equipamentos
    equipStats.str = 0;
    equipStats.agi = 0;
    equipStats.vit = 0;
    equipStats.int = 0;
    equipStats.dex = 0;
    equipStats.luk = 0;
    equipStats.flatMATK = 0;
    equipStats.flatFCT = 0;
    equipStats.percentFCT = 0;
    equipStats.VCT = 0;
    equipStats.castdelay = 0;
    equipStats.flatASPD = 0;
    equipStats.percentASPD = 0;
    equipStats.bypass = 0;
    // Recupera os bonus de job
    let jobStatBonus = retrieveJobStatBonus();
    equipStats.str += jobStatBonus.bonus[0];
    equipStats.agi += jobStatBonus.bonus[1];
    equipStats.vit += jobStatBonus.bonus[2];
    equipStats.int += jobStatBonus.bonus[3];
    equipStats.dex += jobStatBonus.bonus[4];
    equipStats.luk += jobStatBonus.bonus[5];
    // Zera a configuração da Arma
    weapon.baseMATK = 0;
    weapon.lv = 0;
    weapon.upgradeBonus = 0;
    weapon.class = 0;
    // Recupera o nv das skills
    buffs.oratio = 0;
    buffs.lex_aeterna = false;
    buffs.mystical_amplification = 0;
    buffs.recognized_spell = false;
    buffs.deluge = false;
    buffs.fire_insignia = false;
    // updateLearnedSkills();
    // Seta a skill a ser calculada
    let selectedSkill = skills.find((line) => line.id === document.getElementById('skill').value);
    skill.name = selectedSkill.name;
    skill.id = selectedSkill.id;
    skill.dmg = selectedSkill.script();
    skill.property = selectedSkill.property;
    skill.divisibility = selectedSkill.divisibility;
    if (selectedSkill.hits !== undefined)
        skill.hits = selectedSkill.hits;
    else
        skill.hits = 1;
    skill.cooldown = selectedSkill.cooldown;
    skill.fct = selectedSkill.fct;
    skill.vct = selectedSkill.vct;
    skill.castdelay = selectedSkill.castdelay;
}

export function retrieveJobStatBonus() {
    switch(currentJob) {
        case "ARCHBISHOP":
            return jobStatBonus.ArchBishop.find((line) => line.level === stats.jobLv);
        case "SORCERER":
            return jobStatBonus.Sorcerer.find((line) => line.level === stats.jobLv);
    }
}
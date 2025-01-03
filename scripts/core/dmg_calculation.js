import {
    target,
    stats,
    equipStats,
    refinement,
    s_refinement,
    weapon,
    currentEquip,
    skill,
    multipliers,
    buffs,
    learned_skills,
} from './state.js';
import {property, propTable, race, size, type} from "./constants.js";
import {skills} from "./skills.js";

export function damage_calculation() {
    // Calcula a variação do ATQM
    let variance = weaponMATKvariance();
    let over = overUpgradeBonus();
    // Calcula o ATQM proveniente de atributos
    let int = stats.int + equipStats.int;
    let dex = stats.dex + equipStats.dex;
    let luk = stats.luk + equipStats.luk;
    let statMATK = Math.floor(Math.floor(stats.baseLv / 4) + int + Math.floor(int / 2) + Math.floor(dex / 5) + Math.floor(luk / 3));
    // Calcula o ATQM máximo e mínimo brutos
    let minMATK = Math.floor((statMATK + weapon.baseMATK + weapon.upgradeBonus - variance) * (1+(0.1*buffs.mystical_amplification))) + equipStats.flatMATK;
    let maxMATK = Math.floor((statMATK + weapon.baseMATK + weapon.upgradeBonus + variance + over) * (1+(0.1*buffs.mystical_amplification))) + equipStats.flatMATK;
    // Aplica os Multiplicadores
    // ATQM Mínimo
    minMATK = Math.floor(minMATK * (multipliers.matk) / 100);
    minMATK = Math.floor(minMATK * (multipliers.size[size.ALL] + multipliers.size[target.size]) / 100);
    minMATK = Math.floor(minMATK * (multipliers.property[property.ALL] + multipliers.property[target.property[0]]) / 100);
    // Oratio
    if (buffs.oratio > 0 && skill.property===property.HOLY) {
        minMATK = Math.floor((minMATK * (100 + (buffs.oratio*2)))/100);
    }
    minMATK = Math.floor(minMATK * (multipliers.skill_property[property.ALL] + multipliers.skill_property[skill.property]) / 100);
    minMATK = Math.floor(minMATK * (multipliers.race[race.ALL] + multipliers.race[target.race]) / 100);
    minMATK = Math.floor(minMATK * (multipliers.protocol[race.ALL] + multipliers.protocol[target.type]) / 100);
    minMATK = Math.floor(minMATK * (multipliers.monster) / 100);    
    // ATQM Máximo
    maxMATK = Math.floor(maxMATK * (multipliers.matk) / 100);
    maxMATK = Math.floor(maxMATK * (multipliers.size[race.ALL] + multipliers.size[target.size]) / 100);
    maxMATK = Math.floor(maxMATK * (multipliers.property[property.ALL] + multipliers.property[target.property[0]]) / 100);
    // Oratio
    if (buffs.oratio > 0 && skill.property===property.HOLY) {
        maxMATK = Math.floor((maxMATK * (100 + (buffs.oratio*2)))/100);
    }
    maxMATK = Math.floor(maxMATK * (multipliers.skill_property[property.ALL] + multipliers.skill_property[skill.property]) / 100);
    maxMATK = Math.floor(maxMATK * (multipliers.race[property.ALL] + multipliers.race[target.race]) / 100);
    maxMATK = Math.floor(maxMATK * (multipliers.protocol[type.ALL] + multipliers.protocol[target.type]) / 100);
    maxMATK = Math.floor(maxMATK * (multipliers.monster) / 100);

    // Calculo de Fraqueza e Resistência
    let softMDEF = Math.floor(((target.level / 4) + (target.int / 4)));
    if (equipStats.bypass > 100)
        equipStats.bypass = 100;
    // Bypass
    let hardMDEF = target.mdef - Math.floor(equipStats.bypass * target.mdef / 100);
    hardMDEF = (1000 + hardMDEF) / (1000 + (hardMDEF * 10));
    // let weakness = properties[target.property[1] - 1][target.property[0] - 1];
    let weakness = propTable[skill.property-1][target.property[1] - 1][target.property[0] - 1];
    // Atualiza a % base da skill
    skill.dmg = skills.find((line) => line.id === skill.id).script();
    // Calculo do Dano da Habilidade
    minMATK = Math.floor((Math.floor((Math.floor(minMATK * skill.dmg) * hardMDEF - softMDEF) * (multipliers.skill) / 100) * weakness) / 100);
    maxMATK = Math.floor((Math.floor((Math.floor(maxMATK * skill.dmg) * hardMDEF - softMDEF) * (multipliers.skill) / 100) * weakness) / 100);

    // Lex aeterna
    if (buffs.lex_aeterna){
        minMATK = minMATK * 2;
        maxMATK = maxMATK * 2;
    }
    // Telecinesia
    if (buffs.telekinesis > 0 && skill.property === property.GHOST) {
            minMATK = Math.floor(minMATK*(1+(40*buffs.telekinesis)/100));
            maxMATK = Math.floor(maxMATK*(1+(40*buffs.telekinesis)/100));
    }
    // Cometa (possivelmente entra no mesmo lugar da fórmula que oratio, confirmar ingame
    if (buffs.magicintoxication === 5 ) {
        minMATK = Math.floor(minMATK*1.5);
        maxMATK = Math.floor(maxMATK*1.5);
    }
    // Dilúvio
    if (buffs.deluge && skill.property === property.WATER) {
        minMATK = Math.floor(minMATK*1.2);
        maxMATK = Math.floor(maxMATK*1.2);
    }
    // Insignia de Fogo
    if (buffs.fire_insignia && skill.property === property.WATER) {
        minMATK = Math.floor(minMATK*1.5);
        maxMATK = Math.floor(maxMATK*1.5);
    }
    // Divisibilidade do Dano, ex: Judex que causa 700% dividido em 3 hits
    if (skill.divisibility > 1) {
        minMATK = Math.floor(minMATK / skill.divisibility) * skill.divisibility;
        maxMATK = Math.floor(maxMATK / skill.divisibility) * skill.divisibility;
    }

    // Número de hits que a skill a aplica uma porcentagem de dano, ex: Magnus Exorcismus ou Lanças que dão até 10 hits de 100%
    if (skill.hits > 1){
        minMATK = minMATK * skill.hits;
        maxMATK = maxMATK * skill.hits;
    }

    //
    if (learned_skills[skill.name] === 0){
        minMATK = 0;
        maxMATK = 0;
    }
    let matk = 'ATQM: '+statMATK+' + '+(equipStats.flatMATK+weapon.baseMATK+weapon.upgradeBonus)+" ± "+variance+' + 0~'+over;
    let castDelay = Math.max(0, (skill.castdelay * (100 - equipStats.castdelay)/100))
    castDelay = "Pós-Conjuração: "+castDelay.toFixed(2)+' s | '+skill.castdelay.toFixed(1)+' - '+String(equipStats.castdelay).padStart(3, ' ')+'%';
    let fixedCastTime = Math.max(0,((((skill.fct*10)-(equipStats.flatFCT*10))/10)*(100-equipStats.percentFCT))/100);
    fixedCastTime = 'Conjuração Fixa: '+fixedCastTime.toFixed(2)+' s | '+skill.fct.toFixed(2)+' - '+equipStats.flatFCT.toFixed(1)+' - '+equipStats.percentFCT+'%';
    // VCT (seconds) = (BaseVCT - Sum_VCT) × (1 − SQRT[{DEX × 2 + INT} ÷ 530]) × (1 − Sum_GearVCTReduc ÷ 100) × (1 − Sum_SkillVCTReduc ÷ 100)
    let variableCastTime = skill.vct * ( 1 - Math.sqrt(((dex*2)+int)/530) ) * (1 - equipStats.VCT/100);
    variableCastTime = Math.max(0, variableCastTime);
    variableCastTime = 'Conjuração Variável: '+variableCastTime.toFixed(2)+' s | '+skill.vct.toFixed(2)+' - '+equipStats.VCT+'% - √('+(dex*2+int)+'/530)';
    return {
        minDamage: minMATK,
        maxDamage: maxMATK,
        matk,
        castDelay,
        fixedCastTime,
        variableCastTime
    };
}

function weaponMATKvariance() {
    let weaponLevel = weapon.lv;
    let baseWeaponDamage = weapon.baseMATK;
    let weaponUpgrade = refinement.weapon;
    let refinementBonus = 0;
    if (weaponLevel === 4) {
        refinementBonus = 7 * weaponUpgrade;
    } else if (weaponLevel === 3) {
        refinementBonus = 5 * weaponUpgrade;
    } else if (weaponLevel === 2) {
        refinementBonus = 3 * weaponUpgrade;
    } else if (weaponLevel === 2) {
        refinementBonus = 2 * weaponUpgrade;
    }
    weapon.upgradeBonus = refinementBonus;
    return Math.floor((weaponLevel) * (baseWeaponDamage + refinementBonus) / 10);
}

function overUpgradeBonus() {
    let weaponLevel = weapon.lv;
    let weaponUpgrade = refinement.weapon;
    let over = 0;
    if (weaponLevel === 4 && weaponUpgrade >= 5) {
        over = (weaponUpgrade - 4) * 14;
    } else if (weaponLevel === 3 && weaponUpgrade >= 6) {
        over = (weaponUpgrade - 5) * 8;
    } else if (weaponLevel === 2 && weaponUpgrade >= 7) {
        over = (weaponUpgrade - 6) * 5;
    } else if (weaponLevel === 1 && weaponUpgrade >= 8) {
        over = (weaponUpgrade - 7) * 2;
    }
    return over;
}
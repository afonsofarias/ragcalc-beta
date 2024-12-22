import {currentJob, updateJobname, equipStats, skill, weapon, clearState} from "../core/state.js";
import {monsters} from "../../data/monsters.js"
import {populateItemsSelect, populateCostumeShadowSelect} from "./uiPopulator.js";
import {tops,mid,low,armors,weapons,shields,garments,shoes,accessory} from "../../data/items.js";
import {c_gar, c_low, c_mid, c_top} from "../../data/costume_enchants.js";
import {s_armor, s_earring, s_necklace, s_shield, s_shoes, s_weapon} from "../../data/shadows.js";
import {retrieveBuffs, retrieveEquipBonus, updateLearnedSkills, updateTargetInfo} from "./uiHandler.js";
import {damage_calculation} from "../core/dmg_calculation.js";

export async function classSelector(job) {
    if (currentJob !== job) {
        updateJobname();
        const tableContainer = document.getElementById('tableContainer');
        try {
            const response = await fetch('skill-tree/' + job + '.html');
            const html = await response.text();
            tableContainer.innerHTML = html;
            updateJobSpecificOptions(job);
        } catch (error) {
            console.error('Error loading table:', error);
        }
    }
}

function updateJobSpecificOptions(job){
    const selectElement = document.getElementById("skill");
    selectElement.innerHTML = "";
    let options = [];
    switch(job) {
        case "ARCHBISHOP":
            options = [
                { value: "AB_ADORAMUS", text: "Adoramus" },
                { value: "AB_JUDEX", text: "Judex" },
                { value: "PR_MAGNUS", text: "Magnus Exorcismus" }
            ];
            break;
        case "SORCERER":
            options = [
                { value: "SO_DIAMONDDUST", text: "Pó de Diamante" }
            ];
            break;
        default:
            options = [
                { value: "", text: "ERRO!" }
            ];
            break;
    }
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        selectElement.appendChild(option);
    });
    // Recupera as tabelas de buffs de todas as classes (filtra a tabela de stuffs
    let buffsTables = document.querySelectorAll('.buffs');
    buffsTables = Array.from(buffsTables).filter(buff => buff.id !== 'stuffsTable');
    // Oculta as tabelas e limpa os inputs
    buffsTables.forEach(buff => {
        buff.style.display = "none";
        let inputs = buff.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.type === "checkbox" || input.type === "radio") {
                input.checked = false;
            }
        });
    });
    // const button = Array.from(document.querySelectorAll("button.tablinks")).find(
    //     btn => btn.textContent.trim() === "Habilidades Pré-Requisito"
    // );
    //const tableContainer = document.getElementById('tableContainer');
    // Mostra a tabela de buffs da Classe Selecionada
    switch(job) {
        case "ARCHBISHOP":
            document.getElementById("buffsTableArchbishop").style.display = "table";
            break;
        case "SORCERER":
            document.getElementById("buffsTableSorcerer").style.display = "table";
            break;
    }

    // Atualiza a lista de equipamentos de acordo com a classe
    populateItemsSelect('top', tops);
    populateItemsSelect('mid', mid);
    populateItemsSelect('low', low);
    populateItemsSelect('arm', armors);
    populateItemsSelect('wea', weapons);
    populateItemsSelect('shi', shields);
    populateItemsSelect('gar', garments);
    populateItemsSelect('sho', shoes);
    populateItemsSelect('ac1', accessory);
    populateItemsSelect('ac2', accessory);
    // // Encantamentos Visuais
    populateCostumeShadowSelect('c_top', c_top);
    populateCostumeShadowSelect('c_mid', c_mid);
    populateCostumeShadowSelect('c_low', c_low);
    populateCostumeShadowSelect('c_gar', c_gar);
    // // Sombrios
    populateCostumeShadowSelect('s_arm', s_armor);
    populateCostumeShadowSelect('s_wea', s_weapon);
    populateCostumeShadowSelect('s_shi', s_shield);
    populateCostumeShadowSelect('s_sho', s_shoes);
    populateCostumeShadowSelect('s_ear', s_earring);
    populateCostumeShadowSelect('s_nec', s_necklace);
}

// Atualiza a seção de atributos do alvo escolhido
export function loadTarget(id) {
    //alert('id: ' + id);
    let searchObject = monsters.find((monster) => monster.id === id);
    //alert('dbname: ' + searchObject.dbname);
    document.getElementById('target_level').value = searchObject.level;
    document.getElementById('target_type').selectedIndex = searchObject.type - 1;

    document.getElementById('target_race').value = searchObject.race;
    document.getElementById('target_property').value = searchObject.property[0];
    document.getElementById('target_property_level').value = searchObject.property[1];
    document.getElementById('target_size').selectedIndex = searchObject.size - 1;
    document.getElementById('target_int').value = searchObject.int;
    document.getElementById('target_mdef').value = searchObject.mdef;
}

// Consumível exclusivo - ativar uma pílula de combate desativa a anterior
export function pillSelector (pill){
    if (pill.checked === true){
        if (pill.id === "Combat_Pill"){
            document.getElementById("P_Combat_Pill").checked = false;
        } else {
            document.getElementById("Combat_Pill").checked = false;
        }
    }
}

// Atualiza o ícone dos equipamentos nos selects
export function updateImage(position, value) {
    let image = document.getElementById(position + "_img");
    let id = value;
    //let server = x;
    // equipamentos para as seleções vazias
    if (id === "") {
        switch (position) {
            case "top":
                id = "2220";
                break;
            case "mid":
                id = "2203";
                break;
            case "low":
                id = "2269";
                break;
            case "arm":
                id = "2309";
                break;
            case "wea":
                id = "1551";
                break;
            case "shi":
                id = "2103";
                break;
            case "gar":
                id = "2503";
                break;
            case "sho":
                id = "2404";
                break;
            case "ac1":
                id = "2601";
                break;
            case "ac2":
                id = "2607";
                break;
            // Encantamentos Visuais
            case "c_top":
                id = "19602";
                break;
            case "c_mid":
                id = "19603";
                break;
            case "c_low":
                id = "19604";
                break;
            case "c_gar":
                id = "20506";
                break;
            // Sombrios
            case "s_arm":
                id = "24273";
                break;
            case "s_wea":
                id = "24292";
                break;
            case "s_shi":
                id = "24305";
                break;
            case "s_sho":
                id = "24260";
                break;
            case "s_ear":
                id = "24248";
                break;
            case "s_nec":
                id = "24252";
                break;
        }
    }
    // Seleciona de qual servidor o ícone da image será escolhido
    if (id === '470106') {
        image.src = "https://www.divine-pride.net/img/items/item/jRO/" + id;
    } else if (id === '29516' || id === '310011') {
        image.src = "https://www.divine-pride.net/img/items/item/kRO/" + id;
    } else {
        image.src = "https://www.divine-pride.net/img/items/item/bRO/" + id;
    }
}

export function displayDamage(){
    clearState();
    // Aplica os Bonus dos Equipamentos
    updateLearnedSkills();
    updateTargetInfo();
    retrieveEquipBonus();
    retrieveBuffs();

    let { minDamage, maxDamage } = damage_calculation();
    document.getElementById("finalSkillDamage").value = "teste";
    // Atualização do Resultado na Tela
    if (minDamage === maxDamage) {
        document.getElementById("finalSkillDamage").value = minDamage;
    } else {
        document.getElementById("finalSkillDamage").value = minDamage + ' ~ ' + maxDamage;
    }
    // Seta os bonus de atributo na tela
    let span = document.getElementsByTagName("span");
    span[2].innerText = ' + ' + equipStats.str;
    span[3].innerText = ' + ' + equipStats.agi;
    span[4].innerText = ' + ' + equipStats.vit;
    span[5].innerText = ' + ' + equipStats.int;
    span[6].innerText = ' + ' + equipStats.dex;
    span[7].innerText = ' + ' + equipStats.luk;
}

function updateUI(){
    // Seta na tela o ATQM, Pós-Conjuração, Conjuração Fixa e Conjuração Variável
    // ATQM
    document.getElementById('matk').innerText = 'ATQM: '+statMATK+' + '+(equipStats.flatMATK+weapon.baseMATK+weapon.upgradeBonus)+" ± "+variance+' + 0~'+over;
    // Pós
    let castDelay = Math.max(0, (skill.castdelay * (100 - equipStats.castdelay)/100))
    document.getElementById('castDelay').innerText = "Pós-Conjuração: "+castDelay.toFixed(2)+' s | '+skill.castdelay.toFixed(1)+' - '+String(equipStats.castdelay).padStart(3, ' ')+'%';
    // Fixa
    let fixedCastTime = Math.max(0,((((skill.fct*10)-(equipStats.flatFCT*10))/10)*(100-equipStats.percentFCT))/100);
    document.getElementById('fixedCastTime').innerText = 'Conjuração Fixa: '+fixedCastTime.toFixed(2)+' s | '+skill.fct.toFixed(1)+' - '+equipStats.flatFCT.toFixed(1)+' - '+equipStats.percentFCT+'%';
    // Variável
    // VCT (seconds) = (BaseVCT - Sum_VCT) × (1 − SQRT[{DEX × 2 + INT} ÷ 530]) × (1 − Sum_GearVCTReduc ÷ 100) × (1 − Sum_SkillVCTReduc ÷ 100)
    let variableCastTime = skill.vct * ( 1 - Math.sqrt(((dex*2)+int)/530) ) * (1 - equipStats.VCT/100);
    variableCastTime = Math.max(0, variableCastTime);
    document.getElementById('variableCastTime').innerText = 'Conjuração Variável: '+variableCastTime.toFixed(2)+' s | '+skill.vct.toFixed(1)+' - '+equipStats.VCT+'% - √('+(dex*2+int)+'/530)';
}
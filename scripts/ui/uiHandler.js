import {learned_skills, refinement, s_refinement, setCurrentEquip, target} from "../core/state.js";
import {accessory, armors, garments, low, mid, shields, shoes, tops, weapons} from "../../data/items.js";
import {cards} from "../../data/cards.js";
import {enchants} from "../../data/enchants.js";
import {buffs} from '../core/skills.js'
import {consumables} from "../../data/consumables.js";
import {c_gar, c_low, c_mid, c_top} from "../../data/costume_enchants.js";
import {s_armor, s_earring, s_necklace, s_shield, s_shoes, s_weapon} from "../../data/shadows.js";

export function retrieveJobname() {
    return document.querySelector('input[name="class"]:checked').value;
}

export function retrieveBaseStats(){
    return {
        baseLv: parseInt(document.getElementById("base_lvl").value),
        jobLv: parseInt(document.getElementById("job_lvl").value),
        str: parseInt(document.getElementById("base_str").value),
        agi: parseInt(document.getElementById("base_agi").value),
        vit: parseInt(document.getElementById("base_vit").value),
        int: parseInt(document.getElementById("base_int").value),
        dex: parseInt(document.getElementById("base_dex").value),
        luk: parseInt(document.getElementById("base_luk").value),
    }
}

export function retrieveSkillname() {
    return document.getElementById('skill').value;
}

export function updateTargetInfo() {
    target.id = document.getElementById('target_name').value;
    target.level = parseInt(document.getElementById('target_level').value);
    target.type = document.getElementById('target_type').selectedIndex + 1;

    target.race = document.getElementById('target_race').value;
    target.property = [document.getElementById('target_property').value, document.getElementById('target_property_level').selectedIndex + 1];
    target.size = parseInt(document.getElementById('target_size').selectedIndex) + 1;

    target.mdef = parseInt(document.getElementById('target_mdef').value);
    target.int = parseInt(document.getElementById('target_int').value);
}

function updateRefinements() {
    refinement.top = document.getElementById('top_refine').options.selectedIndex.valueOf();
    refinement.armor = document.getElementById("arm_refine").options.selectedIndex.valueOf();
    refinement.weapon = document.getElementById("wea_refine").options.selectedIndex.valueOf();
    refinement.shield = document.getElementById("shi_refine").options.selectedIndex.valueOf();
    refinement.garment = document.getElementById("gar_refine").options.selectedIndex.valueOf();
    refinement.shoes = document.getElementById("sho_refine").options.selectedIndex.valueOf();

    s_refinement.armor = document.getElementById('s_arm_refine').options.selectedIndex.valueOf();
    s_refinement.weapon = document.getElementById('s_wea_refine').options.selectedIndex.valueOf();
    s_refinement.shield = document.getElementById('s_shi_refine').options.selectedIndex.valueOf();
    s_refinement.shoes = document.getElementById('s_sho_refine').options.selectedIndex.valueOf();
    s_refinement.earring = document.getElementById('s_ear_refine').options.selectedIndex.valueOf();
    s_refinement.necklace = document.getElementById('s_nec_refine').options.selectedIndex.valueOf();
}

export function retrieveEquipBonus() {
    updateRefinements();
    const equipsArray = ['top', 'mid', 'low', 'arm', 'wea', 'shi', 'gar', 'sho', 'ac1', 'ac2', 'c_top', 'c_mid', 'c_low', 's_arm', 's_wea', 's_shi', 'c_gar', 's_sho', 's_ear', 's_nec'];
    equipsArray.forEach(equip => {
        setCurrentEquip(equip);
        let select = document.getElementById(equip);
        let id = select.options[select.selectedIndex].value;
        if (id !== '') {
            let searchObject = returnArray(equip).find((item) => item.id === select.value);
            searchObject.script();
            // For each of the 4 possible slots
            retrieveSlot(1, searchObject.slot1, equip);
            retrieveSlot(2, searchObject.slot2, equip);
            retrieveSlot(3, searchObject.slot3, equip);
            retrieveSlot(4, searchObject.slot4, equip);
        }
    });
}

function returnArray(array) {
    switch (array) {
        // Equipamentos
        case 'top':
            return tops;
        case 'mid':
            return mid;
        case 'low':
            return low;
        case 'arm':
            return armors;
        case 'wea':
            return weapons;
        case 'shi':
            return shields;
        case 'gar':
            return garments;
        case 'sho':
            return shoes;
        case 'ac1':
            return accessory;
        case 'ac2':
            return accessory;
        // Encantamentos Visuais
        case 'c_top':
            return c_top;
        case 'c_mid':
            return c_mid;
        case 'c_low':
            return c_low;
        case 'c_gar':
            return c_gar;
        // Equipamentos Sombrios
        case 's_arm':
            return s_armor;
        case 's_wea':
            return s_weapon;
        case 's_shi':
            return s_shield;
        case 's_sho':
            return s_shoes;
        case 's_ear':
            return s_earring;
        case 's_nec':
            return s_necklace;
    }
}

export function retrieveBuffs() {
    let buffsString = "";
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type === "checkbox" && inputs[i].checked === true) {
            buffsString+= inputs[i].value +" "+inputs[i].className;

            if (inputs[i].parentElement.className==='consumable') {
                let searchObject = consumables.find((consumable) => consumable.id === inputs[i].value);
                searchObject.script();
            } else {
                //run buffs
                let searchObject = buffs.find((buff) => buff.id === inputs[i].value);
                searchObject.script(searchObject.max_level);
            }
        }
    }
}

export function updateLearnedSkills() {
    // Limpa configuração anterior
    for (let key in learned_skills) {
        if (learned_skills.hasOwnProperty(key)) {
            delete learned_skills[key];
        }
    }
    // Recupera a árvore de habilidades
    const inputs = document.querySelectorAll("input.level_skill");
    inputs.forEach(input => {
        const skillName = input.getAttribute('name');
        learned_skills[skillName] = parseInt(input.value);
    });
}

function retrieveSlot(i, text, equip) {
    let slot = document.getElementById(equip + '_slot' + i);
    if (text === "card") {
        let searchObject = cards.find((card) => card.id === slot.options[slot.selectedIndex].value);
        if (searchObject != null)
            searchObject.script();
    } else if (text !== undefined && text !== null) {
        let a = document.getElementById(equip + '_slot' + i)
        let searchObject = enchants.find((enchant) => enchant.id === a.options[a.selectedIndex].value);
        if (searchObject != null)
            searchObject.script();
    }
}
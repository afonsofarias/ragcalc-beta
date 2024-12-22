import {monsters} from "../../data/monsters.js";
import {race, property} from '../core/constants.js';
import {updateImage} from "./uiUpdater.js";
import {cards} from "../../data/cards.js";
import {enchants} from "../../data/enchants.js";

//
export function populateItemsSelect(selectId, itemList) {
    const select = document.getElementById(selectId);
    const firstOption = select.options[0];
    select.innerHTML = "";
    select.appendChild(firstOption);
    const job = document.querySelector('input[name="class"]:checked').value;

    itemList.forEach(item => {
        // Nao adiciona itens que não sejam para a Classe
        if (item.tags !== undefined){
            if (!item.tags.includes(job))
                return;
        }

        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        option.data = item.dbname;
        option.setAttribute('data-slot1', item.slot1);
        option.setAttribute('data-slot2', item.slot2);
        option.setAttribute('data-slot3', item.slot3);
        option.setAttribute('data-slot4', item.slot4);

        // Flag de Arma de Duas Mãos
        if (selectId === 'wea' && item.twoHanded)
            option.setAttribute('twoHanded', 'true');

        // Alguns acessórios dependem de lado para equipar
        if (selectId === 'ac1') {
            if (item.position !== '2')
                select.appendChild(option);
        } else if (selectId === 'ac2') {
            if (item.position !== '1')
                select.appendChild(option);
        } else {
            select.appendChild(option);
        }
    });

    populateSlot(selectId);
}

// Function to populate the Costume Enchants and Shadow Equipments selects
export function populateCostumeShadowSelect(selectId, itemList) {
    const select = document.getElementById(selectId);
    const firstOption = select.options[0];
    select.innerHTML = "";
    select.appendChild(firstOption);
    const job = document.querySelector('input[name="class"]:checked').value;

    itemList.forEach(item => {
        // Nao adiciona entradas que não sejam para a Classe
        if (item.tags !== undefined){
            if (!item.tags.includes(job))
                return;
        }
        let option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        option.data = item.dbname;
        select.appendChild(option);
    });

    updateImage(selectId, select.value);
}

// Function to populate select slots with cards and enchants options
export function populateSlot(position) {
    let select = document.getElementById(position);
    const job = document.querySelector('input[name="class"]:checked').value;
    updateImage(position, select.value);

    // For each of the 4 possible slots
    for (let i = 1; i < 5; i++) {
        let slot = document.getElementById(position + '_slot' + i);
        // Clears previous setup
        for (let j = (slot.options.length - 1); j >= 0; j--) {
            slot.options.remove(j);
        }
        // Retrieves slot info
        let text = select.options[select.selectedIndex].getAttribute('data-slot' + i);
        if (text === "card") {
            slot.style.display = "block";
            let option = document.createElement('option');
            option.value = null;
            option.textContent = String("Carta");
            slot.appendChild(option);
            // Populate with cards
            for (let j = 0; j < cards.length; j++) {
                // Nao adiciona cartas que não sejam interessantes para a Classe
                let addCard = true;
                if (cards[j].tags !== undefined){
                    if (!cards[j].tags.includes(job))
                        addCard = false;
                }
                if (addCard) {
                    let position2 = position;
                    if (position === 'ac1' || position === 'ac2') {
                        position2 = 'acc';
                    } else if (position === 'mid') {
                        position2 = 'top';
                    }
                    if (cards[j].position === position2) {
                        option = document.createElement('option');
                        option.value = cards[j].id;
                        option.textContent = cards[j].name;
                        slot.appendChild(option);
                    }
                }
            }
        } else if (text !== "undefined" && text !== null) {
            slot.style.display = "block";
            let option = document.createElement('option');
            option.value = null;
            option.textContent = String("Encantamento");
            slot.appendChild(option);
            // Encantamentos
            // Splits single string into array of enchants
            let enchantArray = text.split(',')
            enchantArray.forEach(item => {
                option = document.createElement('option');
                option.value = item;
                let searchObject = enchants.find((enchant) => enchant.id === item);
                //enchants[enchants.indexOf(searchObject)].script();
                //searchObject.script();
                option.textContent = String(searchObject.name);
                slot.appendChild(option);
            });
        } else {
            slot.style.display = "none";
        }
    }
    // Desequipa Escudo ao equipar Arma de 2 Mãos ou o contrário
    if (position === 'wea' && select.options[select.selectedIndex].getAttribute('twoHanded')==='true' && document.getElementById("shi").selectedIndex !== 0){
        document.getElementById("shi").selectedIndex = 0;
        document.getElementById("shi").onchange();
    } else if (position === 'shi' && document.getElementById('wea').options[document.getElementById('wea').selectedIndex].getAttribute('twoHanded') === 'true' && select.selectedIndex !== 0){
        document.getElementById("wea").selectedIndex = 0;
        document.getElementById("wea").onchange();
    }
}

// Function to populate the monster select
export function populateTargetSelect() {
    let select = document.getElementById('target_name');
    let option;
    monsters.forEach(monster => {
        const option = document.createElement('option');
        option.value = monster.id;
        option.textContent = monster.name;
        select.appendChild(option);
    });
    select = document.getElementById('target_race');
    // let FORMLESS = 1;
    option = document.createElement('option');
    option.value = race.FORMLESS;
    option.textContent = 'Amorfo';
    select.appendChild(option);
    // let BRUTE = 2;
    option = document.createElement('option');
    option.value = race.BRUTE;
    option.textContent = 'Bruto';
    select.appendChild(option);
    // let PLANT = 3;
    option = document.createElement('option');
    option.value = race.PLANT;
    option.textContent = 'Planta';
    select.appendChild(option);
    // let INSECT = 4;
    option = document.createElement('option');
    option.value = race.INSECT;
    option.textContent = 'Inseto';
    select.appendChild(option);
    // let FISH = 5;
    option = document.createElement('option');
    option.value = race.FISH;
    option.textContent = 'Peixe';
    select.appendChild(option);
    // let DEMON = 6;
    option = document.createElement('option');
    option.value = race.DEMON;
    option.textContent = 'Demônio';
    select.appendChild(option);
    // let DEMI_HUMAN = 7;
    option = document.createElement('option');
    option.value = race.DEMI_HUMAN;
    option.textContent = 'Humanoide';
    select.appendChild(option);
    // let ANGEL = 8;
    option = document.createElement('option');
    option.value = race.ANGEL;
    option.textContent = 'Anjo';
    select.appendChild(option);
    // let DRAGON = 9;
    option = document.createElement('option');
    option.value = race.DRAGON;
    option.textContent = 'Dragão';
    select.appendChild(option);
    // let UNDEAD = 10;
    option = document.createElement('option');
    option.value = race.UNDEAD;
    option.textContent = 'Morto-Vivo';
    select.appendChild(option);

    select = document.getElementById('target_property');
    // let NEUTRAL = 1;
    option = document.createElement('option');
    option.value = property.NEUTRAL;
    option.textContent = 'Neutro';
    select.appendChild(option);
    // let WATER = 2;
    option = document.createElement('option');
    option.value = property.WATER;
    option.textContent = 'Água';
    select.appendChild(option);
    // let EARTH = 3;
    option = document.createElement('option');
    option.value = property.EARTH;
    option.textContent = 'Terra';
    select.appendChild(option);
    // let FIRE = 4;
    option = document.createElement('option');
    option.value = property.FIRE;
    option.textContent = 'Fogo';
    select.appendChild(option);
    // let WIND = 5;
    option = document.createElement('option');
    option.value = property.WIND;
    option.textContent = 'Vento';
    select.appendChild(option);
    // let POISON = 6;
    option = document.createElement('option');
    option.value = property.POISON;
    option.textContent = 'Veneno';
    select.appendChild(option);
    // let HOLY = 7;
    option = document.createElement('option');
    option.value = property.HOLY;
    option.textContent = 'Sagrado';
    select.appendChild(option);
    // let DARK = 8;
    option = document.createElement('option');
    option.value = property.DARK;
    option.textContent = 'Sombrio';
    select.appendChild(option);
    // let GHOST = 9;
    option = document.createElement('option');
    option.value = property.GHOST;
    option.textContent = 'Fantasma';
    select.appendChild(option);
    // let UNDEAD = 10;
    option = document.createElement('option');
    option.value = property.UNDEAD;
    option.textContent = 'Maldito';
    select.appendChild(option);

    select = document.getElementById('target_property_level');
    for (let i = 1; i < 5; i++) {
        option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}

// Função para preencher os elementos <select> com valores de refinamento de 0 a 20
export function populateRefinementOptions() {
    const refinementsSelects = document.querySelectorAll('[class^="refine"]');

    refinementsSelects.forEach(select => {
        for (let i = 0; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `+${i}`;
            select.appendChild(option);
        }
    });
}
// Função para preencher os elementos <select> com valores de refinamento de 0 a 10
export function populateShadowRefinementOptions() {
    const refinementsSelects = document.querySelectorAll('[class^="s_refine"]');

    refinementsSelects.forEach(select => {
        for (let i = 0; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `+${i}`;
            select.appendChild(option);
        }
    });
}
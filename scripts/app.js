import {classSelector, displayDamage, loadTarget, pillSelector, updateImage} from "./ui/uiUpdater.js";
import {updateJobname} from "./core/state.js";
import {populateRefinementOptions, populateShadowRefinementOptions, populateTargetSelect, populateSlot} from "./ui/uiPopulator.js";
import {imposeMinMax, calcularPontos} from "./core/stat.js";

async function initializeApp() {
    // Chama as funções para preencher elementos da UI
    populateRefinementOptions();
    populateShadowRefinementOptions();
    populateTargetSelect();
    // EventListeners
    await initializeClassSelectorEventListeners();
    initializeAttributesEventListeners();
    initializeTargetEventListener();
    initializeCalculateEventListener();
    initializeSaveLoadEventListeners();
    initializeTabEventListeners();
    initializeEquipmentSelectsEventListeners();
    initializeSpecialEquipmentEventListener();
    handleSorcererSummonSelection();
    initializePillSelectors()
    // Load saved setup
    await loadSavedCalc();
}

async function initializeClassSelectorEventListeners() {
    // Event listener para o seletor de Classe
    const radioButtons = document.querySelectorAll('input[name="class"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', async (event) => {
            await classSelector(event.target.value);
            displayDamage();
        });
    });
    // Inicializa com a classe Padrão
    await classSelector(document.querySelector('input[name="class"]:checked').value);
    updateJobname();
}

function initializeAttributesEventListeners(){
    // Get all the number input elements
    const numberInputs = document.querySelectorAll('input[type="number"]');
    // Add event listeners
    numberInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            imposeMinMax(event.target);
            calcularPontos();
        });

        input.addEventListener('keypress', (event) => {
            // Only allow numbers to be typed
            if (!/[0-9]/i.test(event.key)) {
                event.preventDefault();
            }
        });
    });

    calcularPontos();
}

function initializeTargetEventListener() {
    // Add an event listener to the 'target_name' select element
    const targetSelect = document.getElementById('target_name');
    if (targetSelect) {
        targetSelect.addEventListener('change', (event) => {
            loadTarget(event.target.value); // Call the loadTarget function with the selected value
        });
    }
    // Set target select default value
    document.getElementById('target_name').selectedIndex = 5;
    loadTarget(document.getElementById('target_name').value);
}

function initializeCalculateEventListener(){
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', displayDamage);
}

function initializeSaveLoadEventListeners(){
        const saveButton = document.getElementById('saveButton');
        const loadButton = document.getElementById('loadButton');

        saveButton.addEventListener('click', saveCalc);
        loadButton.addEventListener('click', loadSavedCalc);
}

function initializeTabEventListeners() {
    // Select all tab links
    const tabLinks = document.querySelectorAll('.tablinks');
    // Add an event listener
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function(event) {
            const tabName = tabLink.textContent; // Get the text of the tab
            switchTab(event, tabName);  // Call your switchTab function
        });
    });
    // Set the default tab
    const defaultTab = document.getElementById('defaultOpen');
    if (defaultTab) {
        defaultTab.click(); // Simulate a click on the default tab to open it initially
    }
    // Open the default tab
    document.getElementById("defaultOpen").click();
}

function initializeEquipmentSelectsEventListeners() {
    // Select elements by their ID and add event listeners for the change event
    const slots = ['top', 'mid', 'low', 'arm', 'wea', 'shi', 'gar', 'sho', 'ac1', 'ac2'];

    slots.forEach(slot => {
        const selectElement = document.getElementById(slot);
        selectElement.addEventListener('change', () => populateSlot(slot));
    });
}

function initializeSpecialEquipmentEventListener() {
    const selectIds = [
        'c_top', 'c_mid', 'c_low', 's_arm', 's_wea',
        's_shi', 'c_gar', 's_sho', 's_ear', 's_nec'
    ];

    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        if (selectElement) {
            selectElement.addEventListener('change', function() {
                updateImage(this.id, this.value);
            });
        }
    });
}

function initializePillSelectors() {
    const combatPill = document.getElementById("Combat_Pill");
    const pCombatPill = document.getElementById("P_Combat_Pill");

    combatPill.addEventListener("click", function() {
        pillSelector(combatPill);
    });

    pCombatPill.addEventListener("click", function() {
        pillSelector(pCombatPill);
    });
}

function handleSorcererSummonSelection() {
    // Select all input elements related to summons
    const inputs = document.querySelectorAll('input[name*="SO_SUMMON"]');
    // Add event listeners to each input
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                // Deselect all other summons
                inputs.forEach(otherInput => {
                    if (otherInput !== input) {
                        otherInput.checked = false;
                    }
                });
            } else {
            }
        });
    });
}

function saveCalc() {
    const elements = document.querySelectorAll('input, select, textarea');
    const data = {};

    elements.forEach(element => {
        if (element.type === 'radio' || element.type === 'checkbox') {
            data[element.id] = element.checked;
        } else {
            data[element.id] = element.value;
        }
    });
    // if (URL){
    //     saveDataToURL(data);
    // } else {
    let slot = document.getElementById('loadout').value;
    if (slot === '0')
        localStorage.setItem('calcData', JSON.stringify(data));
    else
        localStorage.setItem('calcData' + slot, JSON.stringify(data));
    // }
}

// function saveDataToURL(data) {
//     const jsonData = JSON.stringify(data);
//     const b64 = btoa(jsonData);
//     const encodedData = encodeURIComponent(b64);
//     const currentURL = window.location.href.split('?')[0]; // Get the base URL
//     const newURL = `${currentURL}?config=${encodedData}`;
//     window.history.pushState({}, '', newURL); // Update the URL without reloading
//     navigator.clipboard.writeText(newURL).catch(err => { // Copy the new URL to the clipboard
//         console.error('Failed to copy the URL to the clipboard: ', err);
//     });
// }

async function loadSavedCalc() {
    let data = '';
    if (data === '') {
        let slot = document.getElementById('loadout').value;
        if (slot === '0')
            data = JSON.parse(localStorage.getItem('calcData'));
        else
            data = JSON.parse(localStorage.getItem('calcData' + slot));
    }
    if (data) {
        for (const [id, value] of Object.entries(data)) {
            const element = document.getElementById(id);
            if (element) {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    element.checked = value;
                } else {
                    element.value = value;
                }
                if (element.type === 'radio') {
                    if (element.checked) {
                        await classSelector(element.value);
                    }
                } else {
                    element.dispatchEvent(new Event('change', {bubbles: true}));
                }
            }
        }
    }
    calcularPontos();
    displayDamage();
}

// function loadDataFromURL() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const encodedData = urlParams.get('config');
//     if (encodedData) {
//         const decodedData = decodeURIComponent(encodedData);
//         const data = JSON.parse(decodedData);
//         // Now you have the data object to work with
//         loadSavedConfig(data); // Use your load function here
//     }
// }

function switchTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "grid";
    //evt.currentTarget.className += " active";
    evt.currentTarget.classList.add("active");
}

// executa initializeApp assim que a página for carregada
window.addEventListener('load', initializeApp);
import threeSnails from '/src/assets/skills/Three Snails.png';
import recovery from '/src/assets/skills/Recovery.png';
import nimbleFeet from '/src/assets/skills/Nimble Feet.png';

export const skills = [
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Three Snails"
        },
        "Skill Name": "Three Snails",
        "Master Level": 3,
        "Description": "Hurls snail shells to attack monsters from long distance",
        "Effect": "Level 1: MP -10, Damage 10\nLevel 2: MP -15, Damage 25\nLevel 3: MP -20, Damage 40",
        "Type": "Active"
    },
    {
        "Icon": {
            type: "image",
            src: recovery,
            alt: "Recovery"
        },
        "Skill Name": "Recovery",
        "Master Level": 3,
        "Description": "Enables the user to recover HP constantly for 30 sec",
        "Effect": "Level 1: MP -10, Recovers 24 HP in 30 sec\nLevel 2: MP -20, Recovers 48 HP in 30 sec\nLevel 3: MP -30, Recovers 72 HP in 30 sec\nCooldown: 10 min",
        "Type": "Supportive"
    },
    {
        "Icon": {
            type: "image",
            src: nimbleFeet,
            alt: "Nimble Feet"
        },
        "Skill Name": "Nimble Feet",
        "Master Level": 3,
        "Description": "Enables quick movement for short durations",
        "Effect": "Level 1: MP -10, Speed +10 for 4 sec\nLevel 2: MP -15, Speed +15 for 8 sec\nLevel 3: MP -20, Speed +20 for 12 sec\nCooldown: 1 min",
        "Type": "Supportive"
    }
];

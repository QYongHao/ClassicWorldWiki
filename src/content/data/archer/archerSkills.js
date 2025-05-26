import threeSnails from '/src/assets/skills/beginner/three-snails.png';

export const archerSkills = [
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "The Blessing of Amazon"
        },
        "Skill Name": "The Blessing of Amazon",
        "Master Level": 16,
        "Description": "Increases accuracy",
        "Effect": "Level 1: Accuracy +1\n...\nLevel 16: Accuracy +16",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "The Eye of Amazon"
        },
        "Skill Name": "The Eye of Amazon",
        "Master Level": 8,
        "Description": "Increases attack range for bows and crossbows (Requires The Blessing of Amazon Lv. 3)",
        "Effect": "Level 1: Range +15\n...\nLevel 8: Range +120",
        "Type": "Passive",
        "Pre-requisite": "The Blessing of Amazon Lv. 3"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Critical Shot"
        },
        "Skill Name": "Critical Shot",
        "Master Level": 20,
        "Description": "Allows you to perform a critical attack with a certain success rate",
        "Effect": "Level 1: 12% success rate, critical damage 105%\n...\nLevel 20: 40% success rate, critical damage 200%",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Focus"
        },
        "Skill Name": "Focus",
        "Master Level": 20,
        "Description": "Focusing to temporarily increase accuracy and avoidability",
        "Effect": "Level 1: MP -8; accuracy +1 and avoidability +1 for 70 seconds\n...\nLevel 20: MP -16; accuracy +20 and avoidability +20 for 300 seconds",
        "Type": "Supportive",
        "Pre-requisite": "The Blessing of Amazon Lv. 3"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Double Shot"
        },
        "Skill Name": "Double Shot",
        "Master Level": 20,
        "Description": "Fires two arrows at once to attack an enemy twice",
        "Effect": "Level 1: MP -8; Damage 76% x 2 Hits\n...\nLevel 20: MP -16; Damage 130% x 2 Hits",
        "Type": "Active",
        "Pre-requisite": "Arrow Blow Lv. 1"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Arrow Blow"
        },
        "Skill Name": "Arrow Blow",
        "Master Level": 20,
        "Description": "Fires an arrow with authority. Applies more damage than usual",
        "Effect": "Level 1: MP -6; Damage 141%\n...\nLevel 20: MP -14; Damage 260%",
        "Type": "Active"
    }
];

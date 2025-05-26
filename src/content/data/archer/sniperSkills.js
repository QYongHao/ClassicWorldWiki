import threeSnails from '/src/assets/skills/beginner/three-snails.png';

export const sniperSkills = [
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Thrust"
        },
        "Skill Name": "Thrust",
        "Master Level": 20,
        "Description": "Boosts up the moving speed.",
        "Effect": "Level 1: Speed +2\n...\nLevel 20: Speed +30",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Mortal Blow"
        },
        "Skill Name": "Mortal Blow",
        "Master Level": 20,
        "Description": "For a certain rate, allows you to fire arrows even at a very close range. Even kills a monster with one shot every once in a while.",
        "Effect": "Level 1: 32% success rate, basic attack 110%; kills the monster with HP at 20% or lower at 1% success rate\n...\nLevel 20: 70% success rate, basic attack 250%; kills the monster with HP at 50% or lower at 10% success rate",
        "Type": "Passive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Puppet"
        },
        "Skill Name": "Puppet",
        "Master Level": 20,
        "Description": "Summons a puppet (your other self) for a certain amount of time. While the puppet is around, the monsters will attack the puppet, not you.",
        "Effect": "Level 1: MP -23; Summon doll of 500 HP for 5 seconds\n...\nLevel 20: MP -32; Summon doll of 6000 HP for 60 seconds",
        "Type": "Supportive"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Blizzard"
        },
        "Skill Name": "Blizzard",
        "Master Level": 30,
        "Description": "Uses ice-based arrows to attack up to 6 monsters at once. Only works when equipped with a crossbow.",
        "Effect": "Level 1: MP -20; Attack power 100%, freezes enemy for 1 second\n...\nLevel 30: MP -30; Attack power 140%, freezes enemy for 3 seconds",
        "Type": "Active"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Arrow Eruption"
        },
        "Skill Name": "Arrow Eruption",
        "Master Level": 30,
        "Description": "Fires a number of arrows into the ground, attacking up to 6 monsters at once on its way up. Only available when equipped with a crossbow.",
        "Effect": "Level 1: MP -18; Basic attack 60%\n...\nLevel 30: MP -28; Basic attack 160%",
        "Type": "Active",
        "Pre-requisite": "Mortal Blow Lv. 5"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Golden Eagle"
        },
        "Skill Name": "Golden Eagle",
        "Master Level": 30,
        "Description": "Summons a golden eagle. The eagle will be hovering around you, attacking monsters nearby.",
        "Effect": "Level 1: MP -32; summons an eagle that attacks 13 times in 103 secs; 50% success rate of stunning\n...\nLevel 30: MP -80; summons an eagle that attacks 70 times in 180 secs; 99% success rate of stunning",
        "Type": "Active",
        "Pre-requisite": "Puppet Lv 5 and consume 1 Summoning Rock"
    },
    {
        "Icon": {
            type: "image",
            src: threeSnails,
            alt: "Strafe"
        },
        "Skill Name": "Strafe",
        "Master Level": 30,
        "Description": "Fires 4 arrows at an enemy.",
        "Effect": "Level 1: MP -26; Basic attack 71%, attack 4 times\n...\nLevel 30: MP -32; Basic attack 100%, attack 4 times",
        "Type": "Active"
    }
];

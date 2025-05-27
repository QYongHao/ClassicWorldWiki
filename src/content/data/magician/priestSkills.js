import elementalResistance from '/src/assets/skills/Elemental Resistance.png';
import dispel from '/src/assets/skills/Dispel.png';
import mysticDoor from '/src/assets/skills/Mystic Door.png';
import holySymbol from '/src/assets/skills/Holy Symbol.png';
import shiningRay from '/src/assets/skills/Shining Ray.png';
import doom from '/src/assets/skills/Doom.png';
import summonDragon from '/src/assets/skills/Summon Dragon.png';

export const skills = [
  {
    "Icon": {
      "type": "image",
      "alt": "Elemental Resistance",
      "src": elementalResistance
    },
    "Skill Name": "Elemental Resistance",
    "Master Level": 20,
    "Description": "Gains a higher tolerance for all element-based magic attacks from the enemy.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "Increase tolerance against element-based magic attacks by 12%"
      },
      {
        "Levels": 2,
        "Effect": "Increase tolerance against element-based magic attacks by 14%"
      },
      {
        "Levels": 3,
        "Effect": "Increase tolerance against element-based magic attacks by 16%"
      },
      {
        "Levels": 4,
        "Effect": "Increase tolerance against element-based magic attacks by 18%"
      },
      {
        "Levels": 5,
        "Effect": "Increase tolerance against element-based magic attacks by 20%"
      },
      {
        "Levels": 6,
        "Effect": "Increase tolerance against element-based magic attacks by 22%"
      },
      {
        "Levels": 7,
        "Effect": "Increase tolerance against element-based magic attacks by 24%"
      },
      {
        "Levels": 8,
        "Effect": "Increase tolerance against element-based magic attacks by 26%"
      },
      {
        "Levels": 9,
        "Effect": "Increase tolerance against element-based magic attacks by 28%"
      },
      {
        "Levels": 10,
        "Effect": "Increase tolerance against element-based magic attacks by 30%"
      },
      {
        "Levels": 11,
        "Effect": "Increase tolerance against element-based magic attacks by 32%"
      },
      {
        "Levels": 12,
        "Effect": "Increase tolerance against element-based magic attacks by 34%"
      },
      {
        "Levels": 13,
        "Effect": "Increase tolerance against element-based magic attacks by 36%"
      },
      {
        "Levels": 14,
        "Effect": "Increase tolerance against element-based magic attacks by 38%"
      },
      {
        "Levels": 15,
        "Effect": "Increase tolerance against element-based magic attacks by 40%"
      },
      {
        "Levels": 16,
        "Effect": "Increase tolerance against element-based magic attacks by 42%"
      },
      {
        "Levels": 17,
        "Effect": "Increase tolerance against element-based magic attacks by 44%"
      },
      {
        "Levels": 18,
        "Effect": "Increase tolerance against element-based magic attacks by 46%"
      },
      {
        "Levels": 19,
        "Effect": "Increase tolerance against element-based magic attacks by 48%"
      },
      {
        "Levels": 20,
        "Effect": "Increase tolerance against element-based magic attacks by 50%"
      }
    ],
    "Type": "Passive"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Dispel",
      "src": dispel
    },
    "Skill Name": "Dispel",
    "Master Level": 20,
    "Description": "Nullifies all monsters' Magic effects within the targeted area while healing all abnormal conditions suffered by all surrounding party members.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -15; Dispel area range 110%, success rate 34%"
      },
      {
        "Levels": 2,
        "Effect": "MP -15; Dispel area range 120%, success rate 38%"
      },
      {
        "Levels": 3,
        "Effect": "MP -15; Dispel area range 130%, success rate 42%"
      },
      {
        "Levels": 4,
        "Effect": "MP -15; Dispel area range 140%, success rate 46%"
      },
      {
        "Levels": 5,
        "Effect": "MP -15; Dispel area range 150%, success rate 50%"
      },
      {
        "Levels": 6,
        "Effect": "MP -15; Dispel area range 160%, success rate 54%"
      },
      {
        "Levels": 7,
        "Effect": "MP -15; Dispel area range 170%, success rate 58%"
      },
      {
        "Levels": 8,
        "Effect": "MP -15; Dispel area range 180%, success rate 62%"
      },
      {
        "Levels": 9,
        "Effect": "MP -15; Dispel area range 190%, success rate 66%"
      },
      {
        "Levels": 10,
        "Effect": "MP -15; Dispel area range 200%, success rate 70%"
      },
      {
        "Levels": 11,
        "Effect": "MP -20; Dispel area range 210%, success rate 73%"
      },
      {
        "Levels": 12,
        "Effect": "MP -20; Dispel area range 220%, success rate 76%"
      },
      {
        "Levels": 13,
        "Effect": "MP -20; Dispel area range 230%, success rate 79%"
      },
      {
        "Levels": 14,
        "Effect": "MP -20; Dispel area range 240%, success rate 82%"
      },
      {
        "Levels": 15,
        "Effect": "MP -20; Dispel area range 250%, success rate 85%"
      },
      {
        "Levels": 16,
        "Effect": "MP -20; Dispel area range 260%, success rate 88%"
      },
      {
        "Levels": 17,
        "Effect": "MP -20; Dispel area range 270%, success rate 91%"
      },
      {
        "Levels": 18,
        "Effect": "MP -20; Dispel area range 280%, success rate 94%"
      },
      {
        "Levels": 19,
        "Effect": "MP -20; Dispel area range 290%, success rate 97%"
      },
      {
        "Levels": 20,
        "Effect": "MP -20; Dispel area range 300%, success rate 100%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Mystic Door",
      "src": mysticDoor
    },
    "Skill Name": "Mystic Door",
    "Master Level": 20,
    "Description": "Creates a portal that heads to the nearest town. All members of the party can use it multiple times until the portal disappears.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -80; Use 1 Magic Rock; Portal works for 30 seconds"
      },
      {
        "Levels": 2,
        "Effect": "MP -77; Use 1 Magic Rock; Portal works for 40 seconds"
      },
      {
        "Levels": 3,
        "Effect": "MP -74; Use 1 Magic Rock; Portal works for 50 seconds"
      },
      {
        "Levels": 4,
        "Effect": "MP -71; Use 1 Magic Rock; Portal works for 60 seconds"
      },
      {
        "Levels": 5,
        "Effect": "MP -68; Use 1 Magic Rock; Portal works for 70 seconds"
      },
      {
        "Levels": 6,
        "Effect": "MP -65; Use 1 Magic Rock; Portal works for 80 seconds"
      },
      {
        "Levels": 7,
        "Effect": "MP -62; Use 1 Magic Rock; Portal works for 90 seconds"
      },
      {
        "Levels": 8,
        "Effect": "MP -59; Use 1 Magic Rock; Portal works for 100 seconds"
      },
      {
        "Levels": 9,
        "Effect": "MP -56; Use 1 Magic Rock; Portal works for 110 seconds"
      },
      {
        "Levels": 10,
        "Effect": "MP -53; Use 1 Magic Rock; Portal works for 120 seconds"
      },
      {
        "Levels": 11,
        "Effect": "MP -51; Use 1 Magic Rock; Portal works for 126 seconds"
      },
      {
        "Levels": 12,
        "Effect": "MP -49; Use 1 Magic Rock; Portal works for 132 seconds"
      },
      {
        "Levels": 13,
        "Effect": "MP -47; Use 1 Magic Rock; Portal works for 138 seconds"
      },
      {
        "Levels": 14,
        "Effect": "MP -45; Use 1 Magic Rock; Portal works for 144 seconds"
      },
      {
        "Levels": 15,
        "Effect": "MP -43; Use 1 Magic Rock; Portal works for 150 seconds"
      },
      {
        "Levels": 16,
        "Effect": "MP -41; Use 1 Magic Rock; Portal works for 156 seconds"
      },
      {
        "Levels": 17,
        "Effect": "MP -39; Use 1 Magic Rock; Portal works for 162 seconds"
      },
      {
        "Levels": 18,
        "Effect": "MP -37; Use 1 Magic Rock; Portal works for 168 seconds"
      },
      {
        "Levels": 19,
        "Effect": "MP -35; Use 1 Magic Rock; Portal works for 174 seconds"
      },
      {
        "Levels": 20,
        "Effect": "MP -33; Use 1 Magic Rock; Portal works for 180 seconds"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Holy Symbol",
      "src": holySymbol
    },
    "Skill Name": "Holy Symbol",
    "Master Level": 30,
    "Description": "Temporarily allows all members of the party nearby to gain additional EXP while hunting. When there are less than two party members eligible for gaining EXP, the experience bonus gets reduced to a fifth of the stated amount.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -51; For 33 seconds, all members of the party gain 102% EXP"
      },
      {
        "Levels": 2,
        "Effect": "MP -52; For 36 seconds, all members of the party gain 104% EXP"
      },
      {
        "Levels": 3,
        "Effect": "MP -53; For 39 seconds, all members of the party gain 106% EXP"
      },
      {
        "Levels": 4,
        "Effect": "MP -54; For 42 seconds, all members of the party gain 108% EXP"
      },
      {
        "Levels": 5,
        "Effect": "MP -55; For 45 seconds, all members of the party gain 110% EXP"
      },
      {
        "Levels": 6,
        "Effect": "MP -56; For 48 seconds, all members of the party gain 112% EXP"
      },
      {
        "Levels": 7,
        "Effect": "MP -57; For 51 seconds, all members of the party gain 114% EXP"
      },
      {
        "Levels": 8,
        "Effect": "MP -58; For 54 seconds, all members of the party gain 116% EXP"
      },
      {
        "Levels": 9,
        "Effect": "MP -59; For 57 seconds, all members of the party gain 118% EXP"
      },
      {
        "Levels": 10,
        "Effect": "MP -60; For 60 seconds, all members of the party gain 120% EXP"
      },
      {
        "Levels": 11,
        "Effect": "MP -61; For 63 seconds, all members of the party gain 122% EXP"
      },
      {
        "Levels": 12,
        "Effect": "MP -62; For 66 seconds, all members of the party gain 124% EXP"
      },
      {
        "Levels": 13,
        "Effect": "MP -63; For 69 seconds, all members of the party gain 126% EXP"
      },
      {
        "Levels": 14,
        "Effect": "MP -64; For 72 seconds, all members of the party gain 128% EXP"
      },
      {
        "Levels": 15,
        "Effect": "MP -65; For 75 seconds, all members of the party gain 130% EXP"
      },
      {
        "Levels": 16,
        "Effect": "MP -66; For 78 seconds, all members of the party gain 132% EXP"
      },
      {
        "Levels": 17,
        "Effect": "MP -67; For 81 seconds, all members of the party gain 134% EXP"
      },
      {
        "Levels": 18,
        "Effect": "MP -68; For 84 seconds, all members of the party gain 136% EXP"
      },
      {
        "Levels": 19,
        "Effect": "MP -69; For 87 seconds, all members of the party gain 138% EXP"
      },
      {
        "Levels": 20,
        "Effect": "MP -70; For 90 seconds, all members of the party gain 140% EXP"
      },
      {
        "Levels": 21,
        "Effect": "MP -71; For 93 seconds, all members of the party gain 141% EXP"
      },
      {
        "Levels": 22,
        "Effect": "MP -72; For 96 seconds, all members of the party gain 142% EXP"
      },
      {
        "Levels": 23,
        "Effect": "MP -73; For 99 seconds, all members of the party gain 143% EXP"
      },
      {
        "Levels": 24,
        "Effect": "MP -74; For 102 seconds, all members of the party gain 144% EXP"
      },
      {
        "Levels": 25,
        "Effect": "MP -75; For 105 seconds, all members of the party gain 145% EXP"
      },
      {
        "Levels": 26,
        "Effect": "MP -76; For 108 seconds, all members of the party gain 146% EXP"
      },
      {
        "Levels": 27,
        "Effect": "MP -77; For 111 seconds, all members of the party gain 147% EXP"
      },
      {
        "Levels": 28,
        "Effect": "MP -78; For 114 seconds, all members of the party gain 148% EXP"
      },
      {
        "Levels": 29,
        "Effect": "MP -79; For 117 seconds, all members of the party gain 149% EXP"
      },
      {
        "Levels": 30,
        "Effect": "MP -80; For 120 seconds, all members of the party gain 150% EXP"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Shining Ray",
      "src": shiningRay
    },
    "Skill Name": "Shining Ray",
    "Master Level": 30,
    "Description": "Attacks multiple enemies at once with the ray of holy light. Applies massive damage to the undead + devil-based monsters.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -21; Spell attack 60, mastery 15%, attack range 150%"
      },
      {
        "Levels": 2,
        "Effect": "MP -22; Spell attack 62, mastery 15%, attack range 150%"
      },
      {
        "Levels": 3,
        "Effect": "MP -23; Spell attack 64, mastery 15%, attack range 150%"
      },
      {
        "Levels": 4,
        "Effect": "MP -24; Spell attack 66, mastery 20%, attack range 150%"
      },
      {
        "Levels": 5,
        "Effect": "MP -25; Spell attack 68, mastery 20%, attack range 150%"
      },
      {
        "Levels": 6,
        "Effect": "MP -26; Spell attack 70, mastery 20%, attack range 150%"
      },
      {
        "Levels": 7,
        "Effect": "MP -27; Spell attack 72, mastery 25%, attack range 150%"
      },
      {
        "Levels": 8,
        "Effect": "MP -28; Spell attack 74, mastery 25%, attack range 150%"
      },
      {
        "Levels": 9,
        "Effect": "MP -29; Spell attack 76, mastery 25%, attack range 150%"
      },
      {
        "Levels": 10,
        "Effect": "MP -30; Spell attack 78, mastery 30%, attack range 150%"
      },
      {
        "Levels": 11,
        "Effect": "MP -31; Spell attack 80, mastery 30%, attack range 160%"
      },
      {
        "Levels": 12,
        "Effect": "MP -32; Spell attack 82, mastery 30%, attack range 160%"
      },
      {
        "Levels": 13,
        "Effect": "MP -33; Spell attack 84, mastery 35%, attack range 160%"
      },
      {
        "Levels": 14,
        "Effect": "MP -34; Spell attack 86, mastery 35%, attack range 160%"
      },
      {
        "Levels": 15,
        "Effect": "MP -35; Spell attack 88, mastery 35%, attack range 160%"
      },
      {
        "Levels": 16,
        "Effect": "MP -36; Spell attack 90, mastery 40%, attack range 160%"
      },
      {
        "Levels": 17,
        "Effect": "MP -37; Spell attack 92, mastery 40%, attack range 160%"
      },
      {
        "Levels": 18,
        "Effect": "MP -38; Spell attack 93, mastery 40%, attack range 160%"
      },
      {
        "Levels": 19,
        "Effect": "MP -39; Spell attack 94, mastery 45%, attack range 160%"
      },
      {
        "Levels": 20,
        "Effect": "MP -40; Spell attack 95, mastery 45%, attack range 160%"
      },
      {
        "Levels": 21,
        "Effect": "MP -41; Spell attack 96, mastery 45%, attack range 170%"
      },
      {
        "Levels": 22,
        "Effect": "MP -42; Spell attack 97, mastery 50%, attack range 170%"
      },
      {
        "Levels": 23,
        "Effect": "MP -43; Spell attack 98, mastery 50%, attack range 170%"
      },
      {
        "Levels": 24,
        "Effect": "MP -44; Spell attack 99, mastery 50%, attack range 170%"
      },
      {
        "Levels": 25,
        "Effect": "MP -45; Spell attack 100, mastery 55%, attack range 170%"
      },
      {
        "Levels": 26,
        "Effect": "MP -46; Spell attack 101, mastery 55%, attack range 170%"
      },
      {
        "Levels": 27,
        "Effect": "MP -47; Spell attack 102, mastery 55%, attack range 170%"
      },
      {
        "Levels": 28,
        "Effect": "MP -48; Spell attack 103, mastery 60%, attack range 170%"
      },
      {
        "Levels": 29,
        "Effect": "MP -49; Spell attack 104, mastery 60%, attack range 170%"
      },
      {
        "Levels": 30,
        "Effect": "MP -50; Spell attack 105, mastery 60%, attack range 170%"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Doom",
      "src": doom
    },
    "Skill Name": "Doom",
    "Master Level": 30,
    "Description": "Turns up to 6 monsters into snails. Changes the look, the attacking capacity, and the speed of movement. Cannot be used against boss-level monsters.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -88; Use 1 Magic Rock; Changes for 5 seconds, with 52% success rate"
      },
      {
        "Levels": 2,
        "Effect": "MP -86; Use 1 Magic Rock; Changes for 6 seconds, with 54% success rate"
      },
      {
        "Levels": 3,
        "Effect": "MP -84; Use 1 Magic Rock; Changes for 6 seconds, with 56% success rate"
      },
      {
        "Levels": 4,
        "Effect": "MP -82; Use 1 Magic Rock; Changes for 7 seconds, with 58% success rate"
      },
      {
        "Levels": 5,
        "Effect": "MP -80; Use 1 Magic Rock; Changes for 7 seconds, with 60% success rate"
      },
      {
        "Levels": 6,
        "Effect": "MP -78; Use 1 Magic Rock; Changes for 8 seconds, with 62% success rate"
      },
      {
        "Levels": 7,
        "Effect": "MP -76; Use 1 Magic Rock; Changes for 8 seconds, with 64% success rate"
      },
      {
        "Levels": 8,
        "Effect": "MP -74; Use 1 Magic Rock; Changes for 9 seconds, with 66% success rate"
      },
      {
        "Levels": 9,
        "Effect": "MP -72; Use 1 Magic Rock; Changes for 9 seconds, with 68% success rate"
      },
      {
        "Levels": 10,
        "Effect": "MP -70; Use 1 Magic Rock; Changes for 10 seconds, with 70% success rate"
      },
      {
        "Levels": 11,
        "Effect": "MP -68; Use 1 Magic Rock; Changes for 10 seconds, with 71% success rate"
      },
      {
        "Levels": 12,
        "Effect": "MP -66; Use 1 Magic Rock; Changes for 11 seconds, with 72% success rate"
      },
      {
        "Levels": 13,
        "Effect": "MP -64; Use 1 Magic Rock; Changes for 11 seconds, with 73% success rate"
      },
      {
        "Levels": 14,
        "Effect": "MP -62; Use 1 Magic Rock; Changes for 12 seconds, with 74% success rate"
      },
      {
        "Levels": 15,
        "Effect": "MP -60; Use 1 Magic Rock; Changes for 12 seconds, with 75% success rate"
      },
      {
        "Levels": 16,
        "Effect": "MP -58; Use 1 Magic Rock; Changes for 13 seconds, with 76% success rate"
      },
      {
        "Levels": 17,
        "Effect": "MP -56; Use 1 Magic Rock; Changes for 13 seconds, with 77% success rate"
      },
      {
        "Levels": 18,
        "Effect": "MP -54; Use 1 Magic Rock; Changes for 14 seconds, with 78% success rate"
      },
      {
        "Levels": 19,
        "Effect": "MP -52; Use 1 Magic Rock; Changes for 14 seconds, with 79% success rate"
      },
      {
        "Levels": 20,
        "Effect": "MP -50; Use 1 Magic Rock; Changes for 15 seconds, with 80% success rate"
      },
      {
        "Levels": 21,
        "Effect": "MP -48; Use 1 Magic Rock; Changes for 15 seconds, with 81% success rate"
      },
      {
        "Levels": 22,
        "Effect": "MP -46; Use 1 Magic Rock; Changes for 16 seconds, with 82% success rate"
      },
      {
        "Levels": 23,
        "Effect": "MP -44; Use 1 Magic Rock; Changes for 16 seconds, with 83% success rate"
      },
      {
        "Levels": 24,
        "Effect": "MP -42; Use 1 Magic Rock; Changes for 17 seconds, with 84% success rate"
      },
      {
        "Levels": 25,
        "Effect": "MP -40; Use 1 Magic Rock; Changes for 17 seconds, with 85% success rate"
      },
      {
        "Levels": 26,
        "Effect": "MP -38; Use 1 Magic Rock; Changes for 18 seconds, with 86% success rate"
      },
      {
        "Levels": 27,
        "Effect": "MP -36; Use 1 Magic Rock; Changes for 18 seconds, with 87% success rate"
      },
      {
        "Levels": 28,
        "Effect": "MP -34; Use 1 Magic Rock; Changes for 19 seconds, with 88% success rate"
      },
      {
        "Levels": 29,
        "Effect": "MP -32; Use 1 Magic Rock; Changes for 19 seconds, with 89% success rate"
      },
      {
        "Levels": 30,
        "Effect": "MP -30; Use 1 Magic Rock; Changes for 20 seconds, with 90% success rate"
      }
    ],
    "Type": "Active"
  },
  {
    "Icon": {
      "type": "image",
      "alt": "Summon Dragon",
      "src": summonDragon
    },
    "Skill Name": "Summon Dragon",
    "Master Level": 30,
    "Description": "Summons a holy dragon for a certain amount of time. The dragon will stay beside you and attack the enemies in the process. The higher the skill level, the stronger the summoned dragon is.",
    "Levels": [
      {
        "Levels": 1,
        "Effect": "MP -32; Use 1 Summoning Rock; For 10 seconds, summon the dragon with 64% attack"
      },
      {
        "Levels": 2,
        "Effect": "MP -34; Use 1 Summoning Rock; For 15 seconds, summon the dragon with 68% attack"
      },
      {
        "Levels": 3,
        "Effect": "MP -36; Use 1 Summoning Rock; For 20 seconds, summon the dragon with 72% attack"
      },
      {
        "Levels": 4,
        "Effect": "MP -38; Use 1 Summoning Rock; For 25 seconds, summon the dragon with 76% attack"
      },
      {
        "Levels": 5,
        "Effect": "MP -40; Use 1 Summoning Rock; For 30 seconds, summon the dragon with 80% attack"
      },
      {
        "Levels": 6,
        "Effect": "MP -42; Use 1 Summoning Rock; For 35 seconds, summon the dragon with 84% attack"
      },
      {
        "Levels": 7,
        "Effect": "MP -44; Use 1 Summoning Rock; For 40 seconds, summon the dragon with 88% attack"
      },
      {
        "Levels": 8,
        "Effect": "MP -46; Use 1 Summoning Rock; For 45 seconds, summon the dragon with 92% attack"
      },
      {
        "Levels": 9,
        "Effect": "MP -48; Use 1 Summoning Rock; For 50 seconds, summon the dragon with 96% attack"
      },
      {
        "Levels": 10,
        "Effect": "MP -50; Use 1 Summoning Rock; For 55 seconds, summon the dragon with 100% attack"
      },
      {
        "Levels": 11,
        "Effect": "MP -52; Use 1 Summoning Rock; For 60 seconds, summon the dragon with 104% attack"
      },
      {
        "Levels": 12,
        "Effect": "MP -54; Use 1 Summoning Rock; For 65 seconds, summon the dragon with 108% attack"
      },
      {
        "Levels": 13,
        "Effect": "MP -56; Use 1 Summoning Rock; For 70 seconds, summon the dragon with 112% attack"
      },
      {
        "Levels": 14,
        "Effect": "MP -58; Use 1 Summoning Rock; For 75 seconds, summon the dragon with 116% attack"
      },
      {
        "Levels": 15,
        "Effect": "MP -60; Use 1 Summoning Rock; For 80 seconds, summon the dragon with 120% attack"
      },
      {
        "Levels": 16,
        "Effect": "MP -62; Use 1 Summoning Rock; For 84 seconds, summon the dragon with 122% attack"
      },
      {
        "Levels": 17,
        "Effect": "MP -64; Use 1 Summoning Rock; For 88 seconds, summon the dragon with 124% attack"
      },
      {
        "Levels": 18,
        "Effect": "MP -66; Use 1 Summoning Rock; For 92 seconds, summon the dragon with 126% attack"
      },
      {
        "Levels": 19,
        "Effect": "MP -68; Use 1 Summoning Rock; For 96 seconds, summon the dragon with 128% attack"
      },
      {
        "Levels": 20,
        "Effect": "MP -70; Use 1 Summoning Rock; For 100 seconds, summon the dragon with 130% attack"
      },
      {
        "Levels": 21,
        "Effect": "MP -71; Use 1 Summoning Rock; For 104 seconds, summon the dragon with 132% attack"
      },
      {
        "Levels": 22,
        "Effect": "MP -72; Use 1 Summoning Rock; For 108 seconds, summon the dragon with 134% attack"
      },
      {
        "Levels": 23,
        "Effect": "MP -73; Use 1 Summoning Rock; For 112 seconds, summon the dragon with 136% attack"
      },
      {
        "Levels": 24,
        "Effect": "MP -74; Use 1 Summoning Rock; For 116 seconds, summon the dragon with 138% attack"
      },
      {
        "Levels": 25,
        "Effect": "MP -75; Use 1 Summoning Rock; For 120 seconds, summon the dragon with 140% attack"
      },
      {
        "Levels": 26,
        "Effect": "MP -76; Use 1 Summoning Rock; For 124 seconds, summon the dragon with 142% attack"
      },
      {
        "Levels": 27,
        "Effect": "MP -77; Use 1 Summoning Rock; For 128 seconds, summon the dragon with 144% attack"
      },
      {
        "Levels": 28,
        "Effect": "MP -78; Use 1 Summoning Rock; For 132 seconds, summon the dragon with 146% attack"
      },
      {
        "Levels": 29,
        "Effect": "MP -79; Use 1 Summoning Rock; For 136 seconds, summon the dragon with 148% attack"
      },
      {
        "Levels": 30,
        "Effect": "MP -80; Use 1 Summoning Rock; For 140 seconds, summon the dragon with 150% attack"
      }
    ],
    "Type": "Active"
  }
];
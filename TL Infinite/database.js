const Embers = [
  {
    Name: "Vigor",
    Affixes: [
      {
        Affix_Name: "Mana restored on hit",
        mod_weight: 0.009,
        Tiers: [
          {
            Tier: 1,
            required_item_level: 85,
            tier_weight: 0.017,
            mod_description: "T1 (8-10) mana restored on hit",
          },
          {
            Tier: 2,
            required_item_level: 80,
            tier_weight: 0.0513,
            mod_description: "T2 (6-7) mana restored on hit",
          },
          {
            Tier: 3,
            required_item_level: 75,
            tier_weight: 0.1539,
            mod_description: "T3 (3-5) mana restored on hit",
          },
          {
            Tier: 4,
            required_item_level: 70,
            tier_weight: 0.7778,
            mod_description: "T4 (1-2) mana restored on hit",
          },
        ],
        Tags: ["Claw", "Dagger"],
      },
      {
        Affix_Name: "Life regain",
        mod_weight: 0.002,
        Tiers: [
          {
            Tier: 1,
            required_item_level: 85,
            tier_weight: 0.0768,
            mod_description: "T1 +(7-8)% life regain",
          },
          {
            Tier: 2,
            required_item_level: 80,
            tier_weight: 0.2307,
            mod_description: "T2 +(5-6)% life regain",
          },
          {
            Tier: 3,
            required_item_level: 75,
            tier_weight: 0.6925,
            mod_description: "T3 +4% life regain",
          },
        ],
        Tags: [
          "Claw",
          "Axe",
          "Dagger",
          "Greataxe",
          "Crossbow",
          "STR Gloves",
          "DEX Gloves",
          "INT Gloves",
        ],
      },
      {
        Affix_Name: "Maximum Mana",
        mod_weight: 0.0105,
        Tiers: [
          {
            Tier: 1,
            required_item_level: 85,
            tier_weight: 0.0256,
            mod_description: "T1 +(185-240) maximum mana",
          },
          {
            Tier: 2,
            required_item_level: 80,
            tier_weight: 0.0769,
            mod_description: "T2 +(143-184) maximum mana",
          },
          {
            Tier: 3,
            required_item_level: 75,
            tier_weight: 0.2308,
            mod_description: "T3 +(110-142) maximum mana",
          },
          {
            Tier: 4,
            required_item_level: 70,
            tier_weight: 0.1111,
            mod_description: "T4 +(92-109 maximum mana",
          },
          {
            Tier: 5,
            required_item_level: 65,
            tier_weight: 0.1111,
            mod_description: "T5 +(76-91) maximum mana",
          },
          {
            Tier: 6,
            required_item_level: 60,
            tier_weight: 0.1111,
            mod_description: "T6 +(64-75) maximum mana",
          },
          {
            Tier: 7,
            required_item_level: 50,
            tier_weight: 0.1111,
            mod_description: "T7 +(53-63) maximum mana",
          },
          {
            Tier: 8,
            required_item_level: 40,
            tier_weight: 0.1111,
            mod_description: "T8 +(44-52) maximum mana",
          },
          {
            Tier: 9,
            required_item_level: 30,
            tier_weight: 0.1112,
            mod_description: "T9 +(34-43) maximum mana",
          },
        ],
        Tags: [
          "Wand",
          "Sacrificial Blade",
          "Tin Staff",
          "INT Gloves",
          "INT Boots",
          "INT Chest Armor",
          "INT Helmet",
          "INT Shield",
          "Necklace",
          "Ring",
          "Belt",
        ],
      } /* ,
      {
        Affix_Name: "Mana regeneration",
      } */ /* ,
        {
            Affix_Name: "",
            mod_weight: ,
            Tiers: [
                {
                    Tier: ,
                    required_item_level: ,
                    tier_weight: ,
                    mod_description: ""
                },
            ],
            Tags: ["",]
        } */,
    ],
  },
  {
    Name: "Rivalry",
  },
  {
    Name: "Essence",
  },
  {
    Name: "Tenacity",
  },
  {
    Name: "Cultivation",
  },
  {
    Name: "Soulburst",
  },
  {
    Name: "Ruling",
  },
  {
    Name: "Technique",
  },
  {
    Name: "Ominous",
  },
  {
    Name: "Restless",
  },
  {
    Name: "Reincarnation",
  },
  {
    Name: "Truth",
  },
];

let testValues = [
  {
    value: "aaa",
    probability: 0.1,
  },
  {
    value: "bbb",
    probability: 0.3,
  },
  {
    value: "ccc",
    probability: "*",
  },
];

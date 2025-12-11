import { NextRequest, NextResponse } from "next/server";
/*
RESTful verbs as methods
GET
POST
PUT
PATCH
DELETE
 */

// Request
export function GET(request: NextRequest) {
    return NextResponse.json({
        heroes: [
            {
                "name": "Chhatrapati Shivaji Maharaj",
                "era": "1630",
                "region": "Maharashtra",
                "known_for": [
                    "Founder of the Maratha Empire",
                    "Guerrilla warfare",
                    "Fort strategy"
                ],
                "weapons": [
                    "Talwar",
                    "Dandpatta",
                    "Tiger claws"
                ],
                "photo": ""
            },
            {
                "name": "Rani Lakshmibai",
                "era": "1828",
                "region": "Jhansi",
                "known_for": [
                    "Revolt of 1857",
                    "Fearless combat"
                ],
                "weapons": [
                    "Sword",
                    "Shield"
                ],
                "photo": ""
            },
            {
                "name": "Onake Obavva",
                "era": "18th century",
                "region": "Chitradurga, Karnataka",
                "known_for": [
                    "Single-handed bravery against Hyder Ali\u2019s soldiers"
                ],
                "weapons": [
                    "Onake (grinding pestle)"
                ],
                "photo": ""
            },
            {
                "name": "Velu Nachiyar",
                "era": "1730",
                "region": "Tamil Nadu",
                "known_for": [
                    "First Indian queen to fight against the British",
                    "Early freedom struggle"
                ],
                "weapons": [
                    "Sword",
                    "Military strategy"
                ],
                "photo": ""
            },
            {
                "name": "Rani Abbakka Chowta",
                "era": "16th century",
                "region": "Ullal, Karnataka",
                "known_for": [
                    "First Tuluva queen to fight the Portuguese",
                    "Guerilla naval warfare"
                ],
                "weapons": [
                    "Swords",
                    "Spears"
                ],
                "photo": ""
            },
            {
                "name": "Kittur Rani Chennamma",
                "era": "1778",
                "region": "Karnataka",
                "known_for": [
                    "First queen to fight British rule"
                ],
                "weapons": [
                    "Sword",
                    "Dagger"
                ],
                "photo": ""
            },
            {
                "name": "Kanhoji Angre",
                "era": "1698",
                "region": "Konkan Coast",
                "known_for": [
                    "Indian naval commander",
                    "Fearless sea battles"
                ],
                "weapons": [
                    "Naval cannons",
                    "Swords"
                ],
                "photo": ""
            },
            {
                "name": "Pazhassi Raja",
                "era": "1753",
                "region": "Kerala",
                "known_for": [
                    "Lion of Kerala",
                    "Revolt against British"
                ],
                "weapons": [
                    "Swords",
                    "Bow and arrow"
                ],
                "photo": ""
            },
            {
                "name": "Thiruppur Kumaran",
                "era": "1904",
                "region": "Tamil Nadu",
                "known_for": [
                    "Freedom struggle",
                    "Flag martyr"
                ],
                "weapons": [
                    "Unarmed bravery"
                ],
                "photo": ""
            },
            {
                "name": "Jhalkari Bai",
                "era": "19th century",
                "region": "North India",
                "known_for": [
                    "Disguised as Rani Lakshmibai to confuse British forces"
                ],
                "weapons": [
                    "Sword",
                    "Shield"
                ],
                "photo": ""
            },
            {
                "name": "U Kiang Nangbah",
                "era": "1820",
                "region": "Meghalaya",
                "known_for": [
                    "Leader of Khasi resistance against British"
                ],
                "weapons": [
                    "Spears",
                    "Traditional blades"
                ],
                "photo": ""
            },
            {
                "name": "Maharana Pratap",
                "era": "1540",
                "region": "Rajasthan",
                "known_for": [
                    "Battle of Haldighati"
                ],
                "weapons": [
                    "Spear",
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Tantia Tope",
                "era": "1814",
                "region": "India",
                "known_for": [
                    "Revolt of 1857"
                ],
                "weapons": [
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Rajendra Chola I",
                "era": "1012",
                "region": "Tamil Nadu",
                "known_for": [
                    "Chola naval empire"
                ],
                "weapons": [
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Bajirao I",
                "era": "1700",
                "kingdom": "Maratha Empire",
                "known_for": [
                    "Unbeaten warrior",
                    "Cavalry tactics",
                    "Maratha expansion"
                ],
                "weapons": [
                    "Spear",
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Veerapandiya Kattabomman",
                "era": "1760",
                "kingdom": "Panchalankurichi",
                "known_for": [
                    "Early British resistance"
                ],
                "weapons": [
                    "Spear",
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Prithviraj Chauhan",
                "era": "1149",
                "kingdom": "Ajmer & Delhi",
                "known_for": [
                    "Battle of Tarain",
                    "Master archer"
                ],
                "weapons": [
                    "Bow",
                    "Sword"
                ],
                "photo": ""
            },
            {
                "name": "Guru Gobind Singh Ji",
                "era": "1666",
                "kingdom": "Sikh Empire",
                "known_for": [
                    "Khalsa founder",
                    "Warrior saint"
                ],
                "weapons": [
                    "Swords",
                    "Daggers"
                ],
                "photo": ""
            },
            {
                "name": "Harihara I & Bukka Raya I",
                "era": "1336",
                "kingdom": "Vijayanagara Empire",
                "known_for": [
                    "Founders of Vijayanagara"
                ],
                "weapons": [
                    "Swords"
                ],
                "photo": ""
            },
            {
                "name": "Lachit Borphukan",
                "era": "1622",
                "kingdom": "Ahom Kingdom",
                "known_for": [
                    "Battle of Saraighat",
                    "Assamese pride"
                ],
                "weapons": [
                    "Sword",
                    "Dagger"
                ],
                "photo": ""
            }
        ]
    }, {
        status: 201,
    });
}
import {Address} from "cluster";

export type GovernmentBuildingType = {
    type: string,
    budget: number,
    staffCount: number,
    address: AddressType
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number,
    street: StreetType
}

export type HouseType = {
    buildedAt: number,
    repaired: false,
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: GovernmentBuildingType[],
    citizensNumber: number
}

const student = {
    id: 1,
    name: "Daniil",
    age: 25,
    isActive: false,
    address: {
        streetTitle: "Zvezdnaya 23",
        city: {
            title: "Astrakhan",
            countryTitle: "Russia",
            houses: []
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
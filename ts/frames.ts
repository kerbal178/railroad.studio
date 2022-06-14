
interface FrameType {
    firewood?: number,
    headlights?: number,
    length: number,
    sandLevelMax?: number,
    smokestacks?: number,
    waterBoilerMax?: number,
    waterTankMax?: number,
    nameLimits?: TextLimit[],
    numberLimits?: TextLimit[] | null, // null=no number displayed
}

export interface TextLimit {
    name: string;
    rows: number;
    cols: number;
}

const ingameNumberLimit: TextLimit = {name: 'In-Game limit', rows: 1, cols: 4};

const frameTypeBoxcar: FrameType = {
    length: 822.82,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 15}, {name: 'Reasonable', rows: 4, cols: 12}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeCaboose: FrameType = {
    firewood: 15,
    length: 679.00,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 21}, {name: 'Reasonable', rows: 1, cols: 25}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeClass70: FrameType = {
    firewood: 1350,
    headlights: 2,
    length: 938.90,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 3}],
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 6000,
};

const frameTypeClass70Tender: FrameType = {
    length: 678.81,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 22}, {name: 'Reasonable', rows: 2, cols: 22}],
    numberLimits: null, // no number displayed
    waterTankMax: 9500,
};

const frameTypeClimax: FrameType = {
    firewood: 332,
    headlights: 1,
    length: 849.89,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 11}, {name: 'Reasonable', rows: 6, cols: 11}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 4000,
    waterTankMax: 3000,
};

const frameTypeCooke260: FrameType = {
    headlights: 2,
    length: 837.83,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 16}, {name: 'Reasonable', rows: 1, cols: 12}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 3,
    waterBoilerMax: 5000,
};

const frameTypeCooke260Tender: FrameType = {
    firewood: 1460,
    headlights: 2,
    length: 641.73,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 22}, {name: 'Reasonable', rows: 1, cols: 20}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 8}],
    waterTankMax: 9500,
};

const frameTypeEureka: FrameType = {
    headlights: 3,
    length: 802.13,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 5000,
};

const frameTypeEurekaTender: FrameType = {
    firewood: 499,
    length: 497.08,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 22}],
    numberLimits: null, // no number displayed
    waterTankMax: 3800,
};

const frameTypeFlatcarCordwood: FrameType = {
    length: 785.60,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeFlatcarHopper: FrameType = {
    length: 785.60,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 8}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeFlatcarLogs: FrameType = {
    length: 785.60,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeFlatcarStakes: FrameType = {
    length: 785.60,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeFlatcarTanker: FrameType = {
    length: 785.60,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 12}, {name: 'Reasonable', rows: 1, cols: 20}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeHandcar: FrameType = {
    length: 220.20,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}, {name: 'Reasonable', rows: 1, cols: 15}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 6}],
};

const frameTypeHeisler: FrameType = {
    firewood: 454,
    headlights: 1,
    length: 913.73,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 11}, {name: 'Reasonable', rows: 3, cols: 12}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 2,
    waterBoilerMax: 5000,
    waterTankMax: 3000,
};

const frameTypePorter040: FrameType = {
    firewood: 66,
    headlights: 2,
    length: 391.20,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 500,
    waterTankMax: 800,
};

const frameTypePorter042: FrameType = {
    firewood: 164,
    headlights: 2,
    length: 461.35,
    nameLimits: [{name: 'In-Game limit', rows: 1, cols: 10}],
    numberLimits: [ingameNumberLimit, {name: 'Reasonable', rows: 1, cols: 2}],
    sandLevelMax: 100,
    smokestacks: 1,
    waterBoilerMax: 500,
    waterTankMax: 800,
};

export const frameLimits: { [key: string]: FrameType } = {
    boxcar: frameTypeBoxcar,
    caboose: frameTypeCaboose,
    class70: frameTypeClass70,
    class70_tender: frameTypeClass70Tender,
    climax: frameTypeClimax,
    cooke260: frameTypeCooke260,
    cooke260_tender: frameTypeCooke260Tender,
    eureka: frameTypeEureka,
    eureka_tender: frameTypeEurekaTender,
    flatcar_cordwood: frameTypeFlatcarCordwood,
    flatcar_hopper: frameTypeFlatcarHopper,
    flatcar_logs: frameTypeFlatcarLogs,
    flatcar_stakes: frameTypeFlatcarStakes,
    flatcar_tanker: frameTypeFlatcarTanker,
    handcar: frameTypeHandcar,
    heisler: frameTypeHeisler,
    porter_040: frameTypePorter040,
    porter_042: frameTypePorter042,
};

export const cargoLimits: { [key: string]: { [key: string]: number } } = {
    boxcar: {
        crate_tools: 32,
    },
    flatcar_cordwood: {
        cordwood: 8,
        oilbarrel: 46,
    },
    flatcar_hopper: {
        coal: 10,
        ironore: 10,
    },
    flatcar_logs: {
        log: 6,
        steelpipe: 9,
    },
    flatcar_stakes: {
        beam: 3,
        lumber: 6,
        rail: 10,
        rawiron: 3,
    },
    flatcar_tanker: {
        crudeoil: 12,
    },
};

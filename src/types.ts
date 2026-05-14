export interface PointercrateDemon {
    id: number;
    level_id: number;
    name: string;
    position: number;
    publisher: {
        id: number;
        name: string;
        banned: boolean;
    };
    requirement: number;
    verifier: {
        id: number;
        name: string;
        banned: boolean;
    };
    video: string | null;
}

export interface LevelApiDemon {
    id: number;
    lvlname: string;
    creator: string;
    ytlink: string | null;
    position: number;
    legacy: boolean;
    verifier: string;
    worstid: string;
    mainid: string;
}

export interface SimplifiedDemon {
    name: string;
    position: number;
    video: string | null;
    creator: string;
    levelID?: number;
    link?: string;
    legacy?: boolean;
}

export interface RouletteState {
    playing: boolean;
    selectedLists: {
        main: boolean;
        extended: boolean;
        legacy: boolean;
    };
    demons: SimplifiedDemon[];
    current: number;
    percent: number;
    percents: number[];
}

/**
 * Stores the data from a GVAS '.sav' file.
 */
export interface Gvas {
    _order: string[];
    _types: GvasMap<GvasTypes>;
    _header: GvasHeader;
    boolArrays: GvasMap<boolean[]>;
    floatArrays: GvasMap<number[]>;
    floats: GvasMap<number>;
    intArrays: GvasMap<number[]>;
    stringArrays: GvasMap<GvasString[]>;
    strings: GvasMap<GvasString>;
    vectorArrays: GvasMap<Vector[]>;
    rotatorArrays: GvasMap<Rotator[]>;
    textArrays: GvasMap<GvasText[]>;
}

export type GvasTypes = (
    [] |
    ['FloatProperty'] |
    ['StrProperty'] |
    ['ArrayProperty', 'BoolProperty'] |
    ['ArrayProperty', 'FloatProperty'] |
    ['ArrayProperty', 'IntProperty'] |
    ['ArrayProperty', 'StrProperty'] |
    ['ArrayProperty', 'StructProperty', 'Rotator'] |
    ['ArrayProperty', 'StructProperty', 'Vector'] |
    ['ArrayProperty', 'TextProperty']);

export type GvasMap<V> = {
    [key: string]: V;
};

export type GvasString = string | null;

export interface GvasHeader {
    saveVersion: number;
    structureVersion: number;
    engineVersion: EngineVersion
    customFormatVersion: number;
    customData: CustomData[];
    saveType: GvasString;
}

export interface EngineVersion {
    major: number;
    minor: number;
    patch: number;
    build: number;
    buildID: GvasString;
}

export interface CustomData {
    guid: number[];
    value: number;
}

/**
 * A Vector struct from Unreal Engine.
 *
 * {@link https://docs.unrealengine.com/4.26/en-US/API/Runtime/Core/Math/FVector/}
 */
export interface Vector {
    /**
     * Centimeters west of the origin.
     */
    x: number;
    /**
     * Centimeters south of the origin.
     */
    y: number;
    /**
     * Centimeters above the origin.
     */
    z: number;
}

/**
 * A Rotator struct from Unreal Engine.
 *
 * {@link https://docs.unrealengine.com/4.26/en-US/API/Runtime/Core/Math/FRotator/}
 */
export interface Rotator {
    /**
     * Rotation around the right axis (around Y axis), Looking up and down (0=Straight Ahead, +Up, -Down)
     */
    pitch: number;
    /**
     * Rotation around the up axis (around Z axis), Running in circles 0=East, +North, -South.
     */
    yaw: number;
    /**
     * Rotation around the forward axis (around X axis), Tilting your head, 0=Straight, +Clockwise, -CCW.
     */
    roll: number;
}

export type GvasText = null | RichText | GvasString[];

export interface RichText {
    guid: GvasString;
    pattern: GvasString,
    textFormat: RichTextFormat[],
}

export interface RichTextFormat {
    formatKey: GvasString;
    contentType: number;
    values: GvasString[];
}

export function stringToGvasText(str: string) : GvasText {
    if (str==='') return null;
    const lines=str.split('\n');
    if (1===lines.length) return [str];
    return {
        guid: '56F8D27149CC5E2D12103BBEBFCA9097',
        pattern: lines.map((line, i)=>'{'+i+'}').join('<br>'),
        textFormat: lines.map((line, i)=>({formatKey: String(i), contentType: 2, values: [line]})),
    };
}

export function stringFromGvasText(value: GvasText) : string {
    if (null===value) return '';
    if (!Array.isArray(value) && typeof value === 'object') {
        // text_rich:
        let expandedText=(value.pattern || '').replace(/<br>/gi, '\n');
        value.textFormat.forEach((tf, i)=>{
            const key = tf.formatKey || String(i);
            // turn all the values into a single string, and sort out nulls.
            const val = (tf.values[0] || '').replace(/<br>/gi, '\n');
            expandedText=expandedText.replace('{'+key+'}', val);
        });
        return expandedText;
    } else {
        // text_simple
        if (1 !== value.length) throw new Error('Expected single entry in simple GvasText');
        return (value[0] || '').replace(/<br>/gi, '\n');
    }
}


const utilsStyles = require("../../styles/components/utils.module.scss");

export type Alignment = 'start' | 'end' | 'center'
export type Direction = 'v' | 'h'

export function justifyContent(align?: Alignment): string {
    if (align) {
        switch (align) {
            case 'start':
                return utilsStyles.justifyContent__start;
            case 'center':
                return utilsStyles.justifyContent__center;
            case 'end':
                return utilsStyles.justifyContent__end;
        }
    }
    return "";
}

export function direction(dir?: Direction): string {
    if (dir === 'v') {
        return utilsStyles.flexDirection__vertical
    } else if (dir === 'h') {
        return utilsStyles.flexDirection__horizontal;
    } else {
        return "";
    }
}



export const FONT_SIZE_2EM = utilsStyles.fontSize_2em;
export const HEADER_MARGIN = utilsStyles.headerMargin;
export const NOSELECT = utilsStyles.noselect;
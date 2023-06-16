export type MarginType = {
    ma? : number, //margin
    ml? : number, //marginLeft
    mr? : number, //marginRight
    mb? : number, //marginBottom
    mt? : number, //marginTop

    pa? : number, //padding
    pl? : number, //paddingLeft
    pr? : number, //paddingRight
    pb? : number, //paddingBottom
    pt? : number, //paddigTop
}

export type ViewBaseItemType = MarginType & {
    flex? : number,
    justifyContent? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems? : 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',


    bgColor ? : string, //background color
}

export type BoarderViewType = {
    bw? : number, //border 전체 width
    btw? : number, //border top width
    bbw? : number, //border bottom width
    blw? : number, //border left width
    brw? : number, //border right width

    bc? : string, //border 전체 color
    btc? : string, // border top color
    bbc? : string, // border bottom color
    blc? : string, // border left color
    brc? : string, // border right color

    br? : number , // border 전체 radius
    btlr? : number, // border top left radius
    btrr? : number , // border top right radius
    bblr? : number, // border bottom left radius
    bbrr? : number, // border bottom right radius
}

export type MarginComType = {
    mt? : number,
    mb? : number,
}

export type CustomTextType = MarginType & {
    fs? : number,
    fc? : string,
    fw? : 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold',
}

export type CustomTextInputType = MarginType & BoarderViewType & {
    fs? : number,
    fc? : string,
    fw? : 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold',
    bgColor ? : string, //background color
}

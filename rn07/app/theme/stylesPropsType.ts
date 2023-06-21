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
    flexDirection? : 'row' | 'column'
    justifyContent? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems? : 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',


    bgColor ? : string, //background color

    width? : string | number, //width는 %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
    height? : string | number, //height %일경우 string으로 넣어주세요. ex) '100%' , px일경우 number로 넣어주세요.
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
    mt? : number, //margin top
    mb? : number, //margin bottom
}

export type CustomTextType = MarginType & {
    fs? : number, //fontSize
    fc? : string, //font color
    fw? : 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold', //font weight
}

export type CustomTextInputType = MarginType & BoarderViewType & {
    fs? : number, // fontSize
    fc? : string, // fontColor
    fw? : 'Thin' | 'ExtraLight' | 'Light' | 'Regular' | 'Medium' | 'SemiBold' | 'Bold' | 'ExtraBold', //font Weight
    bgColor ? : string, //background color
}

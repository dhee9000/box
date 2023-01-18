import React from 'react';

interface IBoxProps {
    /**
     * flexDirection: 'row'
     */
    across?: boolean
    /**
     * flexDirection: 'column'
     */
    down?: boolean
    /**
     * flex: 1
     */
    flex?: number | boolean, // flex
    /**
     * justifyContent: start
     */
    jS?: boolean, // justify start
    /**
     * justifyContent: center
     */
    jC?: boolean, // justify center
    /**
     * justifyContent: end
     */
    jE?: boolean, /* justify end */
    /**
     * justifyContent: space-between
     */
    jB?: boolean, /* justify space-between */
    /**
     * justifyContent: space-around
     */
    jA?: boolean, // justify space-around
    /**
     * justifyContent: space-evenly
     */
    jEv?: boolean, // justify space-evenly
    /**
     * alignItems: start
     */
    aS?: boolean, // align start
    /**
     * alignItems: center
     */
    aC?: boolean, // align center
    /**
     * alignItems: end
     */
    aE?: boolean, // align end
    /**
     * alignItems: stretch
     */
    aStr?: boolean, // align stretch
    /**
     * padding: x
     */
    p?: number, // padding
    /**
     * paddingTop: x
     */
    pT?: number, // padding top
    /**
     * paddingRight: x
     */
    pR?: number, // padding right
    /**
     * paddingBottom: x
     */
    pB?: number, // padding bottom
    /**
     * paddingLeft: x
     */
    pL?: number, // padding left
    /**
     * margin: x
     */
    m?: number, // margin
    /**
     * marginTop: x
     */
    mT?: number, // margin top
    /**
     * marginRight: x
     */
    mR?: number, // margin right
    /**
     * marginBottom: x
     */
    mB?: number, // margin bottom
    /**
     * marginLeft: x
     */
    mL?: number, // margin left
    /**
     * width: x
     */
    w?: number | string, // width
    /**
     * height: x
     */
    h?: number | string, // height
    /**
     * maxWidth: x
     */
    maxW?: number | string // max width
    /**
     * maxHeight: x
     */
    maxH?: number | string // max height
    /**
     * minWidth: x
     */
     minW?: number | string // max width
     /**
      * minHeight: x
      */
     minH?: number | string // max height
    /**
     * border: ''
     */
    border?: string, // border
    /**
     * position: 'fixed'
     */
    fixed?: boolean, // position fixed
    /**
     * position: 'relative'
     */
    relative?: boolean, // position relative
    /**
     * position: 'absolute'
     */
    absolute?: boolean, // position absolute
    /**
     * top: x
     */
    t?: number, // top
    /**
     * bottom: x
     */
    b?: number, // bottom
    /**
     * left: x
     */
    l?: number, // left
    /**
     * right: x
     */
    r?: number, // right
    /**
     * children: React.ReactNode
     */
    children?: React.ReactNode,
    /**
     * children: React.CSSProperties
     */
    style?: React.CSSProperties,
    /**
     * className: ''
     */
    className?: string,
    ref?: React.Ref<HTMLDivElement>,
}

const Box = (props: IBoxProps) => {

    let styleOptions: React.CSSProperties = {
        position: props.fixed ? 'fixed' : props.relative ? 'relative' : props.absolute ? 'absolute' : 'initial',
        display: 'flex',
        flex: props.flex ? typeof props.flex === "number" ? props.flex : 1 : undefined,
        flexDirection: props.across ? 'row' : props.down ? 'column' : 'column',
        justifyContent: props.jS ? 'flex-start' : props.jC ? 'center' : props.jE ? 'flex-end' : props.jB ? 'space-between' : props.jA ? 'space-around' : props.jEv ? 'space-evenly' : 'center',
        alignItems: props.aS ? 'flex-start' : props.aC ? 'center' : props.aE ? 'flex-end' : props.aStr ? 'stretch' : 'center',
        border: props.border ? props.border : 'initial',
        top: props.t ? props.t : 'initial',
        bottom: props.b ? props.b : 'initial',
        right: props.r ? props.r : 'initial',
        left: props.l ? props.l : 'initial',
        maxWidth: props.maxW ? props.maxW : 'initial',
        maxHeight: props.maxH ? props.maxH : 'initial',
        minWidth: props.minW ? props.minW : 'initial',
        minHeight: props.minH ? props.minH : 'initial',
        width: props.w,
        height: props.h,
    };

    if (props.m) styleOptions.margin = props.m;
    if (props.mT) styleOptions.marginTop = props.mT;
    if (props.mR) styleOptions.marginRight = props.mR;
    if (props.mB) styleOptions.marginBottom = props.mB;
    if (props.mL) styleOptions.marginLeft = props.mL;

    if (props.p) styleOptions.paddingTop = styleOptions.paddingRight = styleOptions.paddingBottom = styleOptions.paddingLeft = props.p;
    if (props.pT) styleOptions.paddingTop = props.pT;
    if (props.pR) styleOptions.paddingRight = props.pR;
    if (props.pB) styleOptions.paddingBottom = props.pB;
    if (props.pL) styleOptions.paddingLeft = props.pL;

    return (
        <div style={{...styleOptions, ...props.style}} className={props.className} ref={props.ref}>
            {props.children}
        </div>
    )
}

export default Box;
